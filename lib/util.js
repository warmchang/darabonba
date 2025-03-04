'use strict';
const fs = require('fs');
const path = require('path');

exports.isBasicType = function (type){
  const basicType = [
    'void', 'string', 'number', 'integer',
    'int8', 'int16', 'int32', 'int64',
    'long', 'ulong', 'uint8', 'uint16',
    'uint32', 'uint64', 'float', 'double',
    'boolean', 'bytes', 'any', 'map', 'array',
    'entry', 'object', 'writable', 'readable',
    'asyncIterator', 'iterator'
  ];
  return basicType.indexOf(type) !== -1;
};

exports.isCompare = function (type){
  const compareType = [
    'not', 'eq', 'neq',
    'gt', 'gte',
    'lt', 'lte'
  ];
  return compareType.indexOf(type) !== -1;
};

exports.isTmpVariable = function(type) {
  const tmpType = [
    'template_string', 'array', 'object',
    'group', 'boolean', 'number',  'string'
  ];

  return tmpType.indexOf(type) !== -1;
};

exports.isNumber = function (type) {
  const numberType = [
    'number', 'integer', 'int8', 'int16',
    'int32', 'int64', 'long', 'ulong',
    'uint8', 'uint16', 'uint32',
    'uint64', 'float', 'double'
  ];
  return numberType.indexOf(type) !== -1;
};

exports.isInteger = function (type) {
  const integerType = [
    'integer', 'int8', 'int16',
    'int32', 'int64', 'uint8',
    'uint16', 'uint32', 'uint64'
  ];
  return integerType.indexOf(type) !== -1;
};

exports.getDarafile = function (dir) {
  return fs.existsSync(path.join(dir, 'Teafile')) ? path.join(dir, 'Teafile') : path.join(dir, 'Darafile');
};