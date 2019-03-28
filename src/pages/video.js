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
                error: "Input field is empty"
            });
        }

        let url = `${BASEURL}?q=${this.state.query}&part=snippet&key=${KEY}&maxResults=2&type=video&videoEmbeddable=true`;
        
        fetch(url)
		.then(results => results.json())
		.then(data => {

			console.log(data);
			//console.log(url);

			let videos = data.items.map(video => {

                return(
                    `<iframe width="560" height="315" 
		src="https://www.youtube.com/embed/${video.id.videoId}" frameborder="0" 
		allow="accelerometer; autoplay; encrypted-media; 
		gyroscope; picture-in-picture" allowfullscreen>
		</iframe>`
                );
            });
			

			this.setState({
                ...this.state,
                videos: videos
            })
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
            <div>
                <h3>Youtube Video search</h3>
                <input onChange={this.onChange} value={this.state.query} />
            </div>
        );
    }
}

export default Video;