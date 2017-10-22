# Stock Shaker

Mini app to explore the javascript size optimizations applied by webpack and uglify.

The app is built using rxjs as the main library.

The app source code is transpiled by babel and minified by uglify within webpack.

See deployed app:

- [step 0](https://stock-shaker.firebaseapp.com/0/): the baseline
- [step 1](https://stock-shaker.firebaseapp.com/1/): replace the kitchen sink import with naked imports
- [step 2](https://stock-shaker.firebaseapp.com/2/): use lettable operators introduced in RxJS v5.5
- [step 3](https://stock-shaker.firebaseapp.com/3/): switch rxjs over to ESM via resolve alias
- [step 4](https://stock-shaker.firebaseapp.com/4/): switch the app code over to ESM
- [step 5](https://stock-shaker.firebaseapp.com/5/): turn on module concatenation
- [step 6](https://stock-shaker.firebaseapp.com/6/): add a seam into index.js to defer loading of the data layer w/ a massive regression
- [step 7](https://stock-shaker.firebaseapp.com/7/): found the culprit - an unused import
- [step 8](https://stock-shaker.firebaseapp.com/8/): add http2 push
