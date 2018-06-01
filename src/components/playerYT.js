import React, { Component } from 'react';
import ReactPlayer from 'react-player'

class PlayerYT extends Component {
  constructor() {
    super()
   const  state = {}
  }
  applyToPlayer() {
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
      <ReactPlayer url={'https://www.youtube.com/watch?v=' + this.props.idVideo} playing />
    );
  }
}

export default PlayerYT;