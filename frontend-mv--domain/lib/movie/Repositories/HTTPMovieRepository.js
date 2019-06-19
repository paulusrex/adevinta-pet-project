import _regeneratorRuntime from "@babel/runtime/regenerator";
import _asyncToGenerator from "@babel/runtime/helpers/esm/asyncToGenerator";
import _inheritsLoose from "@babel/runtime/helpers/esm/inheritsLoose";
import MovieRepository from './MovieRepository';

var HTTPMovieRepository =
/*#__PURE__*/
function (_MovieRepository) {
  _inheritsLoose(HTTPMovieRepository, _MovieRepository);

  function HTTPMovieRepository(_ref) {
    var _this;

    var fetcher = _ref.fetcher,
        config = _ref.config,
        movieListValueObjectFactory = _ref.movieListValueObjectFactory,
        movieEntityFactory = _ref.movieEntityFactory,
        notFoundMovieErrorFactory = _ref.notFoundMovieErrorFactory,
        genericMovieErrorFactory = _ref.genericMovieErrorFactory;
    _this = _MovieRepository.call(this) || this;
    _this._fetcher = fetcher;
    _this._config = config;
    _this._movieListValueObjectFactory = movieListValueObjectFactory;
    _this._movieEntityFactory = movieEntityFactory;
    _this._notFoundMovieErrorFactory = notFoundMovieErrorFactory;
    _this._genericMovieErrorFactory = genericMovieErrorFactory;
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
              return this._fetcher.get(API_HOST + "/search/movie?api_key=" + API_KEY + "&query=" + keyword);

            case 5:
              _ref3 = _context.sent;
              data = _ref3.data;
              results = data.results;
              movieListValueObject = this._movieListValueObjectFactory({
                list: results
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

  _proto.getTrending =
  /*#__PURE__*/
  function () {
    var _getTrending = _asyncToGenerator(
    /*#__PURE__*/
    _regeneratorRuntime.mark(function _callee2() {
      var API_HOST, API_KEY, _ref4, data, results, movieListValueObject;

      return _regeneratorRuntime.wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              API_HOST = this._config.get('API_HOST');
              API_KEY = this._config.get('API_KEY');
              _context2.next = 4;
              return this._fetcher.get(API_HOST + "/movie/popular?api_key=" + API_KEY);

            case 4:
              _ref4 = _context2.sent;
              data = _ref4.data;
              results = data.results;
              movieListValueObject = this._movieListValueObjectFactory({
                list: results
              });
              return _context2.abrupt("return", movieListValueObject);

            case 9:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, this);
    }));

    function getTrending() {
      return _getTrending.apply(this, arguments);
    }

    return getTrending;
  }();

  _proto.detail =
  /*#__PURE__*/
  function () {
    var _detail = _asyncToGenerator(
    /*#__PURE__*/
    _regeneratorRuntime.mark(function _callee3(_ref5) {
      var id, API_HOST, API_KEY, data, res, movie;
      return _regeneratorRuntime.wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              id = _ref5.id;
              API_HOST = this._config.get('API_HOST');
              API_KEY = this._config.get('API_KEY');
              _context3.prev = 3;
              _context3.next = 6;
              return this._fetcher.get(API_HOST + "/movie/" + id + "?api_key=" + API_KEY);

            case 6:
              res = _context3.sent;
              data = res.data;
              _context3.next = 13;
              break;

            case 10:
              _context3.prev = 10;
              _context3.t0 = _context3["catch"](3);
              throw this._genericMovieErrorFactory();

            case 13:
              if (!(data.status_code === 6)) {
                _context3.next = 15;
                break;
              }

              throw this._notFoundMovieErrorFactory();

            case 15:
              movie = this._movieEntityFactory({
                id: data.id,
                title: data.title,
                image: data.poster_path,
                description: data.overview
              });
              return _context3.abrupt("return", movie);

            case 17:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, this, [[3, 10]]);
    }));

    function detail(_x2) {
      return _detail.apply(this, arguments);
    }

    return detail;
  }();

  return HTTPMovieRepository;
}(MovieRepository);

export { HTTPMovieRepository as default };