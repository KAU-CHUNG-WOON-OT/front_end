export type ScheduleItem = {
  time: string;
  title: string;
  location: string;
  detail?: string;
};

export type DaySchedule = {
  id: "day1" | "day2" | "day3";
  label: "Day1" | "Day2" | "Day3";
  dateLabel: string;
  items: ScheduleItem[];
};

export const daySchedules: DaySchedule[] = [
  {
    id: "day1",
    label: "Day1",
    dateLabel: "2월 28일 (토)",
    items: [
      {
        time: "09:00",
        title: "집합 및 인원 파악",
        location: "한국항공대학교 운동장",
        detail: "전체 참여 인원 집합 후 출석 확인 및 조 편성, 일정 관련 간단 공지를 진행합니다.",
      },
      {
        time: "09:30",
        title: "버스 탑승 및 출발",
        location: "한국항공대학교 정문",
        detail: "이동을 위해 지정된 버스로 탑승 후 출발합니다. 안전 수칙을 안내합니다.",
      },
      {
        time: "10:00",
        title: "버스 이동",
        location: "버스",
        detail: "목적지로 이동하는 시간입니다. 이동 중 간단한 안내 및 휴식을 취합니다.",
      },
      {
        time: "15:00",
        title: "방배정 및 짐정리",
        location: "오투리조트",
        detail: "숙소 도착 후 방 배정 안내를 받고 개인 짐 정리 시간을 가집니다.",
      },
      {
        time: "16:00",
        title: "총장 격려사 및 성범죄 예방교육",
        location: "오투리조트 그랜드볼룸",
        detail: "총장님의 격려 말씀과 함께 안전한 공동체 문화를 위한 성범죄 예방 교육을 진행합니다.",
      },
      {
        time: "17:30",
        title: "저녁 식사",
        location: "아리수(단체식당)",
        detail: "하루 일정을 마무리하며 저녁 식사를 진행합니다.",
      },
      {
        time: "18:30",
        title: "중앙운영위원회 출범식",
        location: "오투리조트 그랜드볼룸",
        detail: "중앙운영위원회 공식 출범을 알리는 행사로, 소개 및 선언식이 진행됩니다.",
      },
      {
        time: "19:00",
        title: "제휴사 이벤트",
        location: "오투리조트 그랜드볼룸",
        detail: "제휴사와 함께하는 이벤트로, 참여형 프로그램이 진행됩니다.",
      },
      {
        time: "19:30",
        title: "동아리 공연",
        location: "오투리조트 그랜드볼룸",
        detail: "각 동아리의 무대 공연을 관람하며 자유롭게 즐기는 시간입니다.",
      },
      {
        time: "21:00",
        title: "친목도모",
        location: "배정된 객실",
        detail: "참가자 간 친목을 다지기 위한 자유 교류 시간입니다.",
      },
      {
        time: "02:00",
        title: "취침",
        location: "배정된 객실",
        detail: "다음 날 일정을 위해 취침 및 휴식을 취합니다.",
      },
    ],
  },
  {
    id: "day2",
    label: "Day2",
    dateLabel: "3월 1일 (일)",
    items: [
      {
        time: "07:30",
        title: "기상",
        location: "숙소",
        detail: "아침 기상 후 개인 정비 시간을 가집니다.",
      },
      {
        time: "08:00",
        title: "아침 식사",
        location: "아리수(단체식당)",
        detail: "하루 일정을 시작하기 위한 아침 식사를 진행합니다.",
      },
      {
        time: "09:30",
        title: "동아리 홍보",
        location: "오투리조트 그랜드볼룸",
        detail: "각 동아리의 활동과 특징을 소개하는 홍보 시간입니다.",
      },
      {
        time: "12:30",
        title: "점심 식사 및 자유시간",
        location: "아리수(단체식당)",
        detail: "점심 식사 후 휴식 및 자유 활동 시간을 가집니다.",
      },
      {
        time: "15:00",
        title: "단과대 및 학과별 레크리에이션",
        location: "학과별 장소 상이",
        detail: "단과대 및 학과 단위로 지정된 장소에서 레크리에이션 프로그램을 진행합니다.",
      },
      {
        time: "17:30",
        title: "저녁 식사",
        location: "아리수(단체식당)",
        detail: "레크리에이션 종료 후 저녁 식사를 진행합니다.",
      },
      {
        time: "18:30",
        title: "학생복지회 행사",
        location: "오투리조트 그랜드볼룸",
        detail: "학생복지회에서 준비한 공식 프로그램 및 이벤트가 진행됩니다.",
      },
      {
        time: "19:00",
        title: "동아리 공연",
        location: "오투리조트 그랜드볼룸",
        detail: "다양한 동아리의 공연을 관람하는 시간입니다.",
      },
      {
        time: "20:00",
        title: "총학생회 행사",
        location: "오투리조트 그랜드볼룸",
        detail: "총학생회에서 준비한 공식 행사가 진행됩니다.",
      },
      {
        time: "22:00",
        title: "친목도모",
        location: "배정된 객실",
        detail: "각 객실별 자유 교류 및 친목 시간입니다.",
      },
    ],
  },
  {
    id: "day3",
    label: "Day3",
    dateLabel: "3월 2일 (월)",
    items: [
      {
        time: "09:00",
        title: "기상",
        location: "숙소",
        detail: "마지막 날 기상 및 개인 정비 시간을 가집니다.",
      },
      {
        time: "10:00",
        title: "각 호실 정리",
        location: "숙소",
        detail: "퇴실 전 각 호실 정리 및 점검을 진행합니다.",
      },
      {
        time: "10:30",
        title: "인원 파악 및 버스 탑승",
        location: "오투리조트",
        detail: "최종 인원 확인 후 복귀를 위해 버스에 탑승합니다.",
      },
      {
        time: "11:30",
        title: "버스 이동",
        location: "버스",
        detail: "학교로 복귀하는 이동 시간입니다.",
      },
    ],
  },
];