import React, { Component } from 'react';

const KEY = "AIzaSyAdwEtSRKZTBk3-W3ygZvVcawIebzDXzh8";
const BASEURL = "https://www.googleapis.com/youtube/v3/search";

class Video extends Component {

    constructor(props) {
        super(props);

        this.state = {
            query: "",
            error: "",
            videos: ""
        }

        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    onSubmit() {

        if(this.state.query === "") {
            this.setState({
                ...this.state,
                videos: "Input field is empty"
            });
            return
        }

        this.setState({
            ...this.state,
            videos: "Loading your content"
        });

        let url = `${BASEURL}?q=${this.state.query}&part=snippet&key=${KEY}&maxResults=2&type=video&videoEmbeddable=true`;
        
        fetch(url, {
            method: "GET"
        })
		.then(results => results.json())
		.then(data => {

			
			console.log(url);

			let videos = data.items.map((video,idx) => {

                return(
                    <li key={idx}>
                    <iframe title={idx} src={`https://www.youtube.com/embed/${video.id.videoId}`} frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen>
		            </iframe></li>
                );
            });
			

			this.setState({
                ...this.state,
                videos: videos
            });
		})
    }

    onChange(e) {
        this.setState({
            ...this.state,
            query: e.target.value
        })
    }

    render() {


        return(
            <div className="videos">
                <h3>Youtube Video search</h3>
                <div className="row">
                    <div className="col-12">
                        <input onChange={this.onChange} value={this.state.query} />
                        <button onClick={this.onSubmit}>Search</button>
                    </div>
                </div>
                <div>
                    <ul className="list-unstyled">
                        {this.state.videos}
                    </ul>
                </div>
            </div>
        );
    }
}

export default Video;