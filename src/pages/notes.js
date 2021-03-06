import React, { Component } from 'react';
import { Switch, Route, Link } from 'react-router-dom';
import plus from '../images/notes/images.png';
import { my_store } from '../store';
import rubbish from '../images/notes/delNote.png';

class Notes extends Component {

    constructor(props) {
        super(props);

        this.state = {
            title: "",
            content: "",
            id: ""
        }
        this.callback = this.callback.bind(this);
    }

    callback(p1, p2, p3) {
        this.setState({
            title: p1,
            content: p2,
            id: p3
        })
    }

    render() {
        return (
            <div className="notes">

                <Switch>
                    <Route exact path='/notes' render={props => (<Grid {...props} data={this.props.dataNotes.state} local={{ callback: this.callback }} />)} />
                    <Route exact path='/notes/new' render={props => (<CreateNew {...props} data={this.props.dataNotes} local={{ title: this.state.title, content: this.state.content, id: this.state.id }} />)} />

                </Switch>


            </div>
        );
    }

}

class CreateNew extends Component {

    constructor(props) {

        super(props);

        this.state = {
            title: this.props.local.title,
            content: this.props.local.content,
            id: this.props.local.id
        };
        this.onChangeContent = this.onChangeContent.bind(this);
        this.onChangeTitle = this.onChangeTitle.bind(this);
        this.onSave = this.onSave.bind(this);
        this.delete = this.delete.bind(this);
    }

    onChangeTitle(e) {
        this.setState({
            title: e.target.value
        })
    }

    onChangeContent(e) {
        this.setState({
            content: e.target.value
        })
    }

    onSave() {
        let title = this.state.title;
        let content = this.state.content;

        if (title || content) {
            if (!title)
                title = "untitled";
            this.props.data.addNote(title, content);
            console.log("Data saved");
            //console.log(my_store.getState());
        }

    }

    delete() {
        //console.log(my_store.getState());
        this.props.data.delNote(this.state.id);
        console.log(my_store.getState());
    }

    render() {
        return (
            <div className="createNew initial">
                <Link to='../notes' ><img  src={rubbish} onClick={this.delete} alt="delete" style={{float:"right",zIndex:1,opacity:0.99}}/></Link>
                <input style={{marginTop:"-10px"}} type="text" id="title" size="1" placeholder="Title" autoFocus autoComplete="off" autoCapitalize="words" onChange={this.onChangeTitle} value={this.state.title}></input>
                <textarea placeholder="Content" autoComplete="off" autoCapitalize="sentences" onChange={this.onChangeContent} value={this.state.content}></textarea>
                <Link to='../notes'><button onClick={this.onSave}>Save</button></Link>
            </div>
        );
    }
}

class Grid extends Component {

    constructor(props) {

        super(props);

        this.state = {

        };
        this.show = this.show.bind(this);
        this.create = this.create.bind(this);

    }

    show(e) {

        console.log(e.target.id);
        this.props.data.notes.map((val) => {
            let id = e.target.id;
            if (val.id == id) {
                this.props.local.callback(val.title, val.content, val.id);
            }
            return 0

        });
    }

    create(e) {
        this.props.local.callback("", "", "");
    }

    render() {
        return (
            <>
                <h1> My Notes </h1>
                <Link to='/notes/new' onClick={this.create}><img className="n" src={plus} alt="Create new" /></Link>

                <ul style={{ textAlign: "center" }}>
                    {
                        this.props.data.notes.map((val, idx) => {
                            return (
                                    <Link to="./notes/new" key={idx} >
                                        <li id={val.id} onClick={this.show} >{val.title}
                                            <div className="row">
                                                <div className="col-12">
                                                </div>
                                            </div>
                                        </li>
                                    </Link>
                            );
                        })
                    }
                </ul>

            </>
        );
    }
}

export default Notes;