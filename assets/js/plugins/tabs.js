// JavaScript Document
(function() {
    // Creates a new plugin class and a custom listbox
    tinymce.create('tinymce.plugins.dws_tabs', {
        createControl: function(n, cm) {
            switch (n) {                
                case 'dws_tabs':
                var c = cm.createButton('dws_tabs', {
                    title : 'Tabs shortcodes',
                    image : '../wp-content/plugins/dw-shortcodes/assets/images/tabs.png',
                    onclick : function() {
                        tb_show('Tab builder', '../wp-content/plugins/dw-shortcodes/assets/js/plugins/tabs.html?TB_iframe=1');
                    }
                });

        
                // Return the new splitbutton instance
                return c;
                
            }
            return null;
        }
    });
    tinymce.PluginManager.add('dws_tabs', tinymce.plugins.dws_tabs);
})();