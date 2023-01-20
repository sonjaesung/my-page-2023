import React from 'react';
import { Route, Routes } from 'react-router-dom';
import routes from './routes';
import { observer } from 'mobx-react';
import TitleHeader from './components/common/TitleHeader';
import './css/style.scss';

const App = observer(() => {
  return (
    <div className="body_wrap">
      <TitleHeader />
      <Routes>
        {routes.map((route, idx) => (
          <Route key={idx} path={route.path} element={route.element} exact={true} />
        ))}
      </Routes>
    </div>
  );
});

export default App;
