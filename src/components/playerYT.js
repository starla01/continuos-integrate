import React, { Component } from 'react';
import YoutubeReact from 'youtube-player-react'

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
    
    let currentState = this.state;
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
	  console.log("- VIDEO: - ", this.state.idVideo)
    return (
      <div className="App">
        <div>
          {/* video_id : <input type="text" ref={(videoid)=> { this.videoid = videoid }} defaultValue={this.state.videoid} /><br />
          listType : <input type="text" ref={(listType)=> { this.listType = listType }} defaultValue={this.state.listType} /><br />
          list : <input type="text"  ref={(list)=> { this.list = list }} defaultValue={this.state.list}/><br />
          loop : <input type="number"  ref={(loop)=> { this.loop = loop }} defaultValue={this.state.loop} /><br />
          <button onClick={()=> { this.applyToPlayer() }}>Apply</button>
          <button onClick={()=> { this.player.playVideo() }}>Play</button>
          <button onClick={()=> { this.player.stopVideo() }}>Stop</button>
          <button onClick={()=> { this.player.pauseVideo() }}>Pause</button> */}
        </div>
        <YoutubeReact ref={(player)=>{ this.player = player }} videoid={this.state.idVideo}
          listType={this.state.listType} list={this.state.list} autoplay={this.state.idVideo}
          onEnded={this.onEnded} onPaused={this.onPaused} 
          onPlayed={this.onPlayed} onReady={this.onReady}
		  width={850}  height={500} />
		  
      </div>
    );
  }
}

export default PlayerYT;