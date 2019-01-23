import React, { Component } from 'react';
import { style3 } from '../styles';

const BASEURL = "https://newsapi.org/v2/";
const KEY = "e01f5efb3cba4f2ba1beeced89c7799e";
const MONTH = ["Jan", "Feb", "Mar", "Apr", "May", "June", "July", "Aug", "Sep", "Oct", "Nov", "Dec"];

class News extends Component {

    constructor(props) {
        super(props);

        this.state = {
            query: "",
            country: "in",
            category: "business",
            articles: []
        };

        this.categoryChange = this.categoryChange.bind(this);
        this.typeChange = this.typeChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.date = this.date.bind(this);
    }

    typeChange(e) {
        this.setState({
            ...this.state,
            query: e.target.value
        });
    }

    categoryChange(e) {
        this.setState({
            ...this.state,
            category: e.target.value
        });
    }

    date(str) {
        let time = new Date(str);
        let date = time.getDate();
        let month = time.getMonth();
        let year = time.getFullYear();

        let formatted_date = `${date} ${MONTH[month]} ${year}`;
        return formatted_date;
    }

    onSubmit() {
        const txt = <em>Fetching your news...</em>;
        let url;

        this.setState({
            articles: txt
        });

        if (this.state.query === "") {

            url = `${BASEURL}top-headlines?country=${this.state.country}&category=${this.state.category}&pageSize=10`; 
        }

        else {
            url = `${BASEURL}everything?q=${this.state.query}&pageSize=10`;
        }

        console.log(url);
        fetch(url, {
            withCredentials: true,
            headers: {
                'Authorization': `Bearer ${KEY}`
            }
        })
            .then(results => results.json())
            .then(data => {
                if (data.status !== "ok") {
                    //console.log("not ok");
                    this.setState({ articles: data.message });
                    return;
                }
                //console.log("ok");
                let items = data.articles.map((article, idx) => {
                    return (
                        <li key={idx}>
                            <h4>{article.title}</h4>
                            <p>Published on <strong>{this.date(article.publishedAt)}</strong></p>
                            <p>{article.content}</p>
                            <span>Read full article <b><a href={article.url}>here</a></b></span>
                            <p><strong>Source</strong> - {article.author}, {article.source.name}</p>

                        </li>
                    );
                })

                this.setState({
                    ...this.state,
                    articles: items,
                    query: ""
                })
            });
    }

    render() {

        return (
            <div className="news">
                <h2>Latest news</h2><br />
                <div className="row" style={style3}>
                    <div className="col-6 col-sm-4">
                        <b>Category</b>
                    </div>
                    <div className="col-6 col-sm-4" style={{ textAlign: 'left' }}>
                        <select onChange={this.categoryChange} defautvalue="business">
                            <option value="business">Business</option>
                            <option value="entertainment">Entertainment</option>
                            <option value="general">General</option>
                            <option value="health">Health</option>
                            <option value="science">Science</option>
                            <option value="sports">Sports</option>
                            <option value="technology">Technology</option>
                        </select>
                    </div>
                </div>
                <div className="row" style={style3}>
                    <div className="col-6 col-sm-4">
                        <b>Search</b>
                    </div>
                    <div className="col-6 col-sm-4" style={{ textAlign: 'left' }}>
                        <input type="text" onChange={this.typeChange} value={this.state.query} placeholder="Optional" />
                    </div><br /><br />
                </div><br />
                <div className="row">
                    <div className="col-4">
                        <button onClick={this.onSubmit}>
                            <b>Enlighten me!</b>
                        </button>
                    </div>
                </div>
                <br />
                <div className="row">
                    <div className="col-12 col-md-9">
                        <ul className="list-unstyled">
                            {this.state.articles}
                        </ul>
                    </div>
                </div>
                <span><em>This page is powered by News API</em></span>
            </div>
        );
    }
}

export default News;