const authService = require('../service/auth.service');

async function rigster(req,res,next) {
    try {
        const {id_usario} = await authService.registerUser(req.body);

        return res.status(201),json({
            od: true,
            message: 'Usuario registrado',
            id_usario
        });
    } catch (error) {
        next(error);
    }
}

async function login(req,res,next) {
    try {
        const {user, token}= await authService.loginUser(req.body);
        return res.json({ ok: true, user, token});
    } catch (error) {
        next(error);
    }
}

module.exports = {register, login };
