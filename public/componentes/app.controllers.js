(function(){
	'use strict';
	angular
		.module('app')
		.controller('CostoProductoController', CostoProductoController)
		.controller('PagoController', PagoController)
		.controller('ReciboController', ReciboController);
     
     function CostoProductoController($stateParams, $http){
        var vm = this;
          $http.get('../json/datos.json')
            .then(function(res){
                vm.dataP = res.data; 
                var json = vm.rutasMed = res.data; 
                console.log(json);
            });
     }

     function PagoController($stateParams){
     		
     }

     function ReciboController($stateParams){
			
     }

})();
