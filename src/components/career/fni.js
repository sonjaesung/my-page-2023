import React from 'react';
import { observer } from 'mobx-react';

const Fni = observer(() => {
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
                        <div className='maintitle'>에프앤아이 - 마인즈케어</div>
                        <div className='subTitle'>FNI - MindsCare</div>
                    </div>
                    <div className='detailImg'>
                        <img src='img/fni01.png' alt='img/fni01.png' />
                    </div>
                    <div className='detailText'>
                        <div>회사 소개 : VR 플랫폼 개발</div>
                        <div>부서명 : 기술연구소</div>
                        <div>직원수 : 60명</div>
                        <div>재직기간 : 2017.04 ~ 2019.06</div>
                        <div>직위 : 연구원</div>
                        <div>담당업무 : 웹 개발, DB, 유니티 개발</div>
                        <div>이직사유 : 웹 개발자가 보다 많은 곳에서 역량 개발 희망</div>
                    </div>
                </div>
            </div>
        </div>
        <div className='detailWork'>
            <div className='inConts'>
                <div>팀 구성 및 역할 : 프론트엔드 전담</div>
                <div>개발 환경 및 적용 기술 : HTML, ejs, Node.js, jQuery, CSS, Javascript, MySQL, SVN, Unity</div>
                <div className='careerList'>개발 사항</div>
                <div className='careerLi'>- Unity를 이용하여 모바일 및 웹에서 볼 수 있는 VR 컨텐츠를 제작</div>
                <div className='careerLi'>- 웹 작업은 Node.js를 이용, express 모듈을 이용하여 웹서버를 개설</div>
                <div className='careerLi'>- My-SQL을 이용하여 데이터베이스 작업</div>
                <div className='careerLi'>- jQuery를 이용하여 필요 이벤트 작업 및 강남세브란스병원에 최종적으로 임상 테스트를 진행</div>
                <div className='careerLi'>- 제작한 웹 페이지는 마지막에 winform 으로 감싸서 배포</div>
                <div className='careerLi'>- 외주작업자와 함께 작업</div>
            </div>
        </div>
    </div>
        ;
});

export default Fni;
