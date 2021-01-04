/**
 * Created by Poonam on 25/11/2019.
*/

// Model for the Event 
module.exports = (function ProjectSchema() {

    //var mongoose = require(appRoot + '/config/db').mongoose;
    var Schema = mongoose.Schema;

    function normalize(data) {
        try {

            return JSON.parse(data);
        } catch (err) {
            return data;
        }
    }
  var ProjectSchema = new Schema({
   name:{
       type:String
   },
   description:{
       type:String
   },
    datetime:{
        type:Date
    }

});
ProjectSchema.set('toObject', { getters: true });
ProjectSchema.set('toJSON', { getters: true });
var Project = mongoose.model('Project', ProjectSchema,'Project');

return Project;
})();