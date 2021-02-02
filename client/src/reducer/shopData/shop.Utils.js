export const productsFromShopAndCollection = (collections, title) => {
    const productsFromShopAndCollection =  collections[title].items
    return productsFromShopAndCollection
};

export const relatedProductsArray = (items,updateId) => {
    return items.filter(item => item.id !== updateId)
};

export const showItem = (items, showItem) => {
    return items.find(item => item.id === showItem.id)
}