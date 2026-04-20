import { Plus } from "lucide-react";

import { IdeaTagPill } from "@/components/atoms/idea-tag-pill";
import { IdeaTimeBadge } from "@/components/atoms/idea-time-badge";
import { IdeaAuthorInfo } from "@/components/molecules/idea-author-info";
import { Button } from "@/components/ui/button";

type IdeaPostCardProps = {
  title: string;
  description: string;
  tag: string;
  author: string;
  timeLabel: string;
  colorClassName: string;
  showTimeIcon?: boolean;
};

export function IdeaPostCard({
  title,
  description,
  tag,
  author,
  timeLabel,
  colorClassName,
  showTimeIcon = false,
}: IdeaPostCardProps) {
  return (
    <article className="flex h-full flex-col overflow-hidden rounded-none bg-white shadow-sm ring-1 ring-black/5">
      <div className={`relative h-32 w-full ${colorClassName}`}>
        <span className="absolute top-3 right-3">
          <IdeaTimeBadge label={timeLabel} showIcon={showTimeIcon} />
        </span>
      </div>

      <div className="flex flex-1 flex-col p-5">
        <IdeaTagPill tag={tag} />

        <h3 className="mt-3 text-xl font-semibold text-brand-primary">{title}</h3>
        <p className="mt-2 line-clamp-2 text-sm text-slate-600">{description}</p>

        <div className="mt-auto flex items-center justify-between border-t border-slate-100 pt-4">
          <IdeaAuthorInfo author={author} />

          <Button aria-label={`Agregar ${title} à minha lista`} className="size-10 rounded-none p-0" size="icon">
            <Plus className="size-4" />
          </Button>
        </div>
      </div>
    </article>
  );
}
