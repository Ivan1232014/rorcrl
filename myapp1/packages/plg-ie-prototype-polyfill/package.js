Package.describe({
  name: 'plg-ie-prototype-polyfill',
  summary: ''
});

Package.on_use(function (api) {
  /* Use or imply other packages.

   * Example:
   *  api.use('ui', 'client');
   *  api.use('iron-router', ['client', 'server']);
   */

   /*
    * Add files that should be used with this
    * package.
    */
   api.add_files('plg-ie-prototype-polyfill.js', ['client', 'server']);

  /*
   * Export global symbols.
   *
   * Example:
   *  api.export('GlobalSymbol');
   */
});

Package.on_test(function (api) {
  api.use('plg-ie-prototype-polyfill');
  api.use('tinytest');
  
  api.add_files('plg-ie-prototype-polyfill_tests.js');
});
