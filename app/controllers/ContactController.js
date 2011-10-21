Ext.regController('fibroline.controllers.contactController', {
	model     : null,
	indexView : null,
	
	index: function() {
		if (!this.indexView) {
		  this.indexView = this.render ({
			  xtype: 'fibroline.views.contact.ContactListPanel',
			  listeners: {
				  list: {
					  select: this.show,
					  scope: this
				  },
				  active: function(listPanel) {
					  this.indexView.list.getSelectionModel().deselectAll();
				  }
			  }
	  	   });
		  this.indexView.query('#addButton')[0].on({
			  tap: this.compose,
			  scope: this
		  })
		  this.application.setCurrentView(this, this.indexView);
	  } else {
		  this.indexView.store.sort();
		  this.application.setCurrentView(this, this.indexView,{
			  type: 'slide',
			  direction: 'right'
		  });
	  }
  },
  
  show: function(list, record) {
	  var details = this.render({
		 xtype: 'fibroline.views.contact.ContactDetails',
		 data: record.data,
	  	 listeners: {
	  		 deactive: function(details) {
	  			 details.destroy();
	  		 }
	  	 }
	  });
	  details.query('#backButton')[0].on({
		  tap: this.index,
		  scope: this
	  })
	  this.application.setCurrentView(this, details,{
		  type: 'slide',
		  direction: 'left'
	  });
  },
  
  compose: function() {
	  this.form =  this.render({
		  xtype: 'fibroline.views.contact.ContactForm',
		  listeners: {
			  deactive: function(form) {
				  form.destroy();
			  }
		  }
	  });
	  
	  this.form.query('#cancelButton')[0].on({
		  tap: this.index,
		  scope: this
	  })
	  
	  this.form.query('#doneButton')[0].on({
		  tap: this.create,
		  scope: this
	  })
	  
	  this.application.setCurrentView(this, this.form,{
		  type: 'slide',
		  direction: 'left'
	  });
  },
  
  create: function() {
	  this.indexView.store.create(this.form.getValues());
	  this.index();
  }
  
});
