import _regeneratorRuntime from "@babel/runtime/regenerator";
import _asyncToGenerator from "@babel/runtime/helpers/esm/asyncToGenerator";
import _inheritsLoose from "@babel/runtime/helpers/esm/inheritsLoose";
import MovieRepository from './movieRepository';

var HTTPMovieRepository =
/*#__PURE__*/
function (_MovieRepository) {
  _inheritsLoose(HTTPMovieRepository, _MovieRepository);

  function HTTPMovieRepository(_ref) {
    var _this;

    var fetcher = _ref.fetcher,
        config = _ref.config,
        movieListValueObjectFactory = _ref.movieListValueObjectFactory;
    _this = _MovieRepository.call(this) || this;
    _this._fetcher = fetcher;
    _this._config = config;
    _this._movieListValueObjectFactory = movieListValueObjectFactory;
    return _this;
  }

  var _proto = HTTPMovieRepository.prototype;

  _proto.search =
  /*#__PURE__*/
  function () {
    var _search = _asyncToGenerator(
    /*#__PURE__*/
    _regeneratorRuntime.mark(function _callee(_ref2) {
      var keyword, API_HOST, API_KEY, _ref3, data, results, movieListValueObject;

      return _regeneratorRuntime.wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              keyword = _ref2.keyword;
              API_HOST = this._config.get('API_HOST');
              API_KEY = this._config.get('API_KEY');
              _context.next = 5;
              return this._fetcher(API_HOST + "/search/movie?api_key=" + API_KEY + "&query=" + keyword);

            case 5:
              _ref3 = _context.sent;
              data = _ref3.data;
              results = data.results;
              movieListValueObject = this._movieListValueObjectFactory({
                listEntities: results
              });
              return _context.abrupt("return", movieListValueObject);

            case 10:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, this);
    }));

    function search(_x) {
      return _search.apply(this, arguments);
    }

    return search;
  }();

  return HTTPMovieRepository;
}(MovieRepository);

export { HTTPMovieRepository as default };