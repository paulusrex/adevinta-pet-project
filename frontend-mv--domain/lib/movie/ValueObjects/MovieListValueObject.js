import _inheritsLoose from "@babel/runtime/helpers/esm/inheritsLoose";
import { ValueObject } from '@s-ui/domain';

var MovieListValueObject =
/*#__PURE__*/
function (_ValueObject) {
  _inheritsLoose(MovieListValueObject, _ValueObject);

  function MovieListValueObject(_ref) {
    var _this;

    var list = _ref.list;
    _this = _ValueObject.call(this) || this;
    _this._list = list;
    return _this;
  }

  var _proto = MovieListValueObject.prototype;

  _proto.toJSON = function toJSON() {
    return this._list.map(function (movieEntity) {
      return movieEntity.toJSON();
    });
  };

  return MovieListValueObject;
}(ValueObject);

export { MovieListValueObject as default };