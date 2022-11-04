


let values;

let nav = document.querySelector('.navbar');

nav.style.display = 'flex';



for(let i=0; i < localStorage.length; i++) {

    let itemDiv = document.createElement('div');

let cartDiv = document.querySelector('.cart');

values = JSON.parse(localStorage.getItem(`item${i}`));

    itemDiv.innerHTML = `
<div class="image">
<img class='item-img' src=${values.img}>
</div>

<div class="content">
<a class="header">${values.title}
</a>

<div class="description">
  <p>${values.description}</p>
</div>
<div class="extra">
  <span class="price">${values.price}</span>  
</div>
</div>

`;

itemDiv.classList.add('item');

cartDiv.appendChild(itemDiv);




}

