const {validationResult}  = require('express-validator');

module.exports = {

    user:(app, req, res)=>{

        let errors = validationResult(req);

        if (errors) {

            app.utils.error.send(errors, req, res);
            return false;

        }else{
            return true;
        }

    }

}