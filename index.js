var form = document.getElementById("addForm");
var listItem = document.getElementById("items");

form.addEventListener("submit", additem);

listItem.addEventListener("click", removeItem);

function additem(e) {
    e.preventDefault()

    var inputValue = document.getElementById("inputtextvalue").value;
    
    var newListItem = document.createElement("li");
    newListItem.className = "list-group-item"

    newListItem.appendChild(document.createTextNode(inputValue))

    var neweditbtn = document.createElement("button")
    neweditbtn.appendChild(document.createTextNode("Edit"))
    neweditbtn.className = "btn btn-danger btn-sm float-right delete"

    var newbtn = document.createElement("button")
    newbtn.className = "btn btn-danger btn-sm float-right delete"
    newbtn.appendChild(document.createTextNode("X"))
    newListItem.appendChild(newbtn)
    newListItem.appendChild(neweditbtn)
    listItem.appendChild(newListItem)
}


function removeItem(e){
    if(e.target.classList.contains("delete")){
        if(confirm("Are you sure?")){
            var li = e.target.parentElement
            listItem.removeChild(li)
        }
    }
}