const { Router } = require('express');
const { check } = require('express-validator');
const { createUser, loginUser, reloadToken } = require('../controllers/auth');
const { fileValidators } = require('../middlewares/file-validators');
const { validateJWT } = require('../middlewares/validate-token');

const router = Router();

//Login
router.post('/',
    [
        check('email', 'El email es obligatorio').isEmail(),
        check('password', 'El password debe de ser de 6 caracteres').isLength({ min: 5 }),
        fileValidators
    ],
    loginUser
);

//Registro
router.post(
    '/new', 
    [
        check('name', 'El nombre es obligatorio').not().isEmpty(),
        check('email', 'El email es obligatorio').isEmail(),
        check('password', 'El password debe de ser de 6 caracteres').isLength({ min: 5 }),
        fileValidators
    ], 
    createUser
);

//Re-New
router.get(
    '/renew',
    validateJWT,
    reloadToken
);

module.exports = router;