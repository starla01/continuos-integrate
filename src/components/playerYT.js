import React, { Component } from 'react';
import YoutubeReact from 'youtube-player-react';

class PlayerYT extends Component {
  constructor() {
    super()
    this.state = {
      videoid: '', listType:'search', list:'', loop:0, autoplay:1
    }
    this.applyToPlayer = this.applyToPlayer.bind(this);
    this.onEnded = this.onEnded.bind(this);
    this.onPaused = this.onPaused.bind(this);
    this.onPlayed = this.onPlayed.bind(this);
    this.onReady = this.onReady.bind(this);
  }

  applyToPlayer() {

	let videoid = this.state.idVideo;
    let listType = 'search';
    let list = '';
    let loop = 0;
    this.setState({
      videoid:videoid, listType:listType, list:list, loop: parseInt(loop,10), autoplay: 1
    })
  }

  onEnded() {
    console.log("### onEnd Callbacked")
  }

  onPaused() {
    console.log("### onPaused Callbacked")
  }

  onPlayed() {
    console.log("### onPlayed Callbacked")
  }

  onReady() {
    console.log("### onReady callbacked")
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
	this.applyToPlayer();
  }
  render() {
    return (
      <div className="App">
        <YoutubeReact
          ref={(player)=>{ this.player=player}}
          videoid={this.state.idVideo}
          listType={this.state.listType}
          list={this.state.list}
          autoplay={this.state.idVideo}
          onEnded={this.onEnded}
          onPaused={this.onPaused}
          onPlayed={this.onPlayed}
          onReady={this.onReady}
          width="850"
          height="500" />
      </div>
    );
  }
}

export default PlayerYT;