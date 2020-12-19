import React from "react";
import PropTypes from "prop-types";
import KushyApi from "../KushyApi";
import s from "../assets/images/HanseiLogo.png";

const steps = [
  {
    id: "1",
    message: "안녕하세요 한세대학교 챗봇입니다.",
    trigger: "2",
  },
  {
    id: "2",
    message: "학우님의 이름을 입력해주세요 :)",
    trigger: "name",
  },
  {
    id: "name",
    user: true,
    trigger: "3",
  },
  {
    id: "3",
    message:
      "반갑습니다. {previousValue}학우님, 학교 공지에 관련하여 안내해도 될까요?",
    trigger: "yes",
  },
  {
    id: "yes",
    user: true,
    trigger: "submessage",
  },
  {
    id: "submessage",
    message: "공지 분류는 아래와 같습니다. 선택해주세요 :)",
    trigger: "sections",
  },
  {
    id: "sections",
    options: [
      { value: "scholarship", label: "장학금", trigger: "100" },
      { value: "class", label: "수강 신청", trigger: "class" },
      { value: "cafeteria", label: "학식", trigger: "cafeteria" },
      { value: "army", label: "예비군", trigger: "army" },
      { value: "club", label: "동아리", trigger: "club" },
      { value: "festival", label: "교내행사", trigger: "festival" },
      { value: "university", label: "학교정보", trigger: "university" },
      { value: "studentas", label: "학교기관", trigger: "studentas" },
    ],
  },

  ///////////////////////////////////장학금/////////////////////////////////
  {
    id: "100",
    message: "어떤 장학금을 찾으시나요?",
    trigger: "scholarship",
  },
  {
    id: "scholarship",
    options: [
      {
        value: "scholarship101",
        label: "Hansei Achievement Point",
        trigger: "achievement",
      },
      {
        value: "scholarship102",
        label: "성적장학금",
        trigger: "scholarship102",
      },
      {
        value: "scholarship103",
        label: "봉사장학금",
        trigger: "scholarship103",
      },
      {
        value: "scholarship104",
        label: "Hansei Advance장학금",
        trigger: "scholarship104",
      },
      {
        value: "scholarship105",
        label: "신입생장학금",
        trigger: "scholarship105",
      },
      {
        value: "scholarship106",
        label: "언론장학금",
        trigger: "scholarship106",
      },
      {
        value: "scholarship107",
        label: "자격증 관련 장학금",
        trigger: "scholarship107",
      },
      {
        value: "scholarship108",
        label: "근로장학금",
        trigger: "scholarship108",
      },
      {
        value: "scholarship109",
        label: "국가장학금",
        trigger: "scholarship109",
      },
      {
        value: "scholarship110",
        label: "공로장학금",
        trigger: "scholarship110",
      },
      { value: "ending", label: "종료", trigger: "ending" },
    ],
  },

  // Hansei Achievement Point 관련 정보
  {
    id: "achievement",
    message: "Hansei Achievement Point 관련 정보 중 선택해주세요 :)",
    trigger: "scholarship101",
  },
  {
    id: "scholarship101",
    options: [
      {
        value: "scholarship101-1",
        label: "신청 기간",
        trigger: "scholarship101-1",
      },
      {
        value: "scholarship101-2",
        label: "신청 방법",
        trigger: "scholarship101-2",
      },
      {
        value: "scholarship101-3",
        label: "신청대상자",
        trigger: "scholarship101-3",
      },
      {
        value: "exit",
        label: "종료",
        trigger: "ending",
      },
    ],
  },
  {
    id: "scholarship101-1",
    message:
      "Hansei Achievement Point 신청 기간은 2020년 11월 13일(금) ~ 2020년 12월 03일(목)까지 입니다.",
    trigger: "scholarship101",
  },
  {
    id: "scholarship101-2",
    message:
      "Hansei Achievement Point 신청 방법은 다음과 같습니다. 학사행정 → 서비스 → 학생서비스 → 장학관리 → Hansei Achievement 적립신청 → " +
      "해당학년 및 학기 확인 → 추가 → 포인트신청상세 입력 → 저장 → 근거서류 파일첨부 → 저장 →  체크박스 체크 → 신청버튼 → 팝업창 입니다. 이전 페이지로 돌아가시겠습니까?",
    trigger: "scholarship101",
  },
  {
    id: "scholarship101-3",
    message: "Hansei Achievement Point 신청 대상자는 다음과 같습니다.",
    trigger: "scholarship101",
  },

  {
    id: "scholarship102",
    options: [
      {
        value: "scholarship102-1",
        label: "신청 기간",
        trigger: "scholarship102-1",
      },
      {
        value: "scholarship102-2",
        label: "신청 방법",
        trigger: "scholarship102-2",
      },
      {
        value: "scholarship102-3",
        label: "신청대상자",
        trigger: "scholarship102-3",
      },
    ],
  },
  {
    id: "scholarship102-1",
    message: "신청기간",
    trigger: "scholarship101",
  },
  {
    id: "scholarship102-2",
    message: "신청방법",
    trigger: "scholarship101",
  },
  {
    id: "scholarship102-3",
    message: "신청대상자",
    trigger: "scholarship101",
  },

  {
    id: "scholarship103",
    options: [
      {
        value: "scholarship102-1",
        label: "신청 기간",
        trigger: "scholarship103-1",
      },
      {
        value: "scholarship102-2",
        label: "신청 방법",
        trigger: "scholarship103-2",
      },
      {
        value: "scholarship102-3",
        label: "신청대상자",
        trigger: "scholarship103-3",
      },
    ],
  },
  {
    id: "scholarship103-1",
    message: "신청기간",
    trigger: "scholarship101",
  },
  {
    id: "scholarship103-2",
    message: "신청방법",
    trigger: "scholarship101",
  },
  {
    id: "scholarship103-3",
    message: "신청대상자",
    trigger: "scholarship101",
  },

  {
    id: "scholarship104",
    options: [
      {
        value: "scholarship102-1",
        label: "신청 기간",
        trigger: "scholarship104-1",
      },
      {
        value: "scholarship102-2",
        label: "신청 방법",
        trigger: "scholarship104-2",
      },
      {
        value: "scholarship102-3",
        label: "신청대상자",
        trigger: "scholarship104-3",
      },
    ],
  },
  {
    id: "scholarship104-1",
    message: "신청기간",
    trigger: "scholarship101",
  },
  {
    id: "scholarship104-2",
    message: "신청방법",
    trigger: "scholarship101",
  },
  {
    id: "scholarship104-3",
    message: "신청대상자",
    trigger: "scholarship101",
  },

  {
    id: "scholarship105",
    options: [
      {
        value: "scholarship102-1",
        label: "신청 기간",
        trigger: "scholarship105-1",
      },
      {
        value: "scholarship102-2",
        label: "신청 방법",
        trigger: "scholarship105-2",
      },
      {
        value: "scholarship102-3",
        label: "신청대상자",
        trigger: "scholarship105-3",
      },
    ],
  },
  {
    id: "scholarship105-1",
    message: "신청기간",
    trigger: "scholarship101",
  },
  {
    id: "scholarship105-2",
    message: "신청방법",
    trigger: "scholarship101",
  },
  {
    id: "scholarship105-3",
    message: "신청대상자",
    trigger: "scholarship101",
  },

  {
    id: "scholarship106",
    options: [
      {
        value: "scholarship102-1",
        label: "신청 기간",
        trigger: "scholarship106-1",
      },
      {
        value: "scholarship102-2",
        label: "신청 방법",
        trigger: "scholarship106-2",
      },
      {
        value: "scholarship102-3",
        label: "신청대상자",
        trigger: "scholarship106-3",
      },
    ],
  },
  {
    id: "scholarship106-1",
    message: "신청기간",
    trigger: "scholarship101",
  },
  {
    id: "scholarship106-2",
    message: "신청방법",
    trigger: "scholarship101",
  },
  {
    id: "scholarship106-3",
    message: "신청대상자",
    trigger: "scholarship101",
  },

  {
    id: "scholarship107",
    options: [
      {
        value: "scholarship102-1",
        label: "신청 기간",
        trigger: "scholarship107-1",
      },
      {
        value: "scholarship102-2",
        label: "신청 방법",
        trigger: "scholarship107-2",
      },
      {
        value: "scholarship102-3",
        label: "신청대상자",
        trigger: "scholarship107-3",
      },
    ],
  },
  {
    id: "scholarship107-1",
    message: "신청기간",
    trigger: "scholarship101",
  },
  {
    id: "scholarship107-2",
    message: "신청방법",
    trigger: "scholarship101",
  },
  {
    id: "scholarship107-3",
    message: "신청대상자",
    trigger: "scholarship101",
  },

  {
    id: "scholarship108",
    options: [
      {
        value: "scholarship102-1",
        label: "신청 기간",
        trigger: "scholarship108-1",
      },
      {
        value: "scholarship102-2",
        label: "신청 방법",
        trigger: "scholarship108-2",
      },
      {
        value: "scholarship102-3",
        label: "신청대상자",
        trigger: "scholarship108-3",
      },
    ],
  },
  {
    id: "scholarship108-1",
    message: "신청기간",
    trigger: "scholarship101",
  },
  {
    id: "scholarship108-2",
    message: "신청방법",
    trigger: "scholarship101",
  },
  {
    id: "scholarship108-3",
    message: "신청대상자",
    trigger: "scholarship101",
  },

  {
    id: "scholarship109",
    options: [
      {
        value: "scholarship102-1",
        label: "신청 기간",
        trigger: "scholarship109-1",
      },
      {
        value: "scholarship102-2",
        label: "신청 방법",
        trigger: "scholarship109-2",
      },
      {
        value: "scholarship102-3",
        label: "신청대상자",
        trigger: "scholarship109-3",
      },
    ],
  },
  {
    id: "scholarship109-1",
    message: "신청기간",
    trigger: "scholarship101",
  },
  {
    id: "scholarship109-2",
    message: "신청방법",
    trigger: "scholarship101",
  },
  {
    id: "scholarship109-3",
    message: "신청대상자",
    trigger: "scholarship101",
  },

  {
    id: "scholarship110",
    options: [
      {
        value: "scholarship102-1",
        label: "신청 기간",
        trigger: "scholarship110-1",
      },
      {
        value: "scholarship102-2",
        label: "신청 방법",
        trigger: "scholarship110-2",
      },
      {
        value: "scholarship102-3",
        label: "신청대상자",
        trigger: "scholarship110-3",
      },
    ],
  },
  {
    id: "scholarship110-1",
    message: "신청기간",
    trigger: "scholarship101",
  },
  {
    id: "scholarship110-2",
    message: "신청방법",
    trigger: "scholarship101",
  },
  {
    id: "scholarship110-3",
    message: "신청대상자",
    trigger: "scholarship101",
  },

  {
    id: "bbb",
    options: [
      { value: "name", label: "Name", trigger: "ending" },
      { value: "category", label: "Category", trigger: "ending" },
    ],
  },

  ///////////////////////////////////수강신청/////////////////////////////////
  {
    id: "class",
    message: "수강신청 관련 정보는 다음과 같습니다.",
    trigger: "classes",
  },

  {
    id: "classes",
    options: [
      { value: "class101", label: "수강신청기간", trigger: "class101" },
      { value: "class101", label: "방법", trigger: "class101" },
      { value: "class101", label: "수업정보", trigger: "class101" },
      { value: "ending", label: "종료", trigger: "ending" },
    ],
  },
  {
    id: "class101",
    options: [
      { value: "class101-1", label: "예비수강신청", trigger: "class101-1" },
      { value: "class101-2", label: "본수강신청", trigger: "class101-2" },
      { value: "class101-3", label: "수강신청 방법", trigger: "class101-3" },
    ],
  },

  {
    id: "class101-1",
    message: "예비수강신청 기간 2/14~2/22 입니다",
    trigger: "class101",
  },
  {
    id: "class101-2",
    message: "본수강신청 기간 2/23~2/28 입니다",
    trigger: "class101",
  },
  {
    id: "class101-3",
    message: "채플을 필수로 들어야 합니다",
    trigger: "class101",
  },

  ///////////////////////////////////학식/////////////////////////////////
  {
    id: "cafeteria",
    options: [
      { value: "menu", label: "메뉴", trigger: "menu" },
      { value: "cafeteriainfo", label: "정보", trigger: "cafeteriainfo" },
      { value: "ending", label: "종료", trigger: "ending" },
    ],
  },
  {
    id: "menu",
    message: "한식 : 김치볶음밥 / 양식 : 스파게티 / 라면",
    trigger: "cafeteria",
  },
  {
    id: "cafeteriainfo",
    message:
      "위치 : 본관1층 / 점심시간 11시~13시 / 저녁시간 17시~19시 / 라면 11시~19시",
    trigger: "cafeteria",
  },
  ///////////////////////////////////예비군/////////////////////////////////
  {
    id: "army",
    message: "날짜 10월 15일 / 장소 금정역 / 내용 4시간 이론수업",
    trigger: "sections",
  },
  ///////////////////////////////////동아리/////////////////////////////////
  {
    id: "club",
    options: [
      { value: "study", label: "학술", trigger: "study" },
      { value: "athletic", label: "체육", trigger: "athletic" },
      { value: "volunteer", label: "봉사", trigger: "volunteer" },
      { value: "music", label: "음악", trigger: "music" },
      { value: "others", label: "기타", trigger: "others" },
      { value: "ending", label: "종료", trigger: "ending" },
    ],
  },

  {
    id: "study",
    message: "HCC(컴퓨터) / I.B(로봇) / HAM(무선통신) ",
    trigger: "club",
  },
  {
    id: "athletic",
    message:
      "공테랑(테니스) / 투혼(농구) / 헐레벌떡(축구) / 피버노바(축구) / 메이져(야구) / 한판(유도) / ",
    trigger: "club",
  },
  {
    id: "volunteer",
    message:
      "인터콥 / DFC제자들선교회 / CAM / 어린이전도단 / 예수전도단 / CCC / 내가갔다올게",
    trigger: "club",
  },
  {
    id: "music",
    message: "매드게일(락) / 비랩(랩) / 치즈스틱",
    trigger: "club",
  },
  {
    id: "others",
    message:
      "In AD(광고) / DMZ(댄스) / 광고분자(AD2) / wake up / 제2외국어 / 광야(방송)",
    trigger: "club",
  },

  ///////////////////////////////////교내행사/////////////////////////////////
  {
    id: "festival",
    options: [
      { value: "party", label: "축제", trigger: "party" },
      { value: "sportsday", label: "체육대회", trigger: "sportsday" },
      { value: "OT", label: "오티", trigger: "OT" },
      { value: "drink", label: "Drink", trigger: "aaa" },
      { value: "ending", label: "종료", trigger: "ending" },
    ],
  },
  {
    id: "party",
    message: "기간 5/12~5/14 / 음식부스 / 동아리공연",
    trigger: "festival",
  },
  {
    id: "sportsday",
    message: "기간 10/10~10/12 / 학과별 체육경기 / 동아리공연",
    trigger: "festival",
  },
  {
    id: "OT",
    message: "기간 2/22~2/23 / 신입생 오리엔테이션 / 동아리공연 / 학과별 상담",
    trigger: "festival",
  },

  ///////////////////////////////////학교정보/////////////////////////////////
  {
    id: "university",
    options: [
      { value: "university101", label: "학과", trigger: "university101" },
      { value: "university102", label: "학교시설", trigger: "university102" },
      { value: "university103", label: "학교위치", trigger: "university103" },
      { value: "university104", label: "기타", trigger: "university104" },
      { value: "ending", label: "종료", trigger: "ending" },
    ],
  },

  {
    id: "university101",
    message:
      "신학과 기독교교육상담학과  미디어영상광고학과 국제경영학과 경찰행정학과 국제관광학과 영어학과 중국어학과 전자소프트웨어학과 ICT융합학과 산업보안학과 사회복지학과 간호학과 음악학과 공연예술학과 시각정보디자인학과 실내건축디자인학과 섬유패션디자인학과",
    trigger: "university",
  },
  {
    id: "university102",
    message: "교내식당 헬스장 서점 복사실 편의점 카페2개 보건소",
    trigger: "university",
  },
  {
    id: "university103",
    message: "경기도 군포시 당정동",
    trigger: "university",
  },
  {
    id: "university104",
    message: "내용없음",
    trigger: "university",
  },

  ///////////////////////////////////학교기관/////////////////////////////////
  {
    id: "studentas",
    options: [
      { value: "student101", label: "총학생회", trigger: "student101" },
      { value: "student102", label: "대의원회", trigger: "student102" },
      { value: "student103", label: "학생복지위원회", trigger: "student103" },
      { value: "student104", label: "동아리연합회", trigger: "student104" },
      { value: "ending", label: "종료", trigger: "ending" },
    ],
  },

  {
    id: "student101",
    message:
      "총학생회는 일한다 / 부서 기획국 홍보국 재정국 교육국 문체국 선교국 예배국 대외협력국 유학국",
    trigger: "studentas",
  },
  {
    id: "student102",
    message: "대의원회는 장부감사한다",
    trigger: "studentas",
  },
  {
    id: "student103",
    message: "학생복지위원회는 일한다",
    trigger: "studentas",
  },
  {
    id: "student104",
    message: "동아리연합회는 일한다",
    trigger: "studentas",
  },

  ///////////////////////////////엔딩////////////////////////////
  {
    id: "aaa",
    options: [
      { value: "name", label: "짬통", trigger: "ending" },
      { value: "category", label: "Category", trigger: "ending" },
    ],
  },

  {
    id: "ending",
    message: "챗봇 서비스를 종료합니다. 더 궁금한게 있으신가요?",
    trigger: "endsection",
  },
  {
    id: "endsection",
    options: [
      { value: "yes", label: "네", trigger: "sections" },
      { value: "no", label: "아니요", trigger: "end" },
    ],
  },
  {
    id: "end",
    component: <KushyApi />,
    waitAction: true,
    trigger: ({ value, steps }) => value,
  },
];

KushyApi.propTypes = {
  steps: PropTypes.object,
  triggerNextStep: PropTypes.func,
};

KushyApi.defaultProps = {
  steps: undefined,
  triggerNextStep: undefined,
};

export default steps;
