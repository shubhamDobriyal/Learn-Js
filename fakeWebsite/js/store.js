let productList = document.getElementById("p-list");
let productDescription = document.querySelector(".container");
let leftSide = document.querySelector(".left-side");
let rightSide = document.querySelector(".right-side");

let fakeStore = async function (){
    let response = await fetch("https://fakestoreapi.com/products");
    let data = await response.json();
    displayList(data);
    displayProduct(data, 0)
}

function displayList(apiData){
    apiData.forEach((product, index) => {
        let div = document.createElement("div");
        div.setAttribute("class", "list-items");
        div.innerHTML = `<img src='${product.image}' class='product-image'/> <h3>${product.title}</h3>`;
        productList.append(div);

        div.addEventListener("click", () =>{
            displayProduct(apiData, index)
        })
    });
}

function displayProduct(product, index){
    console.log(product);
    leftSide.innerHTML = `
    <img src='${product[index].image}' class='img' />
    `;
    rightSide.innerHTML = `
    <h3>${product[index].category}</h3>
    <h2>${product[index].title}</h2>
    <h3><a href="#">${product[index].rating.rate}⭐</a>
    <a href="#"> ${product[index].rating.count} ratings</a></h3>
    <p>${product[index].description}</p>
    <h3>Price: Rs.${product[index].price}</h3>
    `;
}

fakeStore();