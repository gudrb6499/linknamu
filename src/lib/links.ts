export type LinkItem = {
  id: string;
  label: string;
  url: string;
  icon: string; // SVG path "d" attribute, viewBox 0 0 24 24
};

export const profile = {
  name: "이개발",
  bio: "Claude로 바이브코딩 수익화 도전",
  initial: "개발",
  photoUrl: "https://placehold.co/150x150/orange/white" as string | undefined,
};

export const links: LinkItem[] = [
  {
    id: "naver-blog",
    label: "네이버블로그",
    url: "https://blog.naver.com/kyuhub",
    icon: "M4 4h5.6l4.8 7.2V4H18v16h-5.6l-4.8-7.2V20H4z",
  },
  {
    id: "threads",
    label: "쓰레드",
    url: "https://www.threads.com/@bbodae_k",
    icon: "M12 2C6.5 2 3 5.8 3 11.2c0 3 1.2 5.3 3 6.9 1.8 1.6 4 2.2 5.9 1.9 2.6-.4 4.4-2.1 4.9-4.4.3-1.5 0-3-1.1-4.2-.9-1-2.2-1.6-3.7-1.7-1.1-.1-2.1.2-2.8.8-.6.5-.9 1.1-.9 1.8 0 .6.3 1.1.8 1.5.5.4 1.1.5 1.7.3.5-.1.8-.5.8-1 0-.3-.1-.5-.3-.6.3 0 .6.1.8.3.5.4.7 1 .5 1.6-.2.7-.9 1.2-1.8 1.4-1.1.2-2.3-.2-3.1-1-.9-.9-1.2-2.2-.8-3.5.5-1.6 2-2.7 3.9-2.9 2-.2 3.9.5 5.2 1.9 1.4 1.5 1.9 3.5 1.4 5.5-.7 3-3.3 5.2-6.7 5.7-2.5.4-5.3-.4-7.5-2.3C2.5 17.4 1 14.5 1 11.2 1 4.7 5.6 0 12 0s11 4.7 11 11.2c0 .3 0 .6-.1.9h-2C21 11.8 21 11.5 21 11.2 21 5.9 17.3 2 12 2z",
  },
];
