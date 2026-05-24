export const siteData = {
  brand: "StackRadar AI",
  title: "Ship an AI stack in 60 minutes",
  subtitle:
    "A focused launchpad for founders who need the right AI tools, fast comparisons, and monetization-ready templates.",
  announcement: "Week 1 MVP: compare, pick, and launch a revenue path today.",
  primaryCta: {
    label: "Get the launch stack",
    href: "#featured-stack"
  },
  secondaryCta: {
    label: "See monetization map",
    href: "#monetization"
  },
  metrics: [
    { value: "12", label: "launch-ready AI tools" },
    { value: "3", label: "revenue paths" },
    { value: "60m", label: "to first deploy" }
  ],
  featuredStack: [
    {
      name: "Jasper",
      category: "Content Engine",
      description: "Draft SEO landing pages, newsletters, and ad copy with fast brand voice controls.",
      href: "https://www.jasper.ai/?ref=stackradar",
      badge: "Affiliate"
    },
    {
      name: "Framer",
      category: "Site Builder",
      description: "Ship polished landing pages quickly, then upgrade to CMS and experimentation later.",
      href: "https://www.framer.com/?via=stackradar",
      badge: "Affiliate"
    },
    {
      name: "Beehiiv",
      category: "Audience Capture",
      description: "Turn search visitors into subscribers, then monetize with newsletters and sponsorships.",
      href: "https://www.beehiiv.com/?via=stackradar&ref=stackradar",
      badge: "Affiliate"
    }
  ],
  comparisonRows: [
    {
      focus: "Fastest launch",
      winner: "Framer",
      reason: "Best for a founder who needs a premium public-facing site today."
    },
    {
      focus: "Best content output",
      winner: "Jasper",
      reason: "Structured templates and campaign workflows reduce content setup time."
    },
    {
      focus: "Best email monetization",
      winner: "Beehiiv",
      reason: "Native growth and sponsor tooling make monetization easier from week one."
    }
  ],
  templates: [
    "AI tool comparison article outline",
    "Affiliate CTA block for reviews",
    "Email capture lead magnet checklist",
    "Weekly tool deal newsletter format"
  ],
  monetization: [
    {
      title: "Affiliate reviews",
      detail: "Publish comparison pages and route visitors into software partner programs."
    },
    {
      title: "Newsletter sponsorship",
      detail: "Offer a weekly curated AI stack digest and sell sponsor slots once list quality is proven."
    },
    {
      title: "Template upsell",
      detail: "Bundle prompt packs, launch checklists, or niche workflows as paid digital products."
    }
  ],
  newsletter: {
    title: "Join the launch memo",
    description:
      "Collect emails with a single valuable promise: one AI stack, one revenue angle, every week.",
    ctaLabel: "Reserve my spot",
    formAction: "https://buttondown.email/api/emails/embed-subscribe/your-publication-id",
    formMethod: "post",
    successMessage:
      "Thanks. Your email platform should open or submit now. Replace the placeholder endpoint with your real Beehiiv, ConvertKit, or Buttondown form URL.",
    placeholderMessage:
      "Replace the newsletter formAction in src/site-data.js with your live email platform endpoint before driving traffic."
  },
  affiliateDisclosure:
    "Affiliate disclosure: some links on this site may earn a commission if you sign up, at no extra cost to you.",
  pages: [
    {
      slug: "best-ai-tools-for-founders",
      title: "Best AI Tools for Founders",
      summary:
        "A shortlist for founders who need a site builder, content engine, and newsletter stack without wasting a week evaluating tools.",
      intro:
        "This page is designed to convert decision-stage visitors. It narrows the launch stack to three tools and gives each one a clear use case, which is exactly the format that affiliate pages monetize well.",
      bullets: [
        "Use Framer if speed to launch is the main goal.",
        "Use Jasper if content production is the bottleneck.",
        "Use Beehiiv if email list monetization matters from week one."
      ],
      featuredTools: ["Framer", "Jasper", "Beehiiv"]
    },
    {
      slug: "jasper-vs-chatgpt-for-landing-pages",
      title: "Jasper vs ChatGPT for Landing Pages",
      summary:
        "A conversion-focused comparison page for founders deciding whether they need workflow software or a general-purpose AI assistant.",
      intro:
        "Visitors searching comparison terms are high intent. The right format is a direct winner-by-use-case breakdown, then an obvious CTA into the recommended paid tool.",
      bullets: [
        "Choose Jasper for repeatable campaigns and brand controls.",
        "Choose ChatGPT for broad brainstorming and rapid idea exploration.",
        "If the goal is a monetized niche site, Jasper is easier to operationalize for a team."
      ],
      featuredTools: ["Jasper"]
    },
    {
      slug: "launch-an-ai-affiliate-site-in-a-weekend",
      title: "How to Launch an AI Affiliate Site in a Weekend",
      summary:
        "A tactical weekend plan for publishing a first affiliate site, collecting emails, and validating outbound clicks.",
      intro:
        "This page bridges education and action. It should rank for beginner-intent searches, then hand readers into your stack and newsletter offer.",
      bullets: [
        "Ship one homepage, three tool pages, and one email lead magnet first.",
        "Track outbound tool clicks before writing large volumes of content.",
        "Iterate only after one real traffic source starts converting."
      ],
      featuredTools: ["Framer", "Beehiiv"]
    }
  ]
};
