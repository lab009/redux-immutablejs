'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.createReducer = exports.combineReducers = undefined;

var _combineReducers = require('./utils/combineReducers');

var _combineReducers2 = _interopRequireDefault(_combineReducers);

var _createReducer = require('./utils/createReducer');

var _createReducer2 = _interopRequireDefault(_createReducer);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.combineReducers = _combineReducers2.default;
exports.createReducer = _createReducer2.default;