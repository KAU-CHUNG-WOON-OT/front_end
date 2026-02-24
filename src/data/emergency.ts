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

export const mainContacts: Contact[] = [
  { role: "회장", name: "홍석담", phone: "010-4122-3598" },
  { role: "부회장", name: "주민재", phone: "010-7794-5826" },
];

export const staffContacts: Contact[] = [
  { role: "교직원", name: "학생지원팀", phone: "010-4904-9949" },
  { role: "교직원", name: "의료지원실", phone: "010-8428-4756" },
  { role: "DDC 담당자", name: "이상훈 차장님", phone: "010-5448-0882" },
];

export const colleges: College[] = [
  {
    id: "ai",
    name: "AI융합대학",
    majors: [
      {
        name: "항공전자정보공학부",
        contacts: [
          { role: "회장", name: "박수홍", phone: "010-4945-8789" },
          { role: "부회장", name: "임채희", phone: "010-4414-0123" },
        ],
      },
      {
        name: "소프트웨어학과",
        contacts: [
          { role: "회장", name: "김재영", phone: "010-6555-4585" },
          { role: "부회장", name: "김승욱", phone: "010-9480-3992" },
        ],
      },
      {
        name: "AI자율주행시스템공학과",
        contacts: [
          { role: "회장", name: "이찬용", phone: "010-2277-5144" },
          { role: "부회장", name: "박원준", phone: "010-8466-6503" },
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
          { role: "회장", name: "이현준", phone: "010-4414-2721" },
          { role: "부회장", name: "이수민", phone: "010-5428-4196" },
        ],
      },
      {
        name: "신소재공학과",
        contacts: [
          { role: "회장", name: "김한결", phone: "010-8377-9058" },
          { role: "부회장", name: "홍승민", phone: "010-2918-7104" },
        ],
      },
      {
        name: "스마트드론공학과",
        contacts: [
          { role: "회장", name: "이승아", phone: "010-2212-2087" },
          { role: "부회장", name: "임상희", phone: "010-2869-4845" },
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
          { role: "회장", name: "박예린", phone: "010-4363-4101" },
          { role: "부회장", name: "김성재", phone: "010-9815-3938" },
        ],
      },
      {
        name: "경영학부",
        contacts: [
          { role: "회장", name: "김효나", phone: "010-8330-0506" },
          { role: "부회장", name: "장예지", phone: "010-5355-2487" },
        ],
      },
      {
        name: "항공운항학과",
        contacts: [
          { role: "회장", name: "이상호", phone: "010-2290-2701" },
          { role: "부회장", name: "조재현", phone: "010-9628-9564" },
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
          { role: "회장", name: "김사빈", phone: "010-8010-4980" },
          { role: "부회장", name: "신재하", phone: "010-6525-0337" },
        ],
      },
    ],
  },
];