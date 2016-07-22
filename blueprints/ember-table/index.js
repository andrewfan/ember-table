module.exports = {
  normalizeEntityName: function() {},

  afterInstall: function(options) {
    // We assume that handlebars, ember, and jquery already exist
    return this.addBowerPackagesToProject([      
      {
        'name': 'jquery-mousewheel',
        'target': '~3.1.4'
      },
      {
        'name': 'jquery-ui',
        'target': '~1.11.4'
      }
    ]);
  }
};
