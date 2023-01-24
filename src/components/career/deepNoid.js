import React from 'react';
import { observer } from 'mobx-react';

const DeepNoid = observer(() => {
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
                        <div className='maintitle'>딥노이드 - 딥스토어</div>
                        <div className='subTitle'>DeepNoid - Deep:Store</div>
                    </div>
                    <div className='detailImg'>
                        <img src='img/deepnoid01.png' alt='img/deepnoid01.png' />
                    </div>
                    <div className='detailText'>
                        <div>회사 소개 : 의료 AI 앱 개발 솔루션, 의료 AI 앱 스토어, 팍스</div>
                        <div>부서명 : 플랫폼개발실</div>
                        <div>직원수 : 100명</div>
                        <div>재직기간 : 2020.09~2021.04 </div>
                        <div>직위 : 팀원</div>
                        <div>담당업무 : 프론트엔드</div>
                        <div>이직사유 : 백엔드 개발자 퇴사로 인한 팀 해체<br />규모 있는 회사에서 중장기적으로 근무 희망</div>
                    </div>
                </div>
            </div>
        </div>
        <div className='detailWork'>
            <div className='inConts'>
                <div>팀 구성 및 역할 : 프론트엔드 1명 중 본인, 백엔드 1명, 기획 1명, 퍼블리셔 1명 (총 4명)</div>
                <div>개발 환경 및 적용 기술 : jHipster, React, React hook, typescript, redux, Javascript, HTML, CSS, Git</div>
                <div className='careerList'>개발 사항</div>
                <div className='careerLi'>- jHipster 와 React 기반의 페이지이며, React hook 을 이용하여 페이지 작성</div>
                <div className='careerLi'>- 상태 관리는 redux를 이용하였고, 코드 형상관리는 Github를 이용</div>
                <div className='careerLi'>- 메인 페이지, 앱 등록 페이지, 앱 조회 페이지, Q&A 페이지</div>
                <div className='careerLi'>- 리뷰 페이지, 별점 기능, 필터링 기능, 페이징 기능, 마이페이지 등</div>
                <div className='careerLi'>- 텍스트 입력에는 React 에서 제공하는 모듈을 이용하여 이미지첨부와 첨부파일까지 관리</div>
                <div className='careerLi'>- 파일이나 이미지의 경우 따로 저장하여 url 로 관리</div>
            </div>
        </div>
    </div>
        ;
});

export default DeepNoid;
