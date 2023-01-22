import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import routes from './routes';
import { observer } from 'mobx-react';
import TitleHeader from './components/common/TitleHeader';
import './css/style.scss';
import QuickBottom from './components/common/QuickBottom';
import Footer from './components/common/Footer';

const App = observer(() => {

  /*
  const mouseWheel = (e) => {
    const topOffset = document.getElementsByClassName('quickBtm')[0].getBoundingClientRect().top;
    const fixPosition = document.getElementsByClassName('homeMain')[0].offsetHeight;

    if (window.pageYOffset + topOffset > fixPosition) {
      const changeBottomPostion = window.pageYOffset + topOffset - fixPosition;
      document.getElementsByClassName('quickBtm')[0].setAttribute('style', `bottom:${changeBottomPostion}px`);
    } else {
      document.getElementsByClassName('quickBtm')[0].setAttribute('style', 'bottom:0');
    }
  }

  useEffect(() => {
    document.addEventListener('wheel', (e) => mouseWheel(e))
    return () => {
      document.removeEventListener('wheel', (e) => mouseWheel(e))
    }
  }, [])
  */

  return (
    <div className="body_wrap">
      <TitleHeader />
      <Routes>
        {routes.map((route, idx) => (
          <Route key={idx} path={route.path} element={route.element} exact={true} />
        ))}
      </Routes>
      <QuickBottom />
      <Footer />
    </div>
  );
});

export default App;
