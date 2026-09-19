import { createFileRoute } from "@tanstack/react-router";
import { HomeScreen } from "@/components/turf/home";

// No head() here: the home route inherits title/description/og/twitter from
// __root.tsx, and ships no og:image so serve-time hosting can inject the
// project's social preview (explicit og:image or latest screenshot).
export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "TurfNation — Book Sports Turfs in Bangladesh" },
    { name: "description", content: "Find and instantly reserve verified football, cricket, and badminton arenas across Bangladesh." },
    { property: "og:title", content: "TurfNation — Book Your Pitch" },
    { property: "og:description", content: "Live turf availability with secure 60-second booking." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ]}),
  component: HomeScreen,
});
