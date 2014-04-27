
# skip-generator

  Skip the first n elements of a generator

  [![Build Status](https://travis-ci.org/jb55/skip-generator.png)](https://travis-ci.org/jb55/skip-generator)

## Installation

  Install with npm

    $ npm install skip-generator

## Example

```js
'use strict';

function* csv() {
  yield "name,age"
  yield "bill,25"
  yield "john,20"
}

let skip = require('skip-generator')

for (let record in skip(csv, 1)) {
  console.log(record);
}

// "bill,25"
// "john,20"

```

## API

### skip(Generator or GeneratorFunction, count)

returns: Generator

## License

  The MIT License (MIT)

  Copyright (c) 2014 William Casarin

  Permission is hereby granted, free of charge, to any person obtaining a copy
  of this software and associated documentation files (the "Software"), to deal
  in the Software without restriction, including without limitation the rights
  to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
  copies of the Software, and to permit persons to whom the Software is
  furnished to do so, subject to the following conditions:

  The above copyright notice and this permission notice shall be included in
  all copies or substantial portions of the Software.

  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
  THE SOFTWARE.
