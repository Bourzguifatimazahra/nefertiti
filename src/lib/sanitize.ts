/**
 * XSS Protection Utilities
 * Provides sanitization and security helpers to prevent Cross-Site Scripting attacks
 */

/**
 * Escapes HTML special characters to prevent XSS injection
 * @param str - The string to escape
 * @returns The escaped string safe for HTML rendering
 */
export function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#x27;")
    .replace(/\//g, "&#x2F;");
}

/**
 * Sanitizes a string for safe use in URLs (mailto, https, etc.)
 * Uses encodeURIComponent and additional validation
 * @param str - The string to sanitize
 * @returns The sanitized string safe for URL parameters
 */
export function sanitizeUrlParam(str: string): string {
  return encodeURIComponent(escapeHtml(str));
}

/**
 * Removes any HTML tags from a string, keeping only text content
 * @param str - The string to strip HTML from
 * @returns Plain text string
 */
export function stripHtml(str: string): string {
  return str.replace(/<[^>]*>/g, "");
}

/**
 * Validates and sanitizes user input for form submissions
 * @param str - The input string
 * @param maxLength - Maximum allowed length
 * @returns Sanitized string
 */
export function sanitizeInput(str: string, maxLength: number = 1000): string {
  return stripHtml(str).trim().slice(0, maxLength);
}

/**
 * Content Security Policy configuration
 * Restricts sources of executable scripts to prevent XSS
 */
export const CSP_DIRECTIVES = {
  defaultSrc: ["'self'"],
  scriptSrc: [
    "'self'",
    "'unsafe-inline'", // Required for Vite dev mode; remove in production if possible
  ],
  styleSrc: ["'self'", "'unsafe-inline'"],
  imgSrc: ["'self'", "data:", "https:"],
  fontSrc: ["'self'", "https:", "data:"],
  connectSrc: ["'self'"],
  frameSrc: ["'self'", "https://www.google.com"],
  frameAncestors: ["'none'"],
  baseUri: ["'self'"],
  formAction: ["'self'"],
};

/**
 * Generates CSP header value from directives
 */
export function generateCSP(): string {
  return Object.entries(CSP_DIRECTIVES)
    .map(([directive, sources]) => {
      const directiveName = directive
        .replace(/([A-Z])/g, "-$1")
        .toLowerCase()
        .replace(/^-/, "");
      return `${directiveName} ${sources.join(" ")}`;
    })
    .join("; ");
}

/**
 * Security headers to be applied to all responses
 */
export const SECURITY_HEADERS: Record<string, string> = {
  "X-Content-Type-Options": "nosniff",
  "X-Frame-Options": "DENY",
  "X-XSS-Protection": "1; mode=block",
  "Referrer-Policy": "strict-origin-when-cross-origin",
  "Permissions-Policy": "geolocation=(), microphone=(), camera=()",
};
