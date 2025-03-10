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

// MODULES //

var resolveGetter = require( '@stdlib/array-base-resolve-getter' );


// MAIN //

/**
* Returns a new array after applying a mask and a callback function to a provided input array.
*
* @param {Collection} x - input array
* @param {Collection} mask - mask array
* @param {Function} clbk - callback function
* @param {*} [thisArg] - callback execution context
* @returns {Array} output array
*
* @example
* var x = [ 1, 2, 3, 4 ];
* var mask = [ 0, 1, 0, 1 ];
*
* function scale( val ) {
*     return 10 * val;
* }
*
* var y = mskfilterMap( x, mask, scale );
* // returns [ 20, 40 ]
*/
function mskfilterMap( x, mask, clbk, thisArg ) {
	var xget;
	var mget;
	var out;
	var i;

	// Resolve accessors for retrieving array elements:
	xget = resolveGetter( x );
	mget = resolveGetter( mask );

	// Extract each desired element from the provided array...
	out = [];
	for ( i = 0; i < x.length; i++ ) {
		if ( mget( mask, i ) ) {
			out.push( clbk.call( thisArg, xget( x, i ), i, x ) ); // use `Array#push` to ensure "fast" elements
		}
	}
	return out;
}


// EXPORTS //

module.exports = mskfilterMap;
