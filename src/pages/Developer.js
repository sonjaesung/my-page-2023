import React, { Fragment, useEffect, useState } from 'react';
import { observer } from 'mobx-react';
import About from '../components/developer/about';
import { useLocation } from 'react-router-dom';

const Developer = observer(() => {
    const location = useLocation();

    return <Fragment> {location.pathname === '/developer/basic' && <About />}</Fragment>;
});

export default Developer;
