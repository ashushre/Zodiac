/**
 * Created by Dhiman on 2/10/2016.
*/

function SuccessResponse(code, res, responseObj, message) {
    var response = {};
    response.code = code;
    response.result = responseObj;
    // if(code != 200){
    //     response.message = messages.statusMessages[code];
    // }else{        
        response.message = message;
   // }
    
    res.send(response);
}



///--- Exports
module.exports = {
    SuccessResponse: SuccessResponse
};
