angular.module('db.dao', []).factory('dao', function() {
        
        var db = new DbFactory(DbProxies.LOCALSTORAGE),
        persons = db.createDataSet('persons');
    
    return {
        getDb: function() {
            return db;
        },
        getPersons: function() {
            return persons;
        }
    };
});