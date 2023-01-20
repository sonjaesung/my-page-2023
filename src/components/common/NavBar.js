import React from 'react';
import { observer } from 'mobx-react';
import { navigation } from '../../routes/navigation';
import SubNavBar from './SubNavBar';
import { Link } from 'react-router-dom';

const NavBar = observer(() => {
    return (
        <ul className='gnb'>
            {navigation.map((item, idx) => {
                return (<li key={idx} className={'gnbLi'}>
                    <Link to={item.url} className="gnbA" >
                        {item.title}
                    </Link>
                    {item.subnav && <SubNavBar subnav={item.subnav} />}
                </li>
                );
            })}
        </ul>
    );
});
export default NavBar;
