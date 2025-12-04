export const SpeakerGrille = () => (
  <div className="w-full flex justify-center gap-1.5 mb-6">
    {[...Array(20)].map((_, i) => (
      <div key={i} className="w-1 h-8 rounded-full bg-border/80 dark:bg-border"></div>
    ))}
  </div>
);
