// var listItem = document.getElementsByClassName("list-group-item");


// listItem[2].style.backgroundColor = "green";


// for(var i=0; i < listItem.length; i++ ){
//     listItem[i].style.fontWeight = "bold";
// }


// var li = document.getElementsByTagName("li")

// li[0].style.color = "red"
// li[2].style.fontWeight = "bold"

// for(var i=0; i < li.length; i++){
//     li[i].style.backgroundColor = "yellow"
// } 

// console.log(li.length)

//QUERYSELECTOR

// var secondListItem = document.querySelector(".list-group-item:nth-child(1)");
// secondListItem.style.backgroundColor = "green"

// var thirdListItem = document.querySelector(".list-group-item:nth-child(2)");
// thirdListItem.style.display = "none"

////QUERYSELECTORALL

var oddListItem = document.querySelectorAll("li:nth-child(odd)")

for(var i = 0; i<oddListItem.length; i++ ){
    oddListItem[i].style.backgroundColor = "green"
}

var secondListItem = document.querySelectorAll("li")
secondListItem[1].style.color = "blue"