const ClubModel = require("../models/Club.model");
const router = require("express").Router();

//***** POST/CREATE route

router.post("/create", async (req, res) => {
  try {
    const newClub = await ClubModel.create(req.body);
    console.log("We created our first club", newClub);
    res.status(201).json(newClub);
  } catch (error) {
    console.log("Well...we did not create anything");
    res.status(500).json({ Error: "Error creating Club" });
  }
});

//****** GET/READ route

router.get("/read", async (req, res) => {
  try {
    const allClub = await ClubModel.find();
    console.log("All Clubs", allClub);
    res.status(200).json(allClub);
  } catch (error) {
    console.log("Error reading Club");
    res.status(500).json({ Error: "Problem reading clubs" });
  }
});

//********* GET ONE/ READ ONE route

router.get("/read/:clubId", async (req, res) => {
  try {
    const readOne = await ClubModel.findById(req.params.clubId);
    console.log("One Club Found");
    res.status(200).json(readOne);
  } catch (error) {
    console.log("Problem Finding One");
    res.status(500).json({ Error: "Problem Reading One" });
  }
});

//********DELETE route
router.delete("/delete/:clubId", async (req, res) => {
  try {
    const deletedClub = await ClubModel.findByIdAndDelete(req.params.clubId);
    console.log("Deleted Successfully");
    res.status(204).json(deletedClub);
  } catch (error) {
    console.log("Problem deleting Club");
    res.status(500).json({ Error: "Problem deleting Club" });
  }
});

//******* PUT / UPDATE ROUTE
router.put("/update/:clubId", async (req, res) => {
  try {
    const updatedClub = await ClubModel.findByIdAndUpdate(
      req.params.clubId,
      req.body,
      { new: true }
    );
    console.log("Update Successfully");
    res.status(202).json(updatedClub);
  } catch (error) {
    console.log("Problem Updating");
    res.status(500).json({ error: "Problem Updating" });
  }
});

module.exports = router;
