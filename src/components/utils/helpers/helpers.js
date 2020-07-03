export const updateObjectInArray = (
    items,
    itemId,
    objPropName,
    newObjProps
) => {
    return items.map((i) => {
        if (i[objPropName] === itemId) {
            return { ...i, ...newObjProps };
        }
        return i;
    });
};

export const objectMap = (object, mapFn) => {
    return Object.keys(object).reduce(function(result, key) {
        result[key] = mapFn(object[key])
        return result
    }, {})
}


// export const updateObjectInArra = () => {
//     return items.msp(item) =>
//     if () {
//         return
//     }
//     return item
// }