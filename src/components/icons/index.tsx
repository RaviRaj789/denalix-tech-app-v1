type IconProps = { className?: string };

const base = {
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.5,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  viewBox: "0 0 24 24",
};

export function IconAI({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <rect x="7" y="7" width="10" height="10" rx="2.5" />
      <path d="M12 2.5v3M12 18.5v3M2.5 12h3M18.5 12h3M5.3 5.3l2.1 2.1M16.6 16.6l2.1 2.1M18.7 5.3l-2.1 2.1M7.4 16.6l-2.1 2.1" />
      <circle cx="12" cy="12" r="1.8" />
    </svg>
  );
}

export function IconFullStack({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M12 3 3 7.5 12 12l9-4.5L12 3Z" />
      <path d="M3 12l9 4.5 9-4.5" />
      <path d="M3 16.5 12 21l9-4.5" />
    </svg>
  );
}

export function IconCloud({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M7 18.5a4.5 4.5 0 0 1-.7-8.94A5.5 5.5 0 0 1 17.2 8.06 4 4 0 0 1 17 16H7.5Z" />
      <path d="M9.5 12.5h5M9.5 15h3.5" />
    </svg>
  );
}

export function IconGeo({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M12 21s-6.5-6.13-6.5-11a6.5 6.5 0 1 1 13 0C18.5 14.87 12 21 12 21Z" />
      <circle cx="12" cy="10" r="2.4" />
    </svg>
  );
}

export function IconAutomation({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <circle cx="5" cy="6" r="2" />
      <circle cx="19" cy="6" r="2" />
      <circle cx="12" cy="18" r="2" />
      <path d="M6.8 7.2 10.5 16.3M17.2 7.2 13.5 16.3M7 6h10" />
    </svg>
  );
}

export function IconAnalytics({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M4 20V10M11 20V4M18 20v-6" />
      <path d="M3 20h18" />
      <path d="M4 12.5 9 8l4 3 6.5-6" />
    </svg>
  );
}

export function IconSaaS({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M12 2.5c2 2.4 3.2 5.2 3.2 8.6 0 3.6-1.3 6.6-3.2 8.9-1.9-2.3-3.2-5.3-3.2-8.9 0-3.4 1.2-6.2 3.2-8.6Z" />
      <path d="M8.3 15.5 4.5 18l1-4.3M15.7 15.5l3.8 2.5-1-4.3" />
      <circle cx="12" cy="10.5" r="1.6" />
    </svg>
  );
}

export function IconIntegrations({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M9 3v3.5M15 3v3.5M6 6.5h12l-1 5.5a5 5 0 0 1-10 0L6 6.5Z" />
      <path d="M11 17.5v3.5M13 17.5v3.5" />
    </svg>
  );
}

const SERVICE_ICONS = {
  ai: IconAI,
  fullstack: IconFullStack,
  cloud: IconCloud,
  geo: IconGeo,
  automation: IconAutomation,
  analytics: IconAnalytics,
  saas: IconSaaS,
  integrations: IconIntegrations,
};

export function ServiceIcon({
  name,
  className,
}: {
  name: keyof typeof SERVICE_ICONS;
  className?: string;
}) {
  const Icon = SERVICE_ICONS[name];
  return <Icon className={className} />;
}

export function IconTarget({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <circle cx="12" cy="12" r="8.5" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="12" cy="12" r="1.4" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function IconCompass({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <circle cx="12" cy="12" r="8.5" />
      <path d="m14.8 9.2-1.9 4.6-4.6 1.9 1.9-4.6 4.6-1.9Z" />
    </svg>
  );
}

export function IconTool({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M14.7 6.3a3.5 3.5 0 0 0-4.6 4.2L4 16.6V20h3.4l6.1-6.1a3.5 3.5 0 0 0 4.2-4.6l-2.6 2.6-2-2 2.6-2.6Z" />
    </svg>
  );
}

export function IconLink({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <rect x="3" y="8.5" width="8" height="7" rx="3.5" />
      <rect x="13" y="8.5" width="8" height="7" rx="3.5" />
      <path d="M9.5 12h5" />
    </svg>
  );
}

export function IconBolt({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M13 2.5 5 13.5h5.5L11 21.5l8-11.5h-5.5L13 2.5Z" />
    </svg>
  );
}

export function IconShieldCheck({ className }: IconProps) {
  return (
    <svg {...base} className={className}>
      <path d="M12 2.7 19.5 5.5v6c0 5-3.2 8.4-7.5 10-4.3-1.6-7.5-5-7.5-10v-6L12 2.7Z" />
      <path d="m8.7 12.2 2.3 2.3 4.3-4.5" />
    </svg>
  );
}

const WHY_ICONS = {
  problem: IconTarget,
  explain: IconCompass,
  build: IconTool,
  connect: IconLink,
  speed: IconBolt,
  support: IconShieldCheck,
};

export function WhyIcon({
  name,
  className,
}: {
  name: keyof typeof WHY_ICONS;
  className?: string;
}) {
  const Icon = WHY_ICONS[name];
  return <Icon className={className} />;
}
