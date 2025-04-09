const FestivalModel = require('../models/Festival.model');
const router = require('express').Router();

// ******* POST/ CREATE route

router.post('/create', async (req, res) => {
    try {
    const newFestival = await FestivalModel.create(req.body)
    console.log('We created our first festival', newFestival);
    res.status(201).json(newFestival);

} catch (error) {
    console.log('Well.... we didnt create anything');
    res.status(500).json({Error: 'Error creating Festival'});
}
});

// ******* GET/ READ route

router.get('/festival', async (req,res) => {
    try {
        const allFestival = await FestivalModel.find();
        console.log('All festivals' Festival);
        res.status(200).json(Festival);

    } catch (error) {
        console.log('Error reading festivals');
        res.status(500).json({Error: 'Problem reading festivals'});

}
});

module.exports = router;