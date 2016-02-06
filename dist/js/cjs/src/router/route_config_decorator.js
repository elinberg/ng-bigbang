var route_config_impl_1 = require('./route_config_impl');
var decorators_1 = require('angular2/src/core/util/decorators');
var route_config_impl_2 = require('./route_config_impl');
exports.Route = route_config_impl_2.Route;
exports.Redirect = route_config_impl_2.Redirect;
exports.AuxRoute = route_config_impl_2.AuxRoute;
exports.AsyncRoute = route_config_impl_2.AsyncRoute;
// Copied from RouteConfig in route_config_impl.
/**
 * The `RouteConfig` decorator defines routes for a given component.
 *
 * It takes an array of {@link RouteDefinition}s.
 */
exports.RouteConfig = decorators_1.makeDecorator(route_config_impl_1.RouteConfig);
//# sourceMappingURL=route_config_decorator.js.map