import notice1 from "../assets/notice_copyright.png";
import notice2 from "../assets/notice_scholarship.png";

export type NoticeCategory = "전체" | "장소" | "흡연" | "음주" | "기타";

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
    title: "방에 있는 물건은 소중히 다뤄주시기 바랍니다.",
    content:
      "객실 내에 있는 물품은 모두 리조트의 자산이므로, 오염 및 파손은 개인이 부담해야 합니다.",
    category: "장소",
  },
  {
    id: 2,
    title: "단독행동은 자제해주시기 바랍니다.",
    content:
      "새내기배움터는 수많은 한국항공대학교 학생들이 함께하는 자리입니다. 안전한 새내기배움터를 위해서 총학생회 및 과학생회의 통제를 잘 따라주시기 바랍니다.",
    category: "장소",
  },
  {
    id: 3,
    title: "흡연의 경우, 학생회의 통제에 따라주세요.",
    content:
      "인원 관리 및 안전을 위하여, 흡연은 정해진 시간에만 허용됩니다. 흡연이 허용되는 시간에는 정해진 장소에서 '슈퍼패스'를 소지한 인원과 동행할 경우 흡연이 가능합니다. 그 외의 시간에는 흡연이 제한되니, 양해 부탁드립니다.\n\n* 슈퍼패스란?\n자유시간이 아닌 통제시간에는 학과별로 해당 패스를 가진 인원과 동행을 해야 흡연 및 기타 장소 이동이 가능합니다.",
    category: "흡연",
  },
  {
    id: 4,
    title: "술 강요는 금지됩니다.",
    content:
      "건강하고 건전한 새내기배움터를 위하여 음주는 강요하지 않습니다. 개인의 주량에 맞는 음주로 안전한 새내기배움터가 될 수 있도록 부탁드립니다.",
    category: "음주",
  },
  {
    id: 5,
    title: "대학교재 불법복제 근절 및 저작권 보호 안내",
    image: notice1,
    category: "기타",
  },
  {
    id: 6,
    title: "교내외 장학금 신청은 어디에서?",
    image: notice2,
    category: "기타",
  },
];
