import React from 'react';
import hello from '../../images/hello.jpg';
import { style2 } from '../../styles.js';

const Welcome = () => {
    return(
            <div className="row">
                <div className="col-sm-12">
                    <img src={hello} alt="Welcome" style={style2}/>
                </div>
            </div>
    );
}

export default Welcome;