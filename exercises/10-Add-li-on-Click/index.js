let button = document.querySelector("#superDuperButton");

const countObject = {
	"4" : "Forth",
	"5" : "Fifth",
	"6" : "Sixth",
	"7" : "Seventh",
	"8" : "Eight",
	"9" : "Nineth",
	"10": "Tenth"
}


button.addEventListener("click", function() {
	//your code here
	let myList = document.querySelector("#myList")
	newLi = document.createElement("li");

	// Question: How to add a functionality so that count get updated
	// const numb = countObject[counter]
	// console.log(numb)
	// let t = document.createTextNode(numb + " element");
	let counter = myList.children.length +1;
	t = document.createTextNode(countObject[counter] + " element");
	//t = document.createTextNode("Forth element");
	newLi.appendChild(t)
	myList.appendChild(newLi)
});
