import React, { Fragment } from 'react';
import { observer } from 'mobx-react';
import { sua } from '../../routes/navigation';
import { Link } from 'react-router-dom';

const SuaBar = observer(() => {
    return (
        <Fragment>
            {sua.map((item, idx) => {
                return (
                    <Link to={item.url} key={idx} className='suaA'>
                        {item.title}
                    </Link>
                );
            })}
        </Fragment>
    );
});
export default SuaBar;
