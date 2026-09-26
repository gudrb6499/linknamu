type ProfileProps = {
  name: string;
  bio: string;
  initial: string;
  photoUrl?: string;
};

export default function Profile({ name, bio, initial, photoUrl }: ProfileProps) {
  return (
    <div className="flex flex-col items-center gap-3 text-center">
      <div className="flex h-28 w-28 items-center justify-center overflow-hidden rounded-full bg-gradient-to-br from-orange-300 to-amber-500 text-2xl font-bold text-white shadow-[0_12px_28px_-8px_rgba(194,120,60,0.5)] ring-4 ring-white/70 sm:h-32 sm:w-32">
        {photoUrl ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={photoUrl} alt={name} className="h-full w-full object-cover" />
        ) : (
          initial
        )}
      </div>
      <h1 className="text-xl font-bold text-stone-800">{name}</h1>
      <p className="text-sm leading-relaxed text-stone-500">{bio}</p>
    </div>
  );
}
