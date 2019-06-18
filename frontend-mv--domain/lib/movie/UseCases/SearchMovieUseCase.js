import _regeneratorRuntime from '@babel/runtime/regenerator'
import _asyncToGenerator from '@babel/runtime/helpers/esm/asyncToGenerator'
import _inheritsLoose from '@babel/runtime/helpers/esm/inheritsLoose'
import {UseCase} from '@s-ui/domain'
export var SearchMoviesUseCase =
  /*#__PURE__ */
  (function(_UseCase) {
    _inheritsLoose(SearchMoviesUseCase, _UseCase)

    function SearchMoviesUseCase(_ref) {
      var _this

      var repository = _ref.repository
      _this = _UseCase.call(this) || this
      _this._repository = repository
      return _this
    }

    var _proto = SearchMoviesUseCase.prototype

    _proto.execute =
      /* #__PURE__*/
      (function() {
        var _execute = _asyncToGenerator(
          /*#__PURE__ */
          _regeneratorRuntime.mark(function _callee(_ref2) {
            var keyword, movieListValueObject
            return _regeneratorRuntime.wrap(
              function _callee$(_context) {
                while (1) {
                  switch ((_context.prev = _context.next)) {
                    case 0:
                      keyword = _ref2.keyword
                      _context.next = 3
                      return this._repository.search({
                        keyword: keyword
                      })

                    case 3:
                      movieListValueObject = _context.sent
                      return _context.abrupt(
                        'return',
                        movieListValueObject.toJSON()
                      )

                    case 5:
                    case 'end':
                      return _context.stop()
                  }
                }
              },
              _callee,
              this
            )
          })
        )

        function execute(_x) {
          return _execute.apply(this, arguments)
        }

        return execute
      })()

    return SearchMoviesUseCase
  })(UseCase)
