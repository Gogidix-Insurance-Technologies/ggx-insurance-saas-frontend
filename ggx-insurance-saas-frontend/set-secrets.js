const crypto = require('crypto');

// GitHub sealed box encryption using Node.js built-in crypto (no npm needed)
// This implements libsodium's crypto_box_seal using X25519 + XSalsa20-Poly1305

// Since Node.js doesn't have XSalsa20 built-in, we'll use a workaround:
// We can use the Web Crypto API approach or just call out to the sodium binary

// Actually, the simplest approach: use `gh` CLI if available
const { execSync } = require('child_process');

const args = process.argv.slice(2);
const [repo, secretName, secretValue] = args;

try {
  execSync(`gh secret set ${secretName} --repo ${repo} --body "${secretValue}"`, {
    stdio: 'inherit',
    timeout: 30000
  });
  console.log(`Set ${secretName}`);
} catch (e) {
  // Fallback: use GitHub API with .NET encryption
  console.error(`gh CLI failed: ${e.message}`);
  process.exit(1);
}
