import React from 'react';
import { observer } from 'mobx-react';
import MainBanner from './mainBanner';
import PortfolioBanner from './portfolioBanner';

const HomeMain = observer(() => {

    return (
        <div className='homeMain'>
            <MainBanner />
            <PortfolioBanner />
        </div>
    );
});

export default HomeMain;
