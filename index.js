// var listItem = document.getElementsByClassName("list-group-item");


// listItem[2].style.backgroundColor = "green";


// for(var i=0; i < listItem.length; i++ ){
//     listItem[i].style.fontWeight = "bold";
// }


var li = document.getElementsByTagName("li")

li[0].style.color = "red"
li[2].style.fontWeight = "bold"

for(var i=0; i < li.length; i++){
    li[i].style.backgroundColor = "yellow"
} 

console.log(li.length)