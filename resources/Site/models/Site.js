/**
 * Created by Poonam on 25/11/2019.
*/

// Model for the Event 
module.exports = (function SiteSchema() {

    //var mongoose = require(appRoot + '/config/db').mongoose;
    var Schema = mongoose.Schema;

    function normalize(data) {
        try {

            return JSON.parse(data);
        } catch (err) {
            return data;
        }
    }
  var SiteSchema = new Schema({
    name: {
        type: String,
    },
    latitude: {
        type: Number,
    },
    longitude: {
        type: Number,
    },
   
    Project: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Project',
        index: true
    },
    createdDate:{
        type:Date,default:Date.now(),
    }

});
SiteSchema.set('toObject', { getters: true });
SiteSchema.set('toJSON', { getters: true });
var Site = mongoose.model('Site', SiteSchema,'Sites');

return Site;
})();