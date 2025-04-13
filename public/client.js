/* global TrelloPowerUp */

var Promise = TrelloPowerUp.Promise;

TrelloPowerUp.initialize({
  'board-buttons': function (t, options) {
    return [{
      text: '👑 Panel JC',
      callback: function (t) {
        return t.popup({
          title: 'Panel JC',
          url: 'panel.html',
          height: 600
        });
      }
    }];
  }
});
