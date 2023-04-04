1 of 3 unhandled errors

Unhandled Runtime Error
Error: Hydration failed because the initial UI does not match what was rendered on the server.

Warning: Expected server HTML to contain a matching <h1> in <div>.

See more info here: https://nextjs.org/docs/messages/react-hydration-error

Component Stack
h1
div
div
Call Stack
throwOnHydrationMismatch
node_modules/react-dom/cjs/react-dom.development.js (12507:0)
tryToClaimNextHydratableInstance
node_modules/react-dom/cjs/react-dom.development.js (12535:0)
updateHostComponent
node_modules/react-dom/cjs/react-dom.development.js (19902:0)
beginWork
node_modules/react-dom/cjs/react-dom.development.js (21618:0)
HTMLUnknownElement.callCallback
node_modules/react-dom/cjs/react-dom.development.js (4164:0)
Object.invokeGuardedCallbackDev
node_modules/react-dom/cjs/react-dom.development.js (4213:0)
invokeGuardedCallback
node_modules/react-dom/cjs/react-dom.development.js (4277:0)
beginWork$1
node_modules/react-dom/cjs/react-dom.development.js (27451:0)
performUnitOfWork
node_modules/react-dom/cjs/react-dom.development.js (26557:0)
workLoopSync
node_modules/react-dom/cjs/react-dom.development.js (26466:0)
renderRootSync
node_modules/react-dom/cjs/react-dom.development.js (26434:0)
performConcurrentWorkOnRoot
node_modules/react-dom/cjs/react-dom.development.js (25738:0)
workLoop
node_modules/scheduler/cjs/scheduler.development.js (266:0)
flushWork
node_modules/scheduler/cjs/scheduler.development.js (239:0)
MessagePort.performWorkUntilDeadline
node_modules/scheduler/cjs/scheduler.development.js (533:0)
