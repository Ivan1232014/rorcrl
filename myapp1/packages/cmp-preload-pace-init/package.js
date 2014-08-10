Package.describe({
  name: 'cmp-preload-pace-init',
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
   api.add_files('cmp-preload-pace-init.js', ['client', 'server']);

  /*
   * Export global symbols.
   *
   * Example:
   *  api.export('GlobalSymbol');
   */
});

Package.on_test(function (api) {
  api.use('cmp-preload-pace-init');
  api.use('tinytest');
  
  api.add_files('cmp-preload-pace-init_tests.js');
});
