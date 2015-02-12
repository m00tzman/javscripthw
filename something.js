
function threeDoors(num){
	var num = document.getElementById('num').value; //Getting number from the id 'num'
  if(num==1){ //if you put in the number one...
   alert("YOU GOT A CAR"); // THIS WILL POP UP ON THIS SCREEN!
   console.log("I'm not telling you what kind it is."); //And this snarky comment will appear in your console.
}else if (num==2){ //The same applies for entering two and three
  alert("YOU GOT A TOILET");
  console.log("Not sure if we cleaned it or not.");
}else if (num==3){
  alert("YOU WIN A TRIP");
  console.log("To places unknown!");
}else if (num > 3){ //however if you enter any number greater than three...
  alert("WHY ARE YOU WALKING AWAY"); //This will happen
  console.log("Your loss.");
}
}

//YAY! Fighting games!
var sf = ["Ryu","Ken","Chun-Li","M.Bison"]; //Street Fighter variable.
var mk = ["Sub-Zero","Scorpion","Sonya","Shao Kahn"]; //Mortal Kombat variable.
var kof = ["Kyo","Iori","King","Geese"]; //King of Fighters variable.
var game = [sf, mk, kof] //Multi-Dimensional array for access variable.

function selectChar(){
	var vg = document.getElementById('vg').value; 
	var fighter = document.getElementById('fighter').value;
	alert(game[vg][fighter]);
	if(vg==0){ //If you chose Street Fighter
		console.log("Can't beat the classics.");
	}
	else if(vg==1){ //If you chose Mortal Kombat
		console.log("Honestly, Mortal Kombat is kind of overrated.");
	}
	else if (vg==2) { //If you chose King of Fighters
		console.log("You have good taste! A personal favorite of mine.")
	};
}
// 	vg is choosing which game of the 3, fighter is selecting which fighter according to which game



