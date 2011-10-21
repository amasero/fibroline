
/*
 * @class FibroBone.Viewport
 * @extends Ext.Panel
 * This is the first class viewport
 */

Fibroline.views.Viewport = Ext.extend(Ext.Panel, {
    fullscreen: true,
    id        : 'viewport',
    layout    : 'card',
    tabBar    : null,
    
    initComponent : function() {
    	this.tabBar = new Ext.TabBar({
    		id                  : 'viewport_tabBar',
    		cardSwitchAnimation : 'slide',
	    	dock                : 'bottom',
	    	ui                  :'dark',
	    	layout              : {pack: 'center'},
	    	items               : this.topics
    	});
    	this.dockedItems = [this.tabBar];
        Fibroline.views.Viewport.superclass.initComponent.call(this);
    }
});

Ext.reg('viewport', Fibroline.views.Viewport);