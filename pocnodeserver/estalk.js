var elasticsearch = require('elasticsearch');
var client = new elasticsearch.Client({
  host: 'localhost:9200'
});
let x = "this is a test";
client.index({
    index: 'jatinanand',
    id: '1',
    type: 'text',
    body: {
        "test" : x
    }
}, function(err, resp, status) {
    console.log(resp);
});