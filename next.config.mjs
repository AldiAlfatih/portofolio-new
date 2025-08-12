/** @type {import('next').NextConfig} */
// Enable static export for GitHub Pages when STATIC_EXPORT=true
const isStaticExport = process.env.STATIC_EXPORT === 'true'

// Derive repo name from GitHub Actions env for Project Pages
// GITHUB_REPOSITORY format: owner/repo
const githubRepository = process.env.GITHUB_REPOSITORY || ''
const repoName = githubRepository.split('/')[1] || ''
const isUserOrOrgPages = repoName.endsWith('.github.io')

const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
  ...(isStaticExport
    ? {
        output: 'export',
        // For project pages (not username.github.io), ensure assets and routes use the repo subpath
        ...(isUserOrOrgPages
          ? {}
          : repoName
          ? { basePath: `/${repoName}`, assetPrefix: `/${repoName}/` }
          : {}),
      }
    : {}),
}

export default nextConfig
