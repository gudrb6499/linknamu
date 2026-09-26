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
  { id: "naver-blog", label: "네이버블로그", url: "https://blog.naver.com/kyuhub" },
  { id: "threads", label: "쓰레드", url: "https://www.threads.com/@bbodae_k" },
];
