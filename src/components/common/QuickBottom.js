import React from 'react';
import { observer } from 'mobx-react';
import { Link } from 'react-router-dom';

const QuickBottom = observer(() => {
    return (
        <div className="quickBtm">
            <div className='inConts'>
                <strong className='recommand'>이직 제안 문의!</strong>
                <Link to='/developer/basic' className='quickBtn'>
                    제안하기
                </Link>
            </div>
        </div>
    );
});

export default QuickBottom;
