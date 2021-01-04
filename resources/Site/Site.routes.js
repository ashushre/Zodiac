var SiteCtrl = require('./controller/SiteCtrl');

module.exports = function (app) {
   
   app.post("/api/addNewSite", SiteCtrl.addNewSite);
   app.get("/api/GetAllSite", SiteCtrl.GetAllSites);


    
};