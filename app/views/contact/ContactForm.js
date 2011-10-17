/**
 * 
 */

FibroBone.views.ContactForm = Ext.extend(Ext.form.FormPanel, {
	initComponent: function() {
		
		this.items = [{
			xtype: 'fieldset',
			instructions: 'Fill in at least a first and last name',
			defaults: {
				labelWidth: '40%'
			},
			items: [{
				xtype: 'textfield',
				label: 'First Name',
				name: 'firstName',
				required: true
			}, {
				xtype: 'textfield',
				label: 'Last Name',
				name: 'lastName',
				required: true
			},{
				xtype: 'textfield',
				label: 'Email',
				name: 'email'
			}]
		}];
		
		this.dockedItems = {
			dock: 'top',
    		xtype: 'toolbar',
    		ui: 'light',
    		items: [{
    			text: 'Cancel',
    			ui: 'back',
    		    itemId: 'cancelButton'
    		}, {xtype: 'spacer'}, {
    			text: 'Done',
    			ui: 'action',
    		    itemId: 'doneButton'
    		}]
    	};
		
		FibroBone.views.ContactForm.superclass.initComponent.apply(this, arguments);
    }
});

Ext.reg('contact-form', FibroBone.views.ContactForm);
  