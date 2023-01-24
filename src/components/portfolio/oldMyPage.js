import React from 'react';
import { observer } from 'mobx-react';

const OldMyPage = observer(() => {
    const images = [
        {
            url: "img/oldmypage01.png",
        },
        {
            url: "img/oldmypage02.png",
        },
        {
            url: "img/oldmypage03.png",
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
                        <div className='maintitle'>(구) 마이 페이지</div>
                        <div className='subTitle'>EunYul</div>
                    </div>
                    <div className='detailImg'>
                        {images.map((item, idx) => {
                            return <img src={item.url} alt={item.url} key={idx} />
                        })}

                    </div>
                    <div className='detailText'>
                        {`
              react-native-web 을 이용하여 자기소개 페이지를 제작했습니다.
              서버는 작업은 하지않고 프론트만 이용하여 작업했습니다.
              추가적인 페이지 작성중이고 페이지를 다 제작하고난 이후에 모바일 스위칭을 할 예정이였습니다.
              앱으로 빌드하여 모바일에서 스위칭되도록 작업 예정이였습니다.
              포트폴리오 탭 이후 경력기술서 탭과 기타 필요 탭등 추가진행 했습니다.
              기존 내용이 깨져서 지금은 활성화되어있지 않습니다.
              `}
                    </div>
                </div>
            </div>
        </div>
    </div>
        ;
});

export default OldMyPage;
