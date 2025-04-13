/* global TrelloPowerUp */

var Promise = TrelloPowerUp.Promise;

TrelloPowerUp.initialize({
  'board-buttons': function (t, options) {
    return [{
      text: '🧪 Test Panel',
      callback: function (t) {
        return t.popup({
          title: 'Panel de prueba',
          url: 'popup.html',
          height: 300
        });
      }
    }];
  }
});
