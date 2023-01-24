import React, { Fragment } from 'react';
import { observer } from 'mobx-react';
import { useLocation } from 'react-router-dom';
import IntroduceMain from '../components/introduce/introduce';

const Introduce = observer(() => {
    const location = useLocation();

    return <Fragment> {location.pathname === '/introduce' && <IntroduceMain />}</Fragment>;
});

export default Introduce;
