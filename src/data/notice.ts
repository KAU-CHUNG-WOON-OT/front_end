export type NoticeCategory = "전체" | "장소" | "흡연" | "기타";

export type NoticeItem = {
  id: number;
  title: string;
  date?: string;
  dateTime?: string;
  content: string;
  category: NoticeCategory;
};

export const notices: NoticeItem[] = [
  {
    id: 1,
    title: "단과대학 슈퍼패스 공지",
    content:
      "가나다라마바사 공지사항입니다. 여기는 공지 내용들이 들어갈 예정입니다.\n필요하면 사진이 들어갈 수도 있게도 하고자 합니다.",
    category: "장소",
  },
  {
    id: 2,
    title: "공지 제목",
    content: "공지 내용이 들어갈 예정입니다.",
    category: "흡연",
  },
  {
    id: 3,
    title: "공지 제목",
    content: "공지 내용이 들어갈 예정입니다.",
    category: "기타",
  },
  {
    id: 4,
    title: "공지 제목",
    content: "공지 내용이 들어갈 예정입니다.",
    category: "장소",
  },
];
