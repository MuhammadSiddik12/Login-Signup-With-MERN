const signupTemplateCopy = require('../models/signupmodels')
const b = require('bcrypt')

exports.signup = async (req, res) => {
    const p = await b.hash(req.body.password, 10)
    console.log(p)
    const signupUser = new signupTemplateCopy({
        fullname: req.body.fullname,
        username: req.body.username,
        email: req.body.email,
        password: p
    })
    signupUser.save()
        .then(data => {
            res.send(data)
        })
        .catch(err => {
            res.json(err)
        })

}

exports.login = async (req, res) => {
    try {
        console.log(req.body)
        const data = await signupTemplateCopy.findOne({ email: req.body.email })
        const check = await b.compare(req.body.password, data.password)
        console.log(data, check)
        if (check) {
            res.send({ t: true })
        }
        else {
            res.send({ t: false })
        }
    } catch (err) {
        res.send({ error: "User Not Found Please Login" })
    }
}
