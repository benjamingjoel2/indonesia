import { LinkButton } from "@/components/ui/Button";
import { Heading } from "@/components/ui/Heading";
import { t } from "@/lib/i18n/server";

export default function NotFound() {
  return (
    <section className="container-edit py-32 text-center">
      <p className="eyebrow text-lagoon-500">404</p>
      <Heading as="h1" size="xl" className="mt-4">
        {t("This island isn't on our *map*.")}
      </Heading>
      <p className="mx-auto mt-5 max-w-md text-lg text-ink-soft">{t("The page you were looking for has moved or never existed.")}</p>
      <div className="mt-8 flex justify-center gap-3">
        <LinkButton href="/" arrow>{t("Back home")}</LinkButton>
        <LinkButton href="/destinations" variant="secondary">{t("Destinations")}</LinkButton>
      </div>
    </section>
  );
}
