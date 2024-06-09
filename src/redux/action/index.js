export const addCart = (product) => {
    return{
        type: "ADDITEM",
        payLoad: product

    }
}

export const delCart = (product) => {
    return{
        type: "DELITEM",
        payLoad: product

    }
}