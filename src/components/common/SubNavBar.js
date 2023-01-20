import React from 'react';
import { observer } from 'mobx-react';
import { Link } from 'react-router-dom';

const SubNavBar = observer(({ subnav }) => {
    return (
        <ul className='gnbSub'>
            {subnav.map((item, idx) => {
                return (<li key={idx} className='gnbSubLi'>
                    <Link to={item.url} className='gnbSubA'>
                        {item.name}
                    </Link>
                </li>
                );
            })}
        </ul>
    );
});
export default SubNavBar;
