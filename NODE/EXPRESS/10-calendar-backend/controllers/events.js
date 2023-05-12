const { response } = require('express');
const Event = require('../models/Event');

const getEvents = async(req, res = response )=>{
    try {
        const events = await Event.find().populate('user', 'name');
        return res.status(201).json({
            ok: true,
            events
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
            msg: 'Ups, ocurrio un problema al obtener los eventos'
        });
    }
}

const createEvent = async(req, res = response )=>{
    try {
        const event = new Event( req.body );
        event.user = req.uid;
        const eventSave = await event.save();

        return res.status(201).json({
            ok: true,
            event: eventSave
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
            msg: 'Ups, no se pudo crear la nota'
        });
    }
    
}

const updateEvent = async(req, res = response )=>{
    try {
        const { uid } = req;
        const eventId = req.params.id;
        const event = await Event.findById(eventId);

        if (!event) {
            return res.status(404).json({
                ok: false,
                msg: 'El evento no existe'
            });
        }

        if( event.user.toString() != uid ){
            return res.status(401).json({
                ok: false,
                msg: 'No tiene permisos para editar este evento'
            });
        }

        const newEvent = {
            ...req.body,
            user: uid
        };

        const eventUpdate = await Event.findByIdAndUpdate( eventId, newEvent, { new: true } );

        return res.status(201).json({
            ok: true,
            event: eventUpdate
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
            msg: 'Ups, no se pudo actualizar la nota'
        });
    }
}

const deleteEvent = async(req, res = response )=>{
    try {
        const { uid } = req;
        const eventId = req.params.id;
        const event = await Event.findById(eventId);

        if (!event) {
            return res.status(404).json({
                ok: false,
                msg: 'El evento no existe'
            });
        }

        if( event.user.toString() != uid ){
            return res.status(401).json({
                ok: false,
                msg: 'No tiene permisos para eliminar este evento'
            });
        }

        await Event.findByIdAndDelete( eventId );

        return res.status(201).json({ ok: true });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            ok: false,
            msg: 'Ups, no se pudo eliminar la nota'
        });
    }
}

module.exports = {
    getEvents,
    createEvent,
    updateEvent,
    deleteEvent
}