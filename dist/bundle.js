var $dlgAbout = (function () {
    var $dlg = $(''
        + '<div class="notepad-dlg-mask notepad-dlg-about">'
        + '<div class="dialogbox notepad-dlgbox">'
        + '<div class="notepad-dlg-titlebar">'
        + '<p class="title">关于“记事本”</p>'
        + '<span class="close-btn" title="关闭">✖</span>'
        + '</div>'
        + '<div class="main notepad-dlg-main">'
        + '<h1 class="slogan">JSNotepad</h1>'
        + '<hr>'
        + '<img class="app-logo" src="../../images/notepad-icon-32.png" alt="JSNotepad">'
        + '<div class="info">'
        + '<p>作者：王亚红</p>'
        + '<p>QQ：2976716563</p>'
        + '<p>仓库地址：<a href="https://github.com/wangyahong423/spa-jsnotepad/" target="_blank">https://github.com/wangyahong423/spa-jsnotepad/</a></p>'
        + '</div>'
        + '<input class="btn-ok btn" type="button" value="确定" autofocus>'
        + '</div>'
        + '</div>'
        + '</div>');

    var $btnOk = $dlg.find('.btn-ok'),
        $btnClose = $dlg.find('.close-btn'),
        $titleBar = $dlg.find('.notepad-dlg-titlebar');

    function destory() { $dlg.remove(); }

    function show() {
        $('body').append($dlg);
        $dlg.find('.dialogbox').draggable({ handle: $titleBar });
        $btnOk.focus();

        $btnOk.click(destory);
        $btnClose.click(destory);

        $dlg.click(function (e) {
            $btnOk.focus();
            e.stopPropagation();
        });
    }

    return { show: show };
}());
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
// // 构造函数
// function Editor(){
//     var html =
//         '<div class="editor">' +
//         '<textarea id="textplace" spellcheck="false"></textarea>' +
//         '</div>';
//     function editorshow() {
//         // $('body').append(html);
//         $('#notepad').append(html);
//         var textplace = document.getElementById("textplace");
//         // textplace.focus();
//     } 

//     this.show = editorshow();
// }

var $editor = (function () {
    var $DOM = $(''
      + '<div class="notepad-editor">'
      + '<textarea spellcheck="false" auto-size="none"></textarea>'
      + '</div>');
  
    var $textArea = $DOM.find('textarea');
    
    // 设置字体
    function setFont(e) {
      $textArea.css({ 'font-family': e.family, 'font-size': e.size + 'pt' });
      if (e.style === '斜体') {
        $textArea.css({ 'font-style': 'italic' });
        return;
      }
      else if (e.style === '粗体') {
        $textArea.css({ 'font-weight': 'bold' });
        return;
      }
      else if (e.style === '粗偏斜体') {
        $textArea.css({ 'font-weight': 'bold', 'font-style': 'italic' });
        return;
      }
    }
  
    function show(conf) {
      $('body').append($DOM);
      $textArea.trigger('focus');
    }
  
    return {
      show: show,
      setFont: setFont
    };
  }());
var $dlgFont = (function () {
    var $dlg = $(''
        + '<div class="notepad-dlg-mask notepad-dlg-font">'
        + '<div class="dialogbox notepad-dlgbox">'
        + '<div class="notepad-dlg-titlebar">'
        + '<p class="title">字体</p>'
        + '<span class="close-btn" title="关闭">✖</span>'
        + '</div>'
        + '<div class="main notepad-dlg-main">'
        + '<div class="font-family"><p>字体(F):</p></div>'
        + '<div class="font-style"><p>字形(Y):</p></div>'
        + '<div class="font-size"><p>大小(S):</p></div>'
        + '<fieldset class="sample">'
        + '<legend>示例</legend>'
        + '<p class="sample-txt">AaBbYyZz</p>'
        + '</fieldset>'
        + '<div class="script">'
        + '<label>'
        + '脚本(R):<br>'
        + '<select>'
        + '<option value="西欧语言">西欧语言</option>'
        + '<option value="中文 GB2312">中文 GB2312</option>'
        + '</select>'
        + '</label>'
        + '</div>'
        + '<input class="btn-ok btn" type="button" value="确定">'
        + '<input class="btn-cancel btn" type="button" value="取消">'
        + '</div>'
        + '</div>'
        + '</div>');

    var $btnOk = $dlg.find('.btn-ok'),
        $btnClose = $dlg.find('.close-btn'),
        $btnCancel = $dlg.find('.btn-cancel'),
        $sample = $dlg.find('.sample-txt'),
        $titleBar = $dlg.find('.notepad-dlg-titlebar');

    var fonts = ['Agency FB', 'Algerian', 'Arial', 'Arial Rounded MT', 'Axure Handwriting', 'Bahnschrift', 'Baskerville Old Face', 'Bauhaus 93', 'Bell MT', 'Berlin Sans FB', 'Bernard MT', 'BlackAdder ITC'],
        styles = ['常规', '斜体', '粗体', '粗偏斜体'],
        sizes = ['8', '9', '10', '11', '12', '14', '16', '18', '20', '22', '24', '26', '28', '36', '48', '72'];

    var cfg = {
        family: 'Arial',
        style: '常规',
        size: '16',
        okHandler: null
    };

    function sample() {
        $sample.css({ 'font-family': cfg.family, 'font-size': cfg.size + 'pt' });

        if (cfg.style === '斜体') {
            $sample.css({ 'font-style': 'italic' });
            return;
        }

        if (cfg.style === '粗体') {
            $sample.css({ 'font-weight': 'bold' });
            return;
        }

        if (cfg.style === '粗偏斜体') {
            $sample.css({ 'font-weight': 'bold', 'font-style': 'italic' });
            return;
        }
    }

    function init() {
        var lstFamily = new List();
        lstFamily.show({
            container: '.notepad-dlg-font .font-family',
            width: '176px',
            list: fonts,
            select: fonts.indexOf(cfg.family),
            isFont: true,
            selectHandler: function (e) {
                cfg.family = fonts[e];
                sample();
            }
        });

        var lstStyle = new List();
        lstStyle.show({
            container: '.notepad-dlg-font .font-style',
            width: '132px',
            list: styles,
            select: styles.indexOf(cfg.style),
            isFontStyle: true,
            selectHandler: function (e) {
                cfg.style = styles[e];
                sample();
            }
        });

        var lstSize = new List();
        lstSize.show({
            container: '.notepad-dlg-font .font-size',
            width: '64px',
            list: sizes,
            select: sizes.indexOf(cfg.size),
            selectHandler: function (e) {
                cfg.size = sizes[e];
                sample();
            }
        });
        sample();
    }

    function destory() { $dlg.remove(); }

    function show(conf) {
        $.extend(cfg, conf);

        $('body').append($dlg);
        init();
        $dlg.find('.dialogbox').draggable({ handle: $titleBar });

        $btnClose.click(destory);
        $btnCancel.click(destory);
        $btnOk.click(function () {
            cfg.okHandler({
                family: cfg.family,
                style: cfg.style,
                size: cfg.size
            });
            destory();
        });

        $dlg.click(function (e) {
            e.stopPropagation();
        });
    }

    return {
        show: show
    };
}());
var np = {}; // Notepad 主程序对象

np.config = {
    'appContainer': '#notepad'
};

np.fontFamily = 'Arial'; // 默认字体
np.fontStype = '常规';  // 默认字体样式
np.fontSize = '16';    // 默认字体大小：16pt

np.fontHandler = function (e) {
    np.fontFamily = e.family;
    np.fontStype = e.style;
    np.fontSize = e.size;
    $editor.setFont(e);
};

$(function () {
    $menubar.show(np.menuData);
    $editor.show({
        posHandler: function (row, col) {
        },
        contentHandler: function (isEmpty) {
            $menubar.enabled(1, 6, isEmpty);
        }
    });
    $editor.setFont({
        family: np.fontFamily,
        style: np.fontStype,
        size: np.fontSize
    });

    var $app = $('body');

    $app.click(function () {
        $menubar.hideMenu();
    });
});
function List() {
    var $List = $(''
        + '<div class="notepad-com-list">'
        + '<input class="editor" type="text"><br>'
        + '<ul class="list">'
        + '</ul>'
        + '</div>');
    var $editor = $List.find('.editor'),
        $list = $List.find('.list'),
        $items;
    var cfg = {
        container: '',
        list: [],
        select: 0,
        width: '200px',
        isFont: false,
        isFontStyle: false,
        selectHandler: null
    };

    function setFontStyle(item, style) {
        if (style === '斜体') {
            item.css({ 'font-style': 'italic' });
            return;
        }

        if (style === '粗体') {
            item.css({ 'font-weight': 'bold' });
            return;
        }

        if (style === '粗偏斜体') {
            item.css({ 'font-weight': 'bold', 'font-style': 'italic' });
            return;
        }
    }

    function fillData() {
        var i = 0, $item;
        if (cfg.isFont) {
            for (i = 0; i < cfg.list.length; i++) {
                $item = $('<li class="item"></li>');
                $item.css({ 'font-family': cfg.list[i] });
                $list.append($item.html(cfg.list[i]));
            }
        }
        else if (cfg.isFontStyle) {
            for (i = 0; i < cfg.list.length; i++) {
                $item = $('<li class="item"></li>');
                setFontStyle($item, cfg.list[i]);
                $list.append($item.html(cfg.list[i]));
            }
        }
        else {
            for (i = 0; i < cfg.list.length; i++) {
                $item = $('<li class="item"></li>');
                $list.append($item.html(cfg.list[i]));
            }
        }

        $items = $list.find('.item');
    }

    function setSelect(n) {
        $($items[n]).addClass('selected');
        $editor.val(cfg.list[n]);
        $editor.select();
    }

    function init() {
        var $oldList = $(cfg.container).find('.notepad-com-list');
        if ($oldList.length !== 0) $oldList.remove();

        $(cfg.container).append($List);

        $List.css({ width: cfg.width });
        fillData();
        setSelect(cfg.select);
    }

    this.show = function (conf) {
        $.extend(cfg, conf);
        init();
        $list.click(function (e) {
            $($items[cfg.select]).removeClass('selected');
            cfg.select = cfg.list.indexOf($(e.target).html());
            $($items[cfg.select]).addClass('selected');
            $editor.val(cfg.list[cfg.select]);
            $editor.select();
            cfg.selectHandler(cfg.select);
        });
    };
}
var $menubar = (function () {
    var $bar = $('<div class="notepad-menubar"></div>');
    var menuData,
        menus = []; 
    var tag = -1;

    // 初始化菜单
    function init() {
        // 一级菜单
        var $titles = $('<ul class="menu-title"></ul>');
        for (var i = 0; i < menuData.length; i++) {
            var $title = $('<li class="title"></li>');
            $title.html(menuData[i].title);
            $title.attr('data-id', i);
            $titles.append($title);
            // 点击事件
            $title.click(function (e) {
                var i = Number(this.dataset.id);
                if (tag === -1) {
                    menus[i].css({ display: 'inline-block' });
                    tag = i;
                } 
                else if (tag !== i) {
                    menus[tag].css({ display: 'none' });
                    menus[i].css({ display: 'inline-block' });
                    tag = i;
                } 
                else {
                    menus[tag].css({ display: 'none' });
                    tag = -1;
                }
                e.stopPropagation();
            });

            $title.hover(function () {
                if (tag !== -1) {
                    var i = Number(this.dataset.id);
                    menus[tag].css({ display: 'none' });
                    menus[i].css({ display: 'inline-block' });
                    tag = i;
                }
            });
        }
        $bar.append($titles);

        // 二级菜单
        for (var i = 0; i < menuData.length; i++) {
            var $menus = $('<ul class="menus"></ul>'),
                items = menuData[i].menuItems;
            for (var j = 0; j < items.length; j++) {
                if (items[j].title === 'hr') {
                    var $hr = $('<li class="menu-hr"></li>');
                    $menus.append($hr);
                    continue;
                }

                var $menu = $('<li class="menu-item"></li>');
                $menu.html(items[j].title);
                $menu.attr('data-x', i);
                $menu.attr('data-y', j);

                if (items[j].shortcut !== '') {
                    var $shorcut = $('<span class="shortcut"></span>');
                    $shorcut.html(items[j].shortcut);
                    $menu.append($shorcut);
                }

                if (!items[j].enabled) $menu.addClass('disabled');
                $menus.append($menu);

                $menu.click(function (e) {
                    e.stopPropagation();
                    if ($(this).hasClass('disabled')) return;
                    var i = this.dataset.x, j = this.dataset.y;
                    menus[i].css({ display: 'none' });
                    tag = -1;

                    menuData[i].menuItems[j].handler();
                });
            }

            $menus.css({
                width: menuData[i].width,
                left: menuData[i].left,
                display: 'none'
            });

            $bar.append($menus);
            menus.push($menus);
        }
        $('body').append($bar);
    }

    function hideMenu() {
        if (tag === -1) return;
        menus[tag].css({ display: 'none' });
        tag = -1;
    }

    function show(data) {
        menuData = data;
        init();
    }

    return {
        show: show,
        hideMenu: hideMenu
    };
}());
np.menuData = [
  {
    title: '文件(F)',
    menuItems: [
      {
        title: '新建(N)',
        shortcut: 'Ctrl+N',
        enabled: true,
        handler: function () { window.console.log('新建(N) menu clicked!'); }
      },
      {
        title: '打开(O)...',
        shortcut: 'Ctrl+O',
        enabled: true,
        handler: function () { window.console.log('打开(O) menu clicked!'); }
      },
      {
        title: '保存(S)',
        shortcut: 'Ctrl+S',
        enabled: true,
        handler: function () { window.console.log('保存(S) menu clicked!'); }
      },
      {
        title: '另存为(A)...',
        shortcut: '',
        enabled: true,
        handler: function () { window.console.log('另存为(A) menu clicked!'); }
      },
      {
        title: 'hr',
        shortcut: '',
        enabled: true,
        handler: null
      },
      {
        title: '页面设置(U)...',
        shortcut: '',
        enabled: true,
        handler: function () { window.console.log('页面设置(U) menu clicked!'); }
      },
      {
        title: '打印(P)...',
        shortcut: 'Ctrl+P',
        enabled: true,
        handler: function () { window.console.log('打印(P) menu clicked!'); }
      },
      {
        title: 'hr',
        shortcut: '',
        enabled: true,
        handler: null
      },
      {
        title: '退出(X)',
        shortcut: '',
        enabled: true,
        handler: function () { window.console.log('退出(X) menu clicked!'); }
      }
    ],
    width: '202px',
    left: '0px'
  },
  {
    title: '编辑(E)',
    menuItems: [
      {
        title: '撤销(U)',
        shortcut: 'Ctrl+Z',
        enabled: false,
        handler: function () { window.console.log('撤销(U) menu clicked!'); }
      },
      {
        title: 'hr',
        shortcut: '',
        enabled: true,
        handler: null
      },
      {
        title: '剪切(T)',
        shortcut: 'Ctrl+X',
        enabled: true,
        handler: function () { window.console.log('剪切(X) menu clicked!'); }
      },
      {
        title: '复制(C)',
        shortcut: 'Ctrl+C',
        enabled: false,
        handler: function () { window.console.log('复制(C) menu clicked!'); }
      },
      {
        title: '粘贴(P)',
        shortcut: 'Ctrl+V',
        enabled: false,
        handler: function () { window.console.log('粘贴(P) menu clicked!'); }
      },
      {
        title: '删除(L)',
        shortcut: 'Del',
        enabled: false,
        handler: function () { window.console.log('删除(L) menu clicked!'); }
      },
      {
        title: 'hr',
        shortcut: '',
        enabled: true,
        handler: null
      },
      {
        title: '使用 Bing 搜索...',
        shortcut: 'Ctrl+E',
        enabled: true,
        handler: function () { window.console.log('Bing搜索被 clicked!'); }
      },
      {
        title: '查找(F)...',
        shortcut: 'Ctrl+F',
        enabled: false,
        handler: function () { window.console.log('查找(F) menu clicked!'); }
      },
      {
        title: '查找下一个(N)',
        shortcut: 'F3',
        enabled: false,
        handler: function () { window.console.log('查找下一个(N) menu clicked!'); }
      },
      {
        title: '替换(R)...',
        shortcut: 'Ctrl+H',
        enabled: true,
        handler: function () { window.console.log('替换(R) menu clicked!'); }
      },
      {
        title: '转到(G)...',
        shortcut: 'Ctrl+G',
        enabled: true,
        handler: function () {
          window.console.log('转到(G) menu clicked!');
          $dlgGoto.show();
        }
      },
      {
        title: 'hr',
        shortcut: '',
        enabled: true,
        handler: null
      },
      {
        title: '全选(A)',
        shortcut: 'Ctrl+A',
        enabled: true,
        handler: function () { window.console.log('替换(R) menu clicked!'); }
      },
      {
        title: '时间/日期(D)',
        shortcut: 'F5',
        enabled: true,
        handler: function () { window.console.log('时间/日期(D) menu clicked!'); }
      },
    ],
    width: '218px',
    left: '52px'
  },
  {
    title: '格式(O)',
    menuItems: [
      {
        title: '自动换行(W)',
        shortcut: '',
        enabled: true,
        handler: function () {
          window.console.log('自动换行(W) menu clicked!');
        }
      },
      {
        title: '字体(F)...',
        shortcut: '',
        enabled: true,
        handler: function () {
          $dlgFont.show({
            family: np.fontFamily,
            style: np.fontStyle,
            size: np.fontSize,
            okHandler: np.fontHandler
          });
        }
      }
    ],
    width: '156px',
    left: '106px'
  },
  {
    title: '查看(V)',
    menuItems: [
      {
        title: '状态栏(S)',
        shortcut: '',
        enabled: true,
        handler: function () {
          window.console.log('显示状态栏');
        }
      }
    ],
    width: '138px',
    left: '162px'
  },
  {
    title: '帮助(H)',
    menuItems: [
      {
        title: '查看帮助(H)',
        shortcut: '',
        enabled: true,
        handler: function () {
          window.open('https://cn.bing.com/search?q=获取有关+windows+10+中的记事本的帮助', '_blank');
        }
      },
      {
        title: '关于记事本(A)',
        shortcut: '',
        enabled: true,
        handler: function() { $dlgAbout.show(); }
      },
    ],
    width: '166px',
    left: '216px'
  }
];