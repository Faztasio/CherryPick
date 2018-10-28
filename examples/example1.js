var cp = require("cherrypick");

let appVersion = "1.0";

var app = cp.Component.create("Application", {
  constructor: function() {
    cp.Route.add(/about/,function() {
      cp.View.create(`<div>${appVersion}</div>`)
    })
  }
});
app();
