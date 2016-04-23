# online-store-app
This is simple online store of computers implemented with React.js to demonstrate how this library makes our lives easier and the way we create apps more logic and straightforward. 
The back end part is done with Node.js stack.

![alt tag](https://i.ytimg.com/vi/NhoAxLElb-0/maxresdefault.jpg)


## Getting started:
  - Install Node.js(npm comes with it by default) - https://nodejs.org/en/
  - Install MongoDB - https://www.mongodb.org
  - Set up MongoDB connection
  - ` git clone https://github.com/IvanDobrovolsky/online-store-app.git `
  - ` npm install `
  - ` npm start `
  - Open a browser on port 7777(http://localhost:7777)

---

## Node.js + Express.js + MongoDB RESTful API:

| Method        | Url                     | Result                              |
| ------------- |---------------          | ----------------------              | 
| GET           | /api/computers          | Retrieve all computers              |
| POST          | /api/computers          | Create new computer                 |
| POST          | /api/computers/filter   | Filter computers                    |
| GET           | /api/computers/:id      | Retrieve a computer by its id       |
| PUT           | /api/computers/:id      | Update an existing computer         |
| DELETE        | /api/computers/:id      | Delete an existing computer         |
| GET           | /api/brands             | Retrieve all computer brand names   |



