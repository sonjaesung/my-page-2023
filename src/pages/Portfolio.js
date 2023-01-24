import React, { Fragment } from 'react';
import { observer } from 'mobx-react';
import { useLocation } from 'react-router-dom';
import MyPage from '../components/portfolio/myPage';
import CheckList from '../components/portfolio/checkList';
import Weather from '../components/portfolio/weather';
import OldMyPage from '../components/portfolio/oldMyPage';

const Portfolio = observer(() => {
    const location = useLocation();

    return <Fragment>
        {location.pathname === '/portfolio/my-page' && <MyPage />}
        {location.pathname === '/portfolio/student-check' && <CheckList />}
        {location.pathname === '/portfolio/weather-react' && <Weather />}
        {location.pathname === '/portfolio/old-my-page' && <OldMyPage />}
    </Fragment>;
});

export default Portfolio;
