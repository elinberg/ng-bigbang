function __export(m) {
    for (var p in m) if (!exports.hasOwnProperty(p)) exports[p] = m[p];
}
var worker_render_common_1 = require('angular2/src/platform/worker_render_common');
exports.WORKER_SCRIPT = worker_render_common_1.WORKER_SCRIPT;
exports.WORKER_RENDER_PLATFORM = worker_render_common_1.WORKER_RENDER_PLATFORM;
exports.initializeGenericWorkerRenderer = worker_render_common_1.initializeGenericWorkerRenderer;
exports.WORKER_RENDER_APPLICATION_COMMON = worker_render_common_1.WORKER_RENDER_APPLICATION_COMMON;
var worker_render_1 = require('angular2/src/platform/worker_render');
exports.WORKER_RENDER_APPLICATION = worker_render_1.WORKER_RENDER_APPLICATION;
exports.WebWorkerInstance = worker_render_1.WebWorkerInstance;
var client_message_broker_1 = require('../src/web_workers/shared/client_message_broker');
exports.ClientMessageBroker = client_message_broker_1.ClientMessageBroker;
exports.ClientMessageBrokerFactory = client_message_broker_1.ClientMessageBrokerFactory;
exports.FnArg = client_message_broker_1.FnArg;
exports.UiArguments = client_message_broker_1.UiArguments;
var service_message_broker_1 = require('../src/web_workers/shared/service_message_broker');
exports.ReceivedMessage = service_message_broker_1.ReceivedMessage;
exports.ServiceMessageBroker = service_message_broker_1.ServiceMessageBroker;
exports.ServiceMessageBrokerFactory = service_message_broker_1.ServiceMessageBrokerFactory;
var serializer_1 = require('../src/web_workers/shared/serializer');
exports.PRIMITIVE = serializer_1.PRIMITIVE;
__export(require('../src/web_workers/shared/message_bus'));
var worker_render_2 = require('angular2/src/platform/worker_render');
/**
 * @deprecated Use WORKER_RENDER_APPLICATION
 */
exports.WORKER_RENDER_APP = worker_render_2.WORKER_RENDER_APPLICATION;
var router_providers_1 = require('angular2/src/web_workers/ui/router_providers');
exports.WORKER_RENDER_ROUTER = router_providers_1.WORKER_RENDER_ROUTER;
//# sourceMappingURL=worker_render.js.map