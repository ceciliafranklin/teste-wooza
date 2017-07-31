app.component('planosItem', {
  templateUrl: '/app/views/directives/plano-item.html',
  controller: 'planosItemsCtrlr',
  controllerAs: 'Ctrl',
  bindings: {
    plano: '=',
    botao: '='
  }
});