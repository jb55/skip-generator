'use strict';

let isGen = require('is-generator');

module.exports = skipGenerator;

function* skipGenerator(gen, n) {
  gen = isGen.fn(gen)? gen() : gen;
  for (let x of gen) {
    if (n === 0) yield x;
    else --n;
  }
}
