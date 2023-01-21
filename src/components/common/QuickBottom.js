import React from 'react';
import { observer } from 'mobx-react';

const QuickBottom = observer(() => {
    return (
        <div className="quickBtm">
            <div className='inConts'>
                <strong className='recommand'>이직 제안 문의</strong>
                <a href='/' className='quickBtn'>제안하기</a>
            </div>
        </div>
    );
});

export default QuickBottom;
