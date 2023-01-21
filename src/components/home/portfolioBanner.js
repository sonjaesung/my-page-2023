import React from 'react';
import { observer } from 'mobx-react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const PortfolioBanner = observer(() => {

    const images = [
        {
            url: "img/SuperPeople-pf.png",
            name: '슈퍼피플',
            bgColor: 'superPeople'
        },
        {
            url: "img/CheckStudent-pf.png",
            name: '출석 체크',
            bgColor: 'checkStudent'
        },
        {
            url: "img/MyPage-pf.png",
            name: '내 페이지',
            bgColor: 'myPage'
        },
        {
            url: "img/Weather-pf.png",
            name: '오늘의 날씨',
            bgColor: 'weather'
        },
        {
            url: "img/English-pf.png",
            name: '오늘의 영어',
            bgColor: 'english'
        },
        {
            url: "img/Lotto-pf.png",
            name: '로또 조회',
            bgColor: 'lotto'
        },
    ];

    var settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
    };

    return (
        <div className='mConts mMenu'>
            <div className='inConts'>
                <dl className='mTitle'>
                    <dt>Pro. EunYul</dt>
                    <dd>준비되어있는 비운의 개발자 새로운 개발을 언제나 환영합니다</dd>
                </dl>
                <div className='wrapSlider'>
                    <Slider {...settings}>
                        {images.map((item, idx) => {
                            return <div className='sliderImgArea' key={idx}>
                                <div className={`sliderBg ${item.bgColor}`}>
                                    <div className='sliderName'>
                                        {item.name}
                                    </div>
                                    <img src={item.url} alt={item.url}></img>
                                </div>
                            </div>
                        })}
                    </Slider>
                </div>
            </div>
        </div>
    );
});

export default PortfolioBanner;
