var main = document.getElementById("main");


var div = document.createElement("div");
main.appendChild(div);
div.setAttribute("id","div");



var input = document.createElement("input");
div.appendChild(input);
input.setAttribute("id","inputData");
input.setAttribute("type","text");
input.setAttribute("placeholder","Add a task here...");

var button = document.createElement("button");
div.appendChild(button);
var buttontext = document.createTextNode("+"); 
button.appendChild(buttontext);
button.setAttribute("id","butn");
button.setAttribute("onclick","addData()");

var datashow = document.createElement("div")
div.appendChild(datashow);
datashow.setAttribute("id","datashow")



var ul = document.createElement("ul");
datashow.appendChild(ul);
ul.appendChild("id","ul")


function addData(){
    var inputData= document.getElementById("inputData");
    console.log(inputData.value);

    if(inputData.value === ""){
        alert("Type something...")
    }else{


    var li = document.createElement("li");
    ul.appendChild(li);
    li.setAttribute("id","li")

   var span =document.createElement("div");
   span.setAttribute("id","span")
   li.appendChild(span)
    var litext = document.createTextNode(inputData.value)
    span.appendChild(litext);}
    document.getElementById("inputData").value = ""


    var editbutton = document.createElement("button")
    li.appendChild(editbutton)

    var  text = document.createElement("img")
    text.setAttribute("id","img")
    text.setAttribute("src","./1442912.png")
    editbutton.appendChild(text)
    editbutton.addEventListener("click",function(){
        console.log(editbutton.parentNode.firstChild.nodeValue)
        var promt = prompt("update item here",editbutton.parentNode.firstChild.nodeValue)
        editbutton.parentNode.firstChild.nodeValue = promt

    })



    var deletebutton = document.createElement("button")
    li.appendChild(deletebutton)
    var  text = document.createElement("img")
    text.setAttribute("id","img")
    text.setAttribute("src","./download.png")
    deletebutton.appendChild(text)
    // var deletetext = document.createTextNode("delete")
    // deletebutton.appendChild(deletetext);
    
    deletebutton.addEventListener("click", function(){
        console.log(deletebutton.parentNode.firstChild.innerHTML)
        deletebutton.parentNode.remove()


    })

    var divfoter = document.createElement("div");
    div.appendChild(divfoter);
    divfoter.setAttribute("id","divfoter")
    divfoter.parentNode.inputData.deletebutton.value
}