/**
 * Created by Administrator on 2017/5/16 0016.
 */
var fs = require("fs");
var http = require("http");

var server = http.createServer(function(req, res) {
	res.setHeader("Access-Control-Allow-Origin", "*");
	fs.readFile("../data.json", function(err, data) {
		res.end(data)
	})
}).listen(9993);