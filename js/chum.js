

var board = [[],[],[],[]];

var dexbo = new Array(4);
var n = 1;

for (var i = 0; i < dexbo.length; i++){
	dexbo[i] = new Array(7);

}
for (var i = 0; i < dexbo.length; i++){
	for (var j = 0; j < dexbo[i].length; j++){
		dexbo[i][j] = n;
		n++;
	}
}

var game = "over";

$(document).ready(function(){

	var cool = document.getElementById('niku')
	cool.className = "grid-container"
	var toAdd = document.createDocumentFragment();
	for(var i= 1; i < 29; i++){
		var newDiv = document.createElement('div');
		newDiv.className = 'sq';
		newDiv.id = ""+i;
		newDiv.value = "nc";
		newDiv.setAttribute("onclick", "ch("+ i + ")")
		toAdd.appendChild(newDiv);

	}
	cool.appendChild(toAdd);




});
	

function finde(arr, val){
	for( var i = 0; i <= arr.length; i++){
		if(arr[i].includes(val)){
			return [i, arr[i].indexOf(val)]
		}
	}
}



function newgame() {
    "use strict"
    game = "on";
    var i
    for (i = 1; i <= 28; i += 1) {
        document.getElementById(""+i).style.backgroundColor = "var(--primary2)";
        document.getElementById(""+i).value = "nc";
        
    }
}

var lis = [22];
function ch(x) {
	lis = [22];
    if (document.getElementById(""+x).value === "nc") {
        var i;
        
        var v = finde(dexbo, x)
        for (var i = 0; i <= v[0]; i++) {
        	for(var j = v[1]; j <dexbo[i].length; j++){
        		if( i <=v[0] || j >= v[1]){
        			lis.push(dexbo[i][j])
	            	
	            }
	        }
        }
        lis.shift();
        for(var k=0; k <lis.length; k++){
        	var q = lis[k];
        	document.getElementById(""+q).style.backgroundColor = "var(--primary1)";
	    	document.getElementById(""+q).value = "c";
	    }
    }
}
