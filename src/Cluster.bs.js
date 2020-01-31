// Generated by BUCKLESCRIPT, PLEASE EDIT WITH CARE
'use strict';

var Js_null_undefined = require("bs-platform/lib/js/js_null_undefined.js");

function kill(signal, worker) {
  worker.kill(signal);
  return /* () */0;
}

function sendHttpServerHandle(options, msg, handle) {
  msg.send(handle, Js_null_undefined.fromOption(options));
  return /* () */0;
}

function sendSocketHandle(options, msg, handle) {
  msg.send(handle, Js_null_undefined.fromOption(options));
  return /* () */0;
}

var $$Worker = {
  kill: kill,
  sendHttpServerHandle: sendHttpServerHandle,
  sendSocketHandle: sendSocketHandle
};

var Settings = { };

function fork(env, cluster) {
  return cluster.fork(env);
}

exports.$$Worker = $$Worker;
exports.Settings = Settings;
exports.fork = fork;
/* No side effect */