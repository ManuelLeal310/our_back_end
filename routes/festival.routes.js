const FestivalModel = require('../models/Festival.model');
const router = require('express').Router();

// ******* POST/ CREATE route

router.post('/festival', async (req, res) => {
    try {
    const newFestival = await FestivalModel.create(req.body)
    console.log('We created our first festival', newFestival);
    res.status(201).json(newFestival);

} catch (error) {
    console.log('Well.... we didnt create anything');
    res.status(500).json({Error: 'Error creating Festival'});
}
});



module.exports = router;