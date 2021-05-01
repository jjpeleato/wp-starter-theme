'use strict';

import config from './../config';

import concat from 'gulp-concat';
import gulp from 'gulp';
import jshint from 'gulp-jshint';
import map from 'map-stream';
import terser from 'gulp-terser';
import util from 'gulp-util';

/**
 * Custom reporters don't interact when there are some error
 * @type {Stream}
 */
const reporterJs = map(function (file, cb) {
	if (file.jshint.success) {
		return cb(null, file);
	}

	console.log('JSHINT fail in', file.path);
	file.jshint.results.forEach(function (result) {
		if (!result.error) {
			return;
		}

		const err = result.error
		console.log(`  line ${err.line}, col ${err.character}, code ${err.code}, ${err.reason}`);
	});

	cb(null, file);
});

/**
 * Validate JS with JSHint (https://jshint.com/)
 * @returns {*}
 */
function validateJs()
{
    return gulp
        .src(config.paths.jsAssets.src)
        .pipe(config.jshint === true ? jshint() : util.noop())
        .pipe(config.jshint === true ? jshint.reporter('default') : util.noop())
        .pipe(config.jshint === true ? jshint.reporter('fail') : util.noop())
		.pipe(reporterJs)
}

exports.validateJs = validateJs;

/**
 * Validate the code with Jshint. Minify the JS files.
 * @returns {*}
 */
function js()
{
	return gulp
		.src(config.paths.jsAssets.src)
		.pipe(config.environment === 'production' ? concat('script.min.js') : concat('script.js'))
		.pipe(config.environment === 'production' ? terser() : util.noop())
		.pipe(gulp.dest(config.paths.jsAssets.dest));
}

exports.js = js;

/**
 * Validate the code with Jshint. Concat and minify the JS files.
 * @returns {*}
 */
function jsWithConcat()
{
    let merge = config.paths.jsAssets.vendor.concat(config.paths.jsAssets.src);

    return gulp
        .src(merge)
        .pipe(config.environment === 'production' ? concat('script.min.js') : concat('script.js'))
        .pipe(config.environment === 'production' ? terser() : util.noop())
        .pipe(gulp.dest(config.paths.jsAssets.dest));
}

exports.jsWithConcat = jsWithConcat;

/**
 * Copy JS assets to public directory
 * @type {function(): *}
 */
function jsAssets()
{
	return gulp
		.src(config.paths.jsAssets.vendor)
		.pipe(gulp.dest(config.paths.jsAssets.destVendor));
}

exports.jsAssets = jsAssets;
