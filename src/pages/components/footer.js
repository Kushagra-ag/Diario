import React from 'react';
import clock from '../../images/worldclock/world_clock.png'
import calendar from '../../images/calendar.png'
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="footer row" style={{flexWrap:"nowrap"}}>

            <div className="col-sm-4">
                <Link to='/world_clock'><img src={clock} alt="world clock"></img></Link>
            </div>
            <div className="col-sm-4">
                <Link to='/calender'><img src={calendar} alt="calendar"></img></Link>
            </div>

        </div>
    );
};

export default Footer;