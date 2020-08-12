const userModel = require('../models/user')

module.exports = {
    createUser: function(req, res) {
        const newUser = new userModel(req.body)
        newUser.save((err, data) => {
            if(err) {
                res.json({
                    error: err,
                    success: false
                })
            } else {
                res.json({
                    data: data,
                    success: true
                })
            }
        })
    },
    getUser: function(req, res) {
        userModel
            .find({})
            .exec((err, data) => {
                if(err) {
                    res.json({
                        error: err,
                        success: false
                    })
                } else {
                    res.json({
                        data: data,
                        success: true
                    })
                }
            })
    },
    editUser: function(req, res) {
        userModel.findOneAndUpdate(
            {_id: req.params.user_id},
            {$set: req.body},
            function(err, data) {
                if(err) {
                    res.json({
                        error: err,
                        success: false
                    })
                } else {
                    res.json({
                        data: data,
                        success: true
                    })
                }
            }
        )
    },
    deleteUser: function(req, res) {
        userModel.findByIdAndDelete({_id: req.params.user_id}, (err, data) => {
            if(err) {
                res.json({
                    error: err,
                    success: false
                })
            } else {
                res.json({
                    data: data,
                    success: true
                })
            }
        })
    },
}