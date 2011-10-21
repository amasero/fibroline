/*
 * regController: crea un controlador y lo deja en Ext.ControllerManager con un id.
 * No es lazy, dado que lo crea.
 */
Ext.regController('fibroline.controllers.homeController', {
	
	model     : null,
	indexView : null,
	
	index: function() {
		if (!this.indexView) {
			this.indexView = this.render ({xtype:'fibroline.views.home.ExamplePanel',
				listeners: {
					// put here the listeners for the panel
				}
			});
		}
		this.application.setCurrentView(this, this.indexView, 'fade');
	}

});

fibroline.controllers.homeController = Ext.ControllerManager.get('fibroline.controllers.homeController');