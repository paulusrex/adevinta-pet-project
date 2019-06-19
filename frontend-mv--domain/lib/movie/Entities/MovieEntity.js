import _inheritsLoose from "@babel/runtime/helpers/esm/inheritsLoose";
import { Entity } from '@s-ui/domain';

var MovieEntity =
/*#__PURE__*/
function (_Entity) {
  _inheritsLoose(MovieEntity, _Entity);

  function MovieEntity(_ref) {
    var _this;

    var id = _ref.id,
        title = _ref.title,
        image = _ref.image,
        description = _ref.description;
    _this = _Entity.call(this) || this;
    _this._id = id;
    _this._title = title;
    _this._image = image;
    _this._description = description;
    return _this;
  }

  var _proto = MovieEntity.prototype;

  _proto.toJSON = function toJSON() {
    return {
      id: this._id,
      title: this._title,
      image: this._image,
      description: this._description
    };
  };

  return MovieEntity;
}(Entity);

export { MovieEntity as default };