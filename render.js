var fs = require("fs");

module.exports = {
    renderPage: function (pageToRender, res, model) {
        fs.readFile(pageToRender, function (err, data) {
            if (err) {
                res.write("Unable to read template");
                res.write(err);
                res.end();
                return;
            }
            var dataString = data.toString();
            dataString = dataString.replace("###", model);
            res.write(dataString);
            res.end();
        });
    }
};