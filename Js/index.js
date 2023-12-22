let productArray = [
  {
    photoLink: "images/Amul.jpg",
    productName: "Amul Dark Chocolate",
    productPrice: "190",
  },
  {
    photoLink: "images/Bournville.jpg",
    productName: "Bournville",
    productPrice: "110",
  },
  {
    photoLink: "images/Cadbury.jpg",
    productName: "Cadbury Celebrations",
    productPrice: "150",
  },
  {
    photoLink: "images/Dairy_Milk.jpg",
    productName: "Dairy Milk Silk",
    productPrice: "185",
  },
  {
    photoLink: "images/Ferrero_Rocher.jpg",
    productName: "Ferrero Rocher",
    productPrice: "999",
  },
  {
    photoLink: "images/Five_Star.jpg",
    productName: "Five Star",
    productPrice: "105",
  },
  { photoLink: "images/Fuse.jpg", productName: "Fuse", productPrice: "25" },
  {
    photoLink: "images/Hershley.jpg",
    productName: "Hershley Kisses",
    productPrice: "130",
  },
  { photoLink: "images/Kitkat.jpg", productName: "Kitkat", productPrice: "30" },
  { photoLink: "images/Oreo.jpg", productName: "Oreo", productPrice: "210" },
  { photoLink: "images/Perk.jpg", productName: "Perk", productPrice: "5" },
  {
    photoLink: "images/Snickers.jpg",
    productName: "Snickers",
    productPrice: "55",
  },
  {
    photoLink: "images/Sugar_Free.jpg",
    productName: "D' Lite",
    productPrice: "550",
  },
];

productArray.map((value, index) => {
  let div = document.createElement("div");
  div.setAttribute("class", "chocolate");

  let img = document.createElement("img");
  img.setAttribute("src", value.photoLink);

  let productName = document.createElement("p");
  productName.innerHTML = value.productName;
  productName.setAttribute("id", "name");

  div.appendChild(img);
  div.appendChild(productName);

  let innerDiv = document.createElement("div");
  innerDiv.setAttribute("class", "calculate");

  let productPrice = document.createElement("p");
  productPrice.innerHTML = "₹" + value.productPrice;

  let addButton = document.createElement("button");
  addButton.setAttribute("onclick", `fun(${index},1)`);
  addButton.innerHTML = "+";

  let subButton = document.createElement("button");
  subButton.setAttribute("onclick", `fun(${index},-1)`);
  subButton.innerHTML = "-";

  innerDiv.appendChild(productPrice);
  innerDiv.appendChild(addButton);
  innerDiv.appendChild(subButton);

  div.appendChild(innerDiv);

  document.getElementById("products").appendChild(div);
});

let totalProduct = 0;
let totalPrice = 0;

let itemsSelected = {};

function fun(index, add) {
  if (totalProduct == 8 && add == "1") {
    alert("Max Limit Reached.");
    return;
  } else if (totalProduct == 0 && add == "-1") {
    alert("Insufficient Items");
    return;
  }

  if (index in itemsSelected) {
    itemsSelected[index] += parseInt(add);
    if (itemsSelected[index] === 0) {
      delete itemsSelected[index];
    }
  } else {
    if (add == "1") itemsSelected[index] = 1;
    else {
      alert("Insufficient Item");
      return;
    }
  }
  console.log(itemsSelected);

  let price = productArray[index].productPrice;
  totalPrice += price * parseInt(add);
  totalProduct += parseInt(add);

  document.getElementById("Price").value = totalPrice;
  document.getElementById("total-items").value = totalProduct;
}
