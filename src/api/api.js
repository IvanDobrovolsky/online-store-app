
//Setting headers
const headers = new Headers();
headers.set('Content-Type', 'application/json');

function getAllComputers(){
    return fetch('/api/computers')
            .then(response => response.json())
}

//TODO: Implement real api call. For now filtering functionality is not working!
function findComputers(filters){

    const isComputerPriceInRange = (computer, priceFrom, priceTo) => computer.price >= +priceFrom && computer.price <= +priceTo;
    const isComputerBrandCorrect = (computer, brandsList) => brandsList.includes(computer.brand);

   return getAllComputers()
        .filter(computer => isComputerPriceInRange(computer, filters.price.from, filters.price.to))
        .filter(computer => isComputerBrandCorrect(computer, filters.brands));
}

function getComputerById(id){
    return fetch(`/api/computers/${id}`)
        .then(response => response.json());
}

function getAllBrandNames(){
    return fetch('/api/brands')
        .then(response => response.json());
}

function removeComputer(id){
    return fetch(`/api/computers/${id}`, {method: 'delete'})
            .then(response => response.json());
}

function createNewComputer(computer){
        return fetch('/api/computers', {
            method: 'post',
            headers,
            body: JSON.stringify(computer)
        }).then(response => response.json());
}

function updateComputer(updatedComputer){
    if(updatedComputer){
        return fetch(`/api/computers/${updatedComputer.id}`, {
                    method: 'put',
                    headers,
                    body: JSON.stringify(updatedComputer)
               }).then(response => response.json());
    }
}

export default {
    getAllComputers,
    getComputerById,
    getAllBrandNames,
    findComputers,
    removeComputer,
    createNewComputer,
    updateComputer
}