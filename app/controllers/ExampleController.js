/*
 * regController: crea un controlador y lo deja en Ext.ControllerManager con un id.
 * No es lazy, dado que lo crea.
 */
Ext.regController('fibroline.controllers.exampleController', {
	
	model     : null,
	indexView : null,
	
	index: function() {
		if (!this.indexView) {
			this.indexView = this.render ({xtype:'fibroline.views.example.ExamplePanel',
				listeners: {
					// put here the listeners for the panel
				}
			});
			this.application.setCurrentView(this, this.indexView);
		} else {			
			this.application.setCurrentView(this, this.indexView, {
				type: 'slide',
				direction: 'right'
			});
		}
	}

});

fibroline.controllers.exampleController = Ext.ControllerManager.get('fibroline.controllers.exampleController');