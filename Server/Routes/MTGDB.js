const express = require("express");

const MTGRoutes = express.Router();

const dbo = require("../db/connect");

const ObjectId = require("mongodb").ObjectId;

// <--------------- USERS --------------->

// <---------- GET ---------->

MTGRoutes.route("/users").get(function (req, res) {
  let db_connect = dbo.getDb("MTG");
  db_connect
    .collection("users")
    .find({})
    .toArray(function (err, result) {
      if (err) throw err;
      res.json(result);
    });
});

MTGRoutes.route("/users/:userName").get(function (req, res) {
  let db_connect = dbo.getDb();
  let myquery = { userName: req.params.userName };
  db_connect
    .collection("users")
    .findOne(myquery, function (err, result) {
      if (err) throw err;
      res.json(result);
    });
});


// <---------- POST ---------->

MTGRoutes.route("/users/add").post(function (req, response) {
  let db_connect = dbo.getDb();
  let myobj = {
    userName: req.body.userName,
    password: req.body.password
  };
  db_connect.collection("users").insertOne(myobj, function (err, res) {
    if (err) throw err;
    response.json(res);
  });
});

// <---------- Decks ---------->

MTGRoutes.route("/decks").get(function (req, res) {
  let db_connect = dbo.getDb("MTG");
  db_connect
    .collection("decks")
    .find({})
    .toArray(function (err, result) {
      if (err) throw err;
      res.json(result);
    });
});

MTGRoutes.route("/decks/:id").get(function (req, res) {
  let db_connect = dbo.getDb();
  let myquery = { _id: ObjectId(req.params.id) };
  db_connect
    .collection("decks")
    .findOne(myquery, function (err, result) {
      if (err) throw err;
      res.json(result);
    });
});

MTGRoutes.route("/decks/add").post(function (req, response) {
  let db_connect = dbo.getDb();
  let myobj = {
    user: {
      id: req.body.user._id,
      userName: req.body.user.userName
    },
    title: req.body.title,
    commander: '',
    creatures: [],
    artifacts: [],
    instants: [],
    sorceries: [],
    enchantments: [],
    lands: [],
  };
  db_connect.collection("decks").insertOne(myobj, function (err, res) {
    if (err) throw err;
    response.json(res);
  });
});

MTGRoutes.route("/updateDeck/:id").post(function (req, response) {
  let db_connect = dbo.getDb();
  let myquery = { _id: ObjectId(req.params.id) };
  let newvalues = {
    $set: {
      user: {
        id: req.body.user._id,
        userName: req.body.user.userName
      },
      title: req.body.title,
      commander: req.body.commander,
      creatures: req.body.creatures,
      artifacts: req.body.artifacts,
      instants: req.body.instants,
      sorceries: req.body.sorceries,
      enchantments: req.body.enchantments,
      lands: req.body.lands,
    },
  };
  db_connect
    .collection("decks")
    .updateOne(myquery, newvalues, function (err, res) {
      if (err) throw err;
      console.log("1 document updated");
      response.json(res);
    });
});

MTGRoutes.route("/deleteDeck/:id").delete((req, response) => {
  let db_connect = dbo.getDb();
  let myquery = { _id: ObjectId(req.params.id) };
  db_connect.collection("decks").deleteOne(myquery, function (err, obj) {
    if (err) throw err;
    console.log("1 document deleted");
    response.json(obj);
  });
});


module.exports = MTGRoutes;

