import Profile from "@/components/Profile";
import LinkList from "@/components/LinkList";
import { profile, links } from "@/lib/links";

export default function Home() {
  return (
    <div className="flex flex-1 items-center justify-center bg-gradient-to-b from-orange-50 via-amber-50 to-rose-100 px-6 py-16">
      <main className="flex w-full max-w-sm flex-col items-center gap-10">
        <Profile name={profile.name} bio={profile.bio} initial={profile.initial} photoUrl={profile.photoUrl} />
        <LinkList links={links} />
      </main>
    </div>
  );
}
