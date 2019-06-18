import _inheritsLoose from "@babel/runtime/helpers/esm/inheritsLoose";
import { Entity } from '@s-ui/domain';

var MovieEntity =
/*#__PURE__*/
function (_Entity) {
  _inheritsLoose(MovieEntity, _Entity);

  function MovieEntity(_ref) {
    var _this;

    var id = _ref.id,
        title = _ref.title;
    _this = _Entity.call(this) || this;
    _this._id = id;
    _this._title = title;
    return _this;
  }

  return MovieEntity;
}(Entity);

export { MovieEntity as default };