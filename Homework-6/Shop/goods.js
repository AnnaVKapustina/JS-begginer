var goods = [
    {
        title: "Candy 1",
        price: 300,
        image: "img01.jpg",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur totam dolorem tempora."
    },
    {
        title: "Candy 2",
        price: 250,
        image: "img02.jpg",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur totam dolorem tempora."
    },
    {
        title: "Candy 3",
        price: 500,
        image: "img03.jpg",
        description: "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur totam dolorem tempora."
    }
];
var sum = 0;
function init() {
    var catalog = document.querySelector(".catalog");
    var i, item;
    for (i = 0; i < goods.length; i++) {
        item = document.createElement("div");
        item.setAttribute("class", "good_item");

        itemName = document.createElement("p");
        itemName.setAttribute("class", "name");
        itemName.innerHTML = goods[i].title;
        item.append(itemName);

        itemImg = document.createElement("img");
        itemImg.src = goods[i].image;
        itemImg.setAttribute("class", "good_img")
        item.append(itemImg);

        itemText = document.createElement("p");
        itemText.setAttribute("class", "text");
        itemText.innerHTML = goods[i].description;
        item.append(itemText);

        itemPrice = document.createElement("p");
        itemPrice.setAttribute("class", "price");
        itemPrice.innerHTML = goods[i].price + " p";
        item.append(itemPrice);

        itemBuy = document.createElement("button");
        itemBuy.setAttribute("class", "add_basket");
        itemBuy.textContent = "Buy";
        itemBuy.setAttribute("id", "buy_" + i);
        itemBuy.onclick = addItem;
        item.append(itemBuy);

        catalog.append(item);
    }
}
function addItem(e) {
    var selectedItem = goods[e.target.id.split("_")[1]];
    var selectedItemBasket = document.querySelector(".basket_goods");
    var tr = selectedItemBasket.insertRow();
    var td = tr.insertCell();
    td.append(document.createTextNode(selectedItem.title));
    var td = tr.insertCell();
    td.append(document.createTextNode("    " + selectedItem.price + " p"));

    sum += selectedItem.price;
    document.querySelector(".sum").textContent = "Сумма покупки: " + sum + " р";
}
window.onload = init;