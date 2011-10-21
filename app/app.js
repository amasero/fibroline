Ext.namespace('fibroline.views.example', 'fibroline.views.contact');

Fibroline = Ext.regApplication({
	defaultTarget : "viewport",
	name          : "fibroline",
	currentTab    : null,
    useLoadMask   : true,
    
    currentViews  : [], 
	
	launch: function() {
		this.viewport = new fibroline.views.Viewport({
			application: this,
			topics    : [{
		  		text: "Home",
		  		iconCls: "home",
		  		controller_id: 'fibroline.controllers.homeController',
			},{
		  		text: "Tareas",
				iconCls: "event_complete",
				controller_id: 'fibroline.controllers.contactController'
		  	}
		  	,{
		  		text: "Lecciones",
		  		iconCls: "compose2",
		  		controller_id: 'fibroline.controllers.leccionesController'
		  	},{
		  		text: "Estadisticas",
		  		iconCls: "chart2",
		  		controller_id: 'fibroline.controllers.statisticsController'
		  	},{
		  		text: "Preferencias",
		  		iconCls: "settings6",
		  		controller_id: 'fibroline.controllers.preferencesController'
		  	}],
		});
		this.viewport.tabBar.on({
			change: this.changeTabBar,
			scope: this
		});
	},
	
	 /**
	   * @public
	   * Used internally to set the view as active
	   * @param {Ext.Container} view to activate
	   */
	setCurrentView: function(controller, view, animation) {
		this.currentViews[controller.id] = view;
		this.viewport.setActiveItem(view, animation);
	  
	},
	
	changeTabBar: function( tabbar, tab, card ) {
		if (this.currentTab != null && this.currentTab != tab) {
			this.currentTab.removeCls(this.currentTab.activeCls);
		}
		if (this.currentTab != tab) {
			this.currentTab = tab;
			this.currentTab.addCls(this.currentTab.activeCls);
		}
		
		var controller =  Ext.ControllerManager.get(tab.controller_id);
		if (controller != null) {
			if (this.currentViews[controller.id] == null)
				controller.index();
			else
				this.viewport.setActiveItem(this.currentViews[controller.id], 'fade');
		}
	}


});
