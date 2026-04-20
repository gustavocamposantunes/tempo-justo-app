type IdeaAuthorInfoProps = {
  author: string;
};

export function IdeaAuthorInfo({ author }: IdeaAuthorInfoProps) {
  const initials = author
    .split(" ")
    .map((name) => name[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();

  return (
    <div className="flex items-center gap-2.5">
      <span className="inline-flex size-8 items-center justify-center rounded-full bg-brand-primary/10 text-xs font-bold text-brand-primary ring-2 ring-white shadow-sm">
        {initials}
      </span>
      <span className="text-sm font-medium text-slate-700">{author}</span>
    </div>
  );
}
