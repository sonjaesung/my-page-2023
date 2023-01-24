import React from 'react';
import { observer } from 'mobx-react';

const Weather = observer(() => {
    const images = [
        {
            url: "img/todays01.png",
        },
        {
            url: "img/todays02.png",
        },
        {
            url: "img/todays03.png",
        },
        {
            url: "img/todays04.png",
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
                        <div className='maintitle'>날씨 / 영어 / 로또</div>
                        <div className='subTitle'>Today's</div>
                    </div>
                    <div className='detailImg img4'>
                        {images.map((item, idx) => {
                            return <img src={item.url} alt={item.url} key={idx} />
                        })}

                    </div>
                    <div className='detailText'>
                        {`
              react 를 이용하여 프론트 페이지를 만들었습니다.
              모바일 화면에서도 볼 수 있도록 css를 작업하였습니다.
              메인화면, 회원가입, 이메일찾기, 비밀번호찾기, 로그인 후 메인화면, 오늘의 날씨, 오늘의 영어, 로또번호 페이지를 만들었습니다.

              처음에는 클라이언트 부분만으로 돌아가도록 쿠키에 데이터를 저장하여 불러오는 방식으로 작성하였습니다.              
              이후 aws 에서 제공하는 1년 무료기간을 이용하여 express 모듈로 서버를 만들어서 aws 에 배포하였습니다.
              Back-end 에서의 작업은 jwt를 이용한 로그인 인증, sequelize를 이용한 db 모델링과 쿼리연동을 진행하였습니다.
              Front-end 에서의 작업은 react hook 을 이용하여 제작하기위해 노력하였습니다.

              메인 페이지에는 시계 기능을 주었습니다.
              오늘의 날씨 페이지는 open api 를 이용하여 위도와 경도로 날씨, 현재기온, 최저기온, 최대기온, 습도, 체감온도등을 표시하였습니다.
              axios 를 이용하여 서버 통신을 하였고 open api 연결을 해보기위해 날씨 데이터를 불러왔습니다.
              오늘의 영어 페이지는 영어문장 작성을 하여 등록하면 데이터베이스에 저장하여 해당 페이지로 불러와 누적 문장들을 언제든 확인 할 수 있도록 하고 체크와 삭제 기능을 넣었습니다.            
              데이터베이스는 my-sql 을 이용하였고 aws rds에 배포하였습니다.

              로또번호 페이지는 open api 를 이용하여 입력한 회차의 당첨번호를 조회 할 수 있도록 하였습니다. 
              번호를 입력하지않고 조회할 경우 가장 최신의 로또번호를 조회합니다. 
              지금은 open api 가 변경이 되었는지 조회되지 않습니다.

              서버는 node.js 의 express 모듈을 이용하였습니다.
              로그인은 json web token 을 이용하였고 데이터베이스관련 문법은
              sequelize 모듈을 이용하였습니다.

              aws 는 지금은 돈이 나가서 회원탈퇴를 하였습니다.
              아쉽게도 아래 링크로는 확인할 수 없습니다.
              `}
                    </div>
                </div>
            </div>
        </div>
    </div>
        ;
});

export default Weather;
