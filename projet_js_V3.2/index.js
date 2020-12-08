var attaqueEnCours = false;

var randomciblemonstreattaque = [
  "personnage1",
  "personnage2",
  "personnage3",
  "personnage4"
];

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











//---------------------------------------------------------------------------




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

		choixcibleattaque(10);


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
}

function specialperso1(){
		document.getElementById('buttonattaqueperso1').disabled=false;
		document.getElementById('buttondefenseperso1').disabled=false;
		document.getElementById('buttonspecialperso1').disabled=true;	

		document.getElementById('butonPerso1').disabled=true;
		var actionsAFermer = document.getElementsByClassName("buttonAction")
		for (var i = actionsAFermer.length - 1; i >= 0; i--) {
			hideActions(actionsAFermer[i])
		}
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
		choixcibleattaque(10);
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

		defenseValeurPerso[1]=defenseValeurPerso[1]-0.3;
		

		if(defenseValeurPerso[1]<0){
			defenseValeurPerso[1]=0
		}	

		document.getElementById('shieldPlayer2').innerHTML=Math.round(100*(1-defenseValeurPerso[1]));

}

function specialperso2(){
		document.getElementById('buttonattaqueperso2').disabled=false;
		document.getElementById('buttondefenseperso2').disabled=false;
		document.getElementById('buttonspecialperso2').disabled=true;	

		document.getElementById('butonPerso2').disabled=true;
		var actionsAFermer = document.getElementsByClassName("buttonAction")
		for (var i = actionsAFermer.length - 1; i >= 0; i--) {
			hideActions(actionsAFermer[i])
		}
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
		choixcibleattaque(10);
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

		defenseValeurPerso[2]=defenseValeurPerso[2]-0.3;	
		


		if(defenseValeurPerso[2]<0){
			defenseValeurPerso[2]=0
		}

		document.getElementById('shieldPlayer3').innerHTML=Math.round(100*(1-defenseValeurPerso[2]));
}

function specialperso3(){
		document.getElementById('buttonattaqueperso3').disabled=false;
		document.getElementById('buttondefenseperso3').disabled=false;
		document.getElementById('buttonspecialperso3').disabled=true;	

		document.getElementById('butonPerso3').disabled=true;
		var actionsAFermer = document.getElementsByClassName("buttonAction")
		for (var i = actionsAFermer.length - 1; i >= 0; i--) {
			hideActions(actionsAFermer[i])
		}

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
choixcibleattaque(100);
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

		defenseValeurPerso[3]=defenseValeurPerso[3]-0.3;
	

		if(defenseValeurPerso[3]<0){
			defenseValeurPerso[3]=0
		}

			document.getElementById('shieldPlayer4').innerHTML=Math.round(100*(1-defenseValeurPerso[3]));	
}

function specialperso4(){
		document.getElementById('buttonattaqueperso4').disabled=false;
		document.getElementById('buttondefenseperso4').disabled=false;
		document.getElementById('buttonspecialperso4').disabled=true;	

		document.getElementById('butonPerso4').disabled=true;
		var actionsAFermer = document.getElementsByClassName("buttonAction")
		for (var i = actionsAFermer.length - 1; i >= 0; i--) {
			hideActions(actionsAFermer[i])
		}

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

 	degats=0
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

	degats=0
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

	degats=0
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




 		


}


function pertePdV(personnage, perte) {
	var ava = document.getElementById(personnage).getElementsByClassName("avancement")
	ava[0].value -= perte;

	var label = document.getElementById(personnage).getElementsByClassName("labelAvancement")
	label[0].innerHTML = ava[0].value;
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

}







function attaquemonstre(monstresvivants){

		
for(var i = 0; i< monstresvivants; i++ ) { 
	var randomCible = randomciblemonstreattaque[Math.floor(Math.random()*randomciblemonstreattaque.length)];
		var attaque = Math.round(Math.random() * 10);



		if(randomCible==='personnage1'){
		persoNumeroDefense=0;
	}
		if(randomCible==='personnage2'){
		persoNumeroDefense=1;
	}
		if(randomCible==='personnage3'){
		persoNumeroDefense=2;
	}
		if(randomCible==='personnage4'){
		persoNumeroDefense=3;
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


	
/*
var sauvegardedegats1bool = false;
var sauvegardedegats2bool = false;
var sauvegardedegats3bool = false;

if(sauvegardedegats1bool==false){
var sauvegardedegats1 = document.getElementById(randomItem).getElementsByClassName("labelAvancement");
			setTimeout(() => { 
		sauvegardedegats1[0].style.backgroundColor= "white";
	}, 1000);
	sauvegardedegats1bool=true;		
}	
else if(sauvegardedegats2bool==false){
var sauvegardedegats2 = document.getElementById(randomItem).getElementsByClassName("labelAvancement");
			setTimeout(() => { 
		sauvegardedegats2[0].style.backgroundColor= "white";
	}, 1000);
	sauvegardedegats2bool=true;		
}	
else if(sauvegardedegats3bool==false){
var sauvegardedegats3 = document.getElementById(randomItem).getElementsByClassName("labelAvancement");
			setTimeout(() => { 
		sauvegardedegats3[0].style.backgroundColor= "white";
	}, 1000);
	sauvegardedegats3bool=true;		
}	
	*/



		
		
	setTimeout(() => { 
		testmorts()	
	}, 1000);

}



	setTimeout(() => { 
	teste1 = document.getElementById("player1pvnumber")
	teste1.style.backgroundColor= "white";

	teste2 = document.getElementById("player2pvnumber")
	teste2.style.backgroundColor= "white";

	teste3 = document.getElementById("player3pvnumber")
	teste3.style.backgroundColor= "white";

	teste4 = document.getElementById("player4pvnumber")
	teste4.style.backgroundColor= "white";
	}, 1000);



	document.getElementById('butonPerso4').disabled=false;
	document.getElementById('butonPerso3').disabled=false;
	document.getElementById('butonPerso2').disabled=false;
	document.getElementById('butonPerso1').disabled=false;

}


//---------------------------------------------------------------------------------------



function testmorts() {

		if(document.getElementById("player1pv").value<1){

		document.getElementById("butonPerso1").style.display = "none";	
		document.getElementById("butonPerso1").disable = true;
		personnage1=false;
		}
		if(document.getElementById("player2pv").value<1){
		document.getElementById("butonPerso2").style.display = "none";	
		document.getElementById("butonPerso2").disable = true;
		personnage2=false;
		}

		if(document.getElementById("player3pv").value<1){
		document.getElementById("butonPerso3").style.display = "none";	
		document.getElementById("butonPerso3").disable = true;
		personnage3=false;
		}

		if(document.getElementById("player4pv").value<1){
		document.getElementById("butonPerso4").style.display = "none";
		document.getElementById("butonPerso4").disable = true;	
		personnage4=false;
		}




		if(document.getElementById("monstre1pv").value<1){

		document.getElementById("butonMonstre1").style.display = "none";	
		document.getElementById("butonMonstre1").disable = true;
		monstre1alive=false;
		}

		if(document.getElementById("monstre2pv").value<1){

		document.getElementById("butonMonstre2").style.display = "none";	
		document.getElementById("butonMonstre2").disable = true;
		monstre2alive=false;
		}

		if(document.getElementById("monstre3pv").value<1){

		document.getElementById("butonMonstre3").style.display = "none";	
		document.getElementById("butonMonstre3").disable = true;
		monstre1alive=false;
		}





		if(personnage1==false && personnage2==false && personnage3==false && personnage4==false){
		document.body.innerHTML = "YOU LOSE";
		}


		if(monstre1alive==false && monstre2alive==false && monstre3salive==false){
		document.body.innerHTML = "YOU WIN";
		}

/*
	if(monstre1pv < 1){
		monstre1alive=false;
	
		 document.getElementById("monstre1pv").innerHTML= "0";
	



				 setTimeout(() => { 
			document.getElementById("monstre_1").src= "images/monstre_1_mort_n1.jpg";	
		}, 125);
	

		 setTimeout(() => { 
			document.getElementById("monstre_1").src= "images/monstre_1_mort_n2.jpg";	
		}, 250);


		 setTimeout(() => { 
			document.getElementById("monstre_1").src= "images/monstre_1_mort_n3.jpg";	
		}, 375);


		 setTimeout(() => { 
			document.getElementById("monstre_1").src= "images/monstre_1_mort_n4.jpg";	
		}, 500);


		 setTimeout(() => { 
			document.getElementById("monstre_1").src= "images/monstre_1_mort_n5.jpg";	
		}, 625);


		 setTimeout(() => { 
			document.getElementById("monstre_1").src= "images/monstre_1_mort_n6.jpg";	
		}, 750);


		 setTimeout(() => { 
			document.getElementById("monstre_1").src= "images/monstre_1_mort_n7.jpg";	
		}, 875);


		 setTimeout(() => { 
			document.getElementById("monstre_1").src= "images/monstre_1_mort_n8.jpg";	
		}, 1000);
	}*/
}

		 


