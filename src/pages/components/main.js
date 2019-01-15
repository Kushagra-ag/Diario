import React,{Component} from 'react';

class Main extends Component {
    constructor(props)
    {
        super(props);
        this.state = {
            number: 0,
            input: ''
        };
        this.handleChange = this.handleChange.bind(this);
        this.addClick = this.addClick.bind(this);
        this.addClick_2 = this.addClick_2.bind(this);
        this.list = this.list.bind(this);
    }

    handleChange(event)
    {
        this.setState({
            ...this.state,
            input: event.target.value
        });
    }

    addClick(event)
    {
        this.props.prop1(this.state.input);
    }

    addClick_2()
    {
        console.log("in 2nd method");
    }

    list(val,idx)
    {
        return(
            <li key={idx}>{val}</li>
        );
    }

    render(){
        let a = this.props.prop2.map((val,idx) => <li key={idx}>{val}</li>);
        
        return(
            
            <div className="row">
                <h1>Input your text</h1><br/>
                <input value={this.state.input} onChange={this.handleChange} />
                <button onClick={this.addClick} > Add</button><br/>
                <h5>Total items -</h5><span>{this.state.number}</span>
                <button onClick={()=>{}}>List items</button>
                <div className="results">
                    <ul>
                        {a}
                    </ul>
                </div>
            </div>
        );
    };
}

export default Main;