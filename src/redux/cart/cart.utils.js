export const addItemToCart = (cartItems, cartItemToAdd) => {
    const existing = cartItems.find(item => item.id === cartItemToAdd.id);

    if(existing){
        return cartItems.map(item => 
            cartItemToAdd.id === item.id
            ? {...item, quantity: item.quantity+1}
            : item
        )
    }

    return [...cartItems, { ...cartItemToAdd, quantity: 1}];
}