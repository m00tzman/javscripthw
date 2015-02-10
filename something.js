
function threeDoors(num){
	var num = document.getElementById('num').value; //Getting number from the id 'num'
  if(num==1){
   alert("YOU GOT A CAR");
   console.log("I'm not telling you what kind it is.");
}else if (num==2){
  alert("YOU GOT A TOILET");
  console.log("Not sure if we cleaned it or not.");
}else if (num==3){
  alert("YOU WIN A TRIP");
  console.log("To places unknown!");
}else if (num > 3){
  alert("WHY ARE YOU WALKING AWAY");
  console.log("Your loss.");
}
}

//YAY! Fighting games!
var sf = ["Ryu","Ken","Chun-Li","M.Bison"]; //Street Fighter
var mk = ["Sub-Zero","Scorpion","Sonya","Shao Kahn"]; //Mortal Kombat
var kof = ["Kyo","Iori","King","Geese"]; //King of Fighters
var game = [sf, mk, kof] //Multi-Dimensional array for access

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



