import React, { Component } from 'react';
import { time, timezone_str, timezone, twelvehrformat } from '../functions';
import { style3,style4 } from '../styles'

class Clock extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
            local: new Date(),
        }
    }

    componentDidMount(props) {
        this.k = setInterval(() => {

            this.setState({
                local: new Date()
            });
            //console.log("mounted ", this.props.dataClock.mounted);

        }, 1000);
    }

    componentWillUnmount(props) {
        clearInterval(this.k);
        //console.log("calling");
    }

    render() {

        let local = this.state.local;

        let localstr = local.toString();
        let timeObj = time(localstr);
        let format = twelvehrformat(timeObj.hour);

        let utc = local.getTime() + (local.getTimezoneOffset() * 60000);
        //console.log(Date(utc));
        let newyork_offset = (-5) * 3600000;
        let sydney_offset = (11) * 3600000;
        let paris_offset = (1) * 3600000;
        let india_offset = (5.5)*3600000;
        let russia_offset = (3)*3600000;
        let newyork = new Date(utc + newyork_offset).toLocaleTimeString();
        let sydney = new Date(utc + sydney_offset).toLocaleTimeString();
        let paris = new Date(utc + paris_offset).toLocaleTimeString();
        let india = new Date(utc + india_offset).toLocaleTimeString();
        let russia = new Date(utc + russia_offset).toLocaleTimeString();

        return (
            <div className="clock">
            <h1>Clock</h1><br/>
                <div className="row main">
                    <div className="col-12 col-md-9">
                        <h1 style={style4}>{`${format.hr}:${timeObj.min}`}</h1>
                        <h4 style={style4}>{timeObj.sec}</h4>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{format.time}<br />
                        {timezone_str(localstr)}<br />
                        {timezone(localstr)}<br />
                        <br />
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-md-9">
                        <div className="row" style={style3}>
                            <div className="col-6">
                                <h5>New York</h5>
                                <h6>NY, USA</h6>
                            </div>
                            <div className="col-6">
                                <h3 style={style4}>{newyork.slice(-11,-6)}</h3>&nbsp;{newyork.slice(-2)}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-md-9">
                        <div className="row" style={style3}>
                            <div className="col-6">
                                <h5>Sydney</h5>
                                <h6>Australia</h6>
                            </div>
                            <div className="col-6">
                            <h3 style={style4}>{sydney.slice(-11,-6)}</h3>&nbsp;{sydney.slice(-2)}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-md-9">
                        <div className="row" style={style3}>
                            <div className="col-6">
                                <h5>Bangalore</h5>
                                <h6>India</h6>
                            </div>
                            <div className="col-6">
                            <h3 style={style4}>{india.slice(-11,-6)}</h3>&nbsp;{india.slice(-2)}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-md-9">
                        <div className="row" style={style3}>
                            <div className="col-6">
                                <h5>Paris</h5>
                                <h6>France</h6>
                            </div>
                            <div className="col-6">
                            <h3 style={style4}>{paris.slice(-11,-6)}</h3>&nbsp;{paris.slice(-2)}
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-12 col-md-9">
                        <div className="row" style={style3}>
                            <div className="col-6">
                                <h5>St.Petersburg</h5>
                                <h6>Russia</h6>
                            </div>
                            <div className="col-6">
                            <h3 style={style4}>{russia.slice(-11,-6)}</h3>&nbsp;{russia.slice(-2)}
                            </div>
                        </div>
                    </div>
                </div><br/>
            </div>
        );
    }
}

export default Clock;