const newman = require('newman');
newman.run({
    collection: require('./Users.postman_collection.json'),
        
 iterationCount: 1,
    reporters: 'htmlextra',
    reporter: {
        htmlextra: {
            export: './Reports/report.html', 
 }
}
 
}, function (err) {
        if (err) { throw err; }
        console.log('collection run complete!');
    });