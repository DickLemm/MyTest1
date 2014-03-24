'use strict';

angular.module('dicklemm.menus', [])
  .directive('dlmenu', function () {
		return {
			restrict: 'EA',
			replace: true,
			scope: {menu:'=menuItems'},
			templateUrl: 'scripts/directives/menu/menu.html',
			link: function(scope, element, attrs) {
				
			
			}
		}
  });
