export const navigation = [
  {
    title: '개발자 소개',
    desc: '개발자 소개',
    url: '/developer',
    matchUrl: ['/developer'],
    menu: 'Developer',
    subnav: [
      { url: '/developer/basic', name: '기본 정보', desc: '기본 정보' },
      { url: '/developer/school', name: '학력 사항', desc: '학력 사항' },
      { url: '/developer/skill', name: '보유 기술', desc: '보유 기술' },
    ],
  },
  {
    title: '경력 기술서',
    desc: '경력 기술서',
    url: '/career',
    matchUrl: ['/career'],
    menu: 'Career',
    subnav: [
      { url: '/career/wonder-people', name: '원더피플', desc: '원더피플' },
      { url: '/career/deep-noid', name: '딥노이드', desc: '딥노이드' },
      { url: '/career/m-circle', name: '엠서클', desc: '엠서클' },
      { url: '/career/jober', name: '자버', desc: '자버' },
      { url: '/career/fni', name: '에프앤아이', desc: '에프앤아이' },
    ],
  },
  {
    title: '포트폴리오',
    desc: '포트폴리오',
    url: '/portfolio',
    matchUrl: ['/portfolio'],
    menu: 'Portfolio',
    subnav: [
      { url: '/Portfolio/my-page', name: '마이 페이지', desc: '마이 페이지' },
      { url: '/Portfolio/student-check', name: '출석 체크', desc: '출석 체크' },
      { url: '/Portfolio/weather-react', name: '날씨/영어/로또', desc: '날씨/영어/로또' },
    ],
  },
  {
    title: '자기소개',
    desc: '자기소개',
    url: '/introduce',
    matchUrl: ['/introduce'],
    menu: 'Introduce',
  },
];

export const sua = [
  {
    title: '회사 소개',
    desc: '회사 소개',
    url: '/company/company',
    matchUrl: ['/company/company'],
    menu: 'Company',
  },
  {
    title: 'NEWS',
    desc: 'NEWS',
    url: '/news/press',
    matchUrl: ['/news/press'],
    menu: 'News',
  },
  {
    title: '이벤트',
    desc: '이벤트',
    url: '/news/event',
    matchUrl: ['/news/event'],
    menu: 'Event',
  }
]