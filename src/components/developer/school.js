import React from 'react';
import { observer } from 'mobx-react';

const School = observer(() => {
    const bgImag = [
        { url: "img/school-bg01.png" },
        { url: "img/school-bg02.png" },
    ]

    return <div className='school'>
        <div className='sVisual'>
            <div className='inConts'>
                <h2>
                    <span>학력 사항</span>
                </h2>
            </div>
        </div>
        <div className='contents'>
            <div className='fullBox'>
                <img src={bgImag[0].url} alt={bgImag[0].url} />
                <div className='basicInfoArea1'>
                    <div className='title'>
                        한국 IT 직업 전문학교 졸업
                    </div>
                    <div className='info'>
                        <div>학위 : 학사</div>
                        <div>전공 : 게임프로그래밍</div>
                        <div>소재 : 서울</div>
                        <div>주소 : 서초구 바우뫼로 87 한국IT직업전문학교</div>
                        <div>주/야 : 주간</div>
                        <div>졸업작품 : 오큘러스 공포게임 G-Star 출시</div>
                        <div>재학기간 : 2012.03 ~ 2017.02</div>
                        <div>학점 은행제를 통해서 학사 학위 취득</div>
                    </div>
                </div>
            </div>
            <div className='fullBox'>
                <img src={bgImag[1].url} alt={bgImag[1].url} />
                <div className='basicInfoArea2'>
                    <div className='title'>
                        방산 고등학교 졸업
                    </div>
                    <div className='info'>
                        <div>전공 : 이과</div>
                        <div>소재 : 서울</div>
                        <div>주소 : 송파구 오금로27길 18 방산고등학교</div>
                        <div>재학기간 : 2008.03 ~ 2011.02</div>
                    </div>
                </div>
            </div>
        </div>
    </div>;
});

export default School;
