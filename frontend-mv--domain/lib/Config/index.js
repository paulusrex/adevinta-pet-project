var Config =
/*#__PURE__*/
function () {
  function Config() {
    this._config = {
      API_HOST: 'https://api.themoviedb.org/3',
      API_KEY: '3745ae4257e4e699f7753c7133744012'
    };
  }

  var _proto = Config.prototype;

  _proto.get = function get(key) {
    return this._config[key];
  };

  return Config;
}();

export { Config as default };