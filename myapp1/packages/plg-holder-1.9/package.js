Package.describe({
  name: 'plg-holder-1.9',
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
   api.add_files('plg-holder-1.9.js', ['client', 'server']);

  /*
   * Export global symbols.
   *
   * Example:
   *  api.export('GlobalSymbol');
   */
});

Package.on_test(function (api) {
  api.use('plg-holder-1.9');
  api.use('tinytest');
  
  api.add_files('plg-holder-1.9_tests.js');
});
