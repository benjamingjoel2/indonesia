import Link from "@/components/i18n/Link";
import { site } from "@/data/site";
import { Icon } from "@/components/ui/Icon";
import { t } from "@/lib/i18n/server";

export function AnnouncementBar() {
  return (
    <div className="bg-jungle-950 text-sand-100">
      <div className="container-edit flex min-h-9 flex-wrap items-center justify-center gap-x-6 gap-y-1 py-2 text-[0.75rem] sm:justify-between">
        <p className="hidden sm:block">
          <span aria-hidden="true" className="mr-2 text-sand-400">✦</span>
          {t(site.tagline)}
        </p>
        <Link href="/plan-your-trip" className="inline-flex items-center gap-1.5 underline-offset-4 hover:underline">
          {t(site.replyPromise)}
          <Icon name="arrow" size={14} />
        </Link>
      </div>
    </div>
  );
}
