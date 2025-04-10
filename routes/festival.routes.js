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
};
});

// ******* GET/ READ route

router.get('/read', async (req,res) => {
    try {
        const allFestival = await FestivalModel.find();
        console.log('All festivals', allFestival);
        res.status(200).json(allFestival);

    } catch (error) {
        console.log('Error reading festivals');
        res.status(500).json({Error: 'Problem reading festivals'});
}
});

// ******** GET ONE/ READ ONE route

router.get('/read/:festivalId', async (req, res) => {
    try {
        const readOne = await FestivalModel.findById(req.params.festivalId)
        console.log('One Festival Found');
        res.status(200).json(readOne);

    } catch (error) {
        console.log('Problem Finding One');
        res.status(500).json({Error: 'Problem Reading One'});
    }
});

// ******* DELETE route



module.exports = router;