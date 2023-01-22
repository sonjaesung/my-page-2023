import React from 'react';
import { observer } from 'mobx-react';

const Footer = observer(() => {
    const images = [
        { url: "img/HTML5-logo.png" },
        { url: "img/CSS3-logo.png" },
        { url: "img/JavaScript-logo.png" },
        { url: "img/React-logo.png" },
        { url: "img/Redux-logo.png" },
        { url: "img/Mobex-logo.png" },
        { url: "img/Nodejs-logo.png" },
        { url: "img/MySql-logo.png" },
    ];

    return (
        <div className="footer">
            <div className='inConts'>
                <div className='tac'>
                    {images.map((item, idx) => {
                        return <div className='imgArea'><img src={item.url} /></div>
                    })}
                </div>
                <div className='text'>
                    <p>
                        <span>· 페이지 명 (상호) : My Page 2023 (Pro. EunYul)</span>
                        <span>· 개발자 : EunYul</span>
                        <span>· git address : https://github.com/sonjaesung/</span>
                        <span>· 주소 : 서울특별시 송파구</span>
                    </p>
                    <p className='innerText'>
                        <span>· 대표번호 :<strong>010-2689-2631</strong></span>
                        <span>· 이메일 : <strong>loki92@naver.com</strong></span>
                    </p>
                </div>
            </div>
        </div>
    );
});

export default Footer;
