const http = require('http');
const DBUser = require('./class/DBUser');

http.createServer(async (req, res) => {
    try {
        req.setEncoding('utf8');
        res.setHeader('Content-Type', 'application/json');
        res.writeHead(200);
        var oDBUser = new DBUser();
        var result = await oDBUser.query();
        res.write(JSON.stringify(result));
        res.end();
    } catch (error) {
        console.log(error);
    }
}).listen(process.env.PORT || 82);