const router = require('express').Router();

const userManager = require('../managers/userManager');
const { extractErrorMessages } = require('../util/errorHelpers');

router.get('/register', (req, res) => {
    res.render('user/register');
});

router.post('/register', async (req, res) => {
    const { username, password, repeatPassword } = req.body;
    try {
        await userManager.register({ username, password, repeatPassword });

        res.redirect('/user/login');
    } catch (err) {
        const errorMessages = extractErrorMessages(err);
        res.status(404).render('user/register', { errorMessages });
    }

});

router.get('/login', (req, res) => {
    res.render('user/login');
});

router.post('/login', async (req, res, next) => {
    const { username, password } = req.body;

    try {
        const token = await userManager.login(username, password);
        res.cookie('auth', token, { httpOnly: true });
        res.redirect('/');
        
    } catch (error) {
        next(error); // for the global middleware / error handler option
    }


});

router.get('/logout', (req, res) => {
    res.clearCookie('auth');
    res.redirect('/');
});

module.exports = router;