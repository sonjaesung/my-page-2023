import React from 'react';
import { observer } from 'mobx-react';
import { Fragment } from 'react';

const WonderPeople = observer(() => {
    return <Fragment>
        <div className='carrerDetail'>
            <div className='inConts'>
                <div className='detailView'>
                    <div className='detailName'>
                        <div className='maintitle'>원더피플 - 슈퍼피플</div>
                        <div className='subTitle'>WonderPeople - SuperPeople</div>
                    </div>
                    <div className='detailImg'>
                        <img src='img/supeople01.png' alt='img/supeople01.png' />
                    </div>
                    <div className='detailText'>
                        <div>회사 소개 : FPS 배틀로얄 게임</div>
                        <div>부서명 : 오스카마이크</div>
                        <div>직원수 : 200명</div>
                        <div>재직기간 : 2021.06 ~ 2023.01</div>
                        <div>직위 : 팀원</div>
                        <div>담당업무 : 프론트엔드</div>
                        <div>이직사유 : 회사 재정 문제로 서비스 중단 예정<br />규모 있는 회사에서 중장기적으로 근무 희망</div>
                    </div>
                </div>
            </div>
        </div>
        <div className='detailWork'>
            <div className='inConts'>
                <div>팀 구성 및 역할: 프론트엔드 1명 중 본인, 추후 프론트엔드 2명 인원 보충</div>
                <div>개발 환경 및 적용 기술: Coherent, React, React hook, mobex, Javascript, HTML, SCSS, Git</div>
                <div className='careerList'>개발 사항</div>
                <div className='careerLi'>- React 기반의 페이지이며, React hook 을 이용하여 페이지 작성</div>
                <div className='careerLi'>- 상태 관리는 mobex를 이용하였고, 코드 형상관리는 Github를 이용</div>
                <div className='careerLi'>- 플레이 탭, 토너먼트 탭, 거래소 탭</div>
                <div className='careerLi'>- 게임 모드 설정, 친구초대, 파티, 친구 검색, 각종 팝업, 개인보급 페이지, 무기 페이지, 재료 페이지, 의상 페이지, 외형 페이지, 감정표현 페이지, 스킨 페이지, Top100 페이지, 경기 이력 페이지, 유저 스텟 페이지/팝업 등</div>
                <div className='careerLi'>- 언리얼 클라이언트와의 데이터 통신, 이벤트 전달에는 Coherent 를 이용</div>
                <div className='careerLi'>- 정적인 정보등에는 axios 를 이용한 aws 에서 파일을 불러오는 기능 이용</div>
            </div>
        </div>
    </Fragment>
        ;
});

export default WonderPeople;
