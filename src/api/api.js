import computers from './../mockups/computers';

function getAllComputers(){
    return computers;
}

function getComputerById(id){
    return computers.find(computer => computer.id === id);
}

function getAllBrandNames(){
    return Array.from(new Set(computers.map(computer => computer.brand)));
}

export default {
    getAllComputers,
    getComputerById,
    getAllBrandNames
}