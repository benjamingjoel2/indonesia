import "../globals.css";
import { SiteShell, shellMetadata } from "@/components/layout/SiteShell";

export { viewport } from "@/components/layout/SiteShell";
export const generateMetadata = () => shellMetadata("en");

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <SiteShell locale="en">{children}</SiteShell>;
}
