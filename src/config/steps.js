import React, { Component } from 'react';
import PropTypes from 'prop-types';
import KushyApi from '../KushyApi';

// 기타공지 hyperlink 달기

const steps = [
          {
            id: '1',
            message: '한세대학교 챗봇입니다 :) 학우님의 이름을 입력해주세요.',
            trigger: 'name',
          },
          {
            id: 'name',
            user: true,
            trigger: '3',
          },
          {
            id: '3',
            message: '네, {previousValue}학우님, 무엇을 도와드릴까요?',
            trigger: 'sections',
          },
          {
            id: '5',
            message: '기타 공지는 https://portal.hansei.ac.kr 참조하시길 바랍니다. ',
            trigger: 'sections',
          },
          {
            id: 'sections',
            options: [
              { value: 'scholarship', label: '장학금', trigger: '100' },
              { value: 'strains', label: '수강 신청', trigger: '200' },
              { value: 'brands', label: '학식 메뉴', trigger: 'brands' },
              { value: 'shops', label: '기타', trigger: '5' },
            ],
          },
          {
            id: '100',
            message: '어떤 장학금을 찾으시나요?',
            trigger: 'scholarship',
          },
          {
            id: 'scholarship',
            options: [
              { value: 'concentrates', label: 'Hansei Achivement Point', trigger: '101' },
              { value: 'edibles', label: '성적장학금', trigger: '102' },
              { value: 'pre-roll', label: '봉사장학금', trigger: '150' },
              { value: 'vape', label: '자격증 관련 장학금', trigger: '150' },
              { value: 'search', label: '기타 장학금', trigger: 'product_search_prompt' },
            ],
          },
          {
            id: '101',
            message: 'Hansei Achievement Point 관련 공지입니다.',
            trigger: 'concentrates',
          },
          {
            id: 'concentrates',
            options: [
              { value: 'time', label: '신청 기간', trigger: '150' },
              { value: 'way', label: '신청 방법', trigger: '151' },
            ],
          },
          {
            id: '102',
            message: 'What kind of edibles are you looking for?',
            trigger: 'edibles',
          },
          {
            id: 'edibles',
            options: [
              { value: 'candy', label: 'Candy', trigger: '150' },
              { value: 'chocolate', label: 'Chocolate', trigger: '150' },
              { value: 'dressing', label: 'Dressing', trigger: '150' },
              { value: 'drink', label: 'Drink', trigger: '150' },
              { value: 'pill', label: 'Pill', trigger: '150' },
              { value: 'snack', label: 'Snack', trigger: '150' },
              { value: 'spread', label: 'Spread', trigger: '150' },
            ],
          },
          {
            id: '150',
            message: 'Hansei Achievement Point 신청 기간은 2020년 11월 13일(금) ~ 2020년 12월 03일(목)까지 입니다.',
            trigger: 'product_brands',
          },
          {
            id: '151',
            message: 'Hansei Achievement Point 신청 방법은 다음과 같습니다. 학사행정 → 서비스 → 학생서비스 → 장학관리 → Hansei Achievement 적립신청 → ' +
            '해당학년 및 학기 확인 → 추가 → 포인트신청상세 입력 → 저장 → 근거서류 파일첨부 → 저장 →  체크박스 체크 → 신청버튼 → 팝업창 입니다. 이전 페이지로 돌아가시겠습니까?',
            trigger: 'product_brands',
          },
          {
            id: 'product_brands',
            options: [
              { value: 'yes', label: 'Yes', trigger: 'return_yes' },
              { value: 'no', label: 'No', trigger: 'product_brand_no' },
            ],
          },
          {
            id: 'return_yes',
            user: true,
            trigger: '3'
          },
          {
            id: 'product_brand_no',
            message: '챗봇 서비스를 종료합니다.',
            trigger: 'product_brand_query',
          },
          {
            id: 'product_brand_query',
            message: 'Cool. Let me look that up.',
            trigger: 'product_brands_search',
          },
          {
            id: 'product_brands_search',
            component: <KushyApi />,
            waitAction: true,
            trigger: ({ value, steps }) => value,
          },
          {
            id: 'product_search_prompt',
            user: true,
            trigger: 'product_brands_search',
          },
          {
            id: '200',
            message: 'What kind of strain are you looking for?',
            trigger: 'strains',
          },
          {
            id: 'strains',
            options: [
              { value: 'indica', label: 'Indica', trigger: '201' },
              { value: 'sativa', label: 'Sativa', trigger: '201' },
              { value: 'hybrid', label: 'Hybrid', trigger: '201' },
              { value: 'help-strain-type', label: 'What?', trigger: 'help-strain-type' },
            ],
          },
          {
            id: '201',
            message: 'Do you know the name of the strain you\'re looking for?',
            trigger: 'strain_search_bool',
          },
          {
            id: 'strain_search_bool',
            options: [
              { value: 'yes', label: 'Yes', trigger: 'strain_search' },
              { value: 'no', label: 'No', trigger: '204' },
            ],
          },
          {
            id: 'strain_search',
            user: true,
            trigger: 'strain_search_response',
          },
          {
            id: 'strain_search_response',
            message: 'Sounds dank. Let me look that up.',
            trigger: 'product_brands_search',
          },
          {
            id: '204',
            message: 'How would you like to find a strain?',
            trigger: '205',
          },
          {
            id: '205',
            options: [
              { value: 'strain-flavor', label: 'Flavor', trigger: '201' },
              { value: 'strain-effects', label: 'High', trigger: '201' },
              { value: 'strain-medical', label: 'Medical Benefits', trigger: '201' },
            ],
          },
          {
            id: 'help-strain-type',
            message: 'Cannabis often comes classified in 3 major categories: indica, sativa, and hybrid.',
            trigger: 'help-strain-type-1',
          },
          {
            id: 'help-strain-type-1',
            message: 'Would you like to learn more about them?',
            trigger: 'help-strain-type-2',
          },
          {
            id: 'help-strain-type-repeat',
            message: 'Is there anything else you want to learn?',
            trigger: 'help-strain-type-2',
          },
          {
            id: 'help-strain-type-2',
            options: [
              { value: 'indica', label: 'Indica?', trigger: 'help-strain-type-indica' },
              { value: 'sativa', label: 'Sativa?', trigger: 'help-strain-type-sativa' },
              { value: 'hybrid', label: 'Hybrid?', trigger: 'help-strain-type-hybrid' },
              { value: 'help-strain-type', label: 'Nah bro', trigger: '201' },
            ],
          },
          {
            id: 'help-strain-type-indica',
            message: 'Indica strains are generally more body-high orientated, with relaxing buzzes and the stereotypical couchlock stone.',
            trigger: 'help-strain-type-repeat',
          },
          {
            id: 'help-strain-type-sativa',
            message: 'Sativa strains are generally more of a mind-high, with energizing creative vibes and stimulated senses.',
            trigger: 'help-strain-type-repeat',
          },
          {
            id: 'help-strain-type-hybrid',
            message: 'Hybrid strains are generally more of a balance between body and mind high, with relaxing body buzzes and enough energy to counteract couchlock.',
            trigger: 'help-strain-type-repeat',
          },
          {
            id: 'brands',
            message: 'Awesome. Do you know what brand it is?',
            trigger: 'brands_bool',
          },
          {
            id: 'brands_bool',
            options: [
              { value: 'yes', label: 'Yes', trigger: 'brand_search' },
              { value: 'no', label: 'No', trigger: 'brand_bool_no' },
            ],
          },
          {
            id: 'brand_bool_no',
            message: 'No worries. Do you want to search by name or category?',
            trigger: 'brands_search_bool',
          },
          {
            id: 'brands_search_bool',
            options: [
              { value: 'name', label: 'Name', trigger: 'brand_search' },
              { value: 'category', label: 'Category', trigger: 'brand_category' },
            ],
          },
          {
            id: 'brand_category',
            options: [
              { value: 'flower', label: 'Flower', trigger: 'brand_category_search' },
              { value: 'concentrates', label: 'Concentrates', trigger: 'brand_category_search' },
              { value: 'edibles', label: 'Edibles', trigger: 'brand_category_search' },
              { value: 'medical', label: 'Medical', trigger: 'brand_category_search' },
              { value: 'vapes', label: 'Vapes', trigger: 'brand_category_search' },
            ],
          },
          {
            id: 'brand_category_search',
            message: 'Cool, let me find all our {previousValue} brands.',
            trigger: 'product_brands_search',
          },
          {
            id: 'brand_search',
            user: true,
            trigger: 'brand_search_response',
          },
          {
            id: 'brand_search_response',
            message: 'Sounds dank. Let me look that up.',
            trigger: 'product_brands_search',
          },


          {
            id: 'shops',
            message: 'What kind of shop are you looking for?',
            trigger: 'shop_categories',
          },
          {
            id: 'shop_categories',
            options: [
              { value: 'dispensary', label: 'MMJ Dispensary', trigger: 'shop_state_msg' },
              { value: 'recshop', label: 'Rec Shop', trigger: 'shop_state_msg' },
              { value: 'headshop', label: 'Headshop', trigger: 'shop_state_msg' },
              { value: 'doctor', label: 'Doctor', trigger: 'shop_state_msg' },
            ],
          },
          {
            id: 'shop_state_msg',
            message: 'What state do you live in?',
            trigger: 'shop_state',
          },
          {
            id: 'shop_state',
            user: true,
            trigger: 'shop_state_response',
          },
          {
            id: 'shop_state_response',
            message: 'Still adding this feature, check back soon!',
            trigger: '1',
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