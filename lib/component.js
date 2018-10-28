var Component = {
  components: [],
  Create: function(name,api) {
    var a = function() {
      if (api.constructor) {
        api.constructor()
      }
    }
    Object.keys(api).forEach(function(key) {
      a[key] = api[key]
    }
    return a;
  }
}
