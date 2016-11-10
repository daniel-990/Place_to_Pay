(function(){
	angular
	.module('app')
	.config(function($stateProvider, $urlRouterProvider){
			$stateProvider
			.state('route2',{
				url: '/pago-producto',
				templateUrl: 'componentes/pago/pago.html',
				controller: 'PagoController as vm'
		})
	})
})();