/**
 * 
 */

FibroBone.views.ContactDetails = Ext.extend(Ext.Panel, {
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
		
		FibroBone.views.ContactDetails.superclass.initComponent.apply(this, arguments);
    }
});

Ext.reg('contact-details', FibroBone.views.ContactDetails);
  