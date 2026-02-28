import notice1 from "../assets/notice_copyright.png";
import notice2 from "../assets/notice_scholarship.png";
import notice3 from "../assets/notice_smoke.png";
import notice4 from "../assets/notice_drink.png";

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
    id: 7,
    title: "새내기배움터 편의점 이용 통제 안내",
    content:
      "안녕하세요.\n새내기배움터 운영과 관련하여 편의점 이용사항을 안내드립니다.\n\n2일차 자유시간에는 통제 없이 모든 참가자가 편의점을 이용할 수 있습니다.\n\n그 외 모든 시간대에는 슈퍼패스 소지자에 한해 편의점 이용이 가능합니다.\n\n원활한 행사 운영과 안전 관리를 위해 현장 스태프의 안내에 적극 협조해 주시기 바랍니다.\n\n참가자 여러분의 양해와 협조 부탁드립니다.\n감사합니다.",
    category: "장소",
  },
  {
    id: 8,
    title: "흡연은 지정된 구역에서만 가능합니다.",
    image: notice3,
    content:
      "자원봉사자 또는 학부(과) 학생회 및 총학생회의 통제를 따라 흡연 구역 내에서 흡연해주시기 바라며, 그 외 지역에서의 흡연은 엄격히 금지됩니다. 자세한 내용은 아래 사진 참고 부탁드립니다.",
    category: "흡연",
  },
  {
    id: 9,
    title: "No 술 스티커 안내",
    image: notice4,
    content:
      "새내기배움터 참여자 중 위 사진과 같은 NO 술 스티커를 붙인 참여자가 있습니다. 해당 인원들에 대한 음주 강요 등의 행위를 자제해주시기 바라며, 모두에게 즐거운 새내기배움터가 될 수 있도록 배려해주시기 바랍니다.",
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
