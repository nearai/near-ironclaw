# Security Policy

## Security Fixes Applied

### 1. Security Headers (Middleware)
Added middleware with security headers to protect against common attacks:
- **X-Content-Type-Options**: Prevents MIME type sniffing
- **X-Frame-Options**: Prevents clickjacking attacks (set to DENY)
- **X-XSS-Protection**: Enables XSS protection in older browsers
- **Referrer-Policy**: Controls referrer information with strict-origin-when-cross-origin
- **Permissions-Policy**: Restricts access to geolocation, microphone, and camera APIs
- **Content-Security-Policy**: Restricts script, image, style, and font sources
- **Strict-Transport-Security**: Enforces HTTPS for all traffic

### 2. Environment Variables
- Moved Google Analytics ID (NEXT_PUBLIC_GA_ID) to environment variables instead of hardcoding
- Added `.env.example` file as documentation for required environment variables
- `.env.local` and `.env` files are properly ignored in `.gitignore`

### 3. Dependency Security
- Removed hardcoded secrets from code
- Regular security audits recommended via `npm audit`
- Dependencies kept up to date

## Known Issues

### Dev Dependencies Vulnerabilities
There are 14 high-severity vulnerabilities in transitive dev dependencies:
- **Location**: ESLint plugin ecosystem transitive dependencies
  - `minimatch` ReDoS via repeated wildcards
  - `ajv` ReDoS when using `$data` option
- **Affected Packages**: `eslint-plugin-import`, `eslint-plugin-react`, `@typescript-eslint/*`
- **Impact**: Dev-time only, does NOT affect production build or runtime
- **Severity**: Low for production - these only affect development/linting workflow
- **Status**: Upstream issue - waiting for eslint ecosystem to update minimatch to >=10.2.1
- **Workaround**:
  - These are in dev dependencies (`eslint-config-next`)
  - Production bundle is NOT affected
  - Build verification: ✅ Production build succeeds without issues
  - Recommendation: Monitor for upstream updates but not critical for production

## TypeScript Configuration
- Strict mode enabled for type safety
- Module resolution and import handling optimized for security

## Recommended Security Practices

1. **Regular Audits**: Run `npm audit` regularly to check for new vulnerabilities
2. **Dependency Updates**: Keep Next.js and React updated to latest versions
3. **Environment Variables**: Never commit `.env.local` or production secrets
4. **CSP Monitoring**: Monitor Content Security Policy reports for violations
5. **HTTPS**: Always deploy over HTTPS to benefit from HSTS header

## Reporting Security Issues

If you discover a security vulnerability, please email security@ironclaw.com with:
- Description of the vulnerability
- Steps to reproduce
- Potential impact
- Suggested fix (if any)

Please do not publicly disclose security issues without giving the team time to respond.
