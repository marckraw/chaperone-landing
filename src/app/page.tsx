import { Hero } from "@/components/sections/Hero";
import { Features } from "@/components/sections/Features";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { CodeExample } from "@/components/sections/CodeExample";
import { Installation } from "@/components/sections/Installation";
import { Footer } from "@/components/sections/Footer";
import { getLatestRelease } from "@/lib/github";

export default async function Home() {
  const release = await getLatestRelease();

  return (
    <main className="min-h-screen">
      <Hero version={release.version} releasesUrl={release.releasesUrl} />
      <Features />
      <HowItWorks />
      <CodeExample version={release.version} />
      <Installation assets={release.assets} releasesUrl={release.releasesUrl} />
      <Footer version={release.version} />
    </main>
  );
}
