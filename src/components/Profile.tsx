type ProfileProps = {
  name: string;
  bio: string;
  initial: string;
  photoUrl?: string;
};

export default function Profile({ name, bio, initial, photoUrl }: ProfileProps) {
  return (
    <div className="flex flex-col items-center gap-2 text-center">
      <div className="flex h-24 w-24 items-center justify-center overflow-hidden rounded-full bg-gradient-to-br from-sky-400 to-sky-600 text-2xl font-bold text-white shadow-lg shadow-sky-500/30 sm:h-28 sm:w-28">
        {photoUrl ? (
          // eslint-disable-next-line @next/next/no-img-element
          <img src={photoUrl} alt={name} className="h-full w-full object-cover" />
        ) : (
          initial
        )}
      </div>
      <h1 className="text-xl font-bold text-slate-800">{name}</h1>
      <p className="text-sm leading-relaxed text-slate-600">{bio}</p>
    </div>
  );
}
