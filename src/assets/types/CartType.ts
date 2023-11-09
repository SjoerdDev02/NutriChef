export type CartItemType = {
    amount: number,
    image: string,
    title: string,
}

export type CartType = {
    cart: {
        cart: CartItemType[],
    },
}