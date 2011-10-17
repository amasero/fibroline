/**
 * 
 */

FibroBone.views.ContactListPanel = Ext.extend(Ext.Panel, {
	layout: 'fit',
    
    initComponent: function() {
    	this.store = new Ext.data.Store({
    		autoLoad: true,
    		model: 'FibroBone.models.Contact',
    		sorters: ['lastName'],
    		getGroupString: function(record) {
    			return record.get('lastName')[0];
    		}
    	});
    	
    	this.dockedItems = [{
    		xtype: 'toolbar',
    		dock: 'top',
    		title: 'Contacts',
    		items: [
    		        {xtype: 'spacer'},
    		        {
    		        	itemId: 'addButton',
    		        	iconCls: 'add',
    		        	iconMask: true,
    		        	ui: 'plain',
    		        	handler: this.onAddTap,
    		        	scope: this
    		        }
    		]
    	}, {
    		xtype: 'toolbar',
    		dock: 'bottom',
    		items: [
    		        {xtype: 'spacer'},
    		        {
    		        	itemId: 'addButton',
    		        	iconCls: 'add',
    		        	iconMask: true,
    		        	ui: 'plain',
    		        	handler: this.onAddTap,
    		        	scope: this
    		        }
    		]
    	}];
    	
    	this.list = new Ext.List({
    		itemTpl: '{firstName} <strong>{lastName}</strong>',
    		store: this.store,
    		grouped: true,
    		indexBar: true
    	});
    	
    	this.items = [this.list];
    	
    	FibroBone.views.ContactListPanel.superclass.initComponent.apply(this, arguments);
    }
});

Ext.reg('contact-listpanel', FibroBone.views.ContactListPanel);
  