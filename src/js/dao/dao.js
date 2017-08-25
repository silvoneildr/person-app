angular.module('db.dao', []).factory('dao', function() {
        
/*var db = new DbFactory(DbProxies.RESTFUL, { url: "http://localhost:3003/api" }),*/
    var db = new DbFactory(DbProxies.LOCALSTORAGE),
        persons = db.createDataSet("pessoas");
    
    return {
        getPersons: function() {
            return persons;
        }
    };
});