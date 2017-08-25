var mongoose = require('mongoose');
var Survey = mongoose.model('Survey');

module.exports = {
    
    create: function(req, res){
        // console.log(req.body);
        var survey = new Survey(req.body);
        survey.save()
        .then( () => {
            res.json(true);
        })
        .catch(errors => {
            res.status(500).json(errors)
        })
    },

    getAll: function(req, res){
        Survey.find({})
        .then(survey => {
            res.json(survey);
        }) 
        .catch(errors => {
            res.status(500).json(errors)
        })
    },

    getOne: function(req, res){
        Survey.findOne({_id: req.params.id})
        .then(survey => {
            res.json(survey);
        })
        .catch(errors => {
            res.status(500).json(errors);
        })
    },

    delete: function(req, res){
        // console.log("In controller: ", req.params.id);
        Survey.remove({_id: req.params.id}, function(error){
            if(error){
                console.log("Error");
            }else{
                console.log("Survey is now deleted!");
                res.json(true);
            }
        })
    },

    vote: function(req, res) {
        Survey.findOne({_id: req.params.id}, function(errors, poll){
            console.log("===== Selected Option Number:", req.params.optionNum + " =====");
            let option = req.params.optionNum;
            if (option == 1){
                poll.option1.votes++;
            } else if (option == 2 ){
                poll.option2.votes++;
            } else if (option == 3 ){
                poll.option3.votes++;
            } else {
                poll.option4.votes++;
            }
            console.log(poll);
            poll.save(errors => {
				if(errors){
					console.log(errors)
					res.json(errors);
				} else{
					res.json(poll)
				}
			})
        })
    },       
}
