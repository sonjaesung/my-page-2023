import React from 'react';
import { observer } from 'mobx-react';
import { Fragment } from 'react';

const Skill = observer(() => {
    const images = [
        {
            url: "img/HTML5-logo.png",
            name: 'HTML5'
        },
        {
            url: "img/CSS3-logo.png",
            name: 'CSS3, SCSS'
        },
        {
            url: "img/JavaScript-logo.png",
            name: 'JavaScript'
        },
        {
            url: "img/React-logo.png",
            name: 'React, React Hook'
        },
        {
            url: "img/Redux-logo.png",
            name: 'Redux'
        },
        {
            url: "img/Mobex-logo.png",
            name: 'Mobex'
        },
        {
            url: "img/Nodejs-logo.png",
            name: 'Nodejs'
        },
        {
            url: "img/MySQL-logo.png",
            name: 'MySql'
        },
    ];

    return <div className='skill'>
        <div className='sVisual'>
            <div className='inConts'>
                <h2>
                    <span>보유 기술</span>
                </h2>
            </div>
        </div>
        <div className='contents'>
            <div className='fullBox'>
                {images.map((item, idx) => {
                    return <Fragment>
                        <div className={`skillInfoArea`} key={idx}>
                            <div className='title'>
                                {item.name}
                            </div>
                            <img src={item.url} alt={item.url} />
                        </div>
                        {idx < images.length - 1 && <hr className='hrLine'></hr>}
                    </Fragment>
                })}
            </div>
        </div>
    </div>;
});

export default Skill;
