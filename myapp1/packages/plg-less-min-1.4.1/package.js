Package.describe({
  name: 'plg-less-min-1.4.1',
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
   api.add_files('plg-less-min-1.4.1.js', ['client', 'server']);

  /*
   * Export global symbols.
   *
   * Example:
   *  api.export('GlobalSymbol');
   */
});

Package.on_test(function (api) {
  api.use('plg-less-min-1.4.1');
  api.use('tinytest');
  
  api.add_files('plg-less-min-1.4.1_tests.js');
});
