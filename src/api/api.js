
//Setting headers
const headers = new Headers();
headers.set('Content-Type', 'application/json');

function getAllComputers(){
    return fetch('/api/computers')
            .then(response => response.json())
}

//TODO: Implement real api call. For now filtering functionality is not working!
function findComputers(filters){
    return fetch('/api/computers/filter', {
        method: 'post',
        headers,
        body: JSON.stringify(filters)
    }).then(response => response.json())
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