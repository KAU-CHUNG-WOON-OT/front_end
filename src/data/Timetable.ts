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
    dateLabel: "2월 24일 (월)",
    items: [
      {
        time: "09:00",
        title: "학과 집합 및 인원 파악",
        location: "미정",
      },
      {
        time: "09:30",
        title: "버스 탑승 및 출발",
        location: "미정",
      },
      { time: "10:00", title: "버스이동", location: "버스" },
      { time: "15:00", title: "방배정 및 짐정리", location: "숙소" },
      {
        time: "16:00",
        title: "총장 격려 및 성범죄 예방교육",
        location: "미정",
      },
      { time: "17:30", title: "석식", location: "미정" },
      { time: "18:30", title: "중운위 출범식", location: "미정" },
      { time: "19:00", title: "제휴사 이벤트", location: "미정" },
      { time: "19:30", title: "동아리공연", location: "미정" },
      { time: "23:00", title: "친목도모", location: "미정" },
      { time: "03:00", title: "취침", location: "숙소" },
    ],
  },
  {
    id: "day2",
    label: "Day2",
    dateLabel: "2월 25일 (화)",
    items: [
      { time: "06:30", title: "취침", location: "숙소" },
      { time: "07:00", title: "기상", location: "숙소" },
      { time: "08:30", title: "조식", location: "미정" },
      { time: "10:00", title: "동아리 홍보 A", location: "미정" },
      { time: "11:00", title: "동아리 홍보 B", location: "미정" },
      { time: "12:30", title: "중식 및 자유시간", location: "미정" },
      { time: "15:00", title: "단과대 레크리에이션", location: "미정" },
      { time: "17:30", title: "B조 석식", location: "미정" },
      { time: "18:00", title: "A조 석식", location: "미정" },
      { time: "18:30", title: "학생복지회 시간", location: "미정" },
      { time: "19:00", title: "동아리공연", location: "미정" },
      { time: "20:00", title: "총학생회", location: "미정" },
      { time: "21:00", title: "전 단위 방 복귀", location: "미정" },
      {
        time: "23:00",
        title: "친목도모 (밤돌이 22:30~01:00)",
        location: "미정",
      },
      { time: "03:00", title: "취침", location: "숙소" },
    ],
  },
  {
    id: "day3",
    label: "Day3",
    dateLabel: "2월 26일 (수)",
    items: [
      { time: "06:00", title: "취침", location: "숙소" },
      { time: "09:00", title: "기상", location: "숙소" },
      { time: "10:00", title: "각 호실 정리", location: "숙소" },
      { time: "10:30", title: "인원파악 및 버스탑승", location: "미정" },
      { time: "12:00", title: "버스이동", location: "버스" },
    ],
  },
];
