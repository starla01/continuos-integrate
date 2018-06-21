import React, { Component } from 'react';
import searchYouTube from 'youtube-api-search';
import PlayerYT from './playerYT';
import style from './styles/searchYT/searchYT.css';

const key = 'AIzaSyC47z07dNmf28ZPt3MLOPGTuWm2zqpoLeg';
let wording = '';
class searchYT extends Component {
	constructor(props) {
		super(props);
		this.state = {
			newTerm: '',
			 list: [],
			 idVideo: '',
			 newList: [],
			 title: '',
			 users: [],
			 typedName: '',
			 standByParticipant: 0
		};
	  }
	componentDidMount(){
		this.genParticipants();
		this.initVoice();
	}
	createTypedName(e){
		this.setState({typedName: e.target.value});
	}
	AddParticipant(){
		const participant = {};
		const users = this.state.users;
		participant.nombre = '';
			participant.nombre = this.state.typedName;
			participant.points = 0;
			participant.calificacion = [];
		if(participant.nombre !== ''){
			users.push(participant);
			this.setState({users: users});
		}

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
	player(id, title){
		this.setState({idVideo: id, title: title})
	}
	getListInterpretes(){
		const _this = this;
		const int = this.props.interpretes.map(function(val, key){
			return (
				<div className="interprete" key={key} onClick={(e) => _this.findList(val)}>
					<i className="material-icons icon">queue_music</i><span className="name">{val}</span><span></span>
				</div>
			)
		})
		return int;
	}
	selectParticipant(e, id){
		this.setState({standByParticipant: id})
	}
	asignPoint(){
		const _this = this;
		const POINTS = Math.random() * (10 - 5) + 5;
			for(var i = 0; i <= this.state.users.length-1; i++){
					if(i === this.state.standByParticipant){
						const c = this.state.users[i].calificacion;
						c.push(Math.floor(POINTS));
						_this.setState({calificacion: c});
						_this.getPoints(i);
					}
			}
	}
	getPoints(index){
		const _this = this;
		for(var i = 0; i <= this.state.users.length-1; i++){

				console.log(_this.state.users[i].calificacion.length)
			 if(_this.state.users[i].calificacion.length){
				const reducer = (accumulator, currentValue) => accumulator + currentValue;
				const cal = (_this.state.users[i].calificacion.reduce(reducer) / _this.state.users[i].calificacion.length);
				const c = this.state.users[i];
				if(i === index){
					c.points = cal;
					_this.setState({points: c});
				}
			 }
		}
	}
	getStars(points){

	}
	genParticipants(){
		const _this = this;

		const list = this.state.users.map(function(val, key){
				return (
					<div  key={key} className={key === _this.state.standByParticipant ? "more participant active" : "more participant"} onClick={(e) =>_this.selectParticipant(e, key)}>
					<i className="material-icons califica" onClick={() => _this.asignPoint()}>cached</i>
					<i className="material-icons icon">account_circle</i><br />
					<span className="text">{val.nombre}</span>
					<div className="calificacion">
						{_this.getStars(val.points)}
						<br /> <span className="points">{Math.floor(val.points)}</span>
					</div>
				</div>
				)
		})
		return list;
	}
	createList(){
		const list = this.state.list;
		const _this = this;
		var lista = list.map(function(val, key){
			return(
				<div className="wraperSong" key={key}>
					<div className="songOption"  onClick={(e) => _this.player(val.id.videoId, val.snippet.title)}>
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
	initVoice(){
		var _this = this;
		this.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition || window.mozSpeechRecognition || window.msSpeechRecognition || window.oSpeechRecognition;
		this.recognition = new this.SpeechRecognition();
		this.recognition.lang = 'ES-MX';
		this.recognition.continuos = false;
		this.recognition.interimResults = true;
		this.recognition.start();
		
		this.recognition.onresult = function(event){
			alert(event.resultIndex)
			for(var i = event.resultIndex; i < event.results.length; i++){
				if(event.results[i].isFinal){
					if(event.results[i].isFinal){ _this.wording = event.results[i][0].transcript }
				}
			}
		}
		this.recognition.onstart = function(){}
		this.recognition.onerror = function(event){
			alert(event.error)
		}
		this.recognition.onend = function(){
			if(_this.wording ==! undefined || _this.wording !== ''){
				_this.cleanText(_this.wording)
				_this.wording = '';
			}
			_this.initVoice();
		}
	}
	cleanText(text){
			const _this = this;
			const arrWords = text ? text.split(' ') : '';
			const trigger = arrWords[0];
			const finder = arrWords[1] + ' ' + arrWords[2] + ' ' + arrWords[3] + ' ' + arrWords[4]


			console.log(trigger);
			if(trigger === 'busca' || trigger === "Busca" || trigger === "Buscar" || trigger === "buscar"){
				this.props.setFinder(finder, this.props.thiss)
				const newFinder = finder.replace(/undefined/g, '');
				this.speaker("Buscando " + newFinder)
			}
		//this.speaker(text);
	}
	speaker(string){
		var msg = new SpeechSynthesisUtterance();
		msg.text = string;
		msg.volume = parseFloat(1);
		msg.rate = parseFloat(0.9);
		msg.pitch = parseFloat(1.3);
		var voice = 'Google expañol de México';
		if(voice) {
			msg.voice = speechSynthesis.getVoices().filter(function(){ return voice.name === voice; })[0]; 
		}
		window.speechSynthesis.speak(msg);
	}
  render() {
		console.log(this.state.typedName)
    return (
      <div className="youtubeSearch" >
			<div className="player">
				{ this.state.list.length ? this.createList() : <div className="empty">Selecciona un letra de la A a la Z o búsca una canción o artista desde el buscador para encontrar videos de <span>Karaoke.</span></div>}
			</div>
			<div className="list">
				<PlayerYT idVideo={this.state.idVideo} titleVideo={this.state.title} width={50} />
				<div className="voice">
					<div className="boxIA">
						<div id="s1" className="shape">
							<img src="images/IAMOM.png" />
						</div>
						<div id="s2" className="shape">
							<img src="../images/IAMOM.png" />
						</div>
						<div id="s3" className="shape">
							<img src="/images/IAMOM.png" />
						</div>
						<div id="s4" className="shape">
							<img src="/images/IAMOM2.png" />
						</div>
						<div id="s5" className="shape">
							<img src="/images/IAMOM2.png" />
						</div>
					</div>
				</div>
				{/* <div className="participants">
						<div className='message' >Para tener una mejor experiencia de competencia agrega participantes a la lista,<br />Para poder asignar Calificacion seleccionar participante antes de iniciar a cantar</div>
						<div className="addUser">
							<input type="user" placeholder="Nombre del participante" onChange={(e) => this.createTypedName(e)} />
							<i className="material-icons icon" onClick={() => this.AddParticipant()}>send</i>
						</div>
						<div className="listParticipantes">
								<div className="more">
									<i className="material-icons icon">accessibility</i><br />
									<span className="text">Agregar</span>
								</div>
								{ this.genParticipants() }
						</div>
				</div>
				<div className=""></div> */}
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
