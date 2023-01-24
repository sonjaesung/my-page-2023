import React from 'react';
import { observer } from 'mobx-react';

const MyPage = observer(() => {
    const images = [
        {
            url: "img/mypage01.png",
        },
        {
            url: "img/mypage02.png",
        },
        {
            url: "img/mypage03.png",
        },
    ];

    return <div className='landscape'>
        <div className='sVisual'>
            <div className='inConts'>
                <h2>
                    <span>포트폴리오</span>
                </h2>
            </div>
        </div>
        <div className='portfolioDetail'>
            <div className='inConts'>
                <div className='detailView'>
                    <div className='detailName'>
                        <div className='maintitle'>마이 페이지 2023</div>
                        <div className='subTitle'>Pro. EunYul</div>
                    </div>
                    <div className='detailImg'>
                        {images.map((item, idx) => {
                            return <img src={item.url} alt={item.url} key={idx} />
                        })}

                    </div>
                    <div className='detailText'>
                        {`
              react hook 을 이용하여 제작한 자기소개 페이지입니다.
              서버는 작업은 하지않고 프론트만 이용하여 작업했습니다.
              깃 페이지를 통해서 배포했습니다.
              style 은 scss 를 이용했습니다.
              규격은 rem 단위를 사용했고 기본 폰트 사이즈는 14px입니다.
              홈, 개발자 소개, 경력기술서, 포트폴리오, 자기소개 탭으로 구분되어있습니다.
              두가지 슬라이드 기능을 작성해두었습니다.
              `}
                    </div>
                </div>
            </div>
        </div>
    </div>
        ;
});

export default MyPage;
