Package.describe({
  name: 'lib-modernizr-2.7.0',
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
   api.add_files('lib-modernizr-2.7.0.js', ['client', 'server']);

  /*
   * Export global symbols.
   *
   * Example:
   *  api.export('GlobalSymbol');
   */
});

Package.on_test(function (api) {
  api.use('lib-modernizr-2.7.0');
  api.use('tinytest');
  
  api.add_files('lib-modernizr-2.7.0_tests.js');
});
