var ProjectCtrl = require('./controller/ProjectCtrl');

module.exports = function (app) {
   
    app.get("/api/getAllProject", ProjectCtrl.getAllProject);
    app.post("/api/addProject", ProjectCtrl.addProject);

    

};