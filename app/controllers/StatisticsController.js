/*
 * regController: crea un controlador y lo deja en Ext.ControllerManager con un id.
 * No es lazy, dado que lo crea.
 */
Ext.regController('fibroline.controllers.statisticsController', {
	
	model     : null,
	indexView : null,
	
	index: function() {
		if (!this.indexView) {
			this.indexView = this.render ({xtype:'fibroline.views.statistics.ExamplePanel',
				listeners: {
					// put here the listeners for the panel
				}
			});
		}
		this.application.setCurrentView(this, this.indexView, 'fade');
	}
});

fibroline.controllers.statisticsController = Ext.ControllerManager.get('fibroline.controllers.statisticsController');