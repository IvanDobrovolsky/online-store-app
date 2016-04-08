'use strict';

module.exports = (app, express) => {
    //Api router
    const apiRouter = express.Router();


//Middleware for Logging each request to the console
    apiRouter.use((request, response, next) => {
        console.log(request.method, `/api${request.url}`);
        next();
    });


//Mock data
    const computers = require('./../../mockups/computers.js');

    const getComputerById = id => computers.find(computer => computer.id == id);

    apiRouter.get('/computers', (request, response) => {
        response.json({
            success: true,
            message: "The data was successfully retrieved!",
            data: computers
        });
    });

    apiRouter.post('/computers/filter', (request, response) => {

        const filters = request.body;

        const isComputerPriceInRange = (computer, priceFrom, priceTo) => computer.price >= +priceFrom && computer.price <= +priceTo;
        const isComputerBrandCorrect = (computer, brandsList) => brandsList.indexOf(computer.brand) >= 0;

        let filteredComputers = computers
            .filter(computer => isComputerPriceInRange(computer, filters.price.from, filters.price.to))
            .filter(computer => isComputerBrandCorrect(computer, filters.brands));

        response.json({
            success: true,
            message: "The data was successfully filtered!",
            data: filteredComputers
        });
    });

    apiRouter.post('/computers', (request, response) => {

        const newComputer = request.body;

        if(newComputer){
            computers.unshift(newComputer);

            response.json({
                success: true,
                message: "New computer was successfully created!",
                data: null
            });
        }
    });

    apiRouter.get('/computers/:id', (request, response) => {

        let computer = computers.find(computer => computer.id == request.params.id);

        if(computer){
            response.json({
                success: true,
                message: "The data was successfully retrieved",
                data: computer
            });
        } else {
            response.json({
                success: false,
                message: "The data wasn't found!",
                data: null
            });
        }
    });

    apiRouter.put('/computers/:id', (request, response) => {

        const id = request.params.id;
        const computerToUpdate = request.body;

        if(id && computerToUpdate){
            let index = computers.indexOf(getComputerById(request.params.id));
            computers[index] = request.body;

            response.json({
                success: true,
                message: "The data was successfully updated!",
                data: null
            });
        }
    });

    apiRouter.delete('/computers/:id', (request, response) => {
        let computerToRemove = getComputerById(request.params.id);
        if(computerToRemove){
            computers.splice(computers.indexOf(computerToRemove), 1);
            response.json({
                success: true,
                message: "The data was successfully deleted!",
                data: null
            });
        }
    });

    apiRouter.get('/brands', (request, response) => {

        const brandNames = Array.from(new Set(computers.map(computer => computer.brand)));

        if(brandNames){
            response.json({
                success: true,
                message: "The data was successfully retrieved!",
                data: brandNames
            });
        }
    });

    return apiRouter;
};

