const { response } = require('express');
const bcrypt = require('bcryptjs');
const User = require('../models/User');
const { generateJWT } = require('../helpers/jwt.js');

const loginUser = async(req, res = response )=>{
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });
        if ( !user ) {
            return res.status(400).json({
                ok: false,
                msg: 'Usuario o contraseña no existe, correo'
            })
        }

        //Confirmar password
        const validPassword = bcrypt.compareSync( password, user.password );

        if(!validPassword){
            return res.status(400).json({
                ok: false,
                msg: 'Usuario o contraseña no existe'
            })
        }

        //Generar JWT
        const token = await generateJWT( user.id, user.name );

        return res.status(201).json({
            ok: true,
            msg: 'Inicio de sesión exitoso',
            uid: user.id,
            name: user.name,
            token,
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
            msg: 'Ups! No se pudo iniciar sesión'
        });
    }
}

const createUser = async(req, res = response )=>{
    const { email, password } = req.body;

    try {
        let user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({
                ok: false,
                msg: 'El correo ya fue registrado'
            })
        }
        user = new User( req.body );
    
        //Encriptar contraseña
        const salt = bcrypt.genSaltSync();
        user.password = bcrypt.hashSync( password, salt );
        await user.save();

        //Generar JWT
        const token = await generateJWT( user.id, user.name );

        return res.status(201).json({
            ok: true,
            uid: user.id,
            name: user.name,
            email: user.email,
            token,
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
            msg: 'Ups! Ocurrio algo inesperado, porfavor comunicarse con el administrador'
        });
    }
}

const reloadToken = async(req, res = response )=>{
    const { uid, name } = req;

    const token = await generateJWT( uid, name );

    res.json({
        ok: true,
        uid, name,
        token
    });
}

module.exports = {
    loginUser,
    createUser,
    reloadToken,
}