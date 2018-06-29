const db = require('../models/serverDB');
const fc = require('./serverFunctions');

module.exports = function (app) {

    //LOGIN

    app.post('/loginFacebook', fc.loginFacebook);

    app.post('/loginGoogle', fc.loginGoogle);

    app.post('/addUserFacebook', fc.addUserFacebook);

    app.post('/addUserGoogle', fc.addUserGoogle);

    //ADD

    app.post('/addRecord', fc.addRecord);

    //GET

    app.post('/getMatches', fc.getMatches);

    app.post('/getSolic', fc.getSolic);

    app.post('/getEvents', fc.getEvents);

    app.post('/getDataEdit', fc.getDataEdit);

    app.post('/getEventById', fc.getEventById);

    app.post('/getPeople', fc.getPeople);

    app.post('/getImgsUser', fc.getImgsUser);

    //UPDATE

    pp.post('/updateLocation', fc.updateLocation);

    app.post('/updateRewind', fc.updateRewind);

    app.post('/updateSettings', fc.updateSettings);

    app.post('/updateDataEdit', fc.updateDataEdit);


};