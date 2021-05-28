window.editor = grapesjs.init({
   canvas: {
      styles: [
         'https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.4.1/css/bootstrap.css',
         'https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css',
         'assets/css/custom.min.css',
      ],
      scripts: [
         'assets/js/jquery.min.js',
         'https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.4.1/js/bootstrap.js',
         'assets/js/dynamic_listener.js',
         'assets/js/main.js',
      ],
   },
   height: '100%',
   container: '#gjs',
   showOffsets: 1,
   fromElement: 1,
   noticeOnUnload: 0,
   storageManager: 0,
   plugins: ['mk-add-section'],
   pluginsOpts: {
      'mk-add-section': {
         /* Test here your options  */
      },
   },
})
