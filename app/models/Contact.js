
fibroline.models.Contact = Ext.regModel('fibroline.models.Contact', {
	fields: [
	         { name: "id", type:"int"},
	         { name: "firstName", type:"string"},
	         { name: "lastName", type:"string"},
	         { name: "email", type:"string"}
    ],
    proxy: {
    	type: 'localstorage',
    	id: 'contacts'
    }
});

