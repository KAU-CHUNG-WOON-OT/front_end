import notice1 from "../assets/notice_copyright.png";
import notice2 from "../assets/notice_scholarship.png";

export type NoticeCategory = "전체" | "장소" | "흡연" | "기타";

export type NoticeItem = {
  id: number;
  title: string;
  date?: string;
  dateTime?: string;
  content?: string;
  image?: string;
  category: NoticeCategory;
};

export const notices: NoticeItem[] = [
  {
    id: 1,
    title: "대학교재 불법복제 근절 및 저작권 보호 안내",
    image: notice1,
    category: "기타",
  },
  {
    id: 2,
    title: "교내외 장학금 신청은 어디에서?",
    image: notice2,
    category: "기타",
  },
];
