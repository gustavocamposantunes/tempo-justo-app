import { Field, FieldLabel } from "@/components/ui/field";
import { Input } from "@/components/ui/input";

export function EmailField() {
  return (
    <Field className="space-y-2">
      <FieldLabel htmlFor="email" className="text-sm text-brand-text">
        E-mail
      </FieldLabel>
      <Input
        type="email"
        id="email"
        name="email"
        className="h-12 rounded-none border-slate-200 bg-brand-ice/70 px-4 text-base shadow-sm placeholder:text-slate-400"
        placeholder="voce@exemplo.com"
      />
    </Field>
  );
}
