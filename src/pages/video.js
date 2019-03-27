import React, { Component } from 'react';

const KEY = "AIzaSyAdwEtSRKZTBk3-W3ygZvVcawIebzDXzh8";
const BASEURL = "https://www.googleapis.com/youtube/v3/search";

class Video extends Component {

    constructor(props) {
        super(props);

        this.state = {
            query: "",
            error: ""
        }

        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    onSubmit() {

        if(this.state.query === "") {
            this.setState({
                ...this.state,
                error: "Input field is empty"
            });
        }

        let url = `${BASEURL}?q=${this.state.query}&part=snippet&key=${KEY}&maxResults=2&type=video&videoEmbeddable=true`;

        fetch(url)
		.then(results => results.json())
		.then(data => {

			console.log(data);
			//console.log(url);

			let videoid = data.items.map(video => video.id.videoId);
			console.log(videoid);

			returnFrames(videoid);
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

        );
    }
}

export default Video;