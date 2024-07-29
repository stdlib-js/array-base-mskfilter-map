<!--

@license Apache-2.0

Copyright (c) 2024 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# mskfilterMap

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Apply a mask to a provided input array and return a new array after applying a mapping function.



<section class="usage">

## Usage

```javascript
import mskfilterMap from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-base-mskfilter-map@esm/index.mjs';
```
The previous example will load the latest bundled code from the esm branch. Alternatively, you may load a specific version by loading the file from one of the [tagged bundles](https://github.com/stdlib-js/array-base-mskfilter-map/tags). For example,

```javascript
import mskfilterMap from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-base-mskfilter-map@v0.1.0-esm/index.mjs';
```

You can also import the following named exports from the package:

```javascript
import { assign } from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-base-mskfilter-map@esm/index.mjs';
```

#### mskfilterMap( x, mask, clbk\[, thisArg] )

Applies a mask to a provided input array and returns a new array after applying a mapping function.

```javascript
function clbk( value ) {
    return value * 2;
}

var x = [ 1, 2, 3, 4 ];
var m = [ 0, 1, 0, 1 ];

var y = mskfilterMap( x, m, clbk );
// returns [ 4, 8 ]
```

The function supports the following parameters:

-   **x**: input array.
-   **mask**: mask array.
-   **clbk**: function to apply.
-   **thisArg**: applied function execution context (_optional_).

To set the applied function's execution context, provide a `thisArg`.

<!-- eslint-disable no-invalid-this -->

```javascript
function clbk( x ) {
    this.count += 1;
    return x;
}

var x = [ 1, 2, 3, 4 ];
var m = [ 1, 1, 0, 1 ];

var ctx = {
    'count': 0
};

var y = mskfilterMap( x, m, clbk, ctx );
// returns [ 1, 2, 4 ]

var v = ctx.count;
// returns 3
```

The function **always** returns a new "generic" array.

#### mskfilterMap.assign( x, mask, out, stride, offset, clbk\[, thisArg] )

Applies a mask and mapping function to a provided input array and assigns results to elements in a provided output array.

```javascript
function clbk( value ) {
    return value * 2;
}

var x = [ 1, 2, 3, 4 ];
var m = [ 0, 1, 0, 1 ];

var out = [ 0, 0, 0, 0 ];
var arr = mskfilterMap.assign( x, m, out, -2, out.length-1, clbk );
// returns [ 0, 8, 0, 4 ]

var bool = ( arr === out );
// returns true
```

The function supports the following parameters:

-   **x**: input array.
-   **mask**: mask array.
-   **out**: output array.
-   **stride**: output array stride.
-   **offset**: output array offset.
-   **clbk**: function to apply.
-   **thisArg**: applied function execution context (_optional_).

</section>

<!-- /.usage -->

<section class="notes">

## Notes

-   If a `mask` array element is truthy, the corresponding element in `x` is **included** in the output array; otherwise, the corresponding element in `x` is "masked" and thus **excluded** from the output array.

</section>

<!-- /.notes -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```html
<!DOCTYPE html>
<html lang="en">
<body>
<script type="module">

import zeroTo from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-base-zero-to@esm/index.mjs';
import bernoulli from 'https://cdn.jsdelivr.net/gh/stdlib-js/random-array-bernoulli@esm/index.mjs';
import abs2 from 'https://cdn.jsdelivr.net/gh/stdlib-js/math-base-special-abs2@esm/index.mjs';
import mskfilterMap from 'https://cdn.jsdelivr.net/gh/stdlib-js/array-base-mskfilter-map@esm/index.mjs';

// Generate a linearly spaced array:
var x = zeroTo( 20 );
console.log( x );

// Generate a random mask:
var mask = bernoulli( x.length, 0.5, {
    'dtype': 'generic'
});
console.log( mask );

// Filter an array using the mask:
var y = mskfilterMap( x, mask, abs2 );
console.log( y );

</script>
</body>
</html>
```

</section>

<!-- /.examples -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2024. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/array-base-mskfilter-map.svg
[npm-url]: https://npmjs.org/package/@stdlib/array-base-mskfilter-map

[test-image]: https://github.com/stdlib-js/array-base-mskfilter-map/actions/workflows/test.yml/badge.svg?branch=v0.1.0
[test-url]: https://github.com/stdlib-js/array-base-mskfilter-map/actions/workflows/test.yml?query=branch:v0.1.0

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/array-base-mskfilter-map/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/array-base-mskfilter-map?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/array-base-mskfilter-map.svg
[dependencies-url]: https://david-dm.org/stdlib-js/array-base-mskfilter-map/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/array-base-mskfilter-map/tree/deno
[deno-readme]: https://github.com/stdlib-js/array-base-mskfilter-map/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/array-base-mskfilter-map/tree/umd
[umd-readme]: https://github.com/stdlib-js/array-base-mskfilter-map/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/array-base-mskfilter-map/tree/esm
[esm-readme]: https://github.com/stdlib-js/array-base-mskfilter-map/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/array-base-mskfilter-map/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/array-base-mskfilter-map/main/LICENSE

</section>

<!-- /.links -->
