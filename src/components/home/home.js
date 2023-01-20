import React, { Fragment, useEffect, useState } from 'react';
import { observer } from 'mobx-react';
import MainBanner from './mainBanner';

const HomeMain = observer(() => {

    return (
        <div className='homeMain'>
            <MainBanner />

        </div>
    );
});

export default HomeMain;
