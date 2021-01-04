/**
 * Created by Dhiman on 2/10/2016.
*/

var util = require('util');

function CustomError(code, replaceHints, replaceTexts) {
    var errObj = {
        restCode: code,
        statusCode: 200,
        message: messages.statusMessages[code],
        constructorOpt: CustomError
    };
    if(replaceHints) {
        for(var i=0; i< replaceHints.length; i++) {
            errObj.message = errObj.message.replace(replaceHints[i], replaceTexts[i]);
        }
    }
    restify.RestError.call(this, errObj);
    
    this.name = 'CustomError';
    
}

util.inherits(CustomError, restify.RestError);


///--- Exports
module.exports = {
    CustomError: CustomError
};
