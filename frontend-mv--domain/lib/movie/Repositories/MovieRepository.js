import _inheritsLoose from "@babel/runtime/helpers/esm/inheritsLoose";
import { Repository } from '@s-ui/domain';

var MovieRepository =
/*#__PURE__*/
function (_Repository) {
  _inheritsLoose(MovieRepository, _Repository);

  function MovieRepository() {
    return _Repository.apply(this, arguments) || this;
  }

  var _proto = MovieRepository.prototype;

  _proto.search = function search() {
    throw new Error('[MovieRepository#search]');
  };

  _proto.trending = function trending() {
    throw new Error('[MovieRepository#trending]');
  };

  _proto.detail = function detail() {
    throw new Error('[MovieRepository#detail]');
  };

  return MovieRepository;
}(Repository);

export { MovieRepository as default };