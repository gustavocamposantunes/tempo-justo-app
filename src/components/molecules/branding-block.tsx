import { BrandingLogo } from "@/components/atoms/branding-logo";
import { BrandingWordmark } from "@/components/atoms/branding-wordmark";

export function BrandingBlock() {
  return (
    <div className="flex flex-1 flex-col items-center justify-center text-center">
      <BrandingLogo />
      <BrandingWordmark />
    </div>
  );
}
