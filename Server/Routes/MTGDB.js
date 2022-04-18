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
  
  // <---------- PUT ---------->
  
  MTGRoutes.route("/updateUser/:id").post(function (req, response) {
    let db_connect = dbo.getDb();
    let myquery = { _id: ObjectId(req.params.id) };
    let newvalues = {
      $set: {
        userName: req.body.userName,
        password: req.body.password
      },
    };
    db_connect
      .collection("users")
      .updateOne(myquery, newvalues, function (err, res) {
        if (err) throw err;
        console.log("1 document updated");
        response.json(res);
      });
  });
  
  module.exports = MTGRoutes;

