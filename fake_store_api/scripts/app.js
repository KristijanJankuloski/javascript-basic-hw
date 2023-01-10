import BASE_URL from "./constatnts.js";
const cardContainer = document.querySelector(".card-container");
const detailContainer = document.querySelector(".detail-container");
const loader = document.querySelector(".loading-bar");

// FUNCTION DEFENITIONS
async function getProducts(){
    const response = await fetch(BASE_URL);
    return await response.json();
}

async function getOneProduct(id){
    console.log(id);
    const response = await fetch(`${BASE_URL}${id}`);
    return await response.json();
}

function calculateTotalPrice(items){
    let sum = 0;
    for(let item of items){
        sum += item.price;
    }
    return sum.toFixed(2);
}

function createCard(item) {
    const card = document.createElement("div");
    card.className = "card";
    const cardHead = document.createElement("div");
    cardHead.className = "card-head";
    const prodName = document.createElement("h3");
    prodName.className = "prodName";
    prodName.innerText = `${item.title}`;
    cardHead.appendChild(prodName);
    card.appendChild(cardHead);

    const cardBody = document.createElement("div");
    cardBody.className = "card-body";
    const cardImg = document.createElement("img")
    cardImg.src = `${item.image}`;
    cardImg.className = "card-img";
    cardBody.appendChild(cardImg);
    card.appendChild(cardBody);

    const cardFooter = document.createElement("div");
    cardFooter.className = "card-footer";
    const readButton = document.createElement("button");
    readButton.className = "read-more";
    readButton.innerText = "More...";
    readButton.addEventListener('click', async () => {
        const result = await fetch(`${BASE_URL}${item.id}`);
        const data = await result.json();
        createDetailPage(data);
    });
    cardFooter.appendChild(readButton);
    const price = document.createElement("p");
    price.className = "card-price";
    price.innerText = `${item.price}$`;
    cardFooter.appendChild(price);
    card.appendChild(cardFooter);

    return card;
}

function createDetailPage(item){
    cardContainer.innerHTML = "";
    detailContainer.innerHTML = "";
    const detailCard = document.createElement("div");
    detailCard.className = "detail-card";
    const detailHead = document.createElement("div");
    detailHead.className = "detail-head";
    const backButton = document.createElement("button");
    backButton.innerText = "back";
    backButton.className = "back-button";
    backButton.addEventListener('click', listProducts)
    detailHead.appendChild(backButton);
    const detailTitle = document.createElement("h2");
    detailTitle.className = "detail-title";
    detailTitle.innerText = `${item.title}`;
    detailHead.appendChild(detailTitle);
    const detailCategory = document.createElement("h5");
    detailCategory.className = "detail-category";
    detailCategory.innerText = `${item.category}`;
    detailHead.appendChild(detailCategory);
    
    const detailBody = document.createElement("div");
    detailBody.className = "detail-body";
    const detailImg = document.createElement("img");
    detailImg.className = "detail-img";
    detailImg.src = `${item.image}`;
    detailBody.appendChild(detailImg);
    const detailDescription = document.createElement("p");
    detailDescription.className = "detail-description";
    detailDescription.innerText = `${item.description}`;
    detailBody.appendChild(detailDescription);

    const detailFooter = document.createElement("div");
    detailFooter.className = "detail-footer";
    const detailRating = document.createElement("p");
    detailRating.className = "detail-rating";
    detailRating.innerText = `Rating: ${item.rating.rate}`;
    detailFooter.appendChild(detailRating);
    
    detailCard.appendChild(detailHead);
    detailCard.appendChild(detailBody);
    detailCard.appendChild(detailFooter);
    detailContainer.appendChild(detailCard);
}

function findMaxRated(items){
    let indexOfMax = 0;
    let maxRating = items[0].rating.rate;
    for(let index in items){
        if(items[index].rating.rate > maxRating){
            maxRating = items[index].rating.rate;
            indexOfMax = index;
        }
    }
    return items[indexOfMax];
}

function listProducts() {
    detailContainer.innerHTML = "";
    cardContainer.innerHTML = "";
    loader.style.display = 'flex';
    getProducts().then(data => {
        for(let item of data){
            cardContainer.appendChild(createCard(item));
        }
        document.querySelector(".totalPrice").innerText = `${calculateTotalPrice(data)}$`;
        console.log(findMaxRated(data));
        loader.style.display = 'none';
    });
}

// EVENT LSITENERS
document.querySelector("#searchForm").addEventListener('submit', (event) => {
    event.preventDefault();
    loader.style.display = 'flex';
    const id = Number(document.querySelector("#searchId").value);
    getOneProduct(id).then(data => {
        createDetailPage(data);
        loader.style.display = 'none';
    });
});

// START OF APP
listProducts();
