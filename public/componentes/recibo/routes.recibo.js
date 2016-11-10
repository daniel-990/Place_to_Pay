(function(){
	angular
	.module('app')
	.config(function($stateProvider, $urlRouterProvider){
			$stateProvider
			.state('route3',{
				url: '/recibo-producto',
				templateUrl: 'componentes/recibo/recibo.html',
				controller: 'ReciboController as vm'
		})
	})
})();