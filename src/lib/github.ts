import { RELEASES_URL, GITHUB_URL } from "./constants";

export interface PlatformAsset {
  name: string;
  arch: string;
  binary: string;
  downloadUrl: string;
}

export interface ReleaseInfo {
  version: string;
  tagName: string;
  releasesUrl: string;
  publishedAt: string;
  assets: PlatformAsset[];
}

interface GitHubAsset {
  name: string;
  browser_download_url: string;
}

interface GitHubRelease {
  tag_name: string;
  published_at: string;
  html_url: string;
  assets: GitHubAsset[];
}

const PLATFORM_MAP: Record<string, { name: string; arch: string }> = {
  "chaperone-darwin-arm64": { name: "macOS (Apple Silicon)", arch: "darwin-arm64" },
  "chaperone-darwin-x64": { name: "macOS (Intel)", arch: "darwin-x64" },
  "chaperone-linux-x64": { name: "Linux (x64)", arch: "linux-x64" },
  "chaperone-linux-arm64": { name: "Linux (ARM64)", arch: "linux-arm64" },
  "chaperone-windows-x64.exe": { name: "Windows (x64)", arch: "windows-x64" },
};

const FALLBACK: ReleaseInfo = {
  version: "0.3.0",
  tagName: "v0.3.0",
  releasesUrl: RELEASES_URL,
  publishedAt: new Date().toISOString(),
  assets: Object.entries(PLATFORM_MAP).map(([binary, info]) => ({
    name: info.name,
    arch: info.arch,
    binary,
    downloadUrl: RELEASES_URL,
  })),
};

export async function getLatestRelease(): Promise<ReleaseInfo> {
  try {
    const res = await fetch(
      `https://api.github.com/repos/marckraw/chaperone-cli/releases/latest`,
      {
        headers: { Accept: "application/vnd.github+json" },
        next: { revalidate: 3600 },
      }
    );

    if (!res.ok) return FALLBACK;

    const data: GitHubRelease = await res.json();
    const version = data.tag_name.replace(/^v/, "");

    const assets: PlatformAsset[] = data.assets
      .filter((a) => a.name in PLATFORM_MAP)
      .map((a) => ({
        name: PLATFORM_MAP[a.name].name,
        arch: PLATFORM_MAP[a.name].arch,
        binary: a.name,
        downloadUrl: a.browser_download_url,
      }));

    // Ensure all platforms are represented even if missing from release
    for (const [binary, info] of Object.entries(PLATFORM_MAP)) {
      if (!assets.find((a) => a.binary === binary)) {
        assets.push({
          name: info.name,
          arch: info.arch,
          binary,
          downloadUrl: RELEASES_URL,
        });
      }
    }

    return {
      version,
      tagName: data.tag_name,
      releasesUrl: data.html_url || `${GITHUB_URL}/releases/tag/${data.tag_name}`,
      publishedAt: data.published_at,
      assets,
    };
  } catch {
    return FALLBACK;
  }
}
