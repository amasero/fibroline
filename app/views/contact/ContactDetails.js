Ext.namespace('fibroline.views.contact'); 

/**
 * 
 */

fibroline.views.contact.ContactDetails = Ext.extend(Ext.Panel, {
	tpl: '<h2>{firstName} {lastName}</h2><p><a href="mailto:{email}">{email}</a></p>',
	styleHtmlContent: true,
	
	initComponent: function() {
		
		this.dockedItems = {
			dock: 'top',
    		xtype: 'toolbar',
    		title: 'Contact',
    		items: {
    			text: 'Back',
    			ui: 'back',
    		    itemId: 'backButton'
    		}
    	};
		
		fibroline.views.contact.ContactDetails.superclass.initComponent.apply(this, arguments);
    }
});

Ext.reg('fibroline.views.contact.ContactDetails', fibroline.views.contact.ContactDetails);
  