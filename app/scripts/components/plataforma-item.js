app.component('plataformasItem', {
  templateUrl: '/app/views/directives/plataforma-item.html',
  controller: 'plataformasItemsCtrlr',
  controllerAs: 'Ctrl',
  bindings: {
    plataforma: '=',
    botao: '='
  }
});