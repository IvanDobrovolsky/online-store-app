import apiService from './api.service';
import toastr from 'toastr';


/**
 Interface for an item in the cart:
 _id         - unique key,
 quantity    - quantity of these computers in the cart
 */

let cart = [];

if(localStorage.getItem('items')){
    cart = JSON.parse(localStorage.getItem('items'));
}

function addToCart(_id){
    if(cart.find(item => item._id == _id)){
        toastr.warning('The computer is already in cart!');
    } else {
        cart.unshift({
            _id,
            quantity: 1
        });
        updateCart(cart);
        toastr.success('Successfully added to the cart!');
    }
}

function getAllComputers(){
    return Promise
                .all(cart.map(item => apiService.getComputerById(item._id)))
                .then(responses => responses.map(response => {
                    let computer = response.data;
                    let quantity = cart.find(item => item._id == computer._id)['quantity'];
                    return Object.assign(computer, {quantity});
                }))
}

function changeQuantity(_id, newQuantity){
    let itemIndex = cart.findIndex(item => item._id == _id);
    cart[itemIndex].quantity = newQuantity;
    updateCart(cart);
}

function updateCart(items){
    localStorage.setItem('items', JSON.stringify(items));
}

function getCartSize(){
    return cart.length;
}

function removeFromCart(_id){
    let itemIndex = cart.findIndex(item => item._id == _id);
    cart.splice(itemIndex, 1);
    updateCart(cart);
}

export default {
    addToCart,
    getAllComputers,
    changeQuantity,
    getCartSize,
    updateCart,
    removeFromCart
}
