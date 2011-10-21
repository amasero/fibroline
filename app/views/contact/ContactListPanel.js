Ext.namespace('fibroline.views.contact'); 

/**
 * 
 */

fibroline.views.contact.ContactListPanel = Ext.extend(Ext.Panel, {
	layout: 'card',
    
    initComponent: function() {
    	this.store = new Ext.data.Store({
    		autoLoad: true,
    		model: 'fibroline.models.Contact',
    		sorters: ['lastName'],
    		getGroupString: function(record) {
    			return record.get('lastName')[0] + ' ';
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
    	}];
    	
    	this.list = new Ext.List({
    		itemTpl: '{firstName} <strong>{lastName}</strong>',
    		store: this.store,
    		grouped: true,
    		indexBar: true
    	});
    	
    	this.items = [this.list];
    	
    	fibroline.views.contact.ContactListPanel.superclass.initComponent.apply(this, arguments);
    }
});

Ext.reg('fibroline.views.contact.ContactListPanel', fibroline.views.contact.ContactListPanel);
  