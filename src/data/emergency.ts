export interface Contact {
  role: string;
  name: string;
  phone: string;
}

export interface Major {
  name: string;
  contacts: Contact[];
}

export interface College {
  id: string;
  name: string;
  majors: Major[];
}

// 총학생회 (메인 페이지 상단용)
export const mainContacts: Contact[] = [
  { role: "회장", name: "김총학", phone: "010-0000-0000" },
  { role: "부회장", name: "이부회", phone: "010-0000-0000" },
];

// 단과대별 데이터 (사진 기반 더미 데이터)
export const colleges: College[] = [
  {
    id: "ai",
    name: "AI융합대학",
    majors: [
      {
        name: "항공전자정보공학부",
        contacts: [
          { role: "회장", name: "하코딩", phone: "010-3030-2222" },
          { role: "부회장", name: "문알고", phone: "010-3030-3333" },
        ],
      },
      {
        name: "소프트웨어학과",
        contacts: [
          { role: "회장", name: "하코딩", phone: "010-3030-2222" },
          { role: "부회장", name: "문알고", phone: "010-3030-3333" },
        ],
      },
      {
        name: "AI자율주행시스템공학과",
        contacts: [
          { role: "회장", name: "하코딩", phone: "010-3030-2222" },
          { role: "부회장", name: "문알고", phone: "010-3030-3333" },
        ],
      },
    ],
  },
  {
    id: "eng",
    name: "공과대학",
    majors: [
      {
        name: "항공우주 및 기계공학부",
        contacts: [
          { role: "회장", name: "하코딩", phone: "010-3030-2222" },
          { role: "부회장", name: "문알고", phone: "010-3030-3333" },
        ],
      },
      {
        name: "신소재공학과",
        contacts: [
          { role: "회장", name: "하코딩", phone: "010-3030-2222" },
          { role: "부회장", name: "문알고", phone: "010-3030-3333" },
        ],
      },
      {
        name: "스마트드론공학과",
        contacts: [
          { role: "회장", name: "하코딩", phone: "010-3030-2222" },
          { role: "부회장", name: "문알고", phone: "010-3030-3333" },
        ],
      },
    ],
  },
  {
    id: "biz",
    name: "항공·경영대학",
    majors: [
      {
        name: "항공교통물류학부",
        contacts: [
          { role: "회장", name: "하코딩", phone: "010-3030-2222" },
          { role: "부회장", name: "문알고", phone: "010-3030-3333" },
        ],
      },
      {
        name: "경영학부",
        contacts: [
          { role: "회장", name: "하코딩", phone: "010-3030-2222" },
          { role: "부회장", name: "문알고", phone: "010-3030-3333" },
        ],
      },
      {
        name: "항공운항학과",
        contacts: [
          { role: "회장", name: "하코딩", phone: "010-3030-2222" },
          { role: "부회장", name: "문알고", phone: "010-3030-3333" },
        ],
      },
    ],
  },
  {
    id: "free",
    name: "자유전공학부",
    majors: [
      {
        name: "자유전공학부 학생회",
        contacts: [
          { role: "회장", name: "하코딩", phone: "010-3030-2222" },
          { role: "부회장", name: "문알고", phone: "010-3030-3333" },
        ],
      },
    ],
  },
];