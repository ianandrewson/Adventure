export const findById = (id, arrayToSearch) => {
    for (let i = 0; i < arrayToSearch.length; i++) {
        if (arrayToSearch[i].id === id) {
            return arrayToSearch[i];
        }
    }
    return null;
};
export default findById;