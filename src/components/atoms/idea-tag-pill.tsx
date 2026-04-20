type IdeaTagPillProps = {
  tag: string;
};

export function IdeaTagPill({ tag }: IdeaTagPillProps) {
  return (
    <span className="inline-flex bg-emerald-100 px-2.5 py-1 text-[11px] font-semibold tracking-wide text-emerald-700 uppercase">
      {tag}
    </span>
  );
}
