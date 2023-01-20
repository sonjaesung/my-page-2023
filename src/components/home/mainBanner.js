import React from 'react';
import { observer } from 'mobx-react';
import SimpleImageSlider from 'react-simple-image-slider';

const MainBanner = observer(() => {

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
        <div className='mVisual'>
            <div className='bx-wrapper'>
                <div className='bx-viewport'>
                    <SimpleImageSlider
                        width={'100%'}
                        height={'812px'}
                        images={images}
                        showBullets={true}
                        showNavs={true}
                    />
                </div>
            </div>
        </div>
    );
});

export default MainBanner;
