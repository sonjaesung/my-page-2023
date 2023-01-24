import React from 'react';
import { observer } from 'mobx-react';

const Jober = observer(() => {
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
                        <div className='maintitle'>자버 - 인사솔루션</div>
                        <div className='subTitle'>Jober - HR solution</div>
                    </div>
                    <div className='detailImg'>
                        <img src='img/jober01.png' alt='img/jober01.png' />
                    </div>
                    <div className='detailText'>
                        <div>회사 소개 : 채용 관리, 연차 관리 등 인사 서비스 시스템</div>
                        <div>부서명 : 인사솔루션개발팀</div>
                        <div>직원수 : 30명</div>
                        <div>재직기간 : 2019.10 ~ 2020.01</div>
                        <div>직위 : 팀원</div>
                        <div>담당업무 : 웹개발</div>
                        <div>이직사유 : 사옥 이전(성수공덕)으로 출퇴근 거리가 멀어짐</div>
                    </div>
                </div>
            </div>
        </div>
        <div className='detailWork'>
            <div className='inConts'>
                <div>팀 구성 및 역할 : 개발자 6명 중 팀원</div>
                <div>개발 환경 및 적용 기술 : HTML, ejs, Node.js, CSS, Javascript, React, React hook, MySQL, Git</div>
                <div className='careerList'>개발 사항</div>
                <div className='careerLi'>- React Hook을 이용하여 프론트 페이지 작업</div>
                <div className='careerLi'>- 인사솔루션 페이지의 이용자 게시판 페이지와 자유게시판, 노무사게시판 등 개선</div>
                <div className='careerLi'>- 관리자 페이지 개선</div>
                <div className='careerLi'>- 프론트 작업의 폼은 Ant Design을 이용</div>
                <div className='careerLi'>- 백엔드 작업은 sequelize를 이용하여 데이터베이스 작업</div>
                <div className='careerLi'>- 코드 형상관리는 Git 을 이용</div>
            </div>
        </div>
    </div>
        ;
});

export default Jober;
