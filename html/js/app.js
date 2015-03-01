(function() {
  'use strict';

  requirejs.config({
    baseUrl: 'js',
    paths: {
      domReady: '//cdnjs.cloudflare.com/ajax/libs/require-domReady/2.0.1/domReady',
      enquire: '//cdnjs.cloudflare.com/ajax/libs/enquire.js/2.1.2/enquire.min',
      savvior: 'lib/savvior.min'
    }
  });

  require(['app/main']);

}());
