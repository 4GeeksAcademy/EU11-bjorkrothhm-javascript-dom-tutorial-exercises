let countries = ["USA", "France", "Italy", "Brazil", "Colombia", "Belize", "Venezuela"];
// your code here


let selector =  document.querySelector("#mySelect");

for (country of countries){
    const newOption = document.createElement("option")
    const t = document.createTextNode(country);
    //htmlString =
    newOption.appendChild(t)
    selector.appendChild(newOption);
};

selector.addEventListener("change", function(event){
    alert(event.target.value);
});
 
