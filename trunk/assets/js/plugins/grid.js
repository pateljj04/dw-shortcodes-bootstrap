// JavaScript Document
(function() {
    // Creates a new plugin class and a custom listbox
    tinymce.create('tinymce.plugins.dws_grid', {
        createControl: function(n, cm) {
            switch (n) {                
                case 'dws_grid':
                var c = cm.createSplitButton('dws_grid', {
                    title : '12 columns based grid system',
                    image : '../wp-content/plugins/dw-shortcodes-bootstrap/assets/images/grid.png',
                    onclick : function() {
                    }
                });

                c.onRenderMenu.add(function(c, m) {
					// Boxes & frames
					m.add({title : '12 columns based grid system', 'class' : 'mceMenuItemTitle'}).setDisabled(1);
                    m.add({title : '12 Cols', onclick : function() {
                        tinyMCE.activeEditor.execCommand( 'mceInsertContent', false, '[row class="row-fluid"]<br class="nc"/>[col class="span1"]Text[/col]<br class="nc"/>[col class="span1"]Text[/col]<br class="nc"/>[col class="span1"]Text[/col]<br class="nc"/>[col class="span1"]Text[/col]<br class="nc"/>[col class="span1"]Text[/col]<br class="nc"/>[col class="span1"]Text[/col]<br class="nc"/>[col class="span1"]Text[/col]<br class="nc"/>[col class="span1"]Text[/col]<br class="nc"/>[col class="span1"]Text[/col]<br class="nc"/>[col class="span1"]Text[/col]<br class="nc"/>[col class="span1"]Text[/col]<br class="nc"/>[col class="span1"]Text[/col]<br class="nc"/>[/row]' );
                    }});  
                    m.add({title : '4 Cols', onclick : function() {
                        tinyMCE.activeEditor.execCommand( 'mceInsertContent', false, '[row class="row-fluid"]<br class="nc"/>[col class="span4"]Text[/col]<br class="nc"/>[col class="span4"]Text[/col]<br class="nc"/>[col class="span4"]Text[/col]<br class="nc"/>[/row]' );
                    }});  
                    m.add({title : '4 Cols - 8 Cols', onclick : function() {
                        tinyMCE.activeEditor.execCommand( 'mceInsertContent', false, '[row class="row-fluid"]<br class="nc"/>[col class="span4"]Text[/col]<br class="nc"/>[col class="span8"]Text[/col]<br class="nc"/>[/row]' );
                    }}); 
                    m.add({title : '6 Cols - 6 Cols', onclick : function() {
                        tinyMCE.activeEditor.execCommand( 'mceInsertContent', false, '[row class="row-fluid"]<br class="nc"/>[col class="span6"]Text[/col]<br class="nc"/>[col class="span6"]Text[/col]<br class="nc"/>[/row]' );
                    }}); 
                    m.add({title : 'Fullwith col', onclick : function() {
                        tinyMCE.activeEditor.execCommand( 'mceInsertContent', false, '[row class="row-fluid"]<br class="nc"/>[col class="span12"]Text[/col]<br class="nc"/>[/row]' );
                    }}); 
                    m.add({title : 'Grid builder', onclick : function() {
                         tb_show('Grid builder', '../wp-content/plugins/dw-shortcodes-bootstrap/assets/js/plugins/grid.html?TB_iframe=1');
                    }}); 

                });

                // Return the new splitbutton instance
                return c;
                
            }
            return null;
        }
    });
    tinymce.PluginManager.add('dws_grid', tinymce.plugins.dws_grid);
})();