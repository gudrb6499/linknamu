export type LinkItem = {
  id: string;
  label: string;
  url: string;
};

export const profile = {
  name: "이개발",
  bio: "Claude로 바이브코딩 수익화 도전",
  initial: "개발",
  photoUrl: undefined as string | undefined,
};

export const links: LinkItem[] = [
  { id: "link-1", label: "링크 1", url: "#" },
  { id: "link-2", label: "링크 2", url: "#" },
  { id: "link-3", label: "링크 3", url: "#" },
  { id: "link-4", label: "링크 4", url: "#" },
];
