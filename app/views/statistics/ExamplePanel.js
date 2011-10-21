Ext.namespace('fibroline.views.statistics');
/**
 * @class fibroline.views.example.ExamplePanel
 * @extends Ext.Panel
 * Ejemplo de vista para la aplicacion Fibroline
 */
fibroline.views.statistics.ExamplePanel = Ext.extend(Ext.Panel, {
    id         : 'fibroline.views.statistics.ExamplePanel',
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
                            title: 'Estadísticas'
                        }
                    ],

                    items: [
                        {
                            xtype: 'panel',
                            style: 'background:#fff',

                            styleHtmlContent: true,

                            html : [
                                '<h3>Estadisticas</h3>',
                                '<p>En esta vista veremos las estadisticas</p>'
                            ]
                        }
                    ]
                }
            ]
        });

        fibroline.views.statistics.ExamplePanel.superclass.initComponent.apply(this, arguments);
    },

});

/*
 * registramos la extensi�n del componente para hacer lazy instantiation, es decir, no la instancia hasta que no lo usa.
 * Para instanciar una lazy instantiation usamos: Ext.create o Controller.render.
 */
Ext.reg('fibroline.views.statistics.ExamplePanel', fibroline.views.statistics.ExamplePanel);