import Profile from "@/components/Profile";
import LinkList from "@/components/LinkList";
import { profile, links } from "@/lib/links";

export default function Home() {
  return (
    <div className="flex flex-1 items-center justify-center bg-gradient-to-b from-sky-50 via-sky-100 to-sky-200 px-4 py-10">
      <main className="flex w-full max-w-sm flex-col items-center gap-5 rounded-3xl border border-white/50 bg-white/60 p-8 shadow-xl shadow-sky-500/15 backdrop-blur-xl">
        <Profile name={profile.name} bio={profile.bio} initial={profile.initial} photoUrl={profile.photoUrl} />
        <LinkList links={links} />
      </main>
    </div>
  );
}
