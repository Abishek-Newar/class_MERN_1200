const latestSection = document.getElementById("products")
async function LatestData(){
    const res = await fetch('https://dummyjson.com/products')
    const data = await res.json()
    console.log(data)
    for(let i = 0;i<6;i++){
        const card = document.createElement("div")
        const image = document.createElement("img")
        const h1 = document.createElement("h1")
        const price = document.createElement("p")
        image.src = data.products[i].thumbnail
        h1.textContent = data.products[i].title
        price.textContent = data.products[i].price
        card.append(image)
        card.append(h1)
        card.append(price)
        card.classList.add("card")
        latestSection.append(card)
    }
}
LatestData()
const allPro = document.getElementById("allProductShow")
async function allProductData(){
    const res = await fetch('https://dummyjson.com/products')
    const data = await res.json()
    console.log(data)
    for(let i = 0;i<data.products.length;i++){
        const card = document.createElement("div")
        const image = document.createElement("img")
        const h1 = document.createElement("h1")
        const price = document.createElement("p")
        image.src = data.products[i].thumbnail
        h1.textContent = data.products[i].title
        price.textContent = data.products[i].price
        card.append(image)
        card.append(h1)
        card.append(price)
        card.classList.add("card")
        allPro.append(card)
    }
}
allProductData()

 