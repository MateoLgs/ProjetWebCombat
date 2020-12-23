
var randomciblemonstreattaque = [
  "personnage1",
  "personnage2",
  "personnage3",
  "personnage4"
];

var randomspecialdegats = [
  "personnage1",
  "personnage2",
  "personnage3",
  "personnage4",
  "butonMonstre1",
  "butonMonstre2",
  "butonMonstre3"
];

var buffPerso4= 1;


var joueursActuels=4;


var defenseValeurPerso = [1,1,1,1];

var attaquemonstre1=false;
var attaquemonstre2=false;
var attaquemonstre3=false;



var test = document.getElementById('test');

var player1action= document.getElementsByClassName("player1action");


var player2action= document.getElementsByClassName("player2action");


var player3action= document.getElementsByClassName("player3action");


var player4action= document.getElementsByClassName("player4action");

//---------------------------------------------------------------------------


var personnage1= true;


var personnage2= true;


var personnage3= true;


var personnage4= true;






var monstre1alive= true;


var monstre2alive= true;


var monstre3alive= true;




var healed = true;



var manaPlayer1=100;
var manaPlayer2=100;
var manaPlayer3=100;
var manaPlayer4=100;



//---------------------------------------------------------------------------

function loadPage(){

	document.getElementById("butonPerso1").style.filter = "drop-shadow(0px 0px 10px blue)";
	document.getElementById("butonPerso2").style.filter = "drop-shadow(0px 0px 10px blue)";
	document.getElementById("butonPerso3").style.filter = "drop-shadow(0px 0px 10px blue)";
	document.getElementById("butonPerso4").style.filter = "drop-shadow(0px 0px 10px blue)";
}

function buff(personnage){
buffPerso4=buffPerso4+0.5;
}




function zoneDamage(){


var totalZoneDamage = 30;

var degatsZoneMonstre1 =  Math.floor(Math.random() * Math.floor(totalZoneDamage));

totalZoneDamage=totalZoneDamage-degatsZoneMonstre1;

var degatsZoneMonstre2 =  Math.floor(Math.random() * Math.floor(totalZoneDamage));


totalZoneDamage=totalZoneDamage-degatsZoneMonstre2;


var degatsZoneMonstre3 =  totalZoneDamage;

var ava = document.getElementById('butonMonstre1').getElementsByClassName("avancement")
	ava[0].value -= degatsZoneMonstre1;

	var label = document.getElementById('butonMonstre1').getElementsByClassName("labelAvancement")
	label[0].innerHTML = ava[0].value;

var ava = document.getElementById('butonMonstre2').getElementsByClassName("avancement")
	ava[0].value -= degatsZoneMonstre2;

	var label = document.getElementById('butonMonstre2').getElementsByClassName("labelAvancement")
	label[0].innerHTML = ava[0].value;

var ava = document.getElementById('butonMonstre3').getElementsByClassName("avancement")
	ava[0].value -= degatsZoneMonstre3;

	var label = document.getElementById('butonMonstre3').getElementsByClassName("labelAvancement")
	label[0].innerHTML = ava[0].value;

}


function specialCritique(degats){

var randomCible = randomspecialdegats[Math.floor(Math.random()*randomspecialdegats.length)];


	var ava = document.getElementById(randomCible).getElementsByClassName("avancement")
		ava[0].value = Math.round(ava[0].value-100);

	var label = document.getElementById(randomCible).getElementsByClassName("labelAvancement")
		label[0].innerHTML = ava[0].value;


	teste = document.getElementById(randomCible).getElementsByClassName("labelAvancement")
	teste[0].style.backgroundColor= "red";

setTimeout(() => { 
	teste1 = document.getElementById("player1pvnumber")
	teste1.style.backgroundColor= 'transparent';

	teste2 = document.getElementById("player2pvnumber")
	teste2.style.backgroundColor= 'transparent';

	teste3 = document.getElementById("player3pvnumber")
	teste3.style.backgroundColor= 'transparent';

	teste4 = document.getElementById("player4pvnumber")
	teste4.style.backgroundColor= 'transparent';
	}, 1000);
testmorts();
}


function healPlayer(heal){

 healed = true;

var pvJoueur1 = document.getElementById('butonPerso1').getElementsByClassName("avancement")
var pvJoueur1value = pvJoueur1[0].value

var pvJoueur2 = document.getElementById('butonPerso2').getElementsByClassName("avancement")
var pvJoueur2value = pvJoueur2[0].value

var pvJoueur3 = document.getElementById('butonPerso3').getElementsByClassName("avancement")
var pvJoueur3value = pvJoueur3[0].value

var pvJoueur4 = document.getElementById('butonPerso4').getElementsByClassName("avancement")
var pvJoueur4value = pvJoueur4[0].value


	if(healed==true && pvJoueur1value<= pvJoueur2value && pvJoueur1value<= pvJoueur3value && pvJoueur1value<= pvJoueur4value){

	var ava = document.getElementById('butonPerso1').getElementsByClassName("avancement")
	ava[0].value = ava[0].value + heal;

	var label = document.getElementById('butonPerso1').getElementsByClassName("labelAvancement")
	label[0].innerHTML = ava[0].value;

	heal = document.getElementById('butonPerso1').getElementsByClassName("labelAvancement")
	heal[0].style.backgroundColor = "green";

	healed = false;
	}

	else if(healed==true && pvJoueur2value<= pvJoueur1value && pvJoueur2value<= pvJoueur3value && pvJoueur2value<= pvJoueur4value){

	var ava = document.getElementById('butonPerso2').getElementsByClassName("avancement")
	ava[0].value = ava[0].value + heal;

	var label = document.getElementById('butonPerso2').getElementsByClassName("labelAvancement")
	label[0].innerHTML = ava[0].value;
	
	heal = document.getElementById('butonPerso2').getElementsByClassName("labelAvancement")
	heal[0].style.backgroundColor = "green";

	healed = false;
	}

	else if(healed==true && pvJoueur3value <= pvJoueur1value && pvJoueur3value<= pvJoueur2value && pvJoueur3value<= pvJoueur4value){

	var ava = document.getElementById('butonPerso3').getElementsByClassName("avancement")
	ava[0].value = ava[0].value + heal;

	var label = document.getElementById('butonPerso3').getElementsByClassName("labelAvancement")
	label[0].innerHTML = ava[0].value;
	
	heal = document.getElementById('butonPerso3').getElementsByClassName("labelAvancement")
	heal[0].style.backgroundColor = "green";

	healed = false;
	}


	else if(healed==true && pvJoueur4value <= pvJoueur1value && pvJoueur4value <= pvJoueur2value && pvJoueur4value <= pvJoueur3value){

	var ava = document.getElementById('butonPerso4').getElementsByClassName("avancement")
	ava[0].value = ava[0].value + heal;

	var label = document.getElementById('butonPerso4').getElementsByClassName("labelAvancement")
	label[0].innerHTML = ava[0].value;

	heal = document.getElementById('butonPerso4').getElementsByClassName("labelAvancement")
	heal[0].style.backgroundColor = "green";
	
	healed = false;
	}


	setTimeout(() => { 
	teste1 = document.getElementById("player1pvnumber")
	teste1.style.backgroundColor= "transparent";

	teste2 = document.getElementById("player2pvnumber")
	teste2.style.backgroundColor= "transparent";

	teste3 = document.getElementById("player3pvnumber")
	teste3.style.backgroundColor= "transparent";

	teste4 = document.getElementById("player4pvnumber")
	teste4.style.backgroundColor= "transparent";
	}, 1000);

	
}
//---------------------------------------------------------------------------




function attackperso1(){		
		document.getElementById('buttonattaqueperso1').disabled=true;
		document.getElementById('buttondefenseperso1').disabled=false;
		document.getElementById('buttonspecialperso1').disabled=false;

		document.getElementById('butonPerso1').disabled=true;
		var actionsAFermer = document.getElementsByClassName("buttonAction")
		for (var i = actionsAFermer.length - 1; i >= 0; i--) {
			hideActions(actionsAFermer[i])
		}
		var randomAttaquePerso1 = Math.round(Math.random() * (19 - 17) + 17); 
		document.getElementById("butonPerso1").style.filter = "none";
	//choixcibleattaque(randomAttaquePerso1);
		choixcibleattaque(200);

		




}

function defenseperso1(){
		document.getElementById('buttonattaqueperso1').disabled=false;
		document.getElementById('buttondefenseperso1').disabled=true;
		document.getElementById('buttonspecialperso1').disabled=false;

		document.getElementById('butonPerso1').disabled=true;
		var actionsAFermer = document.getElementsByClassName("buttonAction")
		for (var i = actionsAFermer.length - 1; i >= 0; i--) {
			hideActions(actionsAFermer[i])
		}

		defenseValeurPerso[0]=defenseValeurPerso[0]-0.3;	
		


		if(defenseValeurPerso[0]<0){
			defenseValeurPerso[0]=0
		}

		document.getElementById('shieldPlayer1').innerHTML=Math.round(100*(1-defenseValeurPerso[0]));
	document.getElementById("butonPerso1").style.filter = "none";
}



function specialperso1(){
	if(manaPlayer1>=60){
		manaPlayer1=manaPlayer1-60
		document.getElementById('manaPlayer1').innerHTML=manaPlayer1;

		document.getElementById('buttonattaqueperso1').disabled=false;
		document.getElementById('buttondefenseperso1').disabled=false;
		document.getElementById('buttonspecialperso1').disabled=true;	

		document.getElementById('butonPerso1').disabled=true;
		var actionsAFermer = document.getElementsByClassName("buttonAction")
		for (var i = actionsAFermer.length - 1; i >= 0; i--) {
			hideActions(actionsAFermer[i])
		}

		healPlayer(35);

	}
	document.getElementById("butonPerso1").style.filter = "none";
}














function attackperso2(){		
		document.getElementById('buttonattaqueperso2').disabled=true;
		document.getElementById('buttondefenseperso2').disabled=false;
		document.getElementById('buttonspecialperso2').disabled=false;

		document.getElementById('butonPerso2').disabled=true;
		var actionsAFermer = document.getElementsByClassName("buttonAction")
		for (var i = actionsAFermer.length - 1; i >= 0; i--) {
			hideActions(actionsAFermer[i])
		}
		document.getElementById("butonPerso2").style.filter = "none";
		choixcibleattaque(15);
}

function defenseperso2(){
		document.getElementById('buttonattaqueperso2').disabled=false;
		document.getElementById('buttondefenseperso2').disabled=true;
		document.getElementById('buttonspecialperso2').disabled=false;	

		document.getElementById('butonPerso2').disabled=true;
		var actionsAFermer = document.getElementsByClassName("buttonAction")
		for (var i = actionsAFermer.length - 1; i >= 0; i--) {
			hideActions(actionsAFermer[i])
		}

		defenseValeurPerso[1]=defenseValeurPerso[1]-0.35;
		

		if(defenseValeurPerso[1]<0){
			defenseValeurPerso[1]=0
		}	

		document.getElementById('shieldPlayer2').innerHTML=Math.round(100*(1-defenseValeurPerso[1]));
			document.getElementById("butonPerso2").style.filter = "none";
}

function specialperso2(){
			if(manaPlayer2>=70){
		manaPlayer2=manaPlayer2-70
		document.getElementById('manaPlayer2').innerHTML=manaPlayer2;

		document.getElementById('buttonattaqueperso2').disabled=false;
		document.getElementById('buttondefenseperso2').disabled=false;
		document.getElementById('buttonspecialperso2').disabled=true;	

		document.getElementById('butonPerso2').disabled=true;
		var actionsAFermer = document.getElementsByClassName("buttonAction")
		for (var i = actionsAFermer.length - 1; i >= 0; i--) {
			hideActions(actionsAFermer[i])
		}

		specialCritique(100);

	}
	document.getElementById("butonPerso2").style.filter = "none";
}



function attackperso3(){		
		document.getElementById('buttonattaqueperso3').disabled=true;
		document.getElementById('buttondefenseperso3').disabled=false;
		document.getElementById('buttonspecialperso3').disabled=false;

		document.getElementById('butonPerso3').disabled=true;
		var actionsAFermer = document.getElementsByClassName("buttonAction")
		for (var i = actionsAFermer.length - 1; i >= 0; i--) {
			hideActions(actionsAFermer[i])
		}
			document.getElementById("butonPerso3").style.filter = "none";
		var randomAttaquePerso2 = Math.round(Math.random() * (14 - 6) + 6); 
		choixcibleattaque(randomAttaquePerso2);

}

function defenseperso3(){
		document.getElementById('buttonattaqueperso3').disabled=false;
		document.getElementById('buttondefenseperso3').disabled=true;
		document.getElementById('buttonspecialperso3').disabled=false;	

		document.getElementById('butonPerso3').disabled=true;
		var actionsAFermer = document.getElementsByClassName("buttonAction")
		for (var i = actionsAFermer.length - 1; i >= 0; i--) {
			hideActions(actionsAFermer[i])
		}

		defenseValeurPerso[2]=defenseValeurPerso[2]-0.48;	
		


		if(defenseValeurPerso[2]<0){
			defenseValeurPerso[2]=0
		}
	document.getElementById("butonPerso3").style.filter = "none";
		document.getElementById('shieldPlayer3').innerHTML=Math.round(100*(1-defenseValeurPerso[2]));
}

function specialperso3(){
if(manaPlayer1>=80){
	manaPlayer3=manaPlayer3-80
		document.getElementById('buttonattaqueperso3').disabled=false;
		document.getElementById('buttondefenseperso3').disabled=false;
		document.getElementById('buttonspecialperso3').disabled=true;	

		document.getElementById('butonPerso3').disabled=true;
		var actionsAFermer = document.getElementsByClassName("buttonAction")
		for (var i = actionsAFermer.length - 1; i >= 0; i--) {
			hideActions(actionsAFermer[i])
		}
		zoneDamage();
}
	document.getElementById("butonPerso3").style.filter = "none";
}



function attackperso4(){		
		document.getElementById('buttonattaqueperso4').disabled=true;
		document.getElementById('buttondefenseperso4').disabled=false;
		document.getElementById('buttonspecialperso4').disabled=false;

		document.getElementById('butonPerso4').disabled=true;
		var actionsAFermer = document.getElementsByClassName("buttonAction")
		for (var i = actionsAFermer.length - 1; i >= 0; i--) {
			hideActions(actionsAFermer[i])
		}
	document.getElementById("butonPerso4").style.filter = "none";
		var randomAttaquePerso3 = Math.round(Math.random() * (30 - 10) + 10); 
		choixcibleattaque(randomAttaquePerso3*buffPerso4);
		buffPerso4=1;
}

function defenseperso4(){
		document.getElementById('buttonattaqueperso4').disabled=false;
		document.getElementById('buttondefenseperso4').disabled=true;
		document.getElementById('buttonspecialperso4').disabled=false;	

		document.getElementById('butonPerso4').disabled=true;
		var actionsAFermer = document.getElementsByClassName("buttonAction")
		for (var i = actionsAFermer.length - 1; i >= 0; i--) {
			hideActions(actionsAFermer[i])
		}

		defenseValeurPerso[3]=defenseValeurPerso[3]-0.27;
	

		if(defenseValeurPerso[3]<0){
			defenseValeurPerso[3]=0
		}
	document.getElementById("butonPerso4").style.filter = "none";
			document.getElementById('shieldPlayer4').innerHTML=Math.round(100*(1-defenseValeurPerso[3]));	
}

function specialperso4(){
			if(manaPlayer4>=50){
		manaPlayer4=manaPlayer4-50
		document.getElementById('manaPlayer4').innerHTML=manaPlayer4;

		document.getElementById('buttonattaqueperso4').disabled=false;
		document.getElementById('buttondefenseperso4').disabled=false;
		document.getElementById('buttonspecialperso4').disabled=true;	

		document.getElementById('butonPerso4').disabled=true;
		var actionsAFermer = document.getElementsByClassName("buttonAction")
		for (var i = actionsAFermer.length - 1; i >= 0; i--) {
			hideActions(actionsAFermer[i])
		}

		buff(personnage4);

	}
	document.getElementById("butonPerso4").style.filter = "none";
}







//--------------------------------------------------------------------------------------













//--------------------------------------------------------------------------------------



function choixcibleattaque(degats){



//-----------------------------------

document.getElementById("monstre_1").style.filter = "drop-shadow(0px 0px 10px blue)";
document.getElementById('butonMonstre1').disabled=false;

document.getElementById("butonMonstre1").addEventListener('click',function()
    {
    	
    document.getElementById('butonMonstre1').disabled=true;
    document.getElementById('butonMonstre2').disabled=true;
    document.getElementById('butonMonstre3').disabled=true;

	var ava = document.getElementById('butonMonstre1').getElementsByClassName("avancement")
	ava[0].value -= degats;

	var label = document.getElementById('butonMonstre1').getElementsByClassName("labelAvancement")
	label[0].innerHTML = ava[0].value;
 	
	document.getElementById("monstre_1").style.filter = "";
	document.getElementById("monstre_2").style.filter = "";
	document.getElementById("monstre_3").style.filter = "";


		document.getElementById("monstre_1").src="images/hurt_demon.gif";
		setTimeout(() => { 
	    document.getElementById("monstre_1").src="images/idle_demon.gif";
		}, 1000);



 	degats=0

	setTimeout(() => { 
		testmorts();	
	}, 1000);
    }  ); 
//--------------------------------
										
document.getElementById("monstre_2").style.filter = "drop-shadow(0px 0px 10px blue)";
document.getElementById('butonMonstre2').disabled=false;

document.getElementById("butonMonstre2").addEventListener('click',function()
    {
    
    document.getElementById('butonMonstre1').disabled=true;
    document.getElementById('butonMonstre2').disabled=true;
    document.getElementById('butonMonstre3').disabled=true;

	var ava = document.getElementById('butonMonstre2').getElementsByClassName("avancement")
	ava[0].value -= degats;

	var label = document.getElementById('butonMonstre2').getElementsByClassName("labelAvancement")
	label[0].innerHTML = ava[0].value;

	document.getElementById("monstre_1").style.filter = "";
	document.getElementById("monstre_2").style.filter = "";
	document.getElementById("monstre_3").style.filter = "";



		document.getElementById("monstre_2").src="images/hurt_dragon.gif";
		setTimeout(() => { 
	    document.getElementById("monstre_2").src="images/idle_dragon.gif";
		}, 1000);


	degats=0

	setTimeout(() => { 
		testmorts();	
	}, 1000);
    }  ); 
//--------------------------------

document.getElementById("monstre_3").style.filter = "drop-shadow(0px 0px 10px blue)";
document.getElementById('butonMonstre3').disabled=false;

document.getElementById("butonMonstre3").addEventListener('click',function()
    {
    	
    document.getElementById('butonMonstre1').disabled=true;
    document.getElementById('butonMonstre2').disabled=true;
    document.getElementById('butonMonstre3').disabled=true;

	var ava = document.getElementById('butonMonstre3').getElementsByClassName("avancement")
	ava[0].value -= degats;

	var label = document.getElementById('butonMonstre3').getElementsByClassName("labelAvancement")
	label[0].innerHTML = ava[0].value;

	document.getElementById("monstre_1").style.filter = "";
	document.getElementById("monstre_2").style.filter = "";
	document.getElementById("monstre_3").style.filter = "";


		document.getElementById("monstre_3").src="images/hurt_lizard.gif";
		setTimeout(() => { 
	    document.getElementById("monstre_3").src="images/idle_lizard.gif";
		}, 1000);


	degats=0

	setTimeout(() => { 
		testmorts();	
	}, 1000);
    }  ); 
//--------------------------------






	testmorts();

}



//--------------------------------------------------------------------------------------

function hideActions(sa) {
    sa.style.display = "none";
}

function showActions(sa) {
    sa.style.display = "inline-block";
}







function clickplayer(personnage){


		var actionsAFermer = document.getElementsByClassName("buttonAction")
		for (var i = actionsAFermer.length - 1; i >= 0; i--) {
			hideActions(actionsAFermer[i])
		}

		var perso = document.getElementById(personnage)
		var actions = perso.getElementsByClassName("buttonAction")
		for (var i = actions.length - 1; i >= 0; i--) {
			showActions(actions[i])
		}

		if(manaPlayer1<60){
		document.getElementById('buttonspecialperso1').disabled=true;
	}
		if(manaPlayer2<80){
		document.getElementById('buttonspecialperso2').disabled=true;
	}
		if(manaPlayer3<60){
		document.getElementById('buttonspecialperso3').disabled=true;
	}
		if(manaPlayer4<80){
		document.getElementById('buttonspecialperso4').disabled=true;
	}

}




function pertePdV(personnage, perte) {
	var ava = document.getElementById(personnage).getElementsByClassName("avancement")
	ava[0].value -= perte;

	var label = document.getElementById(personnage).getElementsByClassName("labelAvancement")
	label[0].innerHTML = ava[0].value;
}





function finDuTour(){


if(joueursActuels===randomciblemonstreattaque.length){
			document.getElementById('buttonspecialperso1').disabled=false;
			document.getElementById('buttonspecialperso2').disabled=false;
			document.getElementById('buttonspecialperso3').disabled=false;
			document.getElementById('buttonspecialperso4').disabled=false;
	monstresvivants();
}
}




function monstresvivants(){
	var monstresvivants=0;
	if(monstre1alive==true){
		monstresvivants=monstresvivants+1;
	}
	if(monstre2alive==true){
		monstresvivants=monstresvivants+1;
	}
	if(monstre3alive==true){
		monstresvivants=monstresvivants+1;
	}

	var actionsAFermer = document.getElementsByClassName("buttonAction")
		for (var i = actionsAFermer.length - 1; i >= 0; i--) {
			hideActions(actionsAFermer[i])
		}
attaquemonstre(monstresvivants);

if(manaPlayer1<100){
manaPlayer1+=10;
}

if(manaPlayer2<100){
manaPlayer2+=10;
}

if(manaPlayer3<100){
manaPlayer3+=10;
}

if(manaPlayer4<100){
manaPlayer4+=10;
}
		document.getElementById('manaPlayer1').innerHTML=manaPlayer1;
		document.getElementById('manaPlayer2').innerHTML=manaPlayer2;
		document.getElementById('manaPlayer3').innerHTML=manaPlayer3;
		document.getElementById('manaPlayer4').innerHTML=manaPlayer4;


}






function attaquemonstre(monstresrestants){


	var randomCible = randomciblemonstreattaque[Math.floor(Math.random()*randomciblemonstreattaque.length)];
		var attaque = Math.round(Math.random() * 30);



		if(randomCible==='personnage1'){
		persoNumeroDefense=0;
		document.getElementById("perso1").src="images/hurt_perso1.gif";
		setTimeout(() => { 
	    document.getElementById("perso1").src="images/idle_perso1.gif";
		}, 1000);
	}
		if(randomCible==='personnage2'){
		persoNumeroDefense=1;
		document.getElementById("perso2").src="images/hurt_perso2.gif";
		setTimeout(() => { 
	    document.getElementById("perso2").src="images/idle_perso2.gif";
		}, 1000);
	}
		if(randomCible==='personnage3'){
		persoNumeroDefense=2;
		document.getElementById("perso3").src="images/hurt_perso3.gif";
		setTimeout(() => { 
	    document.getElementById("perso3").src="images/idle_perso3.gif";
		}, 1000);
	}
		if(randomCible==='personnage4'){
		persoNumeroDefense=3;
		document.getElementById("perso4").src="images/hurt_perso4.gif";
		setTimeout(() => { 
	    document.getElementById("perso4").src="images/idle_perso4.gif";
		}, 1000);
	}
	
	var defenseValeur = defenseValeurPerso[persoNumeroDefense];


	var ava = document.getElementById(randomCible).getElementsByClassName("avancement")
		ava[0].value = Math.round(ava[0].value-attaque*defenseValeur);

	var label = document.getElementById(randomCible).getElementsByClassName("labelAvancement")
		label[0].innerHTML = ava[0].value;

	teste = document.getElementById(randomCible).getElementsByClassName("labelAvancement")
	teste[0].style.backgroundColor= "red";

	defenseValeurPerso[persoNumeroDefense]=1
	document.getElementById('shieldPlayer1').innerHTML=Math.round(100*(1-defenseValeurPerso[0]));
	document.getElementById('shieldPlayer2').innerHTML=Math.round(100*(1-defenseValeurPerso[1]));
	document.getElementById('shieldPlayer3').innerHTML=Math.round(100*(1-defenseValeurPerso[2]));
	document.getElementById('shieldPlayer4').innerHTML=Math.round(100*(1-defenseValeurPerso[3]));






	setTimeout(() => { 
	teste1 = document.getElementById("player1pvnumber")
	teste1.style.backgroundColor= 'transparent';

	teste2 = document.getElementById("player2pvnumber")
	teste2.style.backgroundColor= 'transparent';

	teste3 = document.getElementById("player3pvnumber")
	teste3.style.backgroundColor= 'transparent';

	teste4 = document.getElementById("player4pvnumber")
	teste4.style.backgroundColor= 'transparent';
	}, 1000);





	testmorts();
	monstresrestants=monstresrestants-1;

//---------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------
	
if(monstresrestants>0){
		setTimeout(() => { 
	var randomCible = randomciblemonstreattaque[Math.floor(Math.random()*randomciblemonstreattaque.length)];
		var attaque = Math.round(Math.random() * 30);



		if(randomCible==='personnage1'){
		persoNumeroDefense=0;
		document.getElementById("perso1").src="images/hurt_perso1.gif";
		setTimeout(() => { 
	    document.getElementById("perso1").src="images/idle_perso1.gif";
		}, 1000);
	}
		if(randomCible==='personnage2'){
		persoNumeroDefense=1;
		document.getElementById("perso2").src="images/hurt_perso2.gif";
		setTimeout(() => { 
	    document.getElementById("perso2").src="images/idle_perso2.gif";
		}, 1000);
	}
		if(randomCible==='personnage3'){
		persoNumeroDefense=2;
		document.getElementById("perso3").src="images/hurt_perso3.gif";
		setTimeout(() => { 
	    document.getElementById("perso3").src="images/idle_perso3.gif";
		}, 1000);
	}
		if(randomCible==='personnage4'){
		persoNumeroDefense=3;
		document.getElementById("perso4").src="images/hurt_perso4.gif";
		setTimeout(() => { 
	    document.getElementById("perso4").src="images/idle_perso4.gif";
		}, 1000);
	}
	
	var defenseValeur = defenseValeurPerso[persoNumeroDefense];


	var ava = document.getElementById(randomCible).getElementsByClassName("avancement")
		ava[0].value = Math.round(ava[0].value-attaque*defenseValeur);

	var label = document.getElementById(randomCible).getElementsByClassName("labelAvancement")
		label[0].innerHTML = ava[0].value;

	teste = document.getElementById(randomCible).getElementsByClassName("labelAvancement")
	teste[0].style.backgroundColor= "red";

	defenseValeurPerso[persoNumeroDefense]=1
	document.getElementById('shieldPlayer1').innerHTML=Math.round(100*(1-defenseValeurPerso[0]));
	document.getElementById('shieldPlayer2').innerHTML=Math.round(100*(1-defenseValeurPerso[1]));
	document.getElementById('shieldPlayer3').innerHTML=Math.round(100*(1-defenseValeurPerso[2]));
	document.getElementById('shieldPlayer4').innerHTML=Math.round(100*(1-defenseValeurPerso[3]));






	setTimeout(() => { 
	teste1 = document.getElementById("player1pvnumber")
	teste1.style.backgroundColor= 'transparent';

	teste2 = document.getElementById("player2pvnumber")
	teste2.style.backgroundColor= 'transparent';

	teste3 = document.getElementById("player3pvnumber")
	teste3.style.backgroundColor= 'transparent';

	teste4 = document.getElementById("player4pvnumber")
	teste4.style.backgroundColor= 'transparent';
	}, 1000);





	testmorts();

		}, 1500);
			monstresrestants=monstresrestants-1;
}



//---------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------
	
if(monstresrestants>0){
		setTimeout(() => { 
	var randomCible = randomciblemonstreattaque[Math.floor(Math.random()*randomciblemonstreattaque.length)];
		var attaque = Math.round(Math.random() * 30);



		if(randomCible==='personnage1'){
		persoNumeroDefense=0;
		document.getElementById("perso1").src="images/hurt_perso1.gif";
		
	//	if(document.getElementById("player1pv").value>1){
		setTimeout(() => { 
	    document.getElementById("perso1").src="images/idle_perso1.gif";
		}, 1000);
	//}
	}
		if(randomCible==='personnage2'){
		persoNumeroDefense=1;
		document.getElementById("perso2").src="images/hurt_perso2.gif";
		
		setTimeout(() => { 
	    document.getElementById("perso2").src="images/idle_perso2.gif";
		}, 1000);
	}
		if(randomCible==='personnage3'){
		persoNumeroDefense=2;
		document.getElementById("perso3").src="images/hurt_perso3.gif";
		setTimeout(() => { 
	    document.getElementById("perso3").src="images/idle_perso3.gif";
		}, 1000);
	}
		if(randomCible==='personnage4'){
		persoNumeroDefense=3;
		document.getElementById("perso4").src="images/hurt_perso4.gif";
		setTimeout(() => { 
	    document.getElementById("perso4").src="images/idle_perso4.gif";
		}, 1000);
	}
	
	var defenseValeur = defenseValeurPerso[persoNumeroDefense];


	var ava = document.getElementById(randomCible).getElementsByClassName("avancement")
		ava[0].value = Math.round(ava[0].value-attaque*defenseValeur);

	var label = document.getElementById(randomCible).getElementsByClassName("labelAvancement")
		label[0].innerHTML = ava[0].value;

	teste = document.getElementById(randomCible).getElementsByClassName("labelAvancement")
	teste[0].style.backgroundColor= "red";

	defenseValeurPerso[persoNumeroDefense]=1
	document.getElementById('shieldPlayer1').innerHTML=Math.round(100*(1-defenseValeurPerso[0]));
	document.getElementById('shieldPlayer2').innerHTML=Math.round(100*(1-defenseValeurPerso[1]));
	document.getElementById('shieldPlayer3').innerHTML=Math.round(100*(1-defenseValeurPerso[2]));
	document.getElementById('shieldPlayer4').innerHTML=Math.round(100*(1-defenseValeurPerso[3]));






	setTimeout(() => { 
	teste1 = document.getElementById("player1pvnumber")
	teste1.style.backgroundColor= 'transparent';

	teste2 = document.getElementById("player2pvnumber")
	teste2.style.backgroundColor= 'transparent';

	teste3 = document.getElementById("player3pvnumber")
	teste3.style.backgroundColor= 'transparent';

	teste4 = document.getElementById("player4pvnumber")
	teste4.style.backgroundColor= 'transparent';
	}, 1000);





	testmorts();

		}, 3000);
			monstresrestants=monstresrestants-1;
}

//---------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------
//---------------------------------------------------------------------------------------
	setTimeout(() => { 
	document.getElementById('butonPerso4').disabled=false;
	document.getElementById("butonPerso4").style.filter = "drop-shadow(0px 0px 10px blue)";
	document.getElementById('butonPerso3').disabled=false;
	document.getElementById("butonPerso3").style.filter = "drop-shadow(0px 0px 10px blue)";
	document.getElementById('butonPerso2').disabled=false;
	document.getElementById("butonPerso2").style.filter = "drop-shadow(0px 0px 10px blue)";
	document.getElementById('butonPerso1').disabled=false;
	document.getElementById("butonPerso1").style.filter = "drop-shadow(0px 0px 10px blue)";
		}, 4000);
}


//---------------------------------------------------------------------------------------



function testmorts() {

		if(document.getElementById("player1pv").value<1){
			document.getElementById("player1pv").value=1000
		document.getElementById("perso1").src="images/death_perso1.gif";
		setTimeout(() => { 
		document.getElementById("butonPerso1").style.display = "none";	
		}, 3000);

		document.getElementById("butonPerso1").disable = true;
		personnage1=false;

				  for( var i = 0; i < randomciblemonstreattaque.length; i++){ 
                                   
        if ( randomciblemonstreattaque[i] === "personnage1") { 
            randomciblemonstreattaque.splice(i, 1); 
            i--; 
        }
	}

						  for( var i = 0; i < randomspecialdegats.length; i++){ 
                                   
        if ( randomspecialdegats[i] === "personnage1") { 
            randomspecialdegats.splice(i, 1); 
            i--; 
        }
	}

		}





		if(document.getElementById("player2pv").value<1){
		document.getElementById("player2pv").value=-1000
		document.getElementById("perso2").src="images/death_perso2.gif";
		setTimeout(() => { 
		document.getElementById("butonPerso2").style.display = "none";	
		}, 2000);


		document.getElementById("butonPerso2").disable = true;
		personnage2=false;

				  for( var i = 0; i < randomciblemonstreattaque.length; i++){ 
                                   
        if ( randomciblemonstreattaque[i] === "personnage2") { 
            randomciblemonstreattaque.splice(i, 1); 
            i--; 
        }
	}
						  for( var i = 0; i < randomspecialdegats.length; i++){ 
                                   
        if ( randomspecialdegats[i] === "personnage2") { 
            randomspecialdegats.splice(i, 1); 
            i--; 
        }
	}
		}




		if(document.getElementById("player3pv").value<1){
document.getElementById("player3pv").value=1000
		document.getElementById("perso3").src="images/death_perso3.gif";
		setTimeout(() => { 
		document.getElementById("butonPerso3").style.display = "none";	
		}, 2000);


		document.getElementById("butonPerso3").disable = true;
		personnage3=false;

				  for( var i = 0; i < randomciblemonstreattaque.length; i++){ 
                                   
        if ( randomciblemonstreattaque[i] === "personnage3") { 
            randomciblemonstreattaque.splice(i, 1); 
            i--; 
        }
	}

					  for( var i = 0; i < randomspecialdegats.length; i++){ 
                                   
        if ( randomspecialdegats[i] === "personnage3") { 
            randomspecialdegats.splice(i, 1); 
            i--; 
        }
	}
		}





		if(document.getElementById("player4pv").value<1){
document.getElementById("player4pv").value=1000
		document.getElementById("perso4").src="images/death_perso4.gif";
		setTimeout(() => { 
		document.getElementById("butonPerso4").style.display = "none";	
		}, 2000);



		document.getElementById("butonPerso4").disable = true;	
		personnage4=false;

				  for( var i = 0; i < randomciblemonstreattaque.length; i++){ 
                                   
        if ( randomciblemonstreattaque[i] === "personnage4") { 
            randomciblemonstreattaque.splice(i, 1); 
            i--; 
        }
	}

						  for( var i = 0; i < randomspecialdegats.length; i++){ 
                                   
        if ( randomspecialdegats[i] === "personnage4") { 
            randomspecialdegats.splice(i, 1); 
            i--; 
        }
	}
		}












		if(document.getElementById("monstre1pv").value<1){
		document.getElementById("monstre_1").src="images/death_demon.gif";
		setTimeout(() => { 
		document.getElementById("butonMonstre1").style.display = "none";	
		}, 2400);
	
		document.getElementById("butonMonstre1").disable = true;
		monstre1alive=false;

			 for( var i = 0; i < randomspecialdegats.length; i++){ 
                                   
        if ( randomspecialdegats[i] === "butonMonstre1") { 
            randomspecialdegats.splice(i, 1); 
            i--; 
        }
	}
		}

		if(document.getElementById("monstre2pv").value<1){
		document.getElementById("monstre_2").src="images/death_dragon.gif";
		setTimeout(() => { 
		document.getElementById("butonMonstre2").style.display = "none";	
		}, 1500);

		document.getElementById("butonMonstre2").disable = true;
		monstre2alive=false;

			 for( var i = 0; i < randomspecialdegats.length; i++){ 
                                   
        if ( randomspecialdegats[i] === "butonMonstre2") { 
            randomspecialdegats.splice(i, 1); 
            i--; 
        }
	}
		}

		if(document.getElementById("monstre3pv").value<1){
		document.getElementById("monstre_3").src="images/death_lizard.gif";
		setTimeout(() => { 
		document.getElementById("butonMonstre3").style.display = "none";	
		}, 1500);

		document.getElementById("butonMonstre3").disable = true;
		monstre3alive=false;

			 for( var i = 0; i < randomspecialdegats.length; i++){ 
                                   
        if ( randomspecialdegats[i] === "butonMonstre3") { 
            randomspecialdegats.splice(i, 1); 
            i--; 
        }
	}
		}




	
		if(personnage1==false && personnage2==false && personnage3==false && personnage4==false){
		setTimeout(() => { 
		document.body.innerHTML = "<img src=images/gameOver.gif id=gameOver>";
		}, 2000);
		}






		if(monstre1alive ==false && monstre2alive == false && monstre3alive == false){

	setTimeout(() => { 
	document.body.innerHTML = "<img src=images/gameWon.gif id=gameOver>";
		}, 2000);
		}











}

		 


