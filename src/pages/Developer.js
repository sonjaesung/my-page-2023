import React, { Fragment } from 'react';
import { observer } from 'mobx-react';
import Basic from '../components/developer/basic';
import { useLocation } from 'react-router-dom';

const Developer = observer(() => {
    const location = useLocation();

    return <Fragment> {location.pathname === '/developer/basic' && <Basic />}</Fragment>;
});

export default Developer;
