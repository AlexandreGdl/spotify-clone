export * from './withClamp';

export function generateRandomString(length: number) {
  let text = '';
  let possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  for (let i = 0; i < length; i++) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }
  return text;
}

export async function generateCodeChallenge(codeVerifier: string) {
  const codeVerifierBytes = new TextEncoder().encode(codeVerifier)
  const hashBuffer = await crypto.subtle.digest('SHA-256', codeVerifierBytes)
  return base64url(new Uint8Array(hashBuffer));
}

/**
 * @param {number} size
 */
export function randomBytes(size: any) {
  return crypto.getRandomValues(new Uint8Array(size))
}

/**
 * @param {Uint8Array} bytes
 */
export function base64url(bytes: any) {
  return btoa(String.fromCharCode(...bytes))
    .replace(/=/g, '')
    .replace(/\+/g, '-')
    .replace(/\//g, '_')
}