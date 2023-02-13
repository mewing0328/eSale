const express = require('express');
const sequelize = require('./config/connection');
const routes = require('./routes');
const chalk = require('chalk');

// import sequelize connection

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//turn on routes
app.use(routes);

// sync sequelize models to the database, then turn on the server
// added sequelize.sync function
sequelize.sync({ force: false }).then ( () => {
    app.listen(PORT, () => 
        { console.log(chalk.cyanBright(`eSale listening on port ${PORT}! \n Go to Insomnia to test routes.`)) 
    });
});