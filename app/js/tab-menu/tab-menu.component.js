angular.
module('tabMenu').
component('tabMenu', {
    templateUrl: 'js/tab-menu/tab-menu.template.html',
    controller: function TabMenuController() {
        // opciones fijas
        this.opciones = [
            {id: '0', nombre: 'Inicio',     glyph: 'glyphicon-home', 	url: '/'},
            {id: '1', nombre: 'Clientes',	glyph: 'glyphicon-user', 	url: '/clientes'},
            {id: '2', nombre: 'Módulos',	glyph: 'glyphicon-glass',	url: '/modulos'},
            {id: '3', nombre: 'Archivos',	glyph: 'glyphicon-file', 	url: '/archivos'}
        ];
        this.opcionActual	= {id: '0', nombre: 'Inicio',		glyph: 'glyphicon-home', 	url: '/'};
        function ponOpcionActual(opcion) {
            this.opcionActual = opcion;
        };
        function esOpcionActual(opcion) {
            return this.opcionActual !== null && this.opcionActual.id === opcion.id;
        };
        this.ponOpcionActual	= ponOpcionActual;
        this.esOpcionActual		= esOpcionActual;
    }
});
