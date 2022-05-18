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

var nodo_apri;
var nodo_chiudi;

function gestoreload () {
	try{
        nodo_apri = document.getElementById("header_icon-bar");
        nodo_chiudi = document.getElementById("close");
        nodo_apri.onclick = gestore_open_menu;
        nodo_chiudi.onclick = gestore_close_menu;
	} catch(e) {
		alert("gestoreload" + e);
	}
}

window.onload = gestoreload;