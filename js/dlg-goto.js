var $dlgGoto = (function () {
    var gotohtml = '' 
    +  '<div class="notepad-dlg-goto">'
        +  '<div class="dialogbox">'
            +  '<div class="titlebar">'
                +  '<p class="title">转到指定行</p>'
                +  '<span class="close-btn">✖</span>'
            +  '</div>'
            +  '<div class="main">'
                +  '<label>行号(L)：</label>'
                +  '<br>'
                +  '<input class="txt-line-num" type="text" autofocus>'
                +  '<br>'
                +  '<input class="btn-goto" type="button" value="转到">'
                +  '<input class="btn-cancel" type="button" value="取消">'
            +  '</div>'
        +  '</div>'
    +  '</div>';
    
    $dlg = $(gotohtml),
        cfg = {
            container:'body',
            onClick:null
        };
    
    var $btnClose = $dlg.find('.close-btn');
    var $btnCancel = $dlg.find('.btn-cancel');
    var $btnGoto = $dlg.find('.btn-goto')
    function destory() { 
        $dlg.remove(); 
    }
    
    function show(conf){
        $(cfg.container).append($dlg);
        $.extend(cfg,conf);
        $dlg.click(cfg.onClick);
        $btnClose.click(destory);
        $btnCancel.click(destory);
        $btnGoto.click(destory);
    }
    return {
        show: show
    }
}());