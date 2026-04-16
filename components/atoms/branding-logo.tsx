import Image from "next/image";

export function BrandingLogo() {
  return (
    <div className="mb-5 inline-flex rounded-2xl bg-white/10 p-3 backdrop-blur-sm">
      <Image src="/logo.svg" alt="Logo" width={78} height={78} className="drop-shadow-sm lg:size-24" />
    </div>
  );
}
