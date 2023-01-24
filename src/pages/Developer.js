import React, { Fragment } from 'react';
import { observer } from 'mobx-react';
import Basic from '../components/developer/basic';
import { useLocation } from 'react-router-dom';
import School from '../components/developer/school';
import Skill from '../components/developer/skill';

const Developer = observer(() => {
    const location = useLocation();

    return <Fragment>
        {location.pathname === '/developer/basic' && <Basic />}
        {location.pathname === '/developer/school' && <School />}
        {location.pathname === '/developer/skill' && <Skill />}
    </Fragment>;
});

export default Developer;
