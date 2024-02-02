function handleFormSubmit(event) {
    event.preventDefault()
    console.log(123)
    var chooseExpensement = document.getElementById("chooseExpensement").value 
    var chooseDiscription = document.getElementById("chooseDiscription").value 
    var chooseCategory = document.getElementById("chooseCategory").value 

    const ul = document.getElementById("listItem")

    const li = document.createElement("li")
    const textnode = document.createTextNode(chooseExpensement+" - "+chooseDiscription+" - "+chooseCategory+"  ")
    li.appendChild(textnode)
    

    const obj = {
        chooseExpensement,
        chooseDiscription,
        chooseCategory
          }
          localStorage.setItem(obj.chooseExpensement, JSON.stringify(obj))


        const button = document.createElement("button")
        button.classList.add("delete-btn")
        button.id = "button"
        const textnode2 = document.createTextNode("delete expense")
        button.appendChild(textnode2)
        li.appendChild(button)

        const button2 = document.createElement("button")
        button2.classList.add("delete-btn2")
        button2.id = "button2"
        const textnode3 = document.createTextNode("Edit expense")
        button2.appendChild(textnode3)
        li.appendChild(button2)

        ul.appendChild(li)

        
  
        var delbutton = document.getElementById("button")
        delbutton.addEventListener('click', function(e){
        if(e.target.classList.contains('delete-btn')){
            var ftd = e.target.parentElement
            
            ul.removeChild(ftd)
            localStorage.removeItem(obj.emailId)
        }
        })

        var editbutton = document.getElementById("button2")

        editbutton.addEventListener('click', function(ev){
        if(ev.target.classList.contains('delete-btn2')){
            var ftd2 = ev.target.parentElement
            
            ul.removeChild(ftd2)

            

            var useredit = document.getElementById("username")
            var emailedit = document.getElementById("email")
            var phoneedit = document.getElementById("phone")
            useredit.textContent = obj.user
            useredit.textContent = obj.emailId
            phoneedit.textContent = obj.pass

            localStorage.removeItem(obj.emailId)
        }
        })
}
