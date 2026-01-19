export const clubs = [
  // 1. 학술
  { id: 1, name: "UMC", category: "학술", room: "학생회관 318호", booth: "A-3", description: "앱 런칭 및 IT 개발 동아리" },
  { id: 2, name: "아스트로 체이서", category: "학술", room: "교내", booth: "A-4", description: "천체 관측 및 천문 봉사 활동" },
  { id: 3, name: "SRS", category: "학술", room: "학생회관 324호", booth: "B-1", description: "로켓 제작 및 발사 연구" },
  { id: 4, name: "항공기제작연구회", category: "학술", room: "학생회관 327호", booth: "B-2", description: "경항공기 독자 설계 및 제작" },
  { id: 5, name: "MAC", category: "학술", room: "학생회관 325호", booth: "B-3", description: "모형 항공기 제작 및 연구" },
  { id: 6, name: "카우보이", category: "학술", room: "항우기 B101호", booth: "B-4", description: "자작 자동차 제작 및 대회 출전" },
  { id: 7, name: "IPR", category: "학술", room: "학생회관 320호", booth: "C-1", description: "소프트웨어 연구 및 프로그래밍" },
  { id: 8, name: "ESC", category: "학술", room: "학생회관 313호", booth: "C-2", description: "전자회로 설계 및 드론 프로젝트" },
  { id: 9, name: "SEED", category: "학술", room: "박물관 311-A", booth: "C-3", description: "창업 인프라 활성화 및 창업 교육" },

  // 2. 밴드
  { id: 10, name: "활주로", category: "밴드", room: "학관 뒤 컨테이너", booth: "D-1", description: "역사 깊은 락 밴드 공연 활동" },
  { id: 11, name: "줄울림", category: "밴드", room: "학생회관 335호", booth: "D-2", description: "어쿠스틱 밴드 및 기타 스터디" },
  { id: 12, name: "우리부모", category: "밴드", room: "학관 뒤 컨테이너", booth: "D-3", description: "자유로운 분위기의 밴드 활동" },
  { id: 13, name: "재징유", category: "밴드", room: "학생회관 330호", booth: "E-1", description: "재즈 음악 감상 및 연주" },
  { id: 14, name: "올뮤", category: "밴드", room: "학생회관 304호", booth: "E-2", description: "다양한 악기 연주 및 그룹사운드" },
  { id: 15, name: "에어락", category: "밴드", room: "교내", booth: "E-3", description: "자신들만의 음악을 추구하는 밴드" },

  // 3. 예술
  { id: 16, name: "D.O.S", category: "예술", room: "학생회관 332호", booth: "F-1", description: "방송댄스 및 춤 공연 활동" },
  { id: 17, name: "광대와끼", category: "예술", room: "학생회관 333호", booth: "F-2", description: "사물놀이 및 전통 악기 연주" },
  { id: 18, name: "FICTURE", category: "예술", room: "학생회관 316호", booth: "F-3", description: "사진 촬영 및 출사, 전시회" },
  { id: 19, name: "알피네", category: "예술", room: "학생회관 328호", booth: "G-1", description: "클래식 기타 연주 및 보급" },
  { id: 20, name: "아카로아", category: "예술", room: "학생회관 329호", booth: "G-2", description: "아카펠라 공연 및 버스킹" },
  { id: 21, name: "KAUAO", category: "예술", room: "교내", booth: "G-3", description: "관현악단 및 클래식 연주회" },
  { id: 22, name: "랩플레인", category: "예술", room: "교내", booth: "G-4", description: "힙합 공연 및 음원 제작" },

  // 4. 운동
  { id: 23, name: "에어윙즈", category: "운동", room: "학생회관 341호", booth: "H-1", description: "축구 경기 및 대회 참가" },
  { id: 24, name: "ASTROS", category: "운동", room: "학생회관 303호", booth: "H-2", description: "야구부 및 아마추어 대회 참가" },
  { id: 25, name: "AVIATORS", category: "운동", room: "학생회관 338호", booth: "H-3", description: "농구 경기 및 관련 활동" },
  { id: 26, name: "ACE", category: "운동", room: "학생회관 319호", booth: "I-1", description: "테니스 레슨 및 경기" },
  { id: 27, name: "송골매", category: "운동", room: "학생회관 326호", booth: "I-2", description: "행글라이더 비행 및 제작 교육" },
  { id: 28, name: "학생활공회", category: "운동", room: "학생회관 314호", booth: "I-3", description: "글라이더 비행 및 조종 교육" },
  { id: 29, name: "LAPUTA", category: "운동", room: "학생회관 323호", booth: "J-1", description: "열기구 조종 및 항공 스포츠" },
  { id: 30, name: "보잉", category: "운동", room: "학생회관 336호", booth: "J-2", description: "보드(스노우/스케이트) 레저 스포츠" },
  { id: 31, name: "태권도부", category: "운동", room: "학생회관 305호", booth: "J-3", description: "태권도 수련 및 대회 출전" },
  { id: 32, name: "활검회", category: "운동", room: "학생회관 321호", booth: "K-1", description: "검도 기술 연마 및 시합" },
  { id: 33, name: "수박도", category: "운동", room: "학생회관 315호", booth: "K-2", description: "전통무예 수박도 수련" },
  { id: 34, name: "보빌보빌", category: "운동", room: "교내", booth: "K-3", description: "웨이트 트레이닝 및 바디프로필" },
  { id: 35, name: "KGA", category: "운동", room: "교내", booth: "K-4", description: "골프 연습 및 라운딩" },

  // 5. 종교
  { id: 36, name: "아오스딩", category: "종교", room: "학생회관 302호", booth: "L-1", description: "가톨릭 신앙 모임" },
  { id: 37, name: "CCC", category: "종교", room: "학생회관 306호", booth: "L-2", description: "기독교 선교 및 채플" },
  { id: 38, name: "IVF", category: "종교", room: "학생회관 340호", booth: "L-3", description: "성경 연구 및 기도 모임" },

  // 6. 사회
  { id: 39, name: "로타렉트", category: "사회", room: "학생회관 322호", booth: "M-1", description: "연합 봉사 및 사회 공헌 활동" },
  { id: 40, name: "PTPI", category: "사회", room: "학생회관 317호", booth: "M-2", description: "대학생 연합 봉사 및 캠페인" },
  { id: 41, name: "수레바퀴", category: "사회", room: "학생회관 312호", booth: "M-3", description: "독서/영화 토론 및 소통" },
  { id: 42, name: "세인영", category: "사회", room: "학생회관 331호", booth: "N-1", description: "영화 관람 및 문화 생활 공유" },
  { id: 43, name: "이웃사촌부", category: "사회", room: "학생회관 343호", booth: "N-2", description: "일본어 학습 및 문화 교류" },
  { id: 44, name: "북앤락", category: "사회", room: "학생회관 338호", booth: "N-3", description: "독서 기행 및 문화 활동" },
  { id: 45, name: "아이카우", category: "사회", room: "교내", booth: "O-1", description: "중고등학생 대상 전공 강연 멘토링" },
];