var lang_1 = require('angular2/src/facade/lang');
var MODULE_REGEXP = /#MODULE\[([^\]]*)\]/g;
function moduleRef(moduleUrl) {
    return "#MODULE[" + moduleUrl + "]";
}
exports.moduleRef = moduleRef;
/**
 * Represents generated source code with module references. Internal to the Angular compiler.
 */
var SourceModule = (function () {
    function SourceModule(moduleUrl, sourceWithModuleRefs) {
        this.moduleUrl = moduleUrl;
        this.sourceWithModuleRefs = sourceWithModuleRefs;
    }
    SourceModule.getSourceWithoutImports = function (sourceWithModuleRefs) {
        return lang_1.StringWrapper.replaceAllMapped(sourceWithModuleRefs, MODULE_REGEXP, function (match) { return ''; });
    };
    SourceModule.prototype.getSourceWithImports = function () {
        var _this = this;
        var moduleAliases = {};
        var imports = [];
        var newSource = lang_1.StringWrapper.replaceAllMapped(this.sourceWithModuleRefs, MODULE_REGEXP, function (match) {
            var moduleUrl = match[1];
            var alias = moduleAliases[moduleUrl];
            if (lang_1.isBlank(alias)) {
                if (moduleUrl == _this.moduleUrl) {
                    alias = '';
                }
                else {
                    alias = "import" + imports.length;
                    imports.push([moduleUrl, alias]);
                }
                moduleAliases[moduleUrl] = alias;
            }
            return alias.length > 0 ? alias + "." : '';
        });
        return new SourceWithImports(newSource, imports);
    };
    return SourceModule;
})();
exports.SourceModule = SourceModule;
var SourceExpression = (function () {
    function SourceExpression(declarations, expression) {
        this.declarations = declarations;
        this.expression = expression;
    }
    return SourceExpression;
})();
exports.SourceExpression = SourceExpression;
var SourceExpressions = (function () {
    function SourceExpressions(declarations, expressions) {
        this.declarations = declarations;
        this.expressions = expressions;
    }
    return SourceExpressions;
})();
exports.SourceExpressions = SourceExpressions;
/**
 * Represents generated source code with imports. Internal to the Angular compiler.
 */
var SourceWithImports = (function () {
    function SourceWithImports(source, imports) {
        this.source = source;
        this.imports = imports;
    }
    return SourceWithImports;
})();
exports.SourceWithImports = SourceWithImports;
//# sourceMappingURL=source_module.js.map