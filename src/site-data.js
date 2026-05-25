export const siteData = {
  brand: "StackRadar AI",
  siteUrl: "https://ghv5.github.io/bussiness-web01",
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
  analytics: {
    provider: "none",
    scriptUrl: "",
    websiteId: "",
    gaMeasurementId: "",
    note:
      "Set analytics.provider to 'umami' or 'ga4' and fill the matching fields in src/site-data.js to enable page analytics."
  },
  affiliateDisclosure:
    "Affiliate disclosure: some links on this site may earn a commission if you sign up, at no extra cost to you.",
  guidesHub: {
    title: "All Conversion Guides",
    summary:
      "A compact library of high-intent pages designed to rank for buyer and builder searches, then route visitors into affiliate offers and newsletter capture."
  },
  pages: [
    {
      slug: "best-ai-tools-for-founders",
      category: "Best of",
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
      category: "Comparisons",
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
      category: "Launch Playbooks",
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
    },
    {
      slug: "best-ai-tools-for-marketing-teams",
      category: "Best of",
      title: "Best AI Tools for Marketing Teams",
      summary:
        "A buyer-intent shortlist for small marketing teams choosing tools for landing pages, campaign copy, and subscriber capture.",
      intro:
        "Marketing-team pages convert well when they map tools directly to outputs: campaign pages, outbound copy, and audience retention. This page is built for that search intent.",
      bullets: [
        "Use Jasper for faster campaign copy production and reuse.",
        "Use Framer when launch speed and polished pages matter.",
        "Use Beehiiv when owned audience and sponsor potential matter."
      ],
      featuredTools: ["Jasper", "Framer", "Beehiiv"]
    },
    {
      slug: "best-ai-tools-for-solo-founders",
      category: "Best of",
      title: "Best AI Tools for Solo Founders",
      summary:
        "A lightweight stack for solo operators who need the shortest route from idea to public site and first email subscribers.",
      intro:
        "Solo-founder traffic often converts on simplicity, not feature depth. This page narrows decisions to the few tools that actually reduce launch friction.",
      bullets: [
        "Framer removes design overhead for a fast public-facing site.",
        "Jasper helps when shipping repetitive content is the bottleneck.",
        "Beehiiv keeps the audience asset separate from social platforms."
      ],
      featuredTools: ["Framer", "Jasper", "Beehiiv"]
    },
    {
      slug: "framer-vs-webflow-for-ai-landing-pages",
      category: "Comparisons",
      title: "Framer vs Webflow for AI Landing Pages",
      summary:
        "A decision-stage page for founders weighing speed, polish, and CMS flexibility before launching an AI niche site.",
      intro:
        "This is a strong affiliate format because the searcher is already deciding between tools. The job of the page is to reduce ambiguity and route to one paid option.",
      bullets: [
        "Choose Framer if your goal is faster launch with less setup.",
        "Choose Webflow if content modeling and CMS flexibility dominate.",
        "For an MVP affiliate site, Framer usually wins on execution speed."
      ],
      featuredTools: ["Framer"]
    },
    {
      slug: "beehiiv-vs-substack-for-monetization",
      category: "Comparisons",
      title: "Beehiiv vs Substack for Monetization",
      summary:
        "A monetization-led comparison for creators deciding whether they want better growth tooling or a simpler writing-first experience.",
      intro:
        "Newsletter searches convert well because users are often ready to migrate or start. The page should frame the choice around monetization and ownership.",
      bullets: [
        "Choose Beehiiv for growth loops, segmentation, and sponsor tooling.",
        "Choose Substack for the simplest writing and publishing workflow.",
        "If monetization is the priority, Beehiiv is usually the stronger CTA."
      ],
      featuredTools: ["Beehiiv"]
    },
    {
      slug: "ai-newsletter-launch-checklist",
      category: "Launch Playbooks",
      title: "AI Newsletter Launch Checklist",
      summary:
        "A practical checklist page that turns newsletter-curious visitors into subscribers and future software referrals.",
      intro:
        "Checklist pages work as lead magnets and search pages at the same time. This one should convert both direct traffic and beginner-intent SEO searches.",
      bullets: [
        "Define one niche promise and one weekly format before sending issue one.",
        "Capture subscribers on the homepage before writing a deep archive.",
        "Use software recommendations inside onboarding and issue templates."
      ],
      featuredTools: ["Beehiiv", "Jasper"]
    },
    {
      slug: "ai-saas-affiliate-site-playbook",
      category: "Launch Playbooks",
      title: "AI SaaS Affiliate Site Playbook",
      summary:
        "A higher-intent playbook for building an affiliate site around AI SaaS tools instead of low-value display ad traffic.",
      intro:
        "This page is meant to attract builders who already understand SEO basics and want a more commercial site model. It should feed directly into your stack and newsletter.",
      bullets: [
        "Start with commercial-intent pages, not generic news content.",
        "Track outbound clicks before scaling article count.",
        "Tie each article to one clear monetization path."
      ],
      featuredTools: ["Jasper", "Framer", "Beehiiv"]
    },
    {
      slug: "best-ai-tools-for-content-agencies",
      category: "Best of",
      title: "Best AI Tools for Content Agencies",
      summary:
        "A B2B-leaning shortlist aimed at agencies that need repeatable landing page production, copy systems, and owned audience channels.",
      intro:
        "Agency-intent terms are valuable because buyers often control larger budgets. The page should present tools as systems for repeatable client output.",
      bullets: [
        "Jasper is strongest when agencies need repeatable briefs and brand controls.",
        "Framer helps agencies ship fast client-facing pages with less engineering.",
        "Beehiiv can package audience growth into a retainer-friendly offer."
      ],
      featuredTools: ["Jasper", "Framer", "Beehiiv"]
    }
  ]
};
