const express = require('express');
const chalk = require('chalk');
const faker = require('faker');
const bodyParser = require('body-parser');
const {User} = require('./models')

const app = express();
const port = 8000;

// * List Users
const users = [];
// * Create version of API
const apiVersion = '/api/v1';
// * parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))
// * parse application/json
app.use(bodyParser.json())

// ? ---------- GET /api/v1/users ----------
app.get(`${apiVersion}/users`, async (req, res) => {
    const users = await User.findAll();
    res.json(users);
    // Output in terminal
    console.log(chalk.bgCyan.black("GET All Users : ")+'\n'+chalk.bgCyan.black(JSON.stringify(users, null, 4)));
})

// ? ---------- GET /api/v1/users/:id ----------
app.get(`${apiVersion}/users/:id`, async (req, res) => {
    const { id } = req.params;
    const user = await User.findAll({
        where: {
            id: id
        }
    });
    res.json(user);
    // Output in terminal
    console.log(chalk.bgBlue.black("GET User by ID : "+parseInt(id))+'\n'+chalk.bgBlue.black(JSON.stringify(user, null, 4)));
})

// ? ---------- POST /api/v1/users ----------
app.post(`${apiVersion}/users`, async (req, res) => {
    const data = req.body;
    const user = await User.create(data)
    const post = await User.findAll({
        where: {
            id: user.id
        }
    });
    res.json({
        index: user.id,
        data: post
    })
    // Output in terminal
    console.log(chalk.bgGreen.black("POST User : "+parseInt(user.id))+'\n'+chalk.bgGreen.black(JSON.stringify(post, null, 4)));
})

// ? ---------- PUT /api/v1/users/:id ----------
app.put(`${apiVersion}/users/:id`, async (req, res) => {
    const { id } = req.params;
    const data = req.body;
    const put = await User.update(data,{
        where: {
            id: id
        }
    });
    const user = await User.findAll({
        where: {
            id: id
        }
    });
    res.json({
        data: user
    })
    // Output in terminal
    console.log(chalk.bgYellow.black("PUT User : "+parseInt(id))+'\n'+chalk.bgYellow.black(JSON.stringify(user, null, 4)));
})

// ? ---------- DELETE /api/v1/users/:id ----------
app.delete(`${apiVersion}/users/:id`, async (req, res) => {
    const { id } = req.params;
    const user = await User.findAll({
        where: {
            id: id
        }
    });
    // Output in terminal
    console.log(chalk.bgRed.black("DELETE User with ID : "+parseInt(id))+'\n'+chalk.bgRed.black(JSON.stringify(user, null, 4)));
    const del = await User.destroy({
        where: {
            id: id
        }
    });
    res.sendStatus(200)
})

// * Listen Port 3000
app.listen(port, () => console.log(chalk.bgWhite.black('Server is running on port : '+port)))