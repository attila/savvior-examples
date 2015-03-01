define(['savvior', 'domReady!'], function(savvior) {

  savvior.init('#grid', {
    'screen and (max-width: 600px)': { columns: 1 },
    'screen and (min-width: 600px) and (max-width: 800px)': { columns: 2 },
    'screen and (min-width: 800px) and (max-width: 1000px)': { columns: 3 },
    'screen and (min-width: 1000px)': { columns: 4 },
  });

});
