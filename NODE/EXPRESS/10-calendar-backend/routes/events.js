const { Router } = require('express');
const router = Router();

const { check } = require('express-validator');
const { validateJWT } = require('../middlewares/validate-token');
const { fileValidators } = require('../middlewares/file-validators');
const {
    getEvents,
    createEvent,
    updateEvent,
    deleteEvent
} = require('../controllers/events');
const { isDate } = require('../helpers/isDate');

router.use( validateJWT );

router.get(
    '/',
    getEvents
);

router.post(
    '/',
    [
        check('title', 'El titulo es obligatorio').not().isEmpty(),
        check('start', 'La fecha de inicio es obligatoria').custom( isDate ),
        check('end', 'La fecha de fin es obligatoria').custom( isDate ),
        fileValidators
    ],
    createEvent
);

router.put(
    '/:id',
    [
        check('title', 'El titulo es obligatorio').not().isEmpty(),
        check('start', 'La fecha de inicio es obligatoria').custom( isDate ),
        check('end', 'La fecha de fin es obligatoria').custom( isDate ),
        fileValidators
    ],
    updateEvent
);

router.delete(
    '/:id',
    deleteEvent
);

module.exports = router;