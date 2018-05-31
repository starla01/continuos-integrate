import React, { Component } from 'react';
import './App.css';
import SearchYT from './components/searchYT';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: '',
      searchTerm: '',
      letter: 'A',
      alphabet: ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'],
      filtro: [],
      interpretes: [
        "5 Second",
"5 Seconds",
"A Teens",
"Abba Chiquitita",
"Abba Dancing",
"karaoke Abba",
"Abba",
"Abigail Gitano",
"Abraham Mateo",
"ACDC",
"Adamo",
"Adele",
"Adrian Otero",
"Adriano Celentano",
"Adriano Pappalardo",
"Agua Marina",
"Agustin Irusta",
"Agustin Lara",
"Agustin Pantoja",
"Ah Has",
"Aha Take",
"Ainhoa No",
"estelar Ainhoa",
"Ainoha Con",
"Ainoha Viva",
"Aitana Y",
"Al Bano",
"estelar Al",
"lover Al",
"Alain Barriere",
"lover Alain",
"Alan Parsons",
"Alanis Morisette",
"Alaska",
"Albert Hammond",
"Alberto Cortez",
"Alberto Vasquez",
"Alborada Flamenca",
"Aldo Monges",
"Alejandra Guzman",
"Alejandro Conde",
"Alejandro Fernandez",
"Alejandro Fillio",
"latino Alejandro",
"Alejandro Parreño",
"Alejandro Sanz",
"Aleks Sintexs",
"Alesha Dixon",
"Aleshia Dixon",
"Alex Ubago",
"Alexandra",
"Alfonso Pahino",
"Alfred Y",
"Alfredo Kraus",
"lover Alfredo",
"Alicia Keys",
"Alicia Villareal",
"Alizee A",
"Alizee Lolita",
"Allman Brothers",
"Alma Flamenca",
"Alvaro Soler",
"Amaia Montero",
"estelar Amaia",
"Amalia De",
"Amanda Miguel",
"Amaral",
"Amauri Gutierrez",
"Ambra Te",
"Amedeo Minghi",
"Americo Que",
"Amigos De",
"Amistades Peligrosas",
"Amparo Sandino",
"Amy Winehouse",
"estelar Amy",
"Ana Barbara",
"Ana Belen",
"Ana Gabriel",
"karaoke Ana",
"Ana Torroja",
"Anamor Memelo",
"Anamor Y",
"Andrea Boccelli",
"Andrea Bocelli",
"lover Andrea",
"Andreas Johnson",
"Andres Caparros",
"Andres Cepeda",
"Andres Do",
"lover Andres",
"Andres El",
"Andy Williams",
"Andy Y",
"karaoke Andy",
"Angela Carrasco",
"lover Angela",
"Angela Molina",
"Angelillo Soy",
"Anna Oxa",
"Antoine Les",
"catalá Antonia",
"Antonio Aguilar",
"Antonio Amaya",
"Antonio Banderas",
"Antonio Carmona",
"Antonio Cortes",
"Antonio Flores",
"lover Antonio",
"Antonio Jose",
"Antonio Machin",
"Antonio Molina",
"Antonio Morales",
"Antonio Orozco",
"estelar Antonio",
"Antonio Prieto",
"Antonio Rios",
"Antonio Romero",
"Antonio Vega",
"Antoñita Moreno",
"Antoñita Peñuela",
"Aretha Franklin",
"Argentino Ledezma",
"Ariel Roth",
"Armando Manzanero",
"Asignatura Pendiente",
"Atahualpa Yupanqui",
"Aventura Obsesion",
"Avicii Hey",
"Avril Lavigne",
"Azucar Moreno",
"Azul Azul",
"Azuquita We",
"B J",
"B.s.o. Annie",
"karaoke Bacilos",
"Bananarama I",
"Bangles Dejame",
"Bangles Eternal",
"Bap Verdamp",
"Barbra Streisand",
"Barry White",
"catalá Bars",
"Basilio Cisne",
"lover Basilio",
"Basilio No",
"Basilio Te",
"Basilio Ve",
"Basilio Vivir",
"Beach Boys",
"Beatles La",
"Beatles Please",
"Beatles Sargento",
"Beatles Socorro",
"Beatles Submarino",
"karaoke Beatriz",
"Beatriz Luengo",
"Becky G",
"Bee Gees",
"estelar Belanova",
"Belanova No",
"Belinda Bella",
"Belinda Lo",
"Bellepop Esta",
"karaoke Bellepop",
"Ben E.",
"Bertin Osborne",
"estelar Bertin",
"lover Bertin",
"Beth Cerrando",
"karaoke Beth",
"Beth Dime",
"Beth En",
"Bette Midler",
"Betty Missiego",
"karaoke Beyonce",
"Beyonce Listen",
"Beyonce Sweet",
"Beyonce Trust",
"estelar Beyonce",
"Beyonce Y",
"Big Montain",
"Billos Caracas",
"Billy Joel",
"Billy Paul",
"Black Eyed",
"Blondie The",
"Blue Diamonds",
"Bnk Dame",
"Bob Dylan",
"Bob Marley",
"Bob Seger",
"Bob Sinclair",
"Bobby Goldsboro",
"Bobby Vinton",
"Bola De",
"Boleros Eso",
"Bon Jovi",
"Boney M",
"Bonnie Tyler",
"Bordon 4",
"karaoke Braulio",
"Braulio Duarte",
"Braulio El",
"Braulio En",
"lover Braulio",
"Braulio Para",
"Braulio Que",
"Brian Hyland",
"Brigada Boom",
"Britney Spears",
"karaoke Britney",
"Bronco Naila",
"Bruce Springteen",
"Bruno E",
"Bruno Lomas",
"lover Bruno",
"Bruno Mars",
"karaoke Bruno",
"Bryan Adams",
"Bso Fama",
"Bso Peter",
"Burning Mueve",
"Burning Que",
"lover Burning",
"C.jerome Et",
"Cabaret Pop",
"Cafe Quijano",
"Café Quijano",
"Calaitos Es",
"Calaitos Juntos",
"Calaitos Madre",
"Cali Y",
"Calle Paris",
"Camaron Como",
"Camaron Rosa",
"Camaron Volando",
"Camila",
"Camilo Sesto",
"Canovas Alonso",
"Cantores De",
"Capitan Canalla",
"Carla Bruni",
"Carlos Baute",
"Carlos Cano",
"lover Carlos",
"Carlos Fenix",
"Carlos Gardel",
"karaoke Carlos",
"Carlos Mejia",
"Carlos Ponce",
"Carlos Rivera",
"Carlos Vives",
"Carly Rae",
"Carmen Morell",
"Carmen Sevilla",
"Cecilia Dama",
"karaoke Cecilia",
"Cecilia Doña",
"Cecilia Equilibrista",
"Cecilia Mi",
"Cecilia Un",
"Cecilia Y",
"Celia Cruz",
"lover Celia",
"Celine Dion",
"estelar Celine",
"Celtas Cortos",
"Cesar Menotti",
"Chabuca Granda",
"Chacho Santa",
"Chaka Khan",
"estelar Chambao",
"Chambao Papeles",
"Charles Aznavour",
"lover Charles",
"Charlie Zaa",
"lover Chavela",
"Chavela Vargas",
"Chayanne",
"Chema Puente",
"Chenoa",
"Cher Lloyd",
"Chichi Peralta",
"Chico Novarro",
"Chino",
"Chiquetete",
"Chocolate Mayonesa",
"Chris De",
"Chris Duran",
"Chris Rea",
"Chris Roberts",
"lover Christian",
"Christian Castro",
"Christmas Song",
"Christophe Aline",
"Christopher Cross",
"Chucho Avellanet",
"Claude Nougaro",
"Claudia Mori",
"Claudio Baglioni",
"lover Claudio",
"Claudio Villa",
"lover Clay",
"Colbie Caillat",
"Collage Como",
"Collage Poco",
"karaoke Collectif",
"karaoke Colonel",
"Complices Al rescate",
"Complices Cuando",
"Complices El",
"karaoke Complices",
"Complices Es",
"latino Complices",
"Complices Esta",
"Complices Hoy",
"Complices Los",
"Concha Buika",
"Concha Piquer",
"Concha Velasco",
"Conexión Harmony",
"Conny Zwei",
"lover Consuelo",
"Coral En",
"Cortes No",
"Cosa De",
"Coti Antes",
"estelar Coti",
"Coti Nada",
"Coti Nunca",
"Counting Crows",
"Coyote Dax",
"Coz Las",
"lover Cristina",
"Cristina Una",
"Cristina Aguilera",
"musica Cristina",
"Cristina Del",
"Cristina Y",
"Cristoph Aline",
"Culture Club",
"Daddy Yankee",
"Dan Balan",
"Dani Martin",
"Dani Mata",
"Daniel Andrea",
"Daniel Diges",
"karaoke Daniel",
"Daniel Powter",
"Daniel Toro",
"Daniel Velazquez",
"Daniela Castro",
"Daniela Romo",
"Danna Garcia",
"karaoke Danni",
"lover Danny",
"Danny Daniel",
"Danza Invisible",
"Dasoul El",
"David Bisbal",
"latino David",
"karaoke David",
"David Bustamante",
"estelar David",
"David Cavazos",
"David Civera",
"David De",
"David Guetta",
"David Lee",
"David Otero",
"David Tavare",
"Dayana Mi",
"Demis Russos",
"Desmadre 85",
"Despistaos Cada",
"Despistaos Fisica",
"Diana Navarro",
"estelar Diana",
"Die Prinzen",
"Diego Benjumea",
"Diego Martin",
"Diego Torres",
"latino Diego",
"musica Diego",
"estelar Diego",
"Dire Strait",
"Dire Straits",
"latino Disney",
"Disney El",
"Disney La",
"Disney No",
"Disney Sueltalo",
"Dolores Vargas",
"Domenico Modugno",
"lover Domenico",
"Don Omar",
"Donna Summers",
"Doris Day",
"estelar Dover",
"Dover Let",
"Dover Serenade",
"Drafi Deutscher",
"Drupi Marcho",
"Drupi Sereno",
"Duffy Mercy",
"lover Dulce",
"lover Duncan",
"Duncan Dhu",
"karaoke Duncan",
"Duncan Duh",
"Duo Dinamico",
"lover Duo",
"karaoke Duo",
"Dvicio Casi",
"Dvicio Enamorate",
"Dvicio Paraiso",
"Dyango",
"Ecos Del",
"musica Eddie",
"Edit Piaf",
"Edith Piaf",
"Ednita Nazario",
"Edoardo Vianello",
"Edurne Amanecer",
"Edurne Amores",
"Edurne Despierta",
"Edurne No",
"Edurne Te",
"Edurne Ven",
"Edward Maya",
"estelar Efecto",
"Efecto Mariposa",
"Efecto Pasillo",
"2 Eidie",
"Eidie Gormie",
"El Arrebato",
"estelar El",
"El Barrio",
"El Canto",
"karaoke El",
"El Chaval",
"El Consorcio",
"El Gran",
"El Koala",
"El Loreño",
"El Maki",
"El Mejorano",
"El Norte",
"El Pali",
"El Payo",
"El Pescao",
"El Principe",
"El Puma",
"2 El",
"El Simbolo",
"El Sueno",
"El Sueño",
"El Ultimo",
"Elefante Asi",
"Elio Roca",
"Ella Baila",
"Ellie Goulding",
"catalá Els",
"Elsa Baeza",
"Elton John",
"Elvis Crespo",
"Elvis Presley",
"Emilio Aragon",
"Emilio Jose",
"Emilio Pericoli",
"Emmanuel Bella",
"Emmanuel Detenedla",
"Emmanuel Insoportablemente",
"estelar Emmanuel",
"Emmanuel Sentirme",
"Encarnita Polo",
"Engelbert Humperdinck",
"Enrico Caruso",
"karaoke Enrique",
"Enrique Bunbury",
"Enrique Casellas",
"Enrique Guzman",
"lover Enrique",
"Enrique Iglesias",
"estelar Enrique",
"musica Enrique",
"Enrique Montoya",
"estelar Er",
"Ernie Ford",
"Eros Ramazotti",
"Eros Ramazzotti",
"lover Eros",
"karaoke Eros",
"Erpeche Delicada",
"Estopa Bossanova",
"Estopa",
"estelar Estrella",
"Estrellita Castro",
"Estrellita De",
"lover Eugenia",
"Europe The",
"Eva Pequeño",
"Eva Ruiz",
"Evanescence My",
"karaoke Exikixu",
"Extremoduro So",
"Eydie Gorme",
"Fabio Concato",
"Fabrizio De",
"Facundo Cabral",
"Falete Sin",
"Falete Sos",
"Fats Domino",
"Fausto Leali",
"Fernando E",
"lover Fernando",
"Fey Ni",
"Fiordaliso Y",
"Fito Paez",
"Fito Y",
"estelar Fito",
"Florencio Torrelledo",
"Floricienta Mi",
"Floricienta Porque",
"Fonseca Eres",
"Fools Garden",
"latino Formula",
"Formula V",
"lover Formula",
"Fran Perea",
"France Gall",
"Francesco Guccini",
"Francis Cabrel",
"karaoke Francis",
"Francisco A",
"Francisco Acapulco",
"Francisco Cariño",
"lover Francisco",
"Francisco Desde",
"Francisco La",
"Francisco Latino",
"Francisco Morucha",
"Francisco Penas",
"Francisco Pintada",
"Francisco Tu",
"Francisco Valencia",
"Francisco Violetas",
"Francisco Canaro",
"Francisco Céspedes",
"Francisco Cespedes",
"karaoke Francisco",
"karaoke Franco",
"Franco Battiato",
"Franco De",
"Franco Simone",
"Frank Sinatra",
"Fredik Kempe",
"Fredrik Kempe",
"Fugees Killing",
"Funambulista Hecho",
"Funambulista Quedate",
"Funambulista Quiero",
"Gabinete Caligari",
"Galy Galiano",
"2 Garibaldi",
"Gatos Locos",
"Gelu Como",
"Gelu Ninguno",
"Gelu Siempre",
"Gema Concierto",
"Gema Cuando",
"Gema Yo",
"Gene Kelly",
"Geno Mi",
"Gente De",
"Georges Moustaki",
"Georgi Dann",
"Georgie Dann",
"Georgina Con",
"Georgina Soñador",
"Gerard Joling",
"Gerard Lenorman",
"Gianni Bella",
"Gianni Morandi",
"Giardino Dei",
"Gigantes De",
"Gigliola Cinquetti",
"Gilbert Becaud",
"Gilberto Santa",
"musica Gilberto",
"Gino Paoli",
"Gipsy King",
"Gipsy Kings",
"Girasoules Te",
"latino Gisela",
"Gisela Quedate",
"Gisela Y",
"Gloria Si",
"Gloria Estefan",
"musica Gloria",
"2 Gloria",
"latino Gloria",
"Gloria Gaynor",
"Gloria Lasso",
"Gloria Trevi",
"Golpes Bajos",
"Gonzalo Quien",
"Gonzalo Soy",
"Gospel Oh",
"Gotye Ft.",
"Gracia De",
"Gracia Di",
"Gracia Montes",
"Greenday When",
"Greta Y",
"Grupo Canaveral",
"Guarana Ay",
"Guarana Noche",
"Guess Who",
"catalá Guillermina",
"Guns And",
"Guns N",
"Gypsi King",
"lover Gypsi",
"Ha Ash",
"Habaneras",
"Hanna Como",
"Hector Lavoe",
"Hector Y",
"Heleno La",
"Henry Stephens",
"Hermanas Goggi",
"Hermanos Reyes",
"Heroes Del",
"lover Heroes",
"estelar Heroes",
"lover Herve",
"karaoke Hesian",
"lover Hilario",
"Hilario Camacho",
"Himnos De",
"Hombes G",
"Hombres G",
"estelar Hombres",
"Homo Sapiens",
"karaoke Hugo",
"Hugo Del",
"I Pooh",
"I Santo",
"Iguana Tango",
"lover Il",
"Il Divo",
"Ilegales Cara",
"Ilegales Hola",
"Ilegales Tu",
"Imperio Argentina",
"India Martinez",
"Infantiles",
"Inhumanos Duba",
"Inhumanos No",
"Inhumanos Que",
"Iran Castillo",
"Irisneyda Loca",
"Irma Serrano",
"Isabel Pantoja",
"karaoke Isabel",
"lover Isabel",
"Ismael Serrano",
"Iva Zanicchi",
"Ivan Fotonovela",
"Ivan Sin",
"Ivan Guevara",
"Jaci Velasquez",
"Jacques Brel",
"Jade Secreto",
"Jaime Morey",
"Jairo Amigos",
"Jairo Memorias",
"Jairo Nuestro",
"Jairo Por",
"James Arthur",
"James Blunt",
"James Brown",
"James Taylor",
"Janet Jackson",
"Jarabe De",
"Jarcha Libertad",
"Jason Derulo",
"catalá Jaume",
"Javi Cantero",
"Javier Alvarez",
"Javier Moya",
"Javier Oliver",
"Javier Solis",
"estelar Javier",
"Jean Francoise",
"Jeanette Callate",
"Jeanette Corazon",
"Jeanette Cuando",
"Jeanette Por",
"Jeanette Soy",
"Jeanette Y",
"karaoke Jenifer",
"Jennifer Lopez",
"estelar Jennifer",
"Jeronimo Amor",
"Jeronimo Detras",
"Jeronimo Quien",
"Jeronimo Siempre",
"Jeronimo Vivire",
"Jerry Rivera",
"karaoke Jerry",
"Jesse Y",
"lover Jimenez",
"Jimmy Fontana",
"estelar Jimmy",
"Jimmy Hendrix",
"Jimy Fontana",
"Jls Take",
"catalá Joan",
"Joan Baez",
"Joan Baptista",
"Joan Sebastian",
"Joaquin Sabina",
"lover Joaquin",
"estelar Joaquin",
"karaoke Joaquin",
"Jocelyn Brown",
"Joe Cocker",
"karaoke Joe",
"Joe Dassin",
"Joe Dolan",
"Joey Montana",
"John Lennon",
"Johnny Dorelli",
"Johnny Y",
"Jon Secada",
"Jorge Cafrune",
"Jorge De",
"Jorge Drexler",
"Jorge Gonzalez",
"Jorge Negrete",
"Jorge Sepulveda",
"Jose Alfredo",
"Jose Augusto",
"Jose Carreras",
"Jose De",
"Jose Domingo",
"estelar Jose",
"Jose El",
"lover Jose",
"Jose Feliciano",
"Jose Guardiola",
"lover José",
"2 Jose",
"Jose Jose",
"karaoke Jose",
"Jose Luis",
"Jose Manuel",
"Jose Merce",
"Jose Velez",
"Joseph Fonseca",
"Journey Don't",
"Jovanotti Libera",
"Jovanotti Muoviti",
"lover Juan",
"Juan Bau",
"Juan Camacho",
"Juan Camus",
"Juan Erasmo",
"Juan Gabriel",
"2 Juan",
"estelar Juan",
"Juan Lozano",
"Juan Luis",
"Juan M",
"Juan Magan",
"Juan Pardo",
"Juan Sebastian",
"Juan Valentin",
"Juan Y",
"Juanes A",
"Juanes Fotografia",
"Juanes Gotas",
"Juanes La",
"karaoke Juanes",
"Juanes Me",
"Juanes Para",
"Juanes Tres",
"Juanes Volverte",
"Juanes Y",
"Juanita Reina",
"lover Juanita",
"Juanito Valderrama",
"Juanto Valderrama",
"Julia Graciela",
"Julian Granados",
"Julieta Venegas",
"estelar Julieta",
"Julio Cuellar",
"lover Julio",
"Julio Iglesias",
"Julio Madrid",
"Junco Hola",
"Junior Perdoname",
"Jurgen Drews",
"Jurgen Markus",
"Justin Bieber",
"K-narias No",
"2 Kairo",
"Kany Garcia",
"Kaoma Lambada",
"Karina El",
"Karina La",
"Karina Las",
"Karina Los",
"Karina Muñeca",
"Karina Romeo",
"Katie Melua",
"Katy Perry",
"karaoke Katy",
"karaoke Kauta",
"Kelly Rowland",
"karaoke Ken7",
"Kerouacs Isla",
"Kesha Tik",
"Ketama Loko",
"Ketama No",
"Ketama Vente",
"Kike Roca",
"Kiko Y",
"King Africa",
"Kiss I",
"Kuldip Los",
"Kuldip Ojos",
"La Cabra",
"La Caja",
"La Compañía",
"La Dama",
"La Decada",
"La Fiesta",
"La Frontera",
"La Grande",
"La Guardia",
"La Hungara",
"La India",
"estelar La",
"La Maffia",
"La Mosca",
"La Musicalite",
"La Negra",
"La Oreja",
"karaoke La",
"La Paquera",
"La Parranda",
"La Quinta",
"La Sole",
"La Sonrisa",
"La Terremoto",
"La Trampa",
"catalá La",
"La Trinca",
"La Tuna",
"La Union",
"Labuat Soy",
"Ladri Di",
"Lady Antebellum",
"Lady Gaga",
"karaoke Lady",
"karaoke Lalo",
"Lalo Rodriguez",
"Lara Fabian",
"estelar Lara",
"latino Lara",
"Laredo El",
"lover Las",
"Las Chicas",
"Las Grecas",
"Las Hijas",
"Las Ketchup",
"Las Meninas",
"Las Supremas",
"Latin Lou",
"Laura Esquivel",
"Laura Leon",
"Laura Miller",
"Laura Pausini",
"musica Laura",
"estelar Laura",
"Laury La",
"catalá Laxen'",
"Leann Rimes",
"Led Zeppelin",
"Leno Maneras",
"estelar Leo",
"Leo Dan",
"Leo Rubio",
"Leo Segarra",
"Leona Lewis",
"Leonardo Favio",
"lover Leonardo",
"estelar Leonardo",
"karaoke Leonardo",
"Ligabue Libera",
"Lilian De",
"Linkin Park",
"Linking Park",
"Lionel Richie",
"Lluis Llach",
"catalá Lluis",
"karaoke Lmfao",
"Locomia Loco",
"Lola Beltran",
"Lola Flores",
"Lolita Amor",
"Lolita No",
"Lolita Sabor",
"Lolita Sarandonga",
"Lolita Te",
"lover Lolita",
"Lolita Y",
"Lone Star",
"lover Lone",
"Loquillo Cadillac",
"Loquillo Chanel",
"Loquillo El",
"Loquillo Feo",
"Loquillo La",
"Loquillo Quiero",
"Loquillo Ritmo",
"Loquillo Simpatia",
"Loquillo Un",
"Loquillo Y",
"Lorca Besame",
"Loredana Berte",
"Lorena Sin",
"Lorena Titanic",
"Lorenzo De",
"Lorenzo Gonzalez",
"Lorenzo Santamaria",
"Lorenzo Valverde",
"Lori Meyers",
"Los 3",
"Los 5",
"Los Albas",
"Los Amaya",
"Los Angeles",
"lover Los",
"Los Bravos",
"Los Brincos",
"Los Cabales",
"Los Cadetes",
"Los Calis",
"Los Canarios",
"Los Caños",
"Los Cardiacos",
"Los Centellas",
"Los Chichos",
"Los Chunguitos",
"Los Cuates",
"estelar Los",
"Los Del",
"Los Diablos",
"Los Estudiantes",
"Los Flechazos",
"Los Fronterizos",
"Los Gavilanes",
"Los Gritos",
"Los Guaraguaos",
"Los Happyness",
"Los Hh",
"Los Hispalenses",
"Los Iberos",
"Los Inhumanos",
"Los Iracundos",
"Los Javaloyas",
"Los Limones",
"Los Manolos",
"Los Mismos",
"Los Mitos",
"karaoke Los",
"Los Moles",
"Los Mustang",
"Los Nikis",
"Los Nocheros",
"Los Panchos",
"2 Los",
"Los Pasos",
"Los Pasteles",
"Los Payos",
"Los Peces",
"Los Pecos",
"Los Pekenikes",
"Los Piratas",
"Los Pistones",
"Los Puntos",
"Los Rebeldes",
"Los Rodriguez",
"Los Romeos",
"Los Salvajes",
"Los Secretos",
"Los Sencillos",
"Los Sirex",
"Los Sobraos",
"Los Suaves",
"Los Sultanes",
"Los Tamara",
"Los Tecolines",
"Los Tenientes",
"Los Top-son",
"Los Yonics",
"Lucca Barbarossa",
"Lucero Me",
"Lucero Necesito",
"Lucero Tacticas",
"Lucero Tu",
"Lucero Y",
"Lucho Gatica",
"Luciano Pavarotti",
"Luciano Pereyra",
"Lucie Silvas",
"Lucio Battisti",
"Lucio Dalla",
"Lucrecia Mi",
"Luis Aguile",
"Luis Eduardo",
"estelar Luis",
"Luis Fonsi",
"karaoke Luis",
"Luis Gardey",
"Luis Lucena",
"Luis Mariano",
"Luis Miguel",
"2 Luis",
"lover Luis",
"latino Luis",
"Luisito Rey",
"Luz Casal",
"karaoke Luz",
"Lydia Aun",
"Lydia Sin",
"Lynn Anderson",
"M-clan Carolina",
"M-clan Llamando",
"M-clan Magie",
"M-clan Miedo",
"M-clan Oigo",
"estelar M-clan",
"M-clan Sopa",
"Madonna Give",
"Madonna Hung",
"Madonna La",
"Madonna Like",
"Mago De",
"Maita Vende",
"Maixa Ta",
"Maldita Nerea",
"karaoke Maldita",
"Malena Gracia",
"Malu A",
"Malú Ahora",
"Malu Angel",
"Malu Aprendiz",
"Malú Así",
"Malu Blanco",
"Malu Cenizas",
"Malu Deshazte",
"Malu Diles",
"Malu Donde",
"Malu Duele",
"Malu Esta",
"Malu Mi",
"karaoke Malu",
"Malu No",
"Malu Por",
"Malu Si",
"Malu Sin",
"Malu Te",
"Malu Toda",
"Malu Y",
"Maluma 4",
"Maluma Felices",
"Mana",
"Mango Oro",
"Manhatan Transfer",
"Manolo Caracol",
"lover Manolo",
"Manolo Escobar",
"karaoke Manolo",
"Manolo Galvan",
"Manolo Garcia",
"Manolo Otero",
"estelar Manolo",
"Manolo Tena",
"Manu Chao",
"latino Manu",
"Manu Tenorio",
"Manuel Carrasco",
"Manuel Mijares",
"Manuel Quijano",
"Manzanita El",
"Manzanita Sueño",
"Manzanita Verde",
"Marc Anthony",
"musica Marc",
"estelar Marc",
"catalá Marc",
"karaoke Marcela",
"Marcela Morelo",
"Marcella Montagne",
"Marcella Bella",
"2 Marco",
"Marco Antonio",
"lover Marco",
"musica Marco",
"estelar Marco",
"Marco Massini",
"Marcos Lluna",
"Marcos Llunas",
"Marey Y",
"Mari Trini",
"2 Maria",
"catalá Maria",
"Maria Del",
"lover Maria",
"Maria Dolores",
"Maria Isabel",
"Maria Jesus",
"Maria Jimenez",
"Maria Jimenez+",
"Maria Ostiz",
"Maria Vidal",
"Maria Villalon",
"Maria Villalón",
"Marianne Rosenberg",
"Marife De",
"lover Marife",
"catalá Marina",
"estelar Mario",
"karaoke Mario",
"Marisol Corazon",
"Marisol Dile",
"Marisol Hablame",
"Marisol Tombola",
"Maroon 5",
"estelar Marta",
"Marta Quintero",
"Marta Sanchez",
"Marta Sánchez",
"karaoke Marta",
"Maruja Lozano",
"Massiel Brindaremos",
"Massiel Eres",
"karaoke Massiel",
"Massiel Rosas",
"Massiel Rufo",
"Massimo Ranieri",
"karaoke Massimo",
"Materia Prima",
"Mathias Reim",
"Matia Bazaar",
"Matt Monro",
"Mdo Sin",
"Mecano",
"Medina Azahara",
"Meghan Trainor",
"Melendi",
"lover Melisa",
"estelar Melocos",
"Melocos Y",
"Melody El",
"Melody Te",
"estelar Melody",
"Mercedes Sosa",
"Merche",
"2 Mercurio",
"Metallica Master",
"Miami Sound",
"Michael Bubble",
"Michael Holms",
"Michael Jackson",
"karaoke Michael",
"Michel Delpech",
"Michel Fugain",
"Michel Polnareff",
"Michel Teló",
"Michel Telo",
"Michelangelo Dueña",
"Michelle Jenner",
"Micky Bye",
"Micky El",
"Micky Enseñame",
"Miguel Aceves",
"Miguel Bose",
"estelar Miguel",
"Miguel De",
"Miguel Gallardo",
"lover Miguel",
"karaoke Miguel",
"Miguel Nandez",
"Miguel Rios",
"Miguel Saez",
"Mijares Para",
"Mika Lollipop",
"Mika Love",
"Mika Relax",
"Mike Oldfield",
"Mikel Erentxun",
"Miley Cyrus",
"Miliky Navidad",
"Mina Amor",
"Mina Ciudad",
"Mina Grande",
"Mina Palabras",
"Mina Y",
"Miriam Hernandez",
"musica Miriam",
"Moby Y",
"Mocedades",
"Modern Talking",
"Modestia Aparte",
"Modulos Adios",
"Modulos Luz",
"Modulos Nada",
"Modulos No",
"Modulos Sólo",
"Modulos Todo",
"Modulos Tu",
"Mojinos Escozios",
"Moncho Abrazame",
"Moncho Ahora",
"Moncho Amar",
"Moncho Esperame",
"Moncho Lo",
"Moncho Mujer",
"Moncho Sabanas",
"Monica Molina",
"Monica Naranjo",
"karaoke Monica",
"Moody Blues",
"Morat Como",
"Morat Y",
"Morris Albert",
"N'sync Yo",
"Nacha Pop",
"Nacho Campillo",
"Nacho Cano",
"lover Nada",
"latino Naim",
"Naim Thomas",
"Nash I",
"Nat King",
"Natalia Lafourcade",
"Natalia Oreiro",
"lover Nati",
"Navajita Platea",
"Neil Diamond",
"Nek Al",
"Nek Deseo",
"Nek Laura",
"Nek Noche",
"Nek Para",
"Nek Vertigo",
"Nek Y",
"Nelly Furtado",
"Nelson Ned",
"Nena 99",
"Nena Daconte",
"karaoke Nena",
"estelar Nena",
"News Trolls",
"Nicky Wenn",
"Nicky Jam",
"Nico Fidenco",
"Nicola Di",
"lover Nicola",
"Niga Y",
"karaoke Nika",
"Nilsson Y",
"Nina Nacida",
"Niña De",
"Niña Pastori",
"estelar Niña",
"Nino Bravo",
"lover Nino",
"estelar Nino",
"No Me",
"Noel Nicola",
"Noelia Candela",
"Noelia Ni",
"Noelia Toco",
"Noelia Tu",
"Noelia Ramos",
"Nuria Tu",
"Nuria Fergo",
"latino Nuria",
"estelar Nuria",
"Oasis Wonderwall",
"Objetivo Birmania",
"Obk De",
"Obk Dicen",
"Obk Historias",
"Obk La",
"Obk Lucifer",
"Obk Mi",
"Obk Otra",
"Obk Sin",
"Obk Tu",
"Obk Yo",
"Obus Va",
"karaoke Oceana",
"Ole Ole",
"Olga Guillot",
"Olga Manzano",
"Olga Tañon",
"Olivia Newton",
"lover Omara",
"Onda Vaselina",
"One Direction",
"Operacion Triunfo",
"estelar Operacion",
"latino Operacion",
"Orquesta Karonline",
"Orquesta Mondragon",
"Orquesta Plateria",
"Oscar De",
"Oscar Janot",
"OV7",
"catalá Ossifar",
"P. Werner",
"lover Pablo",
"Pablo Abraira",
"karaoke Pablo",
"Pablo Alboran",
"Pablo Lopez",
"Pablo Milanes",
"Pablo Montero",
"Paco Pil",
"Paco Taranto",
"Paco Villar",
"Palito Ortega",
"Paloma San",
"lover Paloma",
"karaoke Paloma",
"Paolo Valessi",
"Papa Levante",
"Paquita Rico",
"Paquito Jerez",
"Parchis Cumpleaños",
"Parrita Ultimamente",
"Pascal Danel",
"Pasion Vega",
"estelar Pasion",
"Pasión Vega",
"karaoke Pasion",
"Pastora Cosmica",
"Pastora Lola",
"Pastora De",
"Pastora Soler",
"Patricia Manterola",
"Patrick Hernandez",
"karaoke Patty",
"Patty Pravo",
"lover Patxi",
"Patxi Andion",
"Paul Anka",
"Paul Mccartney",
"Paula Fernandes",
"estelar Paulina",
"Paulina Rubio",
"Paz Martin",
"Peaches &",
"Pecker Y",
"Pedrito Fernandez",
"estelar Pedrito",
"Pedro Fernandez",
"estelar Pedro",
"Pedro Guerra",
"Pedro Javier",
"Pedro Marin",
"Pedro Rui",
"Pepe Aguilar",
"Pepe Blanco",
"Pepe Hernandez",
"Peret Borriquito",
"Peret El",
"Peret Gitana",
"Peret La",
"Peret Saboreando",
"Peret Una",
"Peret Y",
"Peret Yo",
"Pereza Aproximacion",
"Pereza Como",
"Pereza Estrella",
"Pereza Princesas",
"Pereza Todo",
"Pereza Violento",
"Perlita De",
"lover Perlita",
"Pesadilla Antes",
"lover Peter",
"Peter Maffay",
"Pharrell Williams",
"Phil Collins",
"Phill Collins",
"Pic Nic",
"Pignoise Cama",
"Pignoise Nada",
"Pignoise Sigo",
"Pignoise Sin",
"Pignoise Te",
"estelar Pignoise",
"Pimpinela",
"Pink Floyd",
"Pino Daniele",
"Pino Donaggio",
"karaoke Pino",
"Pitingo Killing",
"lover Placido",
"Placido Domingo",
"Platero Y",
"Platon Mia",
"Platon Mira",
"Pointer Sisters",
"Police De",
"Pop Tops",
"Popular A",
"Popular Apaga",
"Popular Asturias",
"Popular Cumpleaños",
"Popular Desde",
"catalá Popular",
"Popular La",
"Popular Maria",
"karaoke Popular",
"Popular Tuna",
"Popular Uno",
"Popular Yo",
"Porretas Marihuana",
"Presuntos Implicados",
"karaoke Presuntos",
"Presuntos Implicados.",
"Proyecto X",
"Purple Schulz",
"Queco Perros",
"Queen A",
"Queen Bohemian",
"Queen Crazy",
"Queen Princess",
"Queen Somebody",
"Queen Too",
"Queen Who",
"Quique Gonzalez",
"Radio Head",
"Radio Futura",
"Raf Due",
"Raf Self",
"Raf Siamo",
"Rafael Amor",
"Rafael Cardona",
"Rafael Conde",
"Rafael Farina",
"lover Rafael",
"Rafaga La",
"Rafaga Mentirosa",
"Rafaga Una",
"Raffaella Carra",
"lover Raffaella",
"Raimon Al",
"catalá Raimon",
"Raimundo Amador",
"Rakel Winchester",
"Rammstein Du",
"Ramon Para",
"Ramon (eurovision)",
"Ramon Calduch",
"Ramon Riba",
"Ramon Salgado",
"Ramoncin Como",
"Ramoncin Hormigon,mujeres",
"Ramonet Marcha",
"Rancheras Mexicanas",
"estelar Rancheras",
"Raphael",
"karaoke Rapshody",
"Raquel De",
"karaoke Raul",
"Raul Haciendo",
"Raul Prohibida",
"Raul Sueño",
"Raul Y",
"Raul Araya",
"Raulin Rosendo",
"Ray Amor",
"Ray Parquer",
"Raya Real",
"Rbd Y",
"Rebeca Duro",
"Rebecca Black",
"karaoke Red",
"Refrescos Aqui",
"Refrescos Todo",
"Rene Y",
"Requiebros Mi",
"Requiebros No",
"Requiebros Vente",
"Revolver Dentro",
"Revolver Eldorado",
"Revolver Ella",
"Revolver Es",
"lover Revolver",
"Revolver Faro",
"Revolver Mi",
"Revolver Odio",
"Revolver Sara",
"Revolver Si",
"Revolver Tiempo",
"Ricardo Arjona",
"musica Ricardo",
"estelar Ricardo",
"lover Ricardo",
"Ricardo Ceratto",
"Ricardo Montaner",
"lover Ricchi",
"Ricchi E",
"Richard Cocciante",
"Richard Marx",
"Richi E",
"Richy Ray",
"Ricky Martin",
"karaoke Ricky",
"estelar Ricky",
"Righteous Brothers",
"Rihanna",
"Rios De",
"Robbie Dupree",
"Robbie Williams",
"Robert Ramirez",
"Roberto Carlos",
"karaoke Roberto",
"estelar Roberto",
"lover Roberto",
"2 Roberto",
"Roberto Goyeneche",
"Roberto Ledesma",
"Roberto Vecchioni",
"Robin Williams",
"Rocio Durcal",
"musica Rocio",
"lover Rocio",
"karaoke Rocio",
"estelar Rocio",
"Rocio Jurado",
"lover Rocky",
"Rocky Robert",
"Rodolfo Chikilicuatre",
"Rodrigo Como",
"Rodrigo Fue",
"Rodrigo Lo",
"Roel Si",
"Rolling Stones",
"Romeo Santos",
"Ron Y",
"Ronaldos Adios",
"latino Rosa",
"Rosa",
"Rosana",
"Rosario Flores",
"estelar Rosario",
"Rosario Mohedano",
"Rosendo Agradecido",
"Rosendo Maneras",
"Roser Boca",
"karaoke Roser",
"Roser Quiero",
"Rosita Ferrer",
"Roxette No",
"Roxette Un",
"Roxy Bailando",
"karaoke Roy",
"Rozalen Comiendote",
"Ruben Blades",
"Rubi Y",
"Rudy Marquez",
"Rumba Tres",
"Ruth Lorenzo",
"Saavedra Donde",
"Sacha Distel",
"Salome",
"Sam Smith",
"Samantha Fox",
"Sandie Shaw",
"Sandra Maria",
"Sandra Morey",
"Sandro Porque",
"Sandro Giacobbe",
"catalá Sangtrait",
"Santabarbara Charly",
"Santabarbara Donde",
"catalá Santi",
"Sara Te",
"Sara Montiel",
"Sara Vega",
"Sarah Vaughn",
"Saray Vargas",
"catalá Sau",
"Scorpions Still",
"karaoke Sean",
"Sean Paul",
"Sebastian Ingrosso",
"Seguridad Social",
"Selena Amor",
"Selena Como",
"Selena Gomez",
"Semino Rossi",
"Señor Trepador",
"Sentidos Opuestos",
"estelar September",
"Serafin Zubiri",
"Sergio Alcover",
"estelar Sergio",
"Sergio Dalma",
"catalá Sergio",
"lover Sergio",
"Sergio Denis",
"Sergio Fachelli",
"Sergio Rivero",
"Sergio Y",
"Serrat",
"Sevillanas",
"Shaila Durcal",
"estelar Shaila",
"Shakaira",
"Sidonie Costa",
"Siempre Asi",
"Siete Tengo",
"Silvana Di",
"2 Silvana",
"Silvio Rodriguez",
"Simone Y",
"estelar Sin",
"Sin Bandera",
"Siniestro Total",
"Ska-p Resistencia",
"karaoke Skorpions",
"So Pra",
"latino So",
"Sobrinos Del",
"Sole Jimenez",
"Solera Calles",
"Son By",
"musica Son",
"Son Del",
"Sonia Y",
"catalá Sopa",
"Soraya Arnelas",
"estelar Soraya",
"Soraya Y",
"Spandau Ballet",
"lover Sparks",
"Spider Murphy",
"Stadio Ho",
"Stevie Wonders",
"Sting Englishman",
"Supertramp Give",
"Surf Tu",
"Suzanne Vega",
"Sylvana Velasco",
"Tahures Zurdos",
"Taio Cruz",
"Tam Tam",
"Tamara",
"catalá Tancat",
"estelar Tatagolosa",
"Tate Montoya",
"karaoke Taxi",
"Taxi Tu",
"Teen Tops",
"Tema Tv",
"Tennessee",
"Tequila Dime",
"Tequila Que",
"Tequila Quiero",
"Tequila Rock",
"Tequila Salta",
"estelar Tessa",
"Thalia",
"The Archies",
"The Beatles",
"The Clash",
"The Crystals",
"The Cure",
"The Eagles",
"The Equals",
"The Everly",
"The Fray",
"The Korgis",
"The Ojays",
"The Platters",
"The Police",
"The Rolling",
"The Smashing",
"Timbaland Feat.",
"Tina Turner",
"karaoke Tino",
"Tino Casal",
"Tita Morello",
"Tito El",
"Tito Rodriguez",
"Tiziano Ferro",
"karaoke Tiziano",
"lover Tom",
"Tom Jones",
"Tomas De",
"catalá Tomeu",
"Toni Zenet",
"Tonino Holiday",
"Tonino Obi",
"Tonino Carotone",
"Tontxu Ipiña",
"Tony Dallara",
"Tony Landa",
"Tony Ronald",
"Tony Santos",
"estelar Tony",
"Topolino Radio",
"Toquinho Acuarela",
"Toreros Muertos",
"Toto I",
"Toto Cotugno",
"Toy Story",
"Tracy Chapman",
"Traditional Amazing",
"Traditional English",
"Traditional For",
"Traditional Happy",
"Traditional Oh",
"Trebol Carmen",
"karaoke Triana",
"Triana En",
"Triana Rumor",
"Triana Sentimiento",
"Triana Tu",
"Triana Pura",
"Trio Da",
"Trude Herr",
"U2 With",
"Udo Jurgens",
"Umberto Tozzi",
"lover Umberto",
"Un Pingüino",
"karaoke Upa",
"Upa Dance",
"Valderrama Y",
"Valen La",
"Valera Ardo",
"Valeria Lynch",
"Valeria Rossi",
"Van Morrison",
"Vanesa Martin",
"Vanessa Martin",
"Vega Grita",
"Vega Mejor",
"Vega Quiero",
"Vega Y",
"Veronica Besame",
"latino Veronica",
"Vetusta Morla",
"Vicente Fernandez",
"estelar Vicente",
"Viceversa Ella",
"Vicky Larraz",
"Victor Manuel",
"lover Victor",
"estelar Victor",
"Victor Ot4",
"Victor Y",
"Video La",
"Village People",
"Villancicos",
"Violeta Parra",
"Virginia Lopez",
"Wham Careless",
"Whitney Houston",
"karaoke Willow",
"Wisin Y Yandel",
"Xabier Lete",
"Ximena Sariñana",
"Xuxa Ilarie",
"Yandar Y",
"Yandel Pitbull",
"Yolanda Be",
"Yolanda Ramos",
"Zapato Veloz",
"Zucchero Baila",
"Zucchero Lamore	"
      ]
    };
    this.setTerm = this.setTerm.bind(this);
    this.findTerm = this.findTerm.bind(this);
  }
  setTerm(e){
    this.setState({term: e.target.value})
  }
  findTerm(term){
    this.setState({searchTerm: term})
  }
  findLetter(letter){
    const result = this.state.interpretes.filter(word => word.charAt(0).toLowerCase() === letter.toLowerCase());
    this.setState({filtro: result});
  }
  getLetters(){
    const _this = this;
    var L = this.state.alphabet.map(function(val, key){
      return (
          <div key={key} className="letters" onClick={(e) => _this.findLetter(val)}>{val}</div>
      )
    })
    return L;
  }
  componentDidMount(){

  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
            <div id="searchBar" className="searchBar">
            <div className="logo">
                <img src="/images/logo.png" />
            </div>
            <i className="material-icons icon">music_video</i>
              <input type="text" onChange={(e) => this.setTerm(e)} onKeyPress={(e) => this.findTerm(this.state.term)} placeholder="Busca artista o canción" />
            </div>
            <div className="alphabeth">
              {this.getLetters()}
            </div>
        </header>
        <SearchYT term={this.state.searchTerm} interpretes={this.state.filtro} />
      </div>
    );
  }
}

export default App;
