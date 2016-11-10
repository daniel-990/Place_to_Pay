(function(){
    angular
    .module('app')
    .config(function($stateProvider, $urlRouterProvider){
            $urlRouterProvider.otherwise("/producto")
            $stateProvider
            .state('route1',{
                url: '/producto',
                templateUrl: 'componentes/costo_producto/producto.html',
                controller: 'CostoProductoController as vm'
            })
        })
})();