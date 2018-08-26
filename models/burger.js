let orm = require('../config/orm.js');

var burger = {
    all: function(cb) {
        orm.selectAll('burgers', function(res){
            cb(res);
        });
    },
    create: function(cols, vals, cb){
        orm.create('burgers', cols, vals, function (res) {
            cb(res);
        });

    },
    update: function(objColVals, condition, cb){
        orm.update('burgers', objColVals, condition, function (res){
            cb(res);
        });
    },
    delete: function(condition, cb) {
        orm.delete('cats', condition, function (res){
            cb(res);
        });
    }
    
};

//------------Export the db function for the controller (burgers_controller.js)-----------
module.exports = burger;

