FibroBone.controllers.Contact = Ext.regController('Contact', {
  
  index: function() {
	  if (!this.listPanel) {
		  this.listPanel = this.render ({
			  xtype: 'contact-listpanel',
			  listeners: {
				  list: {
					  select: this.show,
					  scope: this
				  },
				  active: function(listPanel) {
					  listPanel.list.getSelectionModel().deselectAll();
				  }
			  }
	  	   });
		  this.listPanel.query('#addButton')[0].on({
			  tap: this.compose,
			  scope: this
		  })
		  this.application.viewport.setActiveItem(this.listPanel);
	  } else {
		  this.listPanel.store.sort();
		  this.application.viewport.setActiveItem(this.listPanel,{
			  type: 'slide',
			  direction: 'right'
		  });
	  }
  },
  
  show: function(list, record) {
	  var details = this.render({
		 xtype: 'contact-details',
		 data: record.data,
		 // title: record.get('firstName') + ' ' + record.get('lastName'),
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
	  this.application.viewport.setActiveItem(details,{
		  type: 'slide',
		  direction: 'left'
	  });
  },
  
  compose: function() {
	  this.form =  this.render({
		  xtype: 'contact-form',
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
	  
	  this.application.viewport.setActiveItem(this.form,{
		  type: 'slide',
		  direction: 'left'
	  });
  },
  
  create: function() {
	  this.listPanel.store.create(this.form.getValues());
	  this.index();
  }
});