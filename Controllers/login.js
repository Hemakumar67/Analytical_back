
const userSchema = require('../Models/user');


exports.login_users = async (req, res) => {

    try {

        const { user: username, pass: password } = req.body;
        console.log('object :>> ', req.body);
        console.log('object :>> ', username, password);
        const users = new userSchema({ username, password });
        const userDetail = await users.save();
        res.send({ status: 200, message: 'success', userDetail });

    } catch (error) {
        console.log('error', error)
    }

}