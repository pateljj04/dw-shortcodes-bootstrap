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
                        $menu.append('<div style="padding:0 10px"><strong>Size:</strong><br/><input type="radio" name="size" value="Mini"> Mini\
                        <input type="radio" name="size" value="Small"> Small\
                        <input type="radio" name="size" value="Normal" checked> Normal\
                        <input type="radio" name="size" value="Large"> Large<br/>\
                        <br/><strong>Types:</strong><br/>\
                        <input type="radio" name="type" value="Default"> Default\
                        <input type="radio" name="type" value="Primary"> Primary\
                        <input type="radio" name="type" value="Info" checked> Info\
                        <input type="radio" name="type" value="Success"> Success<br><br>\
                        <input type="radio" name="type" value="Warning"> Warning\
                        <input type="radio" name="type" value="Danger"> Danger\
                        <input type="radio" name="type" value="Inverse"> Inverse\
                        <input type="radio" name="type" value="Link"> Link<br/>\
                        <br/><strong>Link:</strong>\
                        <input type="text" name="link" value="#" onclick="this.select()"  /><br/>\
                        </div>');

                        jQuery('<input type="button" value="Insert" />').appendTo($menu)
                                .click(function(){
                                    var size = $menu.find('input:radio[name=size]:checked').val();
                                    var type = $menu.find('input:radio[name=type]:checked').val();
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