Ext.regApplication('FibroBone', {
	defaultTarget : "viewport",
	defaultUrl    : "navigation/push/home/index", 
	name          : "FibroBone",
	useHistory    : true, 
	
	launch: function() {
		this.viewport = new FibroBone.Viewport({
				application: this
		});
		
		// this redirect maybe is not necessary
		//Ext.redirect('navigation/push/home/index');
	}
});

//21:26