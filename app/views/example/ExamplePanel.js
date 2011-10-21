Ext.namespace('fibroline.views.example');
/**
 * @class fibroline.views.example.ExamplePanel
 * @extends Ext.Panel
 * Ejemplo de vista para la aplicacion Fibroline
 */
fibroline.views.example.ExamplePanel = Ext.extend(Ext.Panel, {
    id         : 'fibroline.views.example.ExamplePanel',
    layout     : 'card',
    fullscreen : true,

    initComponent: function() {
        var store = new Ext.data.Store({
            fields: ['text', 'href'],
            data  : [
                {
                    text: 'Touch API',
                    href: 'http://dev.sencha.com/deploy/touch/docs/'
                },
                {
                    text: 'Touch Examples',
                    href: 'http://dev.sencha.com/deploy/touch/examples/'
                }
            ]
        });

        Ext.apply(this, {
            items: [
                {
                    xtype : 'panel',
                    layout: 'fit',

                    dockedItems: [
                        {
                            dock : 'top',
                            xtype: 'toolbar',
                            title: 'Welcome to Sencha Touch'
                        }
                    ],

                    items: [
                        {
                            xtype: 'panel',
                            style: 'background:#fff',

                            styleHtmlContent: true,

                            html : [
                                '<h3>Getting Started</h3>',
                                '<p>You have successfully generated the {name} application. Currently this app is a blank slate, ',
                                'with just the minimum set of files and directories. The file creating this interface can be found ',
                                'in app/views/Viewport.js</p>'
                            ]
                        }
                    ]
                }
            ]
        });

        fibroline.views.example.ExamplePanel.superclass.initComponent.apply(this, arguments);
    },

});

/*
 * registramos la extensión del componente para hacer lazy instantiation, es decir, no la instancia hasta que no lo usa.
 * Para instanciar una lazy instantiation usamos: Ext.create o Controller.render.
 */
Ext.reg('fibroline.views.example.ExamplePanel', fibroline.views.example.ExamplePanel);