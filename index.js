var http = require("http");
var renderPage = require("./render.js").renderPage;
var diskManager = require("./save.js");
var count = 0;

diskManager.load("visits.txt", function (data) {
    count = parseInt(data);
});

function handleRequest(req, res) {
    if (req.url == "/favicon.ico") {
        res.end();
        return;
    }

    if (req.url == "/") {
        count += 1;
        diskManager.save("visits.txt", count)
        renderPage("templates/index.html", res, count);
    } else if (req.url == "/fortune.html") {
        renderPage("templates/fortune.html", res);
    } else {
        res.end("404 page not found");
    }

}



var server = http.createServer(handleRequest);


server.listen(3000, "localhost", function () {
    console.log("Server started on port 3000!");
});