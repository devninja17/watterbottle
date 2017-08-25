var path = require('path');
var surveys = require('./../controllers/survey_controller.js');

module.exports = function(app){
    app.post('/surveys', surveys.create);
    app.get('/surveys', surveys.getAll);
    app.get('/surveys/:id', surveys.getOne);
    app.delete('/surveys/:id', surveys.delete);
    app.get('/surveys/:id/:optionNum', surveys.vote);
    
    app.all('*', (req,res,next) => {
        res.sendFile(path.resolve("../public/dist/index.html"));
    });
}