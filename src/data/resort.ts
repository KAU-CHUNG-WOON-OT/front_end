import restaurantImg from "../assets/restaurant.gif"; 
import grandImg from "../assets/grand.png"; 
import recImg from "../assets/rec.png"; 
import logoImg from "../assets/logo_black.svg"; 

export interface ConventionRoom {
  id: number;
  name: string;
  floor: string;
  location: string;
  purpose: string[]; 
  image: string;
  isLogo?: boolean; 
}

export const conventionRooms: ConventionRoom[] = [
  {
    id: 1,
    name: "아리수(단체식당)",
    floor: "1층",
    location: "컨벤션센터 1층",
    purpose: [],
    image: restaurantImg,
  },
  {
    id: 2,
    name: "그랜드볼룸(태백홀, 함백홀)",
    floor: "2층",
    location: "컨벤션센터 2층",
    purpose: [
      "행사 전반 진행 및 모임",
      "태백홀: 공과대학 레크레이션",
      "함백홀: AI융합대학 레크레이션"
    ],
    image: grandImg,
  },
  {
    id: 3,
    name: "다산, 단재",
    floor: "1층",
    location: "컨벤션센터 1층",
    purpose: ["스마트드론공학과 레크레이션"],
    image: recImg,
  },
  {
    id: 4,
    name: "연암",
    floor: "1층",
    location: "컨벤션센터 1층",
    purpose: ["AI자율주행시스템공학과 레크레이션"],
    image: recImg,
  },
  {
    id: 5,
    name: "율곡, 퇴계",
    floor: "1층",
    location: "컨벤션센터 1층",
    purpose: ["항공운항학과 레크레이션"],
    image: recImg,
  },
  {
    id: 6,
    name: "주목",
    floor: "로비층",
    location: "컨벤션센터 로비층",
    purpose: ["항공·경영대학 레크레이션"],
    image: logoImg,
    isLogo: true, 
  },
];