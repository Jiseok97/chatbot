import React from "react";
import PropTypes from "prop-types";
import KushyApi from "../KushyApi";

const steps = [
  {
    id: "1",
    message: "안녕하세요 한세대학교 챗봇입니다. 무엇을 도와드릴까요?",
    trigger: "sections",
  },

  {
    id: "sections",
    options: [
      { value: "scholarship", label: "장학금", trigger: "scholarship1" },
      { value: "cafeteria", label: "학식", trigger: "cafeteria0" },
      { value: "club", label: "동아리", trigger: "club" },
      { value: "festival", label: "교내행사", trigger: "festival" },
      { value: "dormitory", label: "기숙사", trigger: "dormitory" },
      { value: "army", label: "예비군", trigger: "army0" },
      { value: "studentas", label: "학교기관", trigger: "studentas" },
      { value: "schoolinfo", label: "학사정보", trigger: "schoolinfo" },
      { value: "university", label: "학교정보", trigger: "university" },
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
        value: "scholarship230",
        label: "Hansei Achievement Point",
        trigger: "scholarship230",
      },
      {
        value: "scholarship101",
        label: "성적장학금",
        trigger: "scholarship100",
      },

      {
        value: "scholarship120",
        label: "신입생장학금",
        trigger: "scholarship120",
      },

      {
        value: "scholarship130",
        label: "근로장학금",
        trigger: "scholarship130",
      },
      {
        value: "scholarship220",
        label: "봉사장학금",
        trigger: "scholarship220",
      },
      {
        value: "scholarship110",
        label: "Hansei Advance 장학금",
        trigger: "scholarship110",
      },
      {
        value: "scholarship160",
        label: "희망장학금",
        trigger: "scholarship160",
      },
      {
        value: "scholarship180",
        label: "비트장학금",
        trigger: "scholarship180",
      },
      {
        value: "scholarship250",
        label: "외국어장학금A",
        trigger: "scholarship250",
      },
      {
        value: "scholarship200",
        label: "국가고시장학금",
        trigger: "scholarship200",
      },
      {
        value: "scholarship150",
        label: "공로장학금",
        trigger: "scholarship150",
      },

      {
        value: "scholarship170",
        label: "엑설런스장학금",
        trigger: "scholarship170",
      },

      {
        value: "scholarship190",
        label: "글로벌사회봉사장학금",
        trigger: "scholarship190",
      },

      {
        value: "scholarship210",
        label: "교직원자녀장학금",
        trigger: "scholarship210",
      },

      {
        value: "scholarship240",
        label: "장애학생장학금",
        trigger: "scholarship240",
      },

      {
        value: "scholarship140",
        label: "군종사관후보생장학금",
        trigger: "scholarship140",
      },
      {
        value: "scholarship260",
        label: "만학도장학금",
        trigger: "scholarship260",
      },
      { value: "ending", label: "이전으로", trigger: "sections" },
    ],
  },

  // 성적장학금 정보
  {
    id: "scholarship100",
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
    trigger: "106",
  },
  {
    id: "106",
    message: "지급금액 : 각 학부별 지급금액은 별도 내규로 정함",
    trigger: "scholarship",
  },

  // Hansei Advance 장학금
  {
    id: "scholarship110",
    message: "Hansei Advance 장학금 정보입니다",
    trigger: "111",
  },
  {
    id: "111",
    message: "신청기간 및 방법 : 별도신청없음",
    trigger: "112",
  },
  {
    id: "112",
    message: "지급 및 선발기준 : 직전학기 성적대비 일정수준 향상 자",
    trigger: "113",
  },
  {
    id: "113",
    message: "지급금액 : 학생지도장학위원회에서 결정",
    trigger: "scholarship",
  },

  // 신입생장학금
  {
    id: "scholarship120",
    message: "신입생장학금 정보입니다",
    trigger: "121",
  },
  {
    id: "121",
    message: "신청기간 및 방법 : 별도신청없음",
    trigger: "122",
  },
  {
    id: "122",
    message:
      "지급 및 선발기준 : 매 학년도 신입생 선발 모집요강이 정하는 바에 따른다.",
    trigger: "123",
  },
  {
    id: "123",
    message: "지급금액 : 학생지도장학위원회에서 결정",
    trigger: "scholarship",
  },

  // 근로장학금
  {
    id: "scholarship130",
    message: "근로장학금 정보입니다",
    trigger: "131",
  },
  {
    id: "131",
    message: "신청기간 및 방법 : 별도신청없음",
    trigger: "132",
  },
  {
    id: "132",
    message:
      "지급 및 선발기준 : 1.학기중(방학포함)300시간 이내로 한하며 시간당 금액은 최저임금에서 백원단위 절상으로 결정하여 지급한다.",
    trigger: "133",
  },
  {
    id: "133",
    message: "2.특정근로는 등록금 범위내에서 지급",
    trigger: "134",
  },
  {
    id: "134",
    message: "지급금액 : 학생지도장학위원회에서 결정",
    trigger: "scholarship",
  },

  // 군종사관후보생장학금
  {
    id: "scholarship140",
    message: "군종사관후보생 정보입니다",
    trigger: "141",
  },
  {
    id: "141",
    message: "신청기간 및 방법 : 별도신청없음",
    trigger: "142",
  },
  {
    id: "142",
    message: "지급 및 선발기준 : 군종사관후보생 합격자",
    trigger: "143",
  },
  {
    id: "143",
    message: "지급금액 : 등록금의 50%",
    trigger: "scholarship",
  },

  // 희망장학금
  {
    id: "scholarship150",
    message: "희망장학금 정보입니다",
    trigger: "151",
  },
  {
    id: "151",
    message: "신청기간 및 방법 : 별도신청없음",
    trigger: "152",
  },
  {
    id: "152",
    message: "지급 및 선발기준 : 가정형편이 어려운자(세부사항:별도규정)",
    trigger: "153",
  },
  {
    id: "153",
    message: "성적 2.5이상인 자",
    trigger: "154",
  },
  {
    id: "154",
    message: "지급금액 : 등록금의 50%",
    trigger: "scholarship",
  },

  // 공로장학금
  {
    id: "scholarship150",
    message: "공로장학금 정보입니다",
    trigger: "151",
  },
  {
    id: "151",
    message: "신청기간 및 방법 : 별도신청없음",
    trigger: "152",
  },
  {
    id: "152",
    message: "지급 및 선발기준 : 전국규모대회의 입상 및 표창 수상자",
    trigger: "153",
  },
  {
    id: "153",
    message: "지급금액 : 일정액",
    trigger: "scholarship",
  },

  // 희망장학금
  {
    id: "scholarship160",
    message: "희망장학금 정보입니다",
    trigger: "161",
  },
  {
    id: "161",
    message: "신청기간 및 방법 : 별도신청없음",
    trigger: "162",
  },
  {
    id: "162",
    message: "지급 및 선발기준 : 가정형편이 어려운자(세부사항:별도규정)",
    trigger: "163",
  },
  {
    id: "163",
    message: "성적 2.5이상인 자",
    trigger: "164",
  },
  {
    id: "164",
    message: "지급금액 : 등록금의 50%",
    trigger: "scholarship",
  },

  // 엑설런스장학금
  {
    id: "scholarship170",
    message: "엑설런스장학금 정보입니다",
    trigger: "171",
  },
  {
    id: "171",
    message: "신청기간 및 방법 : 별도신청없음",
    trigger: "172",
  },
  {
    id: "172",
    message: "지급 및 선발기준 : 성적순위 1등인 자 ",
    trigger: "173",
  },
  {
    id: "173",
    message: "성적장학금이 100%가 안되는 학과, 학년의 차액지급",
    trigger: "174",
  },
  {
    id: "174",
    message: "지급금액 : 각 학과, 학년의 지급금액은 별도 내규로 정함",
    trigger: "scholarship",
  },

  // 비트장학금
  {
    id: "scholarship180",
    message: "비트장학금 정보입니다",
    trigger: "181",
  },
  {
    id: "181",
    message: "신청기간 및 방법 : 별도신청없음",
    trigger: "182",
  },
  {
    id: "182",
    message:
      "지급 및 선발기준 : 비트교육지원센터에서 시행하는 단기 및 고급과정 이수자로 지급기준은 별도로 정한다.  ",
    trigger: "183",
  },
  {
    id: "183",
    message: "지급금액 : 일정액",
    trigger: "scholarship",
  },

  // 글로벌사회봉사장학금
  {
    id: "scholarship190",
    message: "글로벌사회봉사 정보입니다",
    trigger: "191",
  },
  {
    id: "191",
    message: "신청기간 및 방법 : 별도신청없음",
    trigger: "192",
  },
  {
    id: "192",
    message:
      "지급 및 선발기준 : 국내, 외 사회봉사활동에 참여하고 사회봉사센터에서 선발된 자에 대하여 일정액을 지급한다.",
    trigger: "193",
  },
  {
    id: "193",
    message: "지급금액 : 일정액",
    trigger: "scholarship",
  },

  // 국가고시장학금
  {
    id: "scholarship200",
    message: "국가고시장학금 정보입니다",
    trigger: "201",
  },
  {
    id: "201",
    message: "신청기간 및 방법 : 별도신청없음",
    trigger: "202",
  },
  {
    id: "202",
    message:
      "지급 및 선발기준 : 재학 중 국가에서 실시하는 9급 이상의 각종 고시에 합격한 자로 장학금액은 위원회에서 결정한다.(단, 순경시험은 3학년에 합격한 자에 한함)",
    trigger: "203",
  },
  {
    id: "203",
    message: "직전 학기 성적은 3.0 이상이어야 한다.",
    trigger: "204",
  },
  {
    id: "204",
    message: "지급금액 : 학생지도장학위원회에서 결정",
    trigger: "scholarship",
  },

  ////////////////신청장학금//////////////
  // 교직원자녀장학금
  {
    id: "scholarship210",
    message: "교직원자녀장학금 정보입니다",
    trigger: "211",
  },
  {
    id: "211",
    message: "신청기간 및 방법 : 학생전산신청",
    trigger: "212",
  },
  {
    id: "212",
    message: "지급 및 선발기준 : 교직원의 직계자녀",
    trigger: "213",
  },
  {
    id: "213",
    message: "지급금액 : 등록금의 50% (입학금 제외)",
    trigger: "scholarship",
  },

  // 봉사장학금
  {
    id: "scholarship220",
    message: "봉사장학금 정보입니다",
    trigger: "221",
  },
  {
    id: "221",
    message: "신청기간 및 방법 : 학생전산신청",
    trigger: "222",
  },
  {
    id: "222",
    message: "지급 및 선발기준",
    trigger: "223-1",
  },
  {
    id: "223-1",
    message: "1.총학생회회장 ",
    trigger: "223-2",
  },
  {
    id: "223-2",
    message: "2.총학생회부회장, 대의원회의장 ",
    trigger: "223-3",
  },
  {
    id: "223-3",
    message: "3.학생복지위원회장, 대의원회의장, 동아리연합회회장 ",
    trigger: "223-4",
  },
  {
    id: "223-4",
    message:
      "4.총학생회총무, 학생복지위원회부회장, 대의원회부의장, 동아리연합회부회장, 생활관사생장, 각학부(과)학회장",
    trigger: "223-5",
  },
  {
    id: "223-5",
    message: "5.총학생회국장(8인), 학부(과)부학회장",
    trigger: "223-6",
  },
  {
    id: "223-6",
    message:
      "6.학생복지위원회총무, 대의원회총무, 동아리연합회총무, 생활관총무, 각 학부 (과)총무, 프레이어스코랄(합창단)총무 ",
    trigger: "223-7",
  },
  {
    id: "223-7",
    message:
      "7.학생복지위원회국장(4인), 대의원회국장(4인), 동아리연합회국장(2인), 생활관 회계, 서기",
    trigger: "223-8",
  },
  {
    id: "223-8",
    message: "8.생활관 각 동장(11개동), 홍보도우미 ",
    trigger: "223-9",
  },
  {
    id: "223-9",
    message: "9.각 학부(과)과대표",
    trigger: "224",
  },
  {
    id: "224",
    message: "지급금액",
    trigger: "224-1",
  },
  {
    id: "224-1",
    message: "1.등록금의 100%",
    trigger: "224-2",
  },
  {
    id: "224-2",
    message: "2.등록금의 80%",
    trigger: "224-3",
  },
  {
    id: "224-3",
    message: "3.일정액 250만원",
    trigger: "224-4",
  },
  {
    id: "224-4",
    message: "4.일정액 200만원",
    trigger: "224-5",
  },
  {
    id: "224-5",
    message: "5.일정액 120만원",
    trigger: "224-6",
  },
  {
    id: "224-6",
    message: "6.일정액 80만원",
    trigger: "224-2",
  },
  {
    id: "224-7",
    message: "7.일정액 40만원",
    trigger: "224-8",
  },
  {
    id: "224-8",
    message: "8.일정액 30만원",
    trigger: "224-9",
  },
  {
    id: "224-9",
    message: "9.일정액 25만원",
    trigger: "scholarship",
  },

  // Hansei Achievement Point장학금
  {
    id: "scholarship230",
    message: "Hansei Achievement Point 장학금 정보입니다",
    trigger: "231",
  },
  {
    id: "231",
    message: "신청기간 및 방법 : 학생전산신청",
    trigger: "232",
  },
  {
    id: "232",
    message:
      "지급 및 선발기준 : 자기 역량 강화를 위해 영역별 일정 포인트를 획득한 자",
    trigger: "233",
  },
  {
    id: "233",
    message: "지급금액 : 학생지도장학위원회에서 결정",
    trigger: "scholarship",
  },

  // 장애학생장학금
  {
    id: "scholarship240",
    message: "장애학생장학금 정보입니다",
    trigger: "241",
  },
  {
    id: "241",
    message: "신청기간 및 방법 : 학생전산신청",
    trigger: "242",
  },
  {
    id: "242",
    message:
      "지급 및 선발기준 : 장애인 복지법에 의거 장애인으로 등록된 장애학생으로 매 학기 수업료에서 감면한다.",
    trigger: "243",
  },
  {
    id: "243",
    message: "지급금액 : 중증:100만원, 경증:50만원",
    trigger: "scholarship",
  },

  // 외국어장학금A
  {
    id: "scholarship250",
    message: "외국어장학금A 정보입니다",
    trigger: "251",
  },
  {
    id: "251",
    message: "신청기간 및 방법 : 학생전산신청",
    trigger: "252",
  },
  {
    id: "252",
    message:
      "지급 및 선발기준 : 토익 900점 이상, TOEFL PBT 600점이상 또는 iBT 100점이상, 중국어 신HSK 6급 이상, JPT 880점 이상",
    trigger: "253",
  },
  {
    id: "253",
    message: "지급금액 : 일정액 100만원",
    trigger: "scholarship",
  },

  // 만학도장학금
  {
    id: "scholarship260",
    message: "만학도장학금 정보입니다",
    trigger: "261",
  },
  {
    id: "261",
    message: "신청기간 및 방법 : 학생전산신청",
    trigger: "262",
  },
  {
    id: "262",
    message:
      "지급 및 선발기준 : 신입학 당시(편입학 제외) 만 30세 이상자(3월 1일 기준)",
    trigger: "263",
  },
  {
    id: "263",
    message: "지급금액 : 일정액 50만원",
    trigger: "scholarship",
  },

  ///////////////////////////////////학식/////////////////////////////////
  {
    id: "cafeteria0",
    message: "학식정보입니다.",
    trigger: "cafeteria",
  },
  {
    id: "cafeteria",
    options: [
      { value: "menu", label: "메뉴", trigger: "menu" },
      { value: "cafeteriainfo", label: "정보", trigger: "cafeteriainfo" },
      { value: "ending", label: "운영시간", trigger: "cafeteriatime" },
      { value: "ending", label: "이전으로", trigger: "sections" },
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
    message: "가격 3500원",
    trigger: "cafeteriainfo1",
  },
  {
    id: "cafeteriainfo1",
    message: "14시 이후 라면 배식 가능",
    trigger: "cafeteriainfo2",
  },
  {
    id: "cafeteriainfo2",
    message: "식당안에 카페와 매점이 있음",
    trigger: "cafeteria",
  },

  {
    id: "cafeteriatime",
    message: "운영시간",
    trigger: "cafeteriatime1",
  },
  {
    id: "cafeteriatime1",
    message:
      "학기중 : 학생식당 (중식, 석식) 11:00 ~ 19:00 (배식가능시간 18:40 까지)",
    trigger: "cafeteriatime2",
  },
  {
    id: "cafeteriatime2",
    message: "교직원 식당 (중식) 11:00 ~ 13:30 (배식가능시간 13:20 까지)",
    trigger: "cafeteriatime2",
  },
  {
    id: "cafeteriatime",
    message:
      "방학중 : 학생식당 (중식, 석식) 11:00 ~ 19:00 (배식가능시간 18:40 까지)",
    trigger: "cafeteria",
  },

  ///////////////////////////////////예비군/////////////////////////////////
  {
    id: "army0",
    message: "학생예비군 정보 입니다",
    trigger: "army",
  },
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
      "훈련장이동 : 학교버스(학교 주차장 훈련당일 08:10까지) / 대중교통 : 금정역 4번출구 훈련당일 08:10까지",
    trigger: "army4",
  },
  {
    id: "army4",
    message: "복귀시에는 학교버스 미운행",
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
      { value: "ending", label: "이전으로", trigger: "sections" },
    ],
  },

  {
    id: "study",
    message: "HCC(컴퓨터) / I.B(로봇) / HAM(무선통신) / 제2외국어",
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
    message: "In AD(광고) / DMZ(댄스) / 광고분자(AD2) / wake up / 광야(방송)",
    trigger: "club",
  },

  ///////////////////////////////////학교기관/////////////////////////////////
  {
    id: "studentas",
    options: [
      { value: "student101", label: "총학생회", trigger: "student101" },
      { value: "student102", label: "대의원회", trigger: "student121" },
      { value: "student103", label: "학생복지위원회", trigger: "student141" },
      { value: "student104", label: "동아리연합회", trigger: "student161" },
      { value: "ending", label: "이전으로", trigger: "sections" },
    ],
  },

  {
    id: "student101",
    message: "총학생회는 학생 자치 기구 중 최고집행기구입니다.",
    trigger: "student102",
  },
  {
    id: "student102",
    message:
      "기획국 : 본회의 행정, 사무, 행사, 계획운영, 각종 회의 개최 및 일련의 사무에 관한 사항",
    trigger: "student103",
  },
  {
    id: "student102",
    message:
      "기획국 : 본회의 행정, 사무, 행사, 계획운영, 각종 회의 개최 및 일련의 사무에 관한 사항",
    trigger: "student103",
  },
  {
    id: "student103",
    message: "홍보국 : 본회의 홍보에 관한 사항",
    trigger: "student104",
  },
  {
    id: "student104",
    message: "재정국 : 본회의 경리, 회계에 과한 사항",
    trigger: "student105",
  },
  {
    id: "student105",
    message: "교육국 : 본회의 전반적인 학술활동에 관한 사항",
    trigger: "student106",
  },
  {
    id: "student106",
    message: "문체국 : 문화 및 체육행사에 관한 사항",
    trigger: "student107",
  },
  {
    id: "student107",
    message: "선교국 : 대내·외 선교활동 및 전도에 관한 사항",
    trigger: "student108",
  },
  {
    id: "student108",
    message: "예배국 : 교회교육 및 예배에 관한 사항",
    trigger: "student109",
  },
  {
    id: "student109",
    message: "대외협력국 : 대외 제휴 업체, 학교, 학생 복지에 관한 사항",
    trigger: "student110",
  },
  {
    id: "student110",
    message: "유학국 : 학생들의 단기 유학, 학점교류에 관한 사항",
    trigger: "studentas",
  },

  {
    id: "student121",
    message: "대의원회는 학생 자치 기구 중 최고의결기관입니다.",
    trigger: "student122",
  },
  {
    id: "student122",
    message: "대의원회는 아래와 같은 업무에 대한 권한을 가지고 있습니다.",
    trigger: "student123",
  },
  {
    id: "student123",
    message: "회칙개정 발의 및 개정권",
    trigger: "student124",
  },
  {
    id: "student124",
    message: "학생총회의 소집 요구권",
    trigger: "student125",
  },
  {
    id: "student125",
    message: "학생회비 심의 의결권",
    trigger: "student126",
  },
  {
    id: "student126",
    message:
      "각 학회 및 기관(총학생회, 여학생회, 동아리 연합회)에서 제출된 사업계획과 예산결산의 심의 및 감사권",
    trigger: "student127",
  },
  {
    id: "student127",
    message:
      "각 학회 및 기관(총학생회, 학생복지위원회, 동아리연합회)의 업무 및 회계감사에 따른 징계요구권",
    trigger: "studentas",
  },

  {
    id: "student141",
    message: "학생복지위원회는 본교 학생들의 복지를 담당합니다.",
    trigger: "student142",
  },
  {
    id: "student142",
    message: "학교 내부 시설, 교무 부분의 개선을 위해 일합니다.",
    trigger: "student143",
  },
  {
    id: "student143",
    message: "학생들의 학교 생활에 도움이 되고자 밀착형 복지를 실천합니다.",
    trigger: "student144",
  },
  {
    id: "student144",
    message:
      "학생복지위원회는 학생복지위원의 활동에 관한 제반 업무를 담당하며, 운영위원회의 위원이 됩니다.",
    trigger: "studentas",
  },

  {
    id: "student161",
    message:
      "동아리연합회는 동아리연합에 등록된 동아리에 한하여 각 동아리 대표로 구성됩니다.",
    trigger: "student162",
  },
  {
    id: "student162",
    message:
      "동아리연합회는 동아리의 등록 예산집행 및 동아리활동을 관장합니다.",
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
      { value: "ending", label: "이전으로", trigger: "sections" },
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
      { value: "500", label: "성적", trigger: "500" },
      { value: "510", label: "졸업", trigger: "510" },
      { value: "520", label: "휴학/복학", trigger: "520" },
      { value: "530", label: "수강신청", trigger: "530" },
      { value: "540", label: "사이버강의", trigger: "540" },
      { value: "550", label: "계절학기", trigger: "550" },
      { value: "560", label: "전과", trigger: "560" },
      { value: "ending", label: "이전으로", trigger: "sections" },
    ],
  },
  // 성적
  {
    id: "500",
    message:
      "성적평가 : 시험성적, 과제물, 출석, 수시평가 등에 의해 종합적으로 평가",
    trigger: "501",
  },
  {
    id: "501",
    message: "과목별 수업시수의 4분의 1이상 결석한 자는 F로 처리함",
    trigger: "502",
  },
  {
    id: "502",
    message:
      "평가방법 : 성적평가는 상대평가를 원칙으로 함 (단, 수강인원 9명 이하의 경우, 계약학과 및 비트교육센터에서 개설하는 교과목은 예외로 할 수 있다.) ",
    trigger: "schoolinfo",
  },
  // 졸업
  {
    id: "510",
    message: "졸업요건",
    trigger: "511",
  },
  {
    id: "511",
    message: "소정의 교육과정을 이수한 자로 학칙 제42조의 졸업학점을 취득한 자",
    trigger: "512",
  },
  {
    id: "512",
    message: "전학년 성적 누계 평점이 1.50 이상인 자",
    trigger: "513",
  },
  {
    id: "513",
    message:
      "졸업종합시험(졸업논문, 졸업시험, 졸업연주, 졸업작품, 졸업프로젝트, 공인된 외국어 시험, 자격증 등 중 택일: 각 학과에서 정함)에 합격한 자",
    trigger: "514",
  },
  {
    id: "514",
    message:
      "교과목이수: 각 학과에 규정된 자격 필수과목(목회실습, 전공실기 등) 및 최저 요구 학점 이수자",
    trigger: "schoolinfo",
  },
  // 휴학/복학
  {
    id: "520",
    message: "휴학/복학 안내입니다.",
    trigger: "521",
  },
  {
    id: "521",
    options: [
      { value: "521", label: "일반휴학", trigger: "521-1" },
      { value: "522", label: "입영휴학", trigger: "522-1" },
      { value: "523", label: "휴학 신청방법", trigger: "523-1" },
      { value: "524", label: "휴학자의 등록금 처리", trigger: "524-1" },
      { value: "525", label: "복학", trigger: "525-1" },
      { value: "526", label: "복학 신청방법", trigger: "526-1" },
      { value: "ending", label: "이전으로", trigger: "schoolinfo" },
    ],
  },
  {
    id: "521-1",
    message:
      "휴학기간 : 1학기 또는 1년 단위로 신청할 수 있으며, 재학 중 통산 6학기(3년), 계속적으로 4학기(2년) 초과 불가",
    trigger: "521-2",
  },
  {
    id: "521-2",
    message: "질병으로 인한 휴학은 종합병원의 진단서를 첨부",
    trigger: "521-3",
  },
  {
    id: "521-3",
    message:
      "신입생, 편입생은 입학 첫학기 종료시까지 휴학 불가 (단, 병역관계, 2개월 이상 장기치료의 질병은 예외)",
    trigger: "521",
  },

  {
    id: "522-1",
    message: "입영통지서가 있으면 언제나 휴학이 가능",
    trigger: "522-2",
  },
  {
    id: "522-2",
    message: "휴학기간 : 6학기(3년)까지 가능",
    trigger: "521",
  },

  {
    id: "523-1",
    message:
      "학사행정시스템-학생서비스-학적관리-휴학신청-조회-신청,추가(군휴학자의 경우 입영통지서 스캔하여 파일첨부)-신청완료-출력-학과장 승인-소속 학과 조교실 및 교무팀 제출",
    trigger: "521",
  },

  {
    id: "524-1",
    message: "학기 개시일 미경과 등록금 전액 ",
    trigger: "524-2",
  },
  {
    id: "524-2",
    message: "학기 개시일부터 30일까지 당해 학기 수업료의 5/6 이월 ",
    trigger: "524-3",
  },
  {
    id: "524-3",
    message:
      "학기 개시일에서 30일이 지난날부터 60일까지 당해 학기 수업료의 2/3 이월 ",
    trigger: "524-4",
  },
  {
    id: "524-4",
    message:
      "학기 개시일에서 60일이 지난날부터 90일까지 당해 학기 수업료의 1/2 이월 ",
    trigger: "524-5",
  },
  {
    id: "524-5",
    message: "학기 개시일에서 90일이 지난날 이월하지 아니함 ",
    trigger: "521",
  },

  {
    id: "525-1",
    message: "해당 학기 수업일수 1/4 경과 후에는 복학 불허 ",
    trigger: "525-2",
  },
  {
    id: "525-2",
    message: "휴학기간 만료자가 복학하지 않을 경우 학칙에 의거 제적됨 ",
    trigger: "525-3",
  },
  {
    id: "525-3",
    message: "계절학기 수강희망 휴학생은 계절학기 등록기간에 복학원 제출 ",
    trigger: "521",
  },

  {
    id: "526-1",
    message:
      "학사행정시스템-학생서비스-학적관리-복학신청-조회-신청,추가(군휴학자의 경우 전역층 스캔하여 파일첨부)-신청완료 ",
    trigger: "526-2",
  },
  {
    id: "526-2",
    message: "1학기 복학 신청(1차) : 12/28 ~ 12/31",
    trigger: "526-3",
  },
  {
    id: "526-3",
    message: "1학기 복학 신청(2차) : 01/25 ~ 02/08",
    trigger: "521",
  },

  // 수강신청
  {
    id: "530",
    message: "수강신청 안내입니다.",
    trigger: "521",
  },
  {
    id: "531",
    options: [
      { value: "531", label: "수강신청방법", trigger: "531-1" },
      { value: "532", label: "수강신청기간", trigger: "532-1" },
      { value: "533", label: "재수강", trigger: "533-1" },
      { value: "ending", label: "이전으로", trigger: "schoolinfo" },
    ],
  },
  {
    id: "531-1",
    message: "1.개설 교과목 확인(홈페이지 수강신청시스템에서 수강편람을 확인)",
    trigger: "531-2",
  },
  {
    id: "531-2",
    message: "2.개인 시간표 작성(필요시 학과장 혹은 학과 행정실에 문의)",
    trigger: "531-3",
  },
  {
    id: "531-3",
    message: "3.예비 수강 신청(본인이 수강할 과목을 미리 담기)",
    trigger: "531-4",
  },
  {
    id: "531-4",
    message: "4.본 수강 신청(담아둔 과목 최종 신청)",
    trigger: "531-5",
  },
  {
    id: "531-5",
    message: "5.수강 정정(부득이한 경우 수강 정정기간 내 변경)",
    trigger: "531",
  },

  {
    id: "532-1",
    message: "1학기 재,복학생 수강신청 2/17~2/19",
    trigger: "532-2",
  },
  {
    id: "532-2",
    message: "1학기 신,편입생 수강신청 2/22~2/23",
    trigger: "531",
  },

  {
    id: "533-1",
    message:
      "이미 취득한 교과목 성적이 과락(낙제) 또는 C+급 이하인 경우에 한하여 재수강할 수 있다.",
    trigger: "533-2",
  },
  {
    id: "533-2",
    message:
      "재수강 과목도 해당 학기 수강신청학점과 총성적평점평균에 포함된다.",
    trigger: "533-3",
  },
  {
    id: "533-3",
    message: "1개 학기 재수강 신청과목은 총 3과목까지 할 수 있다.",
    trigger: "533-4",
  },
  {
    id: "533-4",
    message:
      "재수강 과목의 성적은 B+까지 받을 수 있으며 기존성적보다 낮은 성적은 인정되지 않는다.",
    trigger: "533-5",
  },
  {
    id: "533-5",
    message:
      "선택과목에 한하여 동일과목 수강은 재수강 포함 총 2회까지 할 수 있다.",
    trigger: "533-6",
  },
  {
    id: "533-6",
    message: "졸업학기에는 제3항에도 불구하고 수강신청학점까지 할 수 있다.",
    trigger: "533-7",
  },
  {
    id: "533-7",
    message: "재수강으로 학점을 취득하여도 기존 학사경고는 삭제되지 않는다.",
    trigger: "531",
  },

  // 사이버강의
  {
    id: "540",
    message: "사이버강의 안내입니다.",
    trigger: "541",
  },
  {
    id: "541",
    options: [
      { value: "541", label: "신청방법", trigger: "541-1" },
      { value: "542", label: "유의사항", trigger: "542-1" },
      { value: "543", label: "시험 및 성적관리", trigger: "543-1" },
      { value: "ending", label: "이전으로", trigger: "schoolinfo" },
    ],
  },

  {
    id: "541-1",
    message: "일반과목과 동일한 방법으로 수강신청시스템을 통해 수강신청",
    trigger: "541-2",
  },
  {
    id: "541-2",
    message:
      "일반과목과 동일하게 수강편람을 통해 사이버강의 개설교과목과 강의계획서의 조회가 가능",
    trigger: "541",
  },

  {
    id: "542-1",
    message: "수강신청 학점 내에서 매학기 최대 6학점까지 수강신청 가능",
    trigger: "542-2",
  },
  {
    id: "542-2",
    message:
      "사이버강의의 수업은 100% 인터넷으로 진행함. 단, 담당교수가 출석 수업이 필요하다고 판단될 때, 학생들을 소집하여 수업을 진행할 수 있음.",
    trigger: "541",
  },

  {
    id: "543-1",
    message: "출석점검 : 사이버강의실 온라인 출석부를 통해 이루어짐.",
    trigger: "543-2",
  },
  {
    id: "543-1",
    message:
      "중간, 기말고사 : 지정된 일시와 장소에 출석하여 시험을 실시 또는 온라인으로 실시.",
    trigger: "541",
  },

  //계절학기
  {
    id: "550",
    message: "계절학기 안내입니다.",
    trigger: "551",
  },
  {
    id: "551",
    options: [
      { value: "551", label: "신청방법", trigger: "551-1" },
      { value: "552", label: "운영방법", trigger: "552-1" },
      { value: "553", label: "성적", trigger: "553-1" },
      { value: "554", label: "주의사항", trigger: "554-1" },
      { value: "ending", label: "이전으로", trigger: "schoolinfo" },
    ],
  },

  {
    id: "551-1",
    message: "한세포털시스템-수강신청시스템-로그인-계절학기수강신청입력",
    trigger: "551",
  },

  {
    id: "552-1",
    message: "전공, 교양 모두 수강인원이 10명 이상인 경우 개설함",
    trigger: "552-2",
  },
  {
    id: "552-2",
    message: "1학점당 15시간 이상 수업",
    trigger: "552-3",
  },
  {
    id: "552-3",
    message: "1개 계절학기에 최대 6학점까지 수강 가능",
    trigger: "551",
  },

  {
    id: "553-1",
    message:
      "계절학기 성적은 장학생 선발과 무관하며, 졸업 이수 학점 및 평점에만 산입",
    trigger: "553-2",
  },
  {
    id: "553-2",
    message:
      "계절학기 성적은 학사경고 및 다음 학기 수강신청제한학점에 영향 없음",
    trigger: "551",
  },

  {
    id: "554-1",
    message:
      "별도의 수강신청 포기 및 정정기간은 없으며, 수강신청 기간 내에 변경 가능",
    trigger: "554-2",
  },
  {
    id: "554-2",
    message: "수업시작일 이후에는 수강료 환불 신청 불가 ",
    trigger: "554-3",
  },
  {
    id: "554-3",
    message:
      "수강신청한 과목이 폐강된 경우에 한하여 수강료 환불 또는 변경 가능  ",
    trigger: "554-4",
  },
  {
    id: "554-4",
    message: "계절학기 납부영수증에 필히 환불용 은행 계좌 및 긴급연락처 기재  ",
    trigger: "554-5",
  },
  {
    id: "554-5",
    message:
      "휴학생의 계절학기 수강 : 계절학기 등록기간에 복학원 제출 후 수강신청(계절학기 수강 후 휴학 불가)",
    trigger: "551",
  },

  //전과
  {
    id: "560",
    message: "전과 안내입니다.",
    trigger: "551",
  },
  {
    id: "561",
    options: [
      { value: "561", label: "신청방법", trigger: "561-1" },
      { value: "562", label: "자격요건", trigger: "562-1" },
      { value: "563", label: "참고사항", trigger: "563-1" },
      { value: "ending", label: "이전으로", trigger: "schoolinfo" },
    ],
  },

  {
    id: "561-1",
    message:
      "학사행정시스템-학생서비스-학적관리-전과신청 및 출력-소속 학과장 & 희망 학과 학과장 승인-교무팀 제출",
    trigger: "561",
  },

  {
    id: "562-1",
    message: "소속 전공에서 3개 학기를 이수하고 총 평점평균이 2.0 이상인 자",
    trigger: "562-2",
  },
  {
    id: "562-2",
    message: "편입학으로 입학한 자는 전부(과)를 할 수 없다.",
    trigger: "561",
  },

  {
    id: "563-1",
    message:
      "전과가 허가된 학생은 전입된 학과의 교과교육과정에 맞추어 전공과목에 대하여 전공 최소전공이수학점 이상을 이수하여야 한다.",
    trigger: "563-2",
  },
  {
    id: "563-2",
    message:
      "전과 전에 취득한 학점중 전입된 학과 전공과목과 동일한 과목은 전공학점으로 인정한다.",
    trigger: "563-3",
  },
  {
    id: "563-3",
    message: "전과가 허락된 자는 당해학기 성적우등생에서 제외",
    trigger: "563-4",
  },
  {
    id: "563-4",
    message:
      "전과에 따라 기(旣) 취득한 교과목의 이수구분이 변경(전공필수ㆍ선택→일반선택)되며 전과 후 학과의 졸업이수학점기준을 충족하여야 졸업이 가능함",
    trigger: "561",
  },

  ///////////////////////////////////기숙사/////////////////////////////////
  {
    id: "dormitory",
    options: [
      { value: "601", label: "위치 / 금액", trigger: "601-1" },
      { value: "602", label: "신청기간", trigger: "602-1" },
      { value: "603", label: "발표날짜", trigger: "603-1" },
      { value: "604", label: "납부 / 입주", trigger: "604-1" },
      { value: "ending", label: "이전으로", trigger: "sections" },
    ],
  },
  {
    id: "601-1",
    message: "영상비젼센터 / 비젼관",
    trigger: "601-2",
  },
  {
    id: "601-2",
    message: "학기당 50만원",
    trigger: "dormitory",
  },

  {
    id: "602-1",
    message:
      "1차 온라인 신청(재학생) : 2020년 12월 14일(월) ~ 12월 24일(목) 오후 3시",
    trigger: "602-2",
  },
  {
    id: "602-2",
    message:
      "2차 온라인 신청(신(편)입생, 복학생) : 2021년 2월 8일(월) ~ 2월 10일(수) 오후 3시",
    trigger: "dormitory",
  },

  {
    id: "603-1",
    message: "1차발표 : 2021년 2월 3일(수)",
    trigger: "603-2",
  },
  {
    id: "603-2",
    message: "2차발표 : 2021년 2월 18일(금)",
    trigger: "603-3",
  },
  {
    id: "603-3",
    message: "최종발표 : 2021년 2월 19일(금)",
    trigger: "dormitory",
  },

  {
    id: "604-1",
    message:
      "납부기간 : 2021년 2월 3일(수) 합격자 발표 직후부터 ~ 2월 9일(화) 오후 3시까지",
    trigger: "604-2",
  },
  {
    id: "604-2",
    message: "입주기간 : 2021년 2월 26일(금) 부터",
    trigger: "604-3",
  },
  {
    id: "604-3",
    message: "문의 : 생활관 홈페이지 (town.hansei.ac.kr)",
    trigger: "dormitory",
  },

  ///////////////////////////////////학교정보/////////////////////////////////
  {
    id: "university",
    options: [
      { value: "701", label: "학교정보", trigger: "701-1" },
      { value: "702", label: "학교위치", trigger: "702-1" },
      { value: "703", label: "학과", trigger: "703-1" },
      { value: "704", label: "학교시설", trigger: "704-1" },
      { value: "ending", label: "이전으로", trigger: "sections" },
    ],
  },

  {
    id: "701-1",
    message:
      "학교이념 : 기독교 정신을 바탕으로 대한민국의 교육이념에 입각하여 신앙정신과 학문의 심오한 진리탐구를 통한 전인교육으로 국가와 인류 문화 창달에 기여할 유능한 지도자를 양성한다",
    trigger: "701-2",
  },
  {
    id: "701-2",
    message: "총장 : 김성혜",
    trigger: "university",
  },

  {
    id: "702-1",
    message: "경기도 군포시 한세로30",
    trigger: "university",
  },
  {
    id: "703-1",
    message:
      "신학과 기독교교육상담학과  미디어영상광고학과 국제경영학과 경찰행정학과 국제관광학과 영어학과 중국어학과 전자소프트웨어학과 ICT융합학과 산업보안학과 사회복지학과 간호학과 음악학과 공연예술학과 시각정보디자인학과 실내건축디자인학과 섬유패션디자인학과",
    trigger: "university",
  },
  {
    id: "704-1",
    message: "교내식당(본관 1층)",
    trigger: "704-2",
  },
  {
    id: "704-2",
    message: "헬스장(본관 지하1층)",
    trigger: "704-3",
  },
  {
    id: "704-3",
    message: "서점(학생회관 1층)",
    trigger: "704-3",
  },
  {
    id: "704-4",
    message: "편의점(대학원관 1층)",
    trigger: "704-3",
  },
  {
    id: "704-5",
    message: "헬스장(본관지하1층)",
    trigger: "704-3",
  },
  {
    id: "704-6",
    message: "보건소(학생회관 1층)",
    trigger: "704-3",
  },
  {
    id: "704-7",
    message: "도서관(영상비젼센터 2층)",
    trigger: "university",
  },

  ///////////////////////////////엔딩////////////////////////////
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
