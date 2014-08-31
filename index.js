'use strict';

let isGeneratorFunction = require('is-generator-function');

module.exports = skipGenerator;

function* skipGenerator(gen, n) {
  gen = isGeneratorFunction(gen)? gen() : gen;
  for (let x of gen) {
    if (n === 0) yield x;
    else --n;
  }
}
