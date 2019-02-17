'use strict';

/*
 * Import require functions
 */
import gulp from 'gulp';
import { clean } from './clean';
import { css } from './styles';
import { cssAssets } from './styles';
import { fontAssets } from './styles';
import { images } from './images';
import { js } from './scripts';
import { jsAssets } from './scripts';
import { validateScss } from './styles';
import { watch } from './watch';

/* Tasks */
gulp.task(
    'default',
    gulp.series(
		clean,
        css,
        cssAssets,
        fontAssets,
        js,
        jsAssets,
		images
    )
);
gulp.task('clean', clean);
gulp.task('css', css);
gulp.task('cssAssets', cssAssets);
gulp.task('fontAssets', fontAssets);
gulp.task('images', images);
gulp.task('js', js);
gulp.task('jsAssets', jsAssets);
gulp.task('validateScss', validateScss);
gulp.task('watch', watch);
