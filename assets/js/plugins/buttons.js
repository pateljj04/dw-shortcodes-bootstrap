// JavaScript Document
(function() {
    // Creates a new plugin class and a custom listbox
    tinymce.create('tinymce.plugins.dws_buttons', {
        createControl: function(n, cm) {
            switch (n) {                
                case 'dws_buttons':
                var c = cm.createSplitButton('dws_buttons', {
                    title : 'Buttons',
                    image : '../wp-content/plugins/dw-shortcodes-bootstrap/assets/images/labels.png',
                    onclick : function() {

                    }
                    //'class':'mceListBoxMenu'
                });
                

                c.onRenderMenu.add(function(c, m) {
                    m.onShowMenu.add(function(c,m){
                        jQuery('#menu_'+c.id).height('auto').width('auto');
                        jQuery('#menu_'+c.id+'_co').height('auto').addClass('mceListBoxMenu'); 
                        var $menu = jQuery('#menu_'+c.id+'_co').find('tbody:first');
                        if($menu.data('added')) return;
                        $menu.append('');
                        $menu.append('<div style="padding:0 10px"><strong>Size:</strong><br/>\
                        <select name="size">\
                        <option value="Mini">Mini</option>\
                        <option value="Small">Small</option>\
                        <option value="Normal" selected>Normal</option>\
                        <option value="Large">Large</option>\
                        </select>\
                        <br/><strong>Types:</strong><br/>\
                        <select name="type">\
                        <option value="Default"> Default</option>\
                        <option value="Primary"> Primary</option>\
                        <option value="Info" selected> Info</option>\
                        <option value="Success"> Success</option>\
                        <option value="Warning"> Warning</option>\
                        <option value="Danger"> Danger</option>\
                        <option value="Inverse"> Inverse</option>\
                        <option value="Link"> Link</option>\
                        </select>\
                        <br/><strong>Link:</strong>\
                        <input type="text" name="link" value="#" onclick="this.select()"  /><br/>\
                        </div>');

                        jQuery('<input type="button" value="Insert" />').appendTo($menu)
                                .click(function(){
                                    var size = $menu.find('select[name=size]').val();
                                    var type = $menu.find('select[name=type]').val();
                                    var link = $menu.find('input[name=link]').val();
                                    tinymce.activeEditor.execCommand('mceInsertContent',false,'[button size="'+size.toLowerCase()+'" type="'+type.toLowerCase()+'" value="'+type+'" href="'+link+'"]');
                                    c.hideMenu();
                                }).wrap('<div style="padding:10px"></div>')
                 
                        $menu.data('added',true); 

                    });

                   // XSmall
					m.add({title : 'Select button type:', 'class' : 'mceMenuItemTitle'}).setDisabled(1);

                 });
                // Return the new splitbutton instance
                return c;
                
            }
            return null;
        }
    });
    tinymce.PluginManager.add('dws_buttons', tinymce.plugins.dws_buttons);
})();