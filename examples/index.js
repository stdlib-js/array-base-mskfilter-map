/**
* @license Apache-2.0
*
* Copyright (c) 2024 The Stdlib Authors.
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
* You may obtain a copy of the License at
*
*    http://www.apache.org/licenses/LICENSE-2.0
*
* Unless required by applicable law or agreed to in writing, software
* distributed under the License is distributed on an "AS IS" BASIS,
* WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
* See the License for the specific language governing permissions and
* limitations under the License.
*/

'use strict';

var zeroTo = require( '@stdlib/array-base-zero-to' );
var bernoulli = require( '@stdlib/random-array-bernoulli' );
var abs2 = require( '@stdlib/math-base-special-abs2' );
var mskfilterMap = require( './../lib' );

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
