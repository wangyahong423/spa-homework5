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