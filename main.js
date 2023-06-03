const myForm = document.querySelector('#my-form');

myForm.addEventListener('submit',saveToLocalStorage);

function saveToLocalStorage(e) {
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

    axios.post("https://crudcrud.com/api/1f5008b8f62446e9ad57c29ab90d7b8f/stockData", obj)
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
        axios.put(`https://crudcrud.com/api/1f5008b8f62446e9ad57c29ab90d7b8f/stockData/${obj._id}`,
        {
            candyName:obj.candyName,
            description:obj.description,
            price:obj.price,
            quantity:obj.quantity - 1,
        })
            .then((response) => {
                console.log(response);
                while (parentElem.firstChild) {
                    parentElem.removeChild(parentElem.firstChild);
                }
                //parentElem.removeChild(childElem);
                axios.get("https://crudcrud.com/api/1f5008b8f62446e9ad57c29ab90d7b8f/stockData")
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
        axios.put(`https://crudcrud.com/api/1f5008b8f62446e9ad57c29ab90d7b8f/stockData/${obj._id}`,
        {
            candyName:obj.candyName,
            description:obj.description,
            price:obj.price,
            quantity:obj.quantity - 3,
        })
            .then((response) => {
                console.log(response);
                while (parentElem.firstChild) {
                    parentElem.removeChild(parentElem.firstChild);
                }
                //parentElem.removeChild(childElem);
                axios.get("https://crudcrud.com/api/1f5008b8f62446e9ad57c29ab90d7b8f/stockData")
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
        axios.put(`https://crudcrud.com/api/1f5008b8f62446e9ad57c29ab90d7b8f/stockData/${obj._id}`,
        {
            candyName:obj.candyName,
            description:obj.description,
            price:obj.price,
            quantity:obj.quantity - 3,
        })
            .then((response) => {
                console.log(response);
                while (parentElem.firstChild) {
                    parentElem.removeChild(parentElem.firstChild);
                }
                //parentElem.removeChild(childElem);
                axios.get("https://crudcrud.com/api/1f5008b8f62446e9ad57c29ab90d7b8f/stockData")
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
            .catch((err) => {
                console.log("Stock sold Out");
            })
        
    }
    childElem.appendChild(buy3Button);
    parentElem.appendChild(childElem);
}

window.addEventListener("DOMContentLoaded", () => {
    axios.get("https://crudcrud.com/api/1f5008b8f62446e9ad57c29ab90d7b8f/stockData")
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