import React, { Fragment } from 'react';
import { observer } from 'mobx-react';
import { useLocation } from 'react-router-dom';
import WonderPeople from '../components/career/wonderPeople';
import DeepNoid from '../components/career/deepNoid';
import Mcircle from '../components/career/mCircle';
import Jober from '../components/career/jober';
import Fni from '../components/career/fni';

const Developer = observer(() => {
    const location = useLocation();

    return <Fragment>
        {location.pathname === '/career/wonder-people' && <WonderPeople />}
        {location.pathname === '/career/deep-noid' && <DeepNoid />}
        {location.pathname === '/career/m-circle' && <Mcircle />}
        {location.pathname === '/career/jober' && <Jober />}
        {location.pathname === '/career/fni' && <Fni />}
    </Fragment>;
});

export default Developer;
