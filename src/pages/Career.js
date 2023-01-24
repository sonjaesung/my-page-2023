import React, { Fragment } from 'react';
import { observer } from 'mobx-react';
import { useLocation } from 'react-router-dom';
import School from '../components/developer/school';
import Skill from '../components/developer/skill';
import WonderPeople from '../components/career/wonderPeople';

const Developer = observer(() => {
    const location = useLocation();

    return <Fragment>
        {location.pathname === '/career/wonder-people' && <WonderPeople />}
        {location.pathname === '/career/deep-noid' && <School />}
        {location.pathname === '/career/m-circle' && <Skill />}
        {location.pathname === '/career/jober' && <Skill />}
        {location.pathname === '/career/fni' && <Skill />}
    </Fragment>;
});

export default Developer;
