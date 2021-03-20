const express = require('express');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
const bodyParser = require('body-parser');
const User = require('./schema');
const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }))
mongoose.connect('mongodb://localhost:27017/test', { useNewUrlParser: true });

app.post('/signUp', async (req, res) => {
    try {
        const newUser = new User(req.body);
        await newUser.save()
        res.status(201).json({
            message: 'User created successfully'
        })
    } catch (err) {
        console.log(`Error in user sign up: ${err}`);
    }
}),

    app.post('/login', async (req, res) => {
        try {
            let user = await User.findOne({ 'email': req.body.email });
            if (!user) {
                return res.status(422).json({
                    message: 'Wrong email'
                });
            }
            if (bcrypt.compareSync(req.body.password, user.password)) {
                return res.status(200).json({
                    message: 'login successful'
                });
            } else {
                return res.status(422).json({
                    message: 'Invalid email/password'
                });
            }

        } catch (err) {
            console.log(`Error in user login: ${err}`);
        }
    }),

    app.get('/', async (req, res) => {
        res.status(200).json({
            message: 'success'
        })
    })

const port = 3000;
app.listen(port, () => {
    console.log(`server is listening on ${port}`);
})

