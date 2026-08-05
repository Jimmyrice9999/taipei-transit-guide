/** @type {import('next').NextConfig} */
const nextConfig = {
  // Emit a folder of plain HTML/CSS/JS ("static export") instead of running a
  // Node server. This is what makes GitHub Pages hosting possible.
  //
  // Production only, deliberately. With 'export' active, the dev server treats a
  // URL that isn't in generateStaticParams as a hard error and throws a 500
  // before the route's own notFound() can run — so mistyping a URL while writing
  // gives you a crash overlay instead of your own 404 page. `npm run build`
  // still exports, so anything incompatible is still caught before deploy.
  output: process.env.NODE_ENV === 'production' ? 'export' : undefined,

  // GitHub Pages serves project sites from a subpath, e.g.
  //   https://<user>.github.io/taipei-transit-guide/
  // If you deploy there, every link and asset needs that prefix. Set the env var
  // NEXT_PUBLIC_BASE_PATH=/taipei-transit-guide when building (the included
  // GitHub Actions workflow does this for you). Leave it unset for local dev or
  // for a custom domain / user-site deploy, where the site lives at the root.
  basePath: process.env.NEXT_PUBLIC_BASE_PATH || '',

  // Write each page as a folder with an index.html (/train/lines/wenhu-line/index.html)
  // rather than a bare .html file. Static hosts resolve these cleanly.
  trailingSlash: true,

  // Next's on-demand image optimiser needs a server. A static site has none, so
  // images are served exactly as you committed them.
  images: { unoptimized: true },
}

export default nextConfig
