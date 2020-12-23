import React from "react";
import PropTypes from "prop-types";
import KushyApi from "../KushyApi";

const steps = [
  {
    id: "1",
    message: "안녕하세요 한세대학교 챗봇입니다.",
    trigger: "2",
  },
  {
    id: "2",
    message: "공지 분류는 아래와 같습니다. 선택해주세요 :)",
    trigger: "sections",
  },
  {
    id: "sections",
    options: [
      { value: "scholarship", label: "장학금", trigger: "scholarship1" },
      { value: "cafeteria", label: "학식", trigger: "cafeteria" },
      { value: "army", label: "예비군", trigger: "army" },
      { value: "club", label: "동아리", trigger: "club" },
      { value: "studentas", label: "학교기관", trigger: "studentas" },
      { value: "festival", label: "교내행사", trigger: "festival" },
      { value: "university", label: "학교정보", trigger: "university" },
      { value: "schoolinfo", label: "학사정보", trigger: "schoolinfo" },
      { value: "dormitory", label: "기숙사", trigger: "dormitory" },
    ],
  },

  ///////////////////////////////////장학금/////////////////////////////////
  {
    id: "scholarship1",
    message: "어떤 장학금을 찾으시나요?",
    trigger: "scholarship",
  },
  {
    id: "scholarship",
    options: [
      {
        value: "scholarship101",
        label: "성적장학금",
        trigger: "scholarship101",
      },
      {
        value: "scholarship102",
        label: "Hansei Advance 장학금",
        trigger: "scholarship102",
      },
      {
        value: "scholarship103",
        label: "신입생장학금",
        trigger: "scholarship103",
      },
      {
        value: "scholarship104",
        label: "근로장학금",
        trigger: "scholarship104",
      },
      {
        value: "scholarship105",
        label: "군종사관후보생장학금",
        trigger: "scholarship105",
      },
      {
        value: "scholarship106",
        label: "공로장학금",
        trigger: "scholarship106",
      },
      {
        value: "scholarship107",
        label: "외부장학금",
        trigger: "scholarship107",
      },
      {
        value: "scholarship108",
        label: "특별장학금",
        trigger: "scholarship108",
      },
      {
        value: "scholarship109",
        label: "영산장학금",
        trigger: "scholarship109",
      },
      {
        value: "scholarship110",
        label: "희망장학금",
        trigger: "scholarship110",
      },

      {
        value: "scholarship110",
        label: "엑설런스장학금",
        trigger: "scholarship110",
      },
      {
        value: "scholarship110",
        label: "비트장학금",
        trigger: "scholarship110",
      },
      {
        value: "scholarship110",
        label: "글로벌사회봉사장학금",
        trigger: "scholarship110",
      },
      {
        value: "scholarship110",
        label: "국가고시장학금",
        trigger: "scholarship110",
      },
      {
        value: "scholarship110",
        label: "교직원자녀장학금",
        trigger: "scholarship110",
      },
      {
        value: "scholarship110",
        label: "봉사장학금",
        trigger: "scholarship110",
      },
      {
        value: "scholarship110",
        label: "언론장학금",
        trigger: "scholarship110",
      },
      {
        value: "scholarship110",
        label: "보훈장학금",
        trigger: "scholarship110",
      },
      {
        value: "scholarship110",
        label: "국가고시장학금",
        trigger: "scholarship110",
      },
      {
        value: "scholarship110",
        label: "한세가족장학금",
        trigger: "scholarship110",
      },
      {
        value: "scholarship110",
        label: "편입생장학금",
        trigger: "scholarship110",
      },
      {
        value: "scholarship110",
        label: "외국어장학금A",
        trigger: "scholarship110",
      },
      {
        value: "scholarship110",
        label: "외국어장학금B",
        trigger: "scholarship110",
      },
      {
        value: "scholarship110",
        label: "Hansei Achievement Point",
        trigger: "scholarship110",
      },
      {
        value: "scholarship110",
        label: "장애학생장학금",
        trigger: "scholarship110",
      },
      {
        value: "scholarship110",
        label: "다문화가정장학금",
        trigger: "scholarship110",
      },
      {
        value: "scholarship110",
        label: "만학도장학금",
        trigger: "scholarship110",
      },
      { value: "ending", label: "종료", trigger: "ending" },
    ],
  },

  // 성적장학금 정보
  {
    id: "scholarship101",
    message: "성적장학금 정보입니다",
    trigger: "101",
  },
  {
    id: "101",
    message: "신청기간 및 방법 : 별도신청없음",
    trigger: "102",
  },
  {
    id: "102",
    message: "지급 및 선발기준 : 직전학기 각 학부별 등록금 수입의 3.33% 배정",
    trigger: "103",
  },
  {
    id: "103",
    message:
      "지급인원은 각 전공별 재학인원의 8%이내 지급 -- (소수점 인원은 반올림)",
    trigger: "104",
  },
  {
    id: "104",
    message: "직전학기성적 3.5이상인 자",
    trigger: "105",
  },
  {
    id: "105",
    message:
      "타 장학금 추가 수혜 및 장학기준(제7조, 제9조) 미달 및 학적 변동 등의 사유 발생시 다음 순위로 승계 가능",
    trigger: "scholarship",
  },

  // Hansei Advance 장학금
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

  ///////////////////////////////////학식/////////////////////////////////
  {
    id: "cafeteria",
    options: [
      { value: "menu", label: "메뉴", trigger: "menu" },
      { value: "cafeteriainfo", label: "정보", trigger: "cafeteriainfo" },
      { value: "ending", label: "운영시간", trigger: "cafeteriatime" },
    ],
  },
  {
    id: "menu",
    message:
      "오늘의 메뉴는 [한식메뉴 : 김치볶음밥 / 일품메뉴(양식, 일식, 중식) : 스파게티]",
    trigger: "cafeteria",
  },
  {
    id: "cafeteriainfo",
    message:
      "가격 3500원 / 14시 이후 라면 배식 가능 / 식당안에 카페와 매점이 있음",
    trigger: "cafeteria",
  },
  {
    id: "cafeteriatime",
    message:
      "운영시간 학기중 " +
      "학생식당 (중식, 석식) 11:00 ~ 19:00 (배식가능시간 18:40 까지)" +
      "교직원 식당 (중식) 11:00 ~ 13:30 (배식가능시간 13:20 까지)" +
      "방학중 " +
      "학생식당 (중식, 석식) 11:00 ~ 19:00 (배식가능시간 18:40 까지)",
    trigger: "cafeteria",
  },

  ///////////////////////////////////예비군/////////////////////////////////
  {
    id: "army",
    message: "날짜 미정",
    trigger: "army1",
  },
  {
    id: "army1",
    message: "훈련내용 : 향방기본훈련 8시간",
    trigger: "army2",
  },
  {
    id: "army2",
    message: "훈련장소 : 경기도 의왕시 내손1동 산119번지 (호계 예비군 훈련장)",
    trigger: "army3",
  },
  {
    id: "army3",
    message:
      "훈련장이동 : 학교버스(학교 주차장 훈련당일 08:10까지) / 대중교통 : 금정역 4번출구 훈련당일 08:10까지" +
      "복귀시에는 학교버스 미운행",
    trigger: "army4",
  },
  {
    id: "army4",
    message: "날짜 미정 / 장소 금정역 / 내용 4시간 이론수업",
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
      "총학생회는 학생 자치 기구 중 최고집행기구입니다." +
      "총학생회(집행부)는 총학생회장, 총학생회부회장, 각 부장 및 각 차장으로 구성됩니다." +
      "총학생회는 아래의 각 집행국을 두고있습니다.",
    trigger: "student101-1",
  },
  {
    id: "student101-1",
    message:
      "기획국 : 본회의 행정, 사무, 행사, 계획운영, 각종 회의 개최 및 일련의 사무에 관한 사항" +
      "홍보국 : 본회의 홍보에 관한 사항" +
      "재정국 : 본회의 경리, 회계에 과한 사항" +
      "교육국 : 본회의 전반적인 학술활동에 관한 사항" +
      "문체국 : 문화 및 체육행사에 관한 사항" +
      "선교국 : 대내·외 선교활동 및 전도에 관한 사항" +
      "예배국 : 교회교육 및 예배에 관한 사항" +
      "대외협력국 : 대외 제휴 업체, 학교, 학생 복지에 관한 사항" +
      "유학국 : 학생들의 단기 유학, 학점교류에 관한 사항",
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

  ///////////////////////////////////교내행사/////////////////////////////////
  {
    id: "festival",
    options: [
      { value: "party", label: "축제", trigger: "party" },
      { value: "sportsday", label: "체육대회", trigger: "sportsday" },
      { value: "OT", label: "오리엔테이션", trigger: "OT" },
      { value: "launching", label: "발대식", trigger: "launching" },
      { value: "graduate", label: "졸업식", trigger: "graduate" },
      { value: "ending", label: "종료", trigger: "ending" },
    ],
  },
  {
    id: "party",
    message:
      "기간 : 5/12~5/13, 내용 : 음식부스 / 동아리공연 / 연예인공연 / 놀이기구운영",
    trigger: "festival",
  },
  {
    id: "sportsday",
    message: "기간 : 10/16, 내용 : 학과별 체육경기",
    trigger: "festival",
  },
  {
    id: "OT",
    message:
      "기간 : 2/18~2/19, 내용 : 신입생 오리엔테이션 / 동아리공연 / 연예인공연 / 교수님면담",
    trigger: "festival",
  },
  {
    id: "launching",
    message: "기간 : 미정, 내용 : 학회 및 4대기관 출범식 / 상품추첨",
    trigger: "festival",
  },
  {
    id: "graduate",
    message: "기간: 미정, 내영 : 학위수여",
    trigger: "festival",
  },

  ///////////////////////////////////학사정보/////////////////////////////////
  {
    id: "schoolinfo",
    options: [
      { value: "501", label: "성적", trigger: "501" },
      { value: "502", label: "졸업", trigger: "502" },
      { value: "503", label: "휴학/복학", trigger: "503" },
      { value: "504", label: "수강신청", trigger: "504" },
      { value: "505", label: "사이버강의", trigger: "505" },
      { value: "506", label: "계절학기", trigger: "506" },
      { value: "507", label: "전과", trigger: "507" },
      { value: "ending", label: "종료", trigger: "ending" },
    ],
  },
  {
    id: "501",
    message:
      "성적평가 : 시험성적, 과제물, 출석, 수시평가 등에 의해 종합적으로 평가 / 과목별 수업시수의 4분의 1이상 결석한 자는 F로 처리함" +
      "평가방법 : 성적평가는 상대평가를 원칙으로 함 (단, 수강인원 9명 이하의 경우, 계약학과 및 비트교육센터에서 개설하는 교과목은 예외로 할 수 있다.) ",
    trigger: "schoolinfo",
  },
  {
    id: "502",
    message: "2",
    trigger: "schoolinfo",
  },
  {
    id: "503",
    message: "3",
    trigger: "schoolinfo",
  },
  {
    id: "504",
    message: "4",
    trigger: "schoolinfo",
  },
  {
    id: "505",
    message: "5",
    trigger: "schoolinfo",
  },
  {
    id: "506",
    message: "6",
    trigger: "schoolinfo",
  },
  {
    id: "507",
    message: "7",
    trigger: "schoolinfo",
  },

  ///////////////////////////////////기숙사/////////////////////////////////
  {
    id: "dormitory",
    options: [
      { value: "601", label: "위치", trigger: "601" },
      { value: "602", label: "금액", trigger: "601" },
      { value: "603", label: "신청기간", trigger: "603" },
      { value: "604", label: "발표날짜", trigger: "604" },
      { value: "ending", label: "종료", trigger: "ending" },
    ],
  },
  {
    id: "601",
    message: "영상비젼센터 / 비젼관",
    trigger: "dormitory",
  },
  {
    id: "602",
    message: "2",
    trigger: "dormitory",
  },
  {
    id: "603",
    message: "3",
    trigger: "dormitory",
  },
  {
    id: "604",
    message: "4",
    trigger: "dormitory",
  },

  ///////////////////////////////////학교정보/////////////////////////////////
  {
    id: "university",
    options: [
      { value: "701", label: "학교정보", trigger: "701" },
      { value: "702", label: "학교위치", trigger: "702" },
      { value: "703", label: "학과정보", trigger: "703" },
      { value: "704", label: "학교시설", trigger: "704" },
      { value: "705", label: "교내전화번호", trigger: "705" },
      { value: "ending", label: "종료", trigger: "ending" },
    ],
  },

  {
    id: "701",
    message: "교화 : 백합, 총장 : 김성혜",
    trigger: "university",
  },
  {
    id: "702",
    message: "경기도 군포시 한세로30",
    trigger: "university",
  },
  {
    id: "703",
    message:
      "신학과 기독교교육상담학과  미디어영상광고학과 국제경영학과 경찰행정학과 국제관광학과 영어학과 중국어학과 전자소프트웨어학과 ICT융합학과 산업보안학과 사회복지학과 간호학과 음악학과 공연예술학과 시각정보디자인학과 실내건축디자인학과 섬유패션디자인학과",
    trigger: "university",
  },
  {
    id: "704",
    message: "교내식당 헬스장 서점 복사실 편의점 카페3개 보건소 도서관",
    trigger: "university",
  },
  {
    id: "705",
    message: "대학일자리센터",
    trigger: "705-1",
  },
  {
    id: "705-1",
    message: "대학일자리센터장 031-450-9831",
    trigger: "university",
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
