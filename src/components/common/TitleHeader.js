import React from 'react';
import { observer } from 'mobx-react';
import NavBar from './NavBar';
import { Link } from 'react-router-dom';


const TitleHeader = observer(() => {
    return (
        <div className="header">
            <div className="inConts">
                <h1>
                    <Link to='' className='mainLogo'>
                        Pro. EunYul
                    </Link>
                </h1>
                <div className="gnbArea">
                    <NavBar />
                </div>
                <div className='sua'>
                    {/*<SuaBar />*/}
                </div>
            </div>

        </div>
    );
});

export default TitleHeader;
