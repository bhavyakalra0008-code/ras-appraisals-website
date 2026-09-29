# Ras Appraisals Website

Static React website built with Vite.

## Run locally

Requirements: Node.js and npm.

```sh
npm ci
npm run dev
```

## Build for hosting

```sh
npm ci
npm run build
npm run preview
```

Deploy the generated `dist/` directory to a static web host. Configure HTTPS and the host's security headers (at minimum a restrictive Content-Security-Policy compatible with the external Unsplash image and Google Fonts, `X-Content-Type-Options: nosniff`, `Referrer-Policy`, and frame restrictions) in the hosting provider's settings. Header syntax depends on the host.

## Contact and data handling

The site uses `tel:` and `mailto:` links. It does not include a server, database, authentication, or contact form that submits visitor data. The hero image is loaded from Unsplash and fonts from Google Fonts.

Keep real secrets out of the repository. `.gitignore` excludes local environment files and installed dependencies; the lockfile supports reproducible installs with `npm ci`.
