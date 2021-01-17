
const express = require("express");
const router = require("express").Router();
const db = require("../models/workout")

router.get("/api/workout", (req, res) => {
  db.find({})
    .then(dbWorkout => {
      res.json(dbWorkout);
    })
    .catch(err => {
      res.status(400).json(err);
    });
});

router.put("/api/workout/:id", (req, res) => {
  db.findByIdAndUpdate(
    req.params.id,
    { $push: { exercises: req.body } },
    { new: true }
  )
    .then(dbWorkout => res.json(dbWorkout))
    .catch(err => res.json(err));
});


router.post("/api/workout",({body},res)=>{
db.create(body)
.then((dbWorkout => {
  res.json(dbWorkout);
  })).catch(err =>{
    res.json(err);
  })
});

router.get("/api/workout/range", function (req, res) {
  db.find({}).then(dbWorkout => {
      res.json(dbWorkout);
  }).catch(err => {
      res.json(err);
  });

});



module.exports = router;