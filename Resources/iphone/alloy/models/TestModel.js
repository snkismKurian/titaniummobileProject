exports.definition = {
    config: {
        columns: {
            description: "TEXT",
            limitTime: "TEXT",
            done: "INTEGER"
        },
        defaults: {
            description: "-",
            limitTime: "",
            done: "false"
        },
        adapter: {
            type: "sql",
            collection_name: "testModel.js",
            idAttribute: "id"
        }
    },
    extendModel: function(Model) {
        _.extend(Model.prototype, {});
        return Model;
    },
    extendCollection: function(Collection) {
        _.extend(Collection.prototype, {});
        return Collection;
    }
};

var Alloy = require("alloy"), _ = require("alloy/underscore")._, model, collection;

model = Alloy.M("testModel", exports.definition, []);

collection = Alloy.C("testModel", exports.definition, model);

exports.Model = model;

exports.Collection = collection;