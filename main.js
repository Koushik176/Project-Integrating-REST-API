const myForm = document.querySelector('#my-form');

myForm.addEventListener('submit',saveToCrud);

function saveToCrud(e) {
    e.preventDefault();

    const candyName = e.target.candyName.value;
    const description = e.target.description.value;
    const price = e.target.price.value;
    const quantity = e.target.quantity.value;
    const obj = {
        candyName,
        description,
        price,
        quantity,
    }

    axios.post("https://crudcrud.com/api/45f77ad83ccb421b99188084caae666c/stockData", obj)
        .then((Response) => {
            showUserOnScreen(Response.data);
        })
        .catch((err) => {
            console.log(err)
        })
    //localStorage.setItem(obj.description, JSON.stringify(obj));
    
}

function showUserOnScreen(obj) {
    const parentElem = document.getElementById('users');
    const childElem = document.createElement('li');
    childElem.textContent = obj.candyName+'  -  '
        +obj.description+'  -  '+obj.price+'  -  '+obj.quantity;
    const buy1Button = document.createElement('input');
    buy1Button.type = 'button';
    buy1Button.className = 'btn btn-primary';
    buy1Button.value = 'Buy1';
    buy1Button.onclick = () => {
        axios.put(`https://crudcrud.com/api/45f77ad83ccb421b99188084caae666c/stockData/${obj._id}`,
        {
            candyName:obj.candyName,
            description:obj.description,
            price:obj.price,
            quantity:obj.quantity - 1,
        })
            .then((response) => {
                if(obj.quantity < 1){
                    alert(`${obj.candyName} stock sold out`);

                }else{
                    console.log(response);
                    while (parentElem.firstChild) {
                        parentElem.removeChild(parentElem.firstChild);
                    }
                    //parentElem.removeChild(childElem);
                    axios.get("https://crudcrud.com/api/45f77ad83ccb421b99188084caae666c/stockData")
                    .then((response) => {
                        for(var i = 0; i< response.data.length; i++)
                        {
                            showUserOnScreen(response.data[i]);
                        }
                    })
                    .catch((err) => {
                        console.log(err)
                    })
                }
            })
            .catch((err) => {
                console.log("Stock sold Out");
            })
        
    }
    childElem.appendChild(buy1Button);
    parentElem.appendChild(childElem);
    const buy2Button = document.createElement('input');
    buy2Button.type = 'button';
    buy2Button.className = 'btn btn-primary';
    buy2Button.value = 'Buy2';
    buy2Button.onclick = () => {
        axios.put(`https://crudcrud.com/api/45f77ad83ccb421b99188084caae666c/stockData/${obj._id}`,
        {
            candyName:obj.candyName,
            description:obj.description,
            price:obj.price,
            quantity:obj.quantity - 2,
        })
            .then((response) => {
                if(obj.quantity < 1){
                    alert(`${obj.candyName} stock sold out`);
                    
                }else{
                    console.log(response);
                    while (parentElem.firstChild) {
                        parentElem.removeChild(parentElem.firstChild);
                    }
                    //parentElem.removeChild(childElem);
                    axios.get("https://crudcrud.com/api/45f77ad83ccb421b99188084caae666c/stockData")
                    .then((response) => {
                        for(var i = 0; i< response.data.length; i++)
                        {
                            showUserOnScreen(response.data[i]);
                        }
                    })
                    .catch((err) => {
                        console.log(err)
                    })
                }
            })
            .catch((err) => {
                console.log("Stock sold Out");
            })
        
    }
    childElem.appendChild(buy2Button);
    parentElem.appendChild(childElem);
    const buy3Button = document.createElement('input');
    buy3Button.type = 'button';
    buy3Button.className = 'btn btn-primary';
    buy3Button.value = 'Buy3';
    buy3Button.onclick = () => {
        axios.put(`https://crudcrud.com/api/45f77ad83ccb421b99188084caae666c/stockData/${obj._id}`,
        {
            candyName:obj.candyName,
            description:obj.description,
            price:obj.price,
            quantity:obj.quantity - 3,
        })
            .then((response) => {
                if(obj.quantity < 1){
                    alert(`${obj.candyName} stock sold out`);
                    
                }else{
                    console.log(response);
                    while (parentElem.firstChild) {
                        parentElem.removeChild(parentElem.firstChild);
                    }
                    //parentElem.removeChild(childElem);
                    axios.get("https://crudcrud.com/api/45f77ad83ccb421b99188084caae666c/stockData")
                    .then((response) => {
                        for(var i = 0; i< response.data.length; i++)
                        {
                            showUserOnScreen(response.data[i]);
                        }
                    })
                    .catch((err) => {
                        console.log(err)
                    })
                }
            })
            .catch((err) => {
                alert(`${obj.candyName} stock sold out`);
                console.log("Stock sold Out");
            })
        
    }
    childElem.appendChild(buy3Button);
    parentElem.appendChild(childElem);
    const deleteButton = document.createElement('input');
    deleteButton.type = 'button';
    deleteButton.className = 'btn btn-primary';
    deleteButton.value = 'Delete';
    deleteButton.onclick = () => {
        axios.delete(`https://crudcrud.com/api/45f77ad83ccb421b99188084caae666c/stockData/${obj._id}`)
            .then((response) => {
                console.log(response);
            })
            .catch((err) => {
                console.log(err);
            })
        parentElem.removeChild(childElem);
    }
    childElem.appendChild(deleteButton);
}

window.addEventListener("DOMContentLoaded", () => {
    axios.get("https://crudcrud.com/api/45f77ad83ccb421b99188084caae666c/stockData")
        .then((response) => {
            for(var i = 0; i< response.data.length; i++)
            {
                showUserOnScreen(response.data[i]);
            }
        })
        .catch((err) => {
            console.log(err)
        })
})