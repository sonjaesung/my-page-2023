import React from 'react';
import { observer } from 'mobx-react';

const Basic = observer(() => {
    const bgImag = [
        { url: "img/basic-bg01.png" },
        { url: "img/basic-bg02.png" },
    ]

    return <div className='landscape'>
        <div className='sVisual'>
            <div className='inConts'>
                <h2>
                    <span>개발자 소개</span>
                </h2>
            </div>
        </div>
        <div className='contents'>
            <div className='fullBox'>
                <img src={bgImag[0].url} alt={bgImag[0].url} />
                <div className='basicInfoArea1'>
                    <div className='title'>
                        준비되어있는 비운의 웹 개발자
                    </div>
                    <div className='info'>
                        <div>이름 : 손재성</div>
                        <div>나이 : 32세</div>
                        <div>성별 : 남자</div>
                        <div>이름 : 손재성</div>
                        <div>주소 : 서울 송파구</div>
                        <div>번호 : 010-2689-2631</div>
                        <div>이메일 : loki92@naver.com</div>
                    </div>
                </div>
            </div>
            <div className='fullBox'>
                <img src={bgImag[1].url} alt={bgImag[1].url} />
                <div className='basicInfoArea2'>
                    <div className='title'>
                        새로운 개발은 언제나 환영입니다
                    </div>
                    <div className='info'>
                        <div>핵심 : - 다양한 종류의 작업을 해보아서 적응이 빠릅니다.</div>
                        <div>- 라이브 서비스 대응 경험이 있습니다.</div>
                        <div>- 필요에 따라 의견을 주장할 수 있습니다.</div>
                    </div>
                </div>
            </div>
        </div>
    </div>;
});

export default Basic;
