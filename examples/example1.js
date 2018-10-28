var cp = require("cherrypick");

let appVersion = "1.0";

cp.Router.add(/about/,function() {
  cp.View.Create(`<div>${appVersion}</div>`);
}
cp.Router.listen();
