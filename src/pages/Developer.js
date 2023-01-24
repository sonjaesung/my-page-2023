import React, { Fragment } from 'react';
import { observer } from 'mobx-react';
import Basic from '../components/developer/basic';
import { useLocation } from 'react-router-dom';
import School from '../components/developer/school';

const Developer = observer(() => {
    const location = useLocation();

    return <Fragment> {location.pathname === '/developer/basic' && <Basic />}
        {location.pathname === '/developer/school' && <School />}</Fragment>;
});

export default Developer;
