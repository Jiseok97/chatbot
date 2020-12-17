import React, { Component } from "react";
import PropTypes from "prop-types";
import KushyApi from "../KushyApi";

const steps = [
  {
    id: "1",
    message: "안녕하세요 한세대학교 챗봇입니다. :) 이름이 무엇인가요?",
    trigger: "name",
  },
  {
    id: "name",
    user: true,
    trigger: "3",
  },
  {
    id: "3",
    message: "네, {previousValue}학우님, 무엇을 도와드릴까요?",
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
      { value: "party", label: "교내행사", trigger: "party" },
      { value: "university", label: "학교정보", trigger: "university" },
    ],
  },
  {
    id: "100",
    message: "어떤 장학금을 찾으시나요?",
    trigger: "scholarship",
  },
  {
    id: "scholarship",
    options: [
      {
        value: "concentrates",
        label: "Hansei Achivement Point",
        trigger: "101",
      },
      { value: "partyy", label: "성적장학금", trigger: "102" },
      { value: "pre-roll", label: "봉사장학금", trigger: "150" },
      { value: "vape", label: "자격증 관련 장학금", trigger: "150" },
      { value: "search", label: "기타 장학금", trigger: "999" },
    ],
  },
  {
    id: "101",
    message: "Hansei Achievement Point 관련 공지입니다.",
    trigger: "concentrates",
  },
  {
    id: "concentrates",
    options: [
      { value: "bubble hash", label: "신청 기간", trigger: "150" },
      { value: "crumble", label: "신청 방법", trigger: "151" },
      { value: "kief", label: "Kief", trigger: "150" },
      { value: "oil", label: "Oil", trigger: "150" },
    ],
  },
  {
    id: "102",
    message: "What kind of party are you looking for?",
    trigger: "party",
  },

  {
    id: "150",
    message:
      "Hansei Achievement Point 신청 기간은 2020년 11월 13일(금) ~ 2020년 12월 03일(목)까지 입니다.",
    trigger: "product_brands",
  },
  {
    id: "army",
    message: "날짜 10월 15일 / 장소 금정역 / 내용 4시간 이론수업",
    trigger: "sections",
  },
  {
    id: "151",
    message:
      "Hansei Achievement Point 신청 방법은 다음과 같습니다. 학사행정 → 서비스 → 학생서비스 → 장학관리 → Hansei Achievement 적립신청 → " +
      "해당학년 및 학기 확인 → 추가 → 포인트신청상세 입력 → 저장 → 근거서류 파일첨부 → 저장 →  체크박스 체크 → 신청버튼 → 팝업창 입니다. 이전 페이지로 돌아가시겠습니까?",
    trigger: "product_brands",
  },

  {
    id: "999",
    user: true,
    trigger: "product_brands_search",
  },
  {
    id: "class",
    options: [
      { value: "suganggigan", label: "수강신청기간", trigger: "suganggigan" },
      { value: "sugangbangbub", label: "방법", trigger: "suganggigan" },
      { value: "suganginfo", label: "수업정보", trigger: "suganggigan" },
    ],
  },
  {
    id: "suganggigan",
    options: [
      { value: "indica", label: "예비수강", trigger: "study" },
      { value: "athletic", label: "본수강", trigger: "athletic" },
    ],
  },

  {
    id: "996",
    options: [
      { value: "yes", label: "Yes", trigger: "997" },
      { value: "no", label: "No", trigger: "club" },
    ],
  },
  {
    id: "party",
    options: [
      { value: "candy", label: "축제", trigger: "997" },
      { value: "chocolate", label: "체육대회", trigger: "150" },
      { value: "dressing", label: "오티", trigger: "150" },
      { value: "drink", label: "Drink", trigger: "150" },
    ],
  },
  {
    id: "997",
    message: "기간 5/12~5/14 / 음식부스 / 동아리공연",
    trigger: "900",
  },
  {
    id: "900",
    message: "Sounds dank. Let me look that up.",
    trigger: "product_brands_search",
  },
  {
    id: "club",
    options: [
      { value: "study", label: "학술", trigger: "study" },
      { value: "athletic", label: "체육", trigger: "athletic" },
      { value: "volunteer", label: "봉사", trigger: "volunteer" },
      { value: "music", label: "음악", trigger: "music" },
      { value: "others", label: "기타", trigger: "others" },
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

  {
    id: "help-strain-type-2",
    options: [
      { value: "indica", label: "Indica?", trigger: "others" },
      { value: "sativa", label: "Sativa?", trigger: "help-strain-type-sativa" },
      { value: "hybrid", label: "Hybrid?", trigger: "help-strain-type-hybrid" },
      { value: "athletic", label: "Nah bro", trigger: "study" },
    ],
  },
  {
    id: "others",
    message:
      "Indica strains are generally more body-high orientated, with relaxing buzzes and the stereotypical couchlock stone.",
    trigger: "music",
  },
  {
    id: "help-strain-type-sativa",
    message:
      "Sativa strains are generally more of a mind-high, with energizing creative vibes and stimulated senses.",
    trigger: "music",
  },
  {
    id: "help-strain-type-hybrid",
    message:
      "Hybrid strains are generally more of a balance between body and mind high, with relaxing body buzzes and enough energy to counteract couchlock.",
    trigger: "music",
  },

  {
    id: "cafeteria",
    options: [
      { value: "menu", label: "메뉴", trigger: "menu" },
      { value: "cafeteriainfo", label: "정보", trigger: "cafeteriainfo" },
    ],
  },
  {
    id: "menu",
    message: "한식 : 김치볶음밥 / 양식 : 스파게티 / 라면",
    trigger: "product_brands_search",
  },
  {
    id: "cafeteriainfo",
    message:
      "위치 : 본관1층 / 점심시간 11시~13시 / 저녁시간 17시~19시 / 라면 11시~19시",
    trigger: "brands_search_bool",
  },
  {
    id: "brands_search_bool",
    options: [
      { value: "name", label: "Name", trigger: "menu" },
      { value: "category", label: "Category", trigger: "brand_category" },
    ],
  },
  {
    id: "brand_category",
    options: [
      { value: "flower", label: "Flower", trigger: "brand_category_search" },
      {
        value: "concentrates",
        label: "Concentrates",
        trigger: "brand_category_search",
      },
      { value: "party", label: "party", trigger: "brand_category_search" },
      { value: "medical", label: "Medical", trigger: "brand_category_search" },
      { value: "vapes", label: "Vapes", trigger: "brand_category_search" },
    ],
  },
  {
    id: "brand_category_search",
    message: "Cool, let me find all our {previousValue} brands.",
    trigger: "product_brands_search",
  },

  {
    id: "shops",
    message: "What kind of shop are you looking for?",
    trigger: "university",
  },
  {
    id: "university",
    options: [
      { value: "recshop", label: "학과", trigger: "shop_state" },
      { value: "headshop", label: "학교시설", trigger: "shop_state_msg" },
      {
        value: "dispensary",
        label: "학교위치",
        trigger: "shop_state_response",
      },
      { value: "doctor", label: "Doctor", trigger: "shop_state_msg" },
    ],
  },
  {
    id: "shop_state_msg",
    message:
      "신학과 기독교교육상담학과  미디어영상광고학과 국제경영학과 경찰행정학과 국제관광학과 영어학과 중국어학과 전자소프트웨어학과 ICT융합학과 산업보안학과 사회복지학과 간호학과 음악학과 공연예술학과 시각정보디자인학과 실내건축디자인학과 섬유패션디자인학과",
    trigger: "university",
  },
  {
    id: "shop_state",
    message: "교내식당 헬스장 서점 복사실 편의점 카페2개 보건소",
    trigger: "university",
  },
  {
    id: "shop_state_response",
    message: "경기도 군포시 당정동",
    trigger: "university",
  },

  {
    id: "product_brands",
    message: "챗봇 서비스를 종료합니다. 더 궁금한게 있으신가요?",
    trigger: "product_brand_no",
  },
  {
    id: "product_brand_no",
    options: [
      { value: "yes", label: "네", trigger: "sections" },
      { value: "no", label: "아니요", trigger: "product_brands_search" },
    ],
  },

  {
    id: "product_brands_search",
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
