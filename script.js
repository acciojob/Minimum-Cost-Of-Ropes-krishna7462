//your code here
function mincost(event){
	event.preventDefault();
	var input = document.querySelector('input').value;
	var arr=input.split(",");
	arr.sort( function(a,b){return a-b});
	var cost =0;
	while(arr.length>1){
        var res = parseInt(arr[0])+parseInt(arr[1]);
		cost +=res;
		arr.push(res);
		arr.shift();
		arr.shift();
		arr.sort(function(a,b){return a-b});
	}
	document.getElementById('result').innerText = cost;
}




