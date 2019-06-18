var HTTPFetcher =
/*#__PURE__*/
function () {
  function HTTPFetcher(_ref) {
    var fetcher = _ref.fetcher;
    this._fetcher = fetcher;
  }

  var _proto = HTTPFetcher.prototype;

  _proto.get = function get(url, params) {
    return this._fetcher.get(url, params);
  };

  return HTTPFetcher;
}();

export { HTTPFetcher as default };