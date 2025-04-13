/* global TrelloPowerUp */

var Promise = TrelloPowerUp.Promise;

TrelloPowerUp.initialize({
  'board-buttons': function (t, options) {
    return [{
      icon: 'https://cdn-icons-png.flaticon.com/512/929/929564.png',
      text: '👑 Panel JC',
      callback: function (t) {
        return t.popup({
          title: 'Cargando Panel JC...',
          url: 'panel.html',
          height: 400
        });
      }
    }];
  }
});
