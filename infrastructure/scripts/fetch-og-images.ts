#!/usr/bin/env bun
/**
 * Script to fetch OG image URLs from project websites
 * Usage: bun run infrastructure/scripts/fetch-og-images.ts
 */

const projects = [
  {
    name: "Nghiep Hung Website",
    url: "https://nghiephung.vn",
  },
  {
    name: "Stem Venture Landing",
    url: "https://stem-venture.com",
  },
  {
    name: "Stem Venture App",
    url: "https://app.stem-venture.com",
  },
  {
    name: "AI Rules Setup",
    url: "https://ai-rule.quanvo.dev",
  },
  {
    name: "Finance Calculator",
    url: "https://fin-cal.quanvo.dev",
  },
];

async function fetchOGImage(url: string): Promise<string | null> {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      console.warn(`Failed to fetch ${url}: ${response.status}`);
      return null;
    }

    const html = await response.text();

    // Try different OG image meta tags
    const ogImagePatterns = [
      /<meta\s+property="og:image"\s+content="([^"]+)"/i,
      /<meta\s+content="([^"]+)"\s+property="og:image"/i,
      /<meta\s+name="og:image"\s+content="([^"]+)"/i,
    ];

    for (const pattern of ogImagePatterns) {
      const match = html.match(pattern);
      if (match?.[1]) {
        let ogImage = match[1];
        // Make absolute URL if relative
        if (ogImage.startsWith("/")) {
          const urlObj = new URL(url);
          ogImage = `${urlObj.protocol}//${urlObj.host}${ogImage}`;
        }
        return ogImage;
      }
    }

    return null;
  } catch (error) {
    console.error(`Error fetching ${url}:`, error);
    return null;
  }
}

async function main() {
  console.log("Fetching OG images for all projects...\n");

  const results: Record<string, string> = {};

  for (const project of projects) {
    console.log(`Fetching OG image for ${project.name}...`);
    const ogImage = await fetchOGImage(project.url);

    if (ogImage) {
      console.log(`✓ Found: ${ogImage}\n`);
      results[project.name] = ogImage;
    } else {
      console.log(`✗ No OG image found\n`);
      results[project.name] = "";
    }

    // Rate limiting
    await new Promise((resolve) => setTimeout(resolve, 500));
  }

  console.log(`\n${"=".repeat(80)}`);
  console.log("Summary - Copy these to src/data/resume.ts:");
  console.log("=".repeat(80));

  for (const [name, ogImage] of Object.entries(results)) {
    console.log(`${name}:`);
    console.log(`  ogImageUrl: "${ogImage}",\n`);
  }
}

main();

// Export empty object to make this file a module (avoids global scope conflicts)
export {};
