import React, { Component } from 'react';
import searchYouTube from 'youtube-api-search';
import PlayerYT from './playerYT';
import style from './styles/searchYT/searchYT.css';

const key = 'AIzaSyC47z07dNmf28ZPt3MLOPGTuWm2zqpoLeg';

class searchYT extends Component {
	constructor(props) {
		super(props);
		this.state = {
			newTerm: '',
			 list: [],
			 idVideo: '',
			 newList: []
		};
	  }
	componentDidMount(){
	}
	findList(string){
		searchYouTube({key: key, term: string + ' KARAOKE', maxResults: 50}, (videos) => {
			this.setState({list: videos})
		});
	}

	shouldComponentUpdate(nextProps, nextState){
		if(this.props.term !== nextProps.term){
			this.findList(nextProps.term)
			return false;
		}else{
			return true;
		}
	}
	player(id){
		this.setState({idVideo: id})
	}
	getListInterpretes(){
		const _this = this;
		const int = this.props.interpretes.map(function(val, key){
			return (
				<div className="interprete" key={key} onClick={(e) => _this.findList(val)}>
					<i className="material-icons icon">adjust</i><span className="name">{val}</span><span></span>
				</div>
			)
		})

		return int;
	}
	createList(){
		const list = this.state.list;
		const _this = this;
		var lista = list.map(function(val, key){
			return(
				<div className="wraperSong" key={key}>
					<div className="songOption"  onClick={(e) => _this.player(val.id.videoId)}>
						<div className="thumb">
							<img src={val.snippet.thumbnails.high.url} alt={val.id.videoId} />
						</div>
						<div className="title">{val.snippet.title}</div>
						<div className="desc">{val.snippet.description}</div>
					</div>
				</div>
			)
		})
		return lista;
	}
  render() {

    return (
      <div className="youtubeSearch" >
			<div className="player">
				{this.createList()}
			</div>
			<div className="list">
				<PlayerYT idVideo={this.state.idVideo} width="100%" />
			</div>

			<div className="interpretes">
				{this.getListInterpretes()}
				<i className="material-icons search">search</i>
				<input type="text" className="filterInterpretes" placeholder="Filtrar"  />
			</div>
      </div>
    );
  }
}

export default searchYT;
