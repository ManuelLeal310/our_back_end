const FestModel = require('../models/Fest.model');
const router = require('express').Router();

// ******* POST/ CREATE route

router.post('/create', async (req, res) => {
    try {
    const newFest = await FestModel.create(req.body)
    console.log('We created our first festival', newFest);
    res.status(201).json(newFest);

} catch (error) {
    console.log('Well.... we didnt create anything');
    res.status(500).json({Error: 'Error creating Festival'});
};
});

// ******* GET/ READ route

router.get('/read', async (req,res) => {
    try {
        const allFest = await FestModel.find();
        console.log('All festivals', allFest);
        res.status(200).json(allFest);

    } catch (error) {
        console.log('Error reading festivals');
        res.status(500).json({Error: 'Problem reading festivals'});
}
});

// ******** GET ONE/ READ ONE route

router.get('/read/:festId', async (req, res) => {
    try {
        const readOne = await FestModel.findById(req.params.festId)
        console.log('One Festival Found');
        res.status(200).json(readOne);

    } catch (error) {
        console.log('Problem Finding One');
        res.status(500).json({Error: 'Problem Reading One'});
    }
});

// ******* DELETE route

router.delete('/delete/:festId', async (req, res) => {
    try {
        const deletedFest = await FestModel.findByIdAndDelete(req.params.festId)
        console.log('Deleted Succesfully');
        res.status(204).json(deletedFest);

    } catch (error) {
        console.log('Problem deleting Festival');
            res.status(500).json({Error: 'Problem deleting Festival'});
        
    }
});

// ******* PUT/ UPDATE route

router.put('/update/:festId', async (req, res) => {
    try {
        const updatedFest = await FestModel.findByIdAndUpdate(req.params.festId, req.body, { new: true })
        console.log('Update Succesfully');
        res.status(204).json(updatedFest);

    } catch (error) {
        console.log('Problem Updating');
        res.status(500).json({error: 'Problem Updating'});
    }
});

module.exports = router;