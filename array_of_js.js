/*
var userData=prompt("Input Celci");
console.log("this temp. Kelvin = " + (Number(userData)-216));



///////////ARRAY DUZELTMEYIN BIRINCI QAYDASI//////////////////

var List =new Array ("bir","iki");

var myList = ["bir", "iki"];
console.log(myList);

///////////PUSH/////////////

myList.push("uc");
console.log(myList);


/////////////POP///////////////////

var output=myList.pop();
console.log(output);

console.log(myList);




/////////SHIFT && UNSHIFT/////////////////

var myList = ["bir", "iki"];
myList.unshift("sifir");
console.log(myList);

myList.shift();
console.log(myList);

*/

/////////SLICE && SPLICE//////////////////

//var myMonth=["yanvar", "fevral", "mart","aprel", "may","AVQ"];
/*var kvartal=myMonth.splice(2,5, "iyun", "iyul");
console.log(kvartal);
console.log(myMonth);

////////////////REVERSE//////////////////

myMonth.reverse();
console.log(myMonth);





///////////////NECENCI ELEMENTI//////////////////
console.log(myMonth[2]);

myMonth[4]="MAY";
console.log(myMonth);





/////////////INDEXOF////////////////

var check=myMonth.indexOf("aprel");
console.log(check);

var check=myMonth.indexOf("dekabr");
console.log(check);









if(myMonth.indexOf("avqust")==-1){
	myMonth.push("avqust");
}



console.log(myMonth);



if(myMonth.indexOf("AVQ")!=-1){
	myMonth.splice(myMonth.indexOf("AVQ"),1,"SENTYABR");
}
console.log(myMonth);



console.log(myMonth.join("-"));


*/



///////////////////////ENQUEU VS dequeu//////////////
/*
var myList=[];
function myEnqueu (list, val){
	return myList.push(val);;
}
myEnqueu(myList,"hello");
console.log(myList);




function myDeque(list, val){
	return myList.shift(val);;
}
myDeque(myList,"hello");
console.log(myList);



*/


//////////////////////STACK//////////////////////////////////


/*
var myList=["1", "2", "3"];
console.log(myList);


function ins(list,val){
	return myList.push(val);
}

ins(myList,"js");
console.log(myList);








function out(list, val){
	return myList.pop(val);
}                      
out(myList);
console.log(myList);


*/


//////////////////////OBJECT/////////////////////


var myObject = {
	name : "Fidan",
	lastname: "Aliyeva",
	groupname: {"name": "p502"}
	coursename: function (a){
		return "CodeAcademy"+a;
	}
};
console.log(myObject.name + " " + myObject.lastname + " " + myObject.groupname+ " " + myObject.coursename(" kursu"));










































