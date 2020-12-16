import React, { Component } from 'react';
import PropTypes from 'prop-types';
import KushyApi from '../KushyApi';

const teststeps = [
    {
        id: '1',
        message: '안녕하세요 한세대학교 챗봇입니다. :) 이름이 무엇인가요?',
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
        message: 'Placholder',
        trigger: 'sections',
      },
      {
        id: 'sections',
        options: [
          { value: 'products', label: '장학금', trigger: '100' },
          { value: 'strains', label: '공지 사항', trigger: '200' },
          { value: 'brands', label: '학식 메뉴', trigger: 'brands' },
          { value: 'shops', label: '기타', trigger: '5' },
        ],
      },
      {
        id: '100',
        message: '어떤 장학금을 찾으시나요?',
        trigger: 'products',
      },
      {
        id: 'products',
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
          { value: 'bubble hash', label: '신청 기간', trigger: '150' },
          { value: 'crumble', label: '신청 방법', trigger: '151' },
          { value: 'kief', label: 'Kief', trigger: '150' },
          { value: 'oil', label: 'Oil', trigger: '150' },
          { value: 'shatter', label: 'Shatter', trigger: '150' },
          { value: 'wax', label: 'Wax', trigger: '150' },
        ],
      },



];

KushyApi.propTypes = {
    teststeps: PropTypes.object,
    triggerNextStep: PropTypes.func,
  };
  
  KushyApi.defaultProps = {
    teststeps: undefined,
    triggerNextStep: undefined,
  };
  
  export default teststeps;