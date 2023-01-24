import React from 'react';
import { observer } from 'mobx-react';

const Mcircle = observer(() => {
    return <div className='landscape'>
        <div className='sVisual'>
            <div className='inConts'>
                <h2>
                    <span>경력 기술서</span>
                </h2>
            </div>
        </div>
        <div className='carrerDetail'>
            <div className='inConts'>
                <div className='detailView'>
                    <div className='detailName'>
                        <div className='maintitle'>엠서클 - 건기식</div>
                        <div className='subTitle'>mCircle - TFT Web</div>
                    </div>
                    <div className='detailImg'>
                        <img src='img/mcircle01.png' alt='img/mcircle01.png' />
                    </div>
                    <div className='detailText'>
                        <div>회사 소개 : 이용자에 맞추어서 제품 추천을 해주는 쇼핑몰 페이지 제작, 신규 개발</div>
                        <div>부서명 : 건기식 개발팀</div>
                        <div>직원수 : 160명</div>
                        <div>재직기간 : 2020.02 ~ 2020.04 </div>
                        <div>직위 : 주임</div>
                        <div>담당업무 : 웹개발</div>
                        <div>이직사유 : 팀 해체</div>
                    </div>
                </div>
            </div>
        </div>
        <div className='detailWork'>
            <div className='inConts'>
                <div>팀 구성 및 역할 : 팀장 및 팀원 4명 중 팀원 (총 5명), 프론트엔드 및 백엔드 작업</div>
                <div>개발 환경 및 적용 기술 : HTML, ejs, Node.js, jQuery, CSS, Javascript, MySQL, sequelize, Git</div>
                <div className='careerList'>개발 사항</div>
                <div className='careerLi'>- 데이터베이스는 My-SQL을 이용</div>
                <div className='careerLi'>- 필요에 의한 필드 추가 및 쿼리문 조절을 담당</div>
                <div className='careerLi'>- 메인페이지, 제품목록 페이지, 제품상세 페이지, my페이지, 계좌 페이지</div>
                <div className='careerLi'>- 포인트 및 쿠폰 페이지, 장바구니 페이지, 찜리스트 페이지 등을 진행</div>
                <div className='careerLi'>- jQuery를 이용한 이벤트 작업</div>
                <div className='careerLi'>- sequelize를 이용한 데이터베이스 연동 작업, 서버는 Node.js 의 express 모듈을 이용</div>
            </div>
        </div>
    </div>
        ;
});

export default Mcircle;
