function gestoreClick () {
	try{
	    var messaggio = galleria[this.id];
	    var nodoElemento = document.createElement("p");
	    nodoMessaggio.appendChild(nodoElemento);
        var nodoTesto = document.createTextNode(messaggio);
	    nodoElemento.appendChild(nodoTesto);
		nodoMessaggio.replaceChild(nodoElemento, nodoMessaggio.firstChild);
    } catch(e) {
		alert("gestoreClick" + e);
	}
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

var nodoFoto1;
var nodoFoto2;
var nodoFoto3;
var nodoFoto4;
var nodoFoto5;
var nodoFoto6;
var nodoFoto7;
var nodoFoto8;
var nodoFoto9;

var nodoMessaggio;

var nodo_apri;
var nodo_chiudi;


function gestoreLoad () {
	try{
		nodoFoto1 = document.getElementById("img");
		nodoFoto2 = document.getElementById("img_2");
		nodoFoto3 = document.getElementById("img_3");
		nodoFoto4 = document.getElementById("img_4");
		nodoFoto5 = document.getElementById("img_5");
		nodoFoto6 = document.getElementById("img_6");
		nodoFoto7 = document.getElementById("img_7");
		nodoFoto8 = document.getElementById("img_8");
		nodoFoto9 = document.getElementById("img_9");
		
		nodoFoto1.onclick = gestoreClick;
		nodoFoto2.onclick = gestoreClick;
		nodoFoto3.onclick = gestoreClick;
		nodoFoto4.onclick = gestoreClick;
		nodoFoto5.onclick = gestoreClick;
		nodoFoto6.onclick = gestoreClick;
		nodoFoto7.onclick = gestoreClick;
		nodoFoto8.onclick = gestoreClick;
		nodoFoto9.onclick = gestoreClick;
		
		nodoMessaggio = document.getElementById("text");
		
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

var galleria = {
	"img":"Led Zeppelin , Anno : 1969 , Brani : 1 GoodTimesBadTimes 2 Babe I'm Gonna Leave you 3 You Shook Me 4 Dazed and Confused 5 Your Time Is Gonna Come 6 Black Mountain Side 7 Comunication Breakdown 8 I Can't Quit You Baby 9 How Many More Times",
	"img_2":"Led Zeppelin II , Anno : 1969 , Brani : 1 Whole Lotta Love 2 What Is and What Should Never Be 3 The Lemon Song 4 Thank You 5 Heartbreaker 6 Living Loving Maid 7 Ramble On 8 Moby Dick 9 Bring It On Home",
	"img_3":"Led Zeppelin III , Anno : 1970 , Brani : 1 Immigrant Song 2 Friends 3 Celebration Day 4 Since I've Been Loving You 5 Out on the Tiles 6 Gallows Pole 7 Tangerine 8 That's the Way 9 Bron-Yr-Aur-Stomp 10 Hats off To (Roy) Harper",
	"img_4":"Led Zeppelin IV , Anno : 1971 , Brani : 1 Black Dog 2 Rock and Roll 3 The Battle of Evermore 4 Stairway to Heaven 5 Misty Mountain Hop 6 Four Sticks 7 Going to California 8 When the Levee Breaks",
	"img_5":"House of the Holy , Anno : 1973 , Brani : 1 The Song Remains the Same 2 The Rain Song 3 Over the Hills and Far Away 4 The Crunge 5 Dancing Days 6 D'yer Mak'er 7 No Quarter 8 The Ocean",
	"img_6":"Physical Graffiti , Anno : 1975 , Brani : 1 Custard Pie 2 The Rover 3 In My Time of Dying 4 Houses of the holy 5 Trampled Under Foot 6 Kashmir 7 In the Light 8 Bron-Yr-Aur 9 Down By the Seaside 10 Ten Years Gone 11 Night Flight 12 The Wanton Song 13 Boogie With Stu 14 Black Country Woman 15 Sick Again",
	"img_7":"Presence , Anno: 1976 , Brani : 1 Achilles Last Stand 2 For Your Life 3 Royal Orleans 4 Nobody's Fault But Mine 5 Candy Store Rock 6 Hots On for Nowhere 7 Tea for One",
	"img_8":"In Through the Out Door , Anno : 1979 , Brani : 1 In the Evening 2 South Bound Saurez 3 Fool in the Rain 4 Hot Dog 5 Carouselambra 6 All My Love 7 I'm Gonna Crawl",
	"img_9":"Coda , Anno : 1982 , Brani : 1 We're Gonna 2 GroovePoor Tom 3 I Can't Quit You Baby 4 Walter's Walk 5 Ozone Baby 6 Darlene 7 Bonzo's Montreaux 8 Wearing and Tearing"
	
}