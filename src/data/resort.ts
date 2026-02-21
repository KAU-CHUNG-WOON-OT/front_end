
import restaurantImg from "../assets/restaurant.gif"; 
import grandImg from "../assets/grand.png"; 
import recImg from "../assets/rec.png"; 
import logoImg from "../assets/logo.svg"; 

export interface ConventionRoom {
  id: number;
  name: string;
  floor: string;
  location: string;
  purpose: string;
  image: string;
  isLogo?: boolean; 
}

export const conventionRooms: ConventionRoom[] = [
  {
    id: 1,
    name: "아리수(단체식당)",
    floor: "1층",
    location: "컨벤션센터 1층",
    purpose: "",
    image: restaurantImg,
  },
  {
    id: 2,
    name: "그랜드볼룸",
    floor: "2층",
    location: "컨벤션센터 2층",
    purpose: "행사 전반 진행 및 모임",
    image: grandImg,
  },
  {
    id: 3,
    name: "다산",
    floor: "1층",
    location: "컨벤션센터 1층",
    purpose: "OO학과 레크레이션",
    image: recImg,
  },
  {
    id: 4,
    name: "단재",
    floor: "1층",
    location: "컨벤션센터 1층",
    purpose: "OO학과 레크레이션",
    image: recImg,
  },
  {
    id: 5,
    name: "연암",
    floor: "1층",
    location: "컨벤션센터 1층",
    purpose: "OO학과 레크레이션",
    image: recImg,
  },
  {
    id: 6,
    name: "율곡",
    floor: "1층",
    location: "컨벤션센터 1층",
    purpose: "OO학과 레크레이션",
    image: recImg,
  },
  {
    id: 7,
    name: "퇴계",
    floor: "1층",
    location: "컨벤션센터 1층",
    purpose: "OO학과 레크레이션",
    image: recImg,
  },
  {
    id: 8,
    name: "주목",
    floor: "로비층",
    location: "컨벤션센터 로비층",
    purpose: "OO학과 레크레이션",
    image: logoImg,
    isLogo: true, 
  },
];