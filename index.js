function handleFormSubmit(event) {
    event.preventDefault()

    const tableNo1 = document.getElementById("tableno1");
    const tableNo2 = document.getElementById("tableno2");
    const tableNo3 = document.getElementById("tableno3");

    const userDetails = {
        price: event.target.orderCharge.value,
        item: event.target.orderItem.value,
        tableNo: event.target.tableno.value
    }
    
    axios.post("https://crudcrud.com/api/c6247db05aa84567a23d7dc77fc98c35/resturentData",
    userDetails
    )
    .then((response) => console.log(response.data))
    .catch((error) => console.log(error))

    document.getElementById("orderCharge").value = "";
    document.getElementById("orderItem").value = "";
    document.getElementById("tableno").value = "";
    
    window.addEventListener("DOMContentLoaded", function(e) {
        axios.get("https://crudcrud.com/api/c6247db05aa84567a23d7dc77fc98c35/resturentData")
        .then((result) => {
          for (var i = 0; i< result.data.length; i++) {
            displayUserOnScreen(result.data[i])
          }
        })
        .catch((error) => {
          console.log(error)
        })
    })
    
    function displayUserOnScreen(userDetails) {
        const userItem = document.createElement("li");
        userItem.appendChild(
          document.createTextNode(
            `${userDetails.price+" rs"} - ${userDetails.item} - ${userDetails.tableNo}`
          )
        );
        
        

         const deleteBtn = document.createElement("button");
         deleteBtn.appendChild(document.createTextNode("Delete"));
         userItem.appendChild(deleteBtn);
        
        
        deleteBtn.addEventListener("click", function (event) {
            const userList = event.target.parentElement.parentElement
            userList.removeChild(event.target.parentElement);
            
            axios.delete("https://crudcrud.com/api/c6247db05aa84567a23d7dc77fc98c35/resturentData/660b73751492af03e8f11610")
            .then((result) => console.log(result))
            .catch((error) => console.log(error))
            
        })
        
         
         const editBtn = document.createElement("button");
         editBtn.appendChild(document.createTextNode("Edit"));
         userItem.appendChild(editBtn);

         editBtn.addEventListener("click", function (event) {
            const userList = event.target.parentElement.parentElement
            userList.removeChild(event.target.parentElement);
            
          axios.put("https://crudcrud.com/api/c6247db05aa84567a23d7dc77fc98c35/resturentData/660b73751492af03e8f11610", {
            price: 200,
            item: "Dosa",
            tableNo: "Table no 3"
            })
          .then((result) => console.log(result))
          .catch((error) => console.log(error))
      
            document.getElementById("orderCharge").value = userDetails.orderCharge;
            document.getElementById("orderItem").value = userDetails.orderItem;
            document.getElementById("tableno").value = userDetails.tableno;
          });
        
        
        if (userDetails.tableNo == "Table no 1") {
            tableNo1.appendChild(userItem);
        }

        else if (userDetails.tableNo == "Table no 2") {
            tableNo2.appendChild(userItem);
        } 
            
        else {
            tableNo3.appendChild(userItem);
        }
    }
}
    

    
    

    