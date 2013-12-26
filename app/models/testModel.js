exports.definition = {
	config: {
		columns: {
			description : "TEXT",
			limitTime : "TEXT",
			done : "INTEGER"
		},
		
		defaults : {
			description : "-",
			limitTime : "",
			done : "false"
		},

		adapter: {
			type: "sql",
			collection_name: "testModel.js",
			idAttribute : "id"
		}
	},
	extendModel: function(Model) {
		_.extend(Model.prototype, {
			// extended functions and properties go here
		});

		return Model;
	},
	extendCollection: function(Collection) {
		_.extend(Collection.prototype, {
			// extended functions and properties go here
		});

		return Collection;
	}
};