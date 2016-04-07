import computers from './../mockups/computers';

function getAllComputers(){
    return computers;
}

function findComputers(filters){

    const isComputerPriceInRange = (computer, priceFrom, priceTo) => computer.price >= +priceFrom && computer.price <= +priceTo;
    const isComputerBrandCorrect = (computer, brandsList) => brandsList.includes(computer.brand);

   return getAllComputers()
        .filter(computer => isComputerPriceInRange(computer, filters.price.from, filters.price.to))
        .filter(computer => isComputerBrandCorrect(computer, filters.brands));
}

function getComputerById(id){
    return computers.find(computer => computer.id == id);
}

function getAllBrandNames(){
    return Array.from(new Set(computers.map(computer => computer.brand)));
}

function removeComputer(id){
    let computerToRemove = getComputerById(id);
    if(computerToRemove){
        computers.splice(computers.indexOf(computerToRemove), 1);
    }
}

function createNewComputer(computer){
        computers.unshift(computer);
}

export default {
    getAllComputers,
    getComputerById,
    getAllBrandNames,
    findComputers,
    removeComputer,
    createNewComputer
}