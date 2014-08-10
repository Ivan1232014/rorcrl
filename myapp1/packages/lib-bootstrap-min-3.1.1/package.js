Package.describe({
  name: 'lib-bootstrap-min-3.1.1',
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
   api.add_files('lib-bootstrap-min-3.1.1.js', ['client', 'server']);

  /*
   * Export global symbols.
   *
   * Example:
   *  api.export('GlobalSymbol');
   */
});

Package.on_test(function (api) {
  api.use('lib-bootstrap-min-3.1.1');
  api.use('tinytest');
  
  api.add_files('lib-bootstrap-min-3.1.1_tests.js');
});
