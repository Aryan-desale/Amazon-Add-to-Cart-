let cartBtn = document.getElementsByClassName('cart-btn');

let nav = document.querySelector('.navbar');

let i = 0;

for(let i = 0; i < cartBtn.length; i++) {

    let button = cartBtn[i];

    button.addEventListener('click', addedToCart)


}


function addedToCart(event) {



    let selectedBtn = event.target;

    let selectedItem = selectedBtn.parentNode.parentNode.parentNode;

    if(selectedItem.classList.contains('selected')) {

        alert('Item already added to the cart');

    } else {
        selectedItem.classList.add('selected');

        let title = selectedItem.querySelector('.header').innerHTML;

        let price = selectedItem.querySelector('.price').innerHTML;

        let itemImg = selectedItem.querySelector('.item-img').src;

        let description = selectedItem.querySelector('.description').innerText;


        let values = {
        price: price,
        img: itemImg,
        title: title,
        description:description,
        id: i
    } 


    localStorage.setItem(`item${i}` , JSON.stringify(values) )
    
    
    i =  i + 1

 
    nav.style.display = 'flex';

    }


    


}





