
const Project = require('../models/Project');

function ProjectCtrl() {

  'use strict';
  var self = this;


var Project=require('../models/Project')
  var ObjectId = require('mongodb').ObjectId;
  var async = require('async');
  config = require('../../../config/config');
  var dbPath = config.dbPath;

  this.getAllProject = function (req, res, next) {
    console.log("ala re", "customer");
    try {
      async.waterfall([
        function GetUserData(callback) {
          Project.find({}).exec(function (err, results) {
            if (err) {
              callback(err, null);
            }
            //  console.log(results)
            callback(null, results);
          })
        },
      ], function (err, results) {
        //  console.log("hello")
        if (err) {
          //  console.log("hello1")

          return next(restify.errors.InternalServerError('Internal server error'));

        } else {


          return SuccessWrapper.SuccessResponse(messages.successStatus, res, results);

        }
      });

    } catch (err) {
      //   console.log(err)

      return next(new restify.errors.InternalServerError('Internal server error' + err));

    }

  };
  this.addProject = function (req, res, next) {
    try {
      let newProject = new Project(req.body);

      var query1 = { name: req.body.name }
      Project.find(query1).exec(function (err, response) {
        if (err) {
          return next(new restify.errors.InternalServerError('Internal server error' + err));

        }
        if (response.length > 0) {
          var data = [];
          return SuccessWrapper.SuccessResponse(messages.successStatus, res, data, "Already username exist");

        }
        else {
          newProject.save((err, result) => {
            if (err) {
              return next(new restify.errors.InternalServerError('Internal server error' + err));

            }



            return SuccessWrapper.SuccessResponse(messages.successStatus, res, result);

          });
        }
      })




    } catch (err) {
      console.log(err)

      return next(new restify.errors.InternalServerError('Internal server error' + err));

    }

  };





}

module.exports = new ProjectCtrl();