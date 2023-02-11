# eSale
[![MIT License](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

## Description
Application is the back end of an e-commerce site with a working Express.js API to use Sequelize to interact with MySQL database.

## Table of Contents
[1. Installation](#installation)

[2. Usage](#usage)

[3. Demo](#demo)

[4. Contributing](#contributing)

[5. Questions](#questions)

[6. License](#license)

[7. Screenshots](#screenshots)

[8. Credits](#credits)

## Installation 
The application has dependencies (see package.json file). Before using the application, install npm modules.

```bash
npm install
```

## Usage 
The application will be invoked by using the following command:

```bash
node server.js
```

```
The application enables a user to:
- connect to a database using Sequelize when adding database name, MySQL username, and MySQL password to an environment variable file
- create a developlment database seeded with test data when the user enters schema and seed commands
- start the server with Sequelize models synced to the MySQL database when user enters the command to invoke the application
- view the data for API GET routes in Insomnia for categories, products, or tags displayed in a formatted JSON
- test API POST, PUT, and DELETE routes in Insomnia to successfully create, update, and delete data in the user's database

```

## Demo
[Link for demo video](x) (Length of video: x minutes and x seconds)

The video is also within the assets folder.
```
A walkthrough video demonstrates: 
- the functionality of the e-commerce back end
- how to create the schema from the MySQL shell
- how to seed the database from the command line
- how to start the application’s server
- GET routes for all categories, all products, and all tags being tested in Insomnia
- GET routes for a single category, a single product, and a single tag being tested in Insomnia
- POST, PUT, and DELETE routes for categories, products, and tags being tested in Insomnia
```

## Contributing 
Contributions are welcomed for future versions with features such as:
- x
- additional enhancements

For all contributions, please refer to [Contributor Covenant Code of Conduct](https://www.contributor-covenant.org/version/2/1/code_of_conduct/code_of_conduct.md) for contributing guidelines.


## Questions
Interested in seeing my other work?

Check out my GitHub account: [mewing0328](https://github.com/mewing0328).

If you have additional questions, please reach me at [masandraewing@gmail.com](mailto:masandraewing@gmail.com).

## License 
eSale application is covered by MIT license. 

 To view the most current and full license description in opensource.org, click on the license name below.  

 [![MIT}](https://img.shields.io/badge/License-MIT-blue.svg)](https://opensource.org/licenses/MIT)

 ## Screenshots 
Images of different menu options

1. x

    <img src="./assets" style="width:30rem">

2. x

    <img src="./assets/x" style="width:30rem">

3. x

    <img src="./assets/x" style="width:30rem">

4. x

    <img src="./assets/x" style="width:30rem">


## Credits
Credit for tutorials and guides I utilized in my code

[npm](https://docs.npmjs.com/creating-a-package-json-file): How to create a package.json file.

[npm](https://remarkablemark.org/blog/2021/08/28/how-to-create-npm-package-lockfile/): How to create a package-lock.json

[MySQL2 Package](https://www.npmjs.com/package/mysql2): To connect to a MySQL database

[medium.com](https://medium.com/analytics-vidhya/deploy-to-heroku-with-jawsdb-mysql-cbe255de73f3): Deploy to Heroku with JawsDB MySQL