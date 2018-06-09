import React, { Component } from 'react';
import styles from './styles/playerYT/playerYT.css';
import YoutubePlayer from 'react-youtube-player';


class PlayerYT extends Component {
  constructor(props) {
    super(props);
    this.state = {
     idVideo: null
    }
  }

  shouldComponentUpdate(nextProps, nextState){
	if(this.props.idVideo !== nextProps.idVideo ){
		this.setState({idVideo: nextProps.idVideo})
		return false;
	}else{
		return true;
	}
  }
  componentWillMount(){

  }
  render() {
    const ID = this.state.idVideo;
    return (
        <div>
             <p className="videoTitle">{this.props.titleVideo}</p>
             <YoutubePlayer
                videoId={ID}
                height={'550px'}
                playbackState='unstarted'
                configuration={{ "showinfo": 1, "controls": 1 }}
            />
        </div>
    );
  }
}

export default PlayerYT;