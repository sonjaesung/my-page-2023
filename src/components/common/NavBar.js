import React from 'react';
import { observer } from 'mobx-react';
import { navigation } from '../../routes/navigation';
import SubNavBar from './SubNavBar';
import { Link } from 'react-router-dom';
import { Fragment } from 'react';

const NavBar = observer(() => {
    return (
        <ul className='gnb'>
            {navigation.map((item, idx) => {
                return <Fragment key={idx}>
                    {item.subnav && <li className={'gnbLi'}>
                        <Link to={item.url} className="gnbA" >
                            {item.title}
                        </Link>
                        <SubNavBar subnav={item.subnav} />
                    </li>}
                    {!item.subnav && <Link to={item.url} className="gnbLi" >
                        <li className={'gnbA'}>
                            {item.title}
                        </li></Link>}
                </Fragment>
            })}
        </ul>
    );
});
export default NavBar;
