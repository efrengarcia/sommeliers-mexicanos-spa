angular.
module('genericForm').
component('genericForm', {
	templateUrl: 'js/generic-form/generic-form.template.html',
	controller: function GenericFormController() {
		// datos de prueba
		this.datos = [
			{id: 1, propiedad1: 'Vino 1', propiedad2: 'Descripción del vino 1', propiedad3: 100},
			{id: 2, propiedad1: 'Vino 2', propiedad2: 'Descripción del vino 2', propiedad3: 200},
            {id: 3, propiedad1: 'Vino 3', propiedad2: 'Descripción del vino 3', propiedad3: 300}
		];
		this.titulo = 'Cursos';

        // estado de la página
        this.creando = false;
        this.editando = false;

        this.comienzaCreacion = function() {
            this.cancelaEdicion();
            this.creando = true;
        };

        this.comienzaEdicion = function() {
            this.cancelaCreacion();
            this.editando = true;
        };

        this.cancelaCreacion = function() {
            this.limpiaFormularioCreacion();
            this.creando = false;
        };

        this.cancelaEdicion = function() {
            this.limpiaFormularioEdicion();
            this.editando = false;
        };

        //métodos de formulario
        this.limpiaFormularioCreacion = function() {
            this.nuevoRegistro = {
                propiedad1: '',
                propiedad2: '',
                propiedad3: ''
            };
        };

        this.limpiaFormularioEdicion = function() {
            this.nuevoRegistro = null;
        };

        // métodos CRUD
        this.crear = function(registro) {
            registro.id = this.datos.length + 1;
            this.datos.push(registro);
            this.cancelaCreacion();
        };

        this.registroEditado = null;

        this.ponRegistroEditado = function(registro) {
            this.registroEditado = angular.copy(registro);
        };

        this.editar = function(registro) {
            var index = _.findIndex(this.datos, function(b) {
                return b.id == registro.id;
            });
            this.datos[index] = registro;
            this.cancelaEdicion();
        };

        this.borrar = function(registro) {
            _.remove(this.datos, function(b) {
                return b.id == registro.id;
            });
        };
	}
});
