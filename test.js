'use strict';

let nats = require('naturals');
let skip = require('./');
let expect = require('expect.js');

describe('skip-generator', function(){
  it('works for generators', function(){
    let gen = skip(nats(5), 5)
    expect(gen.next().value).to.be(10);
  });

  it('works for generator functions', function(){
    let gen = skip(nats, 5)
    expect(gen.next().value).to.be(5);
  });

  it('skipping 0 skips nothing', function(){
    let gen = skip(nats(1), 0)
    expect(gen.next().value).to.be(1);
  });
});
