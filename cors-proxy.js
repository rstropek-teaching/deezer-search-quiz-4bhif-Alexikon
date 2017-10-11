var cors_proxy = require('cors-anywhere');
cors_proxy.createServer({
    originWhitelist: []
    // using port 8081, 8080 does not work
    // probably a proxy server from windows
}).listen(8081, '127.0.0.1', function() {
    console.log('Running CORS Anywhere');
});