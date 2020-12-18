var http = require("http");
var fs = require("fs");
var url = require("url");
var qs = require("querystring");
//var mongoose = require('mongoose');
var student = require("./student");
const db = require("./db.js");
const students = require("./student");
//const bodyParser = require('body-parser')

db();

var app = http.createServer(function (req, res) {
  var _url = req.url;
  var pathname = url.parse(_url, true).pathname;
  var queryData = url.parse(_url, true).query;

  if (pathname == "/") {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Request-Method", "*");
    res.setHeader("Access-Control-Allow-Methods", "OPTIONS, GET");
    res.setHeader("Access-Control-Allow-Headers", "*");
    _url = "/index.html"; //  when req => '/', /index.html 을 응답

    res.writeHead(200);
    res.end(fs.readFileSync(__dirname + _url)); //응답하기 위해 현재 디렉토리 위치 결합.
  }

  if (pathname == "/favicon.ico") {
    res.writeHead(404); //favicon은 준비 되지 않았으므로 404
  }

  if (pathname == "/api/list") {
    //조회
    res.statusCode = 200;
    res.setHeader("Content-Type", "application/json");
    //res.end('hello')
    students.find({}, function (err, students) {
      if (err) console.log(err);
      console.log(JSON.stringify(students));
      res.end(JSON.stringify(students));
      return;
    });
  }

  if (pathname === "/api/post") {
    var body = "";
    req.on("data", function (data) {
      body = body + data;
    });
    req.on("end", function () {
      let post = qs.parse(body);
      let name = post.name;
      let address = post.address;
      let age = post.age;
      let recData = name + address + age;
      console.log(recData);

      let newst = new student({ name, address, age });
      newst.save(function (err, data) {
        if (err) console.log(err);
      });
      res.end("post on " + name + address + age);
      return;
    });
  }

  if (pathname === "/api/search") {
    var body = "";
    req.on("data", function (data) {
      body = body + data;
      //console.log(body)
    });

    req.on("end", function () {
      let post = qs.parse(body);
      let name = post.name;
      // 이 곳에 recData 선언 시 null 반환.
      console.log("Search Req : " + name);

      students.findOne({ name }, function (err, std) {
        let recData = "";
        if (err) console.log(err);
        else {
          recData += JSON.stringify(std);
        }
        res.end(recData);
        return;
      });
    });
  }

  if (pathname === "/api/delete") {
    var body = "";
    req.on("data", function (data) {
      body = body + data;
      //console.log(body)
    });

    req.on("end", function () {
      let post = qs.parse(body);
      let name = post.name;
      // 이 곳에 recData 선언 시 null 반환.
      console.log("Delete Req : " + name);

      students.remove({ name }, function (err, out) {
        let recData = "";
        if (err) console.log(err);
        else console.log(recData);

        res.end(name + " is deleted-------");
        return;
      });
    });
  }

  if (pathname === "/api/update") {
    var body = "";
    req.on("data", function (data) {
      body = body + data;
      //console.log(body)
    });

    req.on("end", function () {
      let post = qs.parse(body);
      let name = post.name;
      let address = post.address;
      let age = post.age;
      let query = { name: this.name };
      // 이 곳에 recData 선언 시 null 반환.
      console.log("Update Req : " + name);

      students.findOne({ name }, function (err, std) {
        if (err) console.log(err);
        else {
          students.findOne({ name }, function (err, std) {
            std.name = name;
            address === undefined
              ? (std.address = std.address)
              : (std.address = address);
            age === undefined ? (std.age = std.age) : (std.age = age);
            std.save();
          });
        }

        res.end(name + " is updated-------");
        return;
      });
    });
  }
});
app.listen(3000);
