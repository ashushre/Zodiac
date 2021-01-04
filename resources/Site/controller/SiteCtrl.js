
function SiteCtrl() {

  'use strict';
  var self = this;

  var Site = require('../models/Site');
  var ObjectId = require('mongodb').ObjectId;
  var async = require('async');
  config = require('../../../config/config');
  var dbPath = config.dbPath;


  this.GetAllSites = function (req, res, next) {
    console.log("ala re", "customer");
    try {
      async.waterfall([
        function GetSiteData(callback) {
          Site.find({}).exec(function (err, results) {
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

 
  this.addNewSite = function (req, res, next) {
    try {
      var uid = generate(4);
      let newSite = new Site(req.body);
      var query1 = { name: req.body.name }
      Site.find(query1).exec(function (err, response) {
        if (err) {
          return next(new restify.errors.InternalServerError('Internal server error' + err));

        }
        if (response.length > 0) {
          var data = [];
          return SuccessWrapper.SuccessResponse(messages.successStatus, res, data, "Already Sitename exist");

        }
        else {
          newSite.save((err, result) => {
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



  function generate(n) {
    var add = 1,
      max = 12 - add;

    if (n > max) {
      return generate(max) + generate(n - max);
    }

    max = Math.pow(10, n + add);
    var min = max / 10; // Math.pow(10, n) basically 
    var number = Math.floor(Math.random() * (max - min + 1)) + min;

    return ("" + number).substring(add);
  }
}

module.exports = new SiteCtrl();