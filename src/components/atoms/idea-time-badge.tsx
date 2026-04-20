import { Clock3 } from "lucide-react";

type IdeaTimeBadgeProps = {
  label: string;
  showIcon?: boolean;
};

export function IdeaTimeBadge({ label, showIcon = false }: IdeaTimeBadgeProps) {
  return (
    <span className="inline-flex items-center gap-1 bg-white px-3 py-1 text-xs font-semibold text-brand-primary">
      {showIcon && <Clock3 className="size-3.5" />}
      {label}
    </span>
  );
}
