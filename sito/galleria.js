/**/function gestoreClickAvanti () {
/**/	try{
/**/	    cambiaFoto(+1);
/**/		cambiaTesto(+1);
/**/	} catch(e){
/**/		alert("gestoreClickAvanti" + e);
/**/	}
/**/}

/**/function gestoreClickIndietro () {
/**/	try{
/**/	    cambiaFoto(-1);
/**/		cambiaTesto(-1);
/**/	} catch(e){
/**/		alert("gestoreClickIndietro" + e);
/**/	}
/**/}

/**/function cambiaFoto (x) {
/**/	indiceFoto += x;
/**/	if(indiceFoto == numeroFoto){
/**/		indiceFoto = 0;
/**/	}
/**/	if(indiceFoto < 0){
/**/		indiceFoto =numeroFoto - 1;
/**/	}
/**/	nodoFoto.setAttribute("src" , galleria[indiceFoto]);
/**/}

function cambiaTesto (x) {
	indiceTesto += x;
	if(indiceTesto == numeroTesto){
		indiceTesto = 0;
	}
	if(indiceTesto < 0){
		indiceTesto =numeroTesto - 1;
	}
	var messaggio = galleria_text[indiceTesto];
	var nodoElemento = document.createElement("p");
	nodoTesto.appendChild(nodoElemento);
	var pippo = document.createTextNode(messaggio);
	    nodoElemento.appendChild(pippo);
		nodoTesto.replaceChild(nodoElemento, nodoTesto.firstChild);
}

function gestore_open_menu () {
	try{
        if (window.matchMedia("(max-width: 767px)").matches) {
            document.getElementById("index").style.display = "block";;
            document.getElementById("biografia").style.display = "block";
            document.getElementById("galleria").style.display = "block";
            document.getElementById("discografia").style.display = "block";
            document.getElementById("info").style.display = "block";
            document.getElementById("close").style.display = "block";
			}
	} catch(e) {
		alert("gestore_open_menu" + e);
	}
}

function gestore_close_menu () {
	try{
        if (window.matchMedia("(max-width: 767px)").matches) {
            document.getElementById("index").style.display = "none";
            document.getElementById("biografia").style.display = "none";
            document.getElementById("galleria").style.display = "none";
            document.getElementById("discografia").style.display = "none";
            document.getElementById("info").style.display = "none";
            document.getElementById("close").style.display = "none";
			}
	} catch(e) {
		alert("gestore_close_menu" + e);
	}
}

var indiceFoto;
var indiceTesto;
var numeroFoto;
var numeroTesto;
var nodoAvanti;
var nodoIndietro;
var nodoFoto;
var nodoTesto;
var nodo_apri;
var nodo_chiudi;

function gestoreLoad () {
	try{
		nodoAvanti = document.getElementById("avanti");
	    nodoIndietro = document.getElementById("indietro");
		nodoFoto = document.getElementById("foto");
		nodoTesto = document.getElementById("testo");
		nodoAvanti.onclick = gestoreClickAvanti;
		nodoIndietro.onclick = gestoreClickIndietro;
		numeroFoto = galleria.length;
		numeroTesto = galleria_text.length;
		indiceFoto = 0;
		indiceTesto = 0;
		cambiaFoto(0);
		cambiaTesto(0);
		nodo_apri = document.getElementById("header_icon-bar");
        nodo_chiudi = document.getElementById("close");
        nodo_apri.onclick = gestore_open_menu;
        nodo_chiudi.onclick = gestore_close_menu;	
	} catch(e) {
		alert("gestoreLoad" + e);
	}
}

window.onload = gestoreLoad;

//Contenuti

var galleria = [
"plant.jpg",
"page.jpg",
"jones.jpg",
"bonham.jpg"
]

var galleria_text = [
"Robert Plant (voce , armonica) è un cantautore, musicista e compositore britannico , nato in West Bromwich il 20 agosto 1948.Nel 1968 contattato da Jimmy Page entra a far parte dei Led Zeppelin, contribuendo in maniera determinante alla nascita dell'hard rock, genere del quale il gruppo è comunemente ritenuto iniziatore, e rimanendovi fino allo scioglimento della band.Dal 1982 si è dedicato alla carriera solista, riprendendo e ampliando molti dei temi musicali dei Led Zeppelin come il blues, il folk, la musica araba e le tematiche mitologiche, in particolar modo quelle celtiche.",
"Jimmy Page (chitarre) nato a Londra il 9 gennaio 1944, è un chitarrista e compositore britannico, considerato uno dei più influenti, importanti e versatili chitarristi e compositori della storia del rock. Nel 2010 è stato inserito come il secondo miglior chitarrista della storia nella Top 50 Guitarists of All Time della Gibson, nel 2007 al 4º posto della 100 Wildest Guitar Heroes di Classic Rock Magazine, ed è stato collocato al 3º posto nella Lista dei 100 migliori chitarristi di tutti i tempi dalla rivista Rolling Stone, dietro solamente a Eric Clapton e a Jimi Hendrix.",
"John Paul Jones (basso , tastiere) nato a Sidcup il 3 gennaio 1946, è un polistrumentista e compositore britannico.Particolarmente noto per la militanza nei Led Zeppelin nel doppio ruolo di bassista e tastierista.",
"John Bonham (batteria , percussioni) conosciuto anche come Bonzo( 1948-1980) è stato un batterista e compositore inglese.È considerato uno dei più grandi e influenti batteristi della storia della musica rock. Il suo stile ha contribuito a innovare e stravolgere completamente il modo di concepire la batteria e le percussioni nella musica contemporanea. I nove album che compongono la discografia dei Led Zeppelin, caratterizzati dalle architetture percussionistiche di Bonham, costituiscono tuttora una delle basi su cui si fonda la batteria nel rock e nell'hard rock.Nel 2011 la rivista Rolling Stone Magazine lo ha definito miglior batterista di tutti i tempi, collocandolo al primo posto nella classifica Best drummers of all time."
]