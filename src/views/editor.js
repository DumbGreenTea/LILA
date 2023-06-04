var editor = CodeMirror(document.querySelector('.editorStyle'), {
    mode: 'javascript',
    lineNumbers: true,
    theme: 'default'
  });
  
  // Funcionalidad para resaltar palabras clave
  editor.on('change', function() {
    editor.eachLine(function(line) {
      var text = line.text;
      var keywords = ['if', 'else', 'for', 'while', 'print']; // Palabras clave
  
      keywords.forEach(function(keyword) {
        var regex = new RegExp('\\b' + keyword + '\\b', 'g');
        var match;
  
        while ((match = regex.exec(text)) !== null) {
          editor.markText(
            { line: line.lineNo(), ch: match.index },
            { line: line.lineNo(), ch: match.index + match[0].length },
            { className: 'keyword' }
          );
        }
      });
    });
  });
  
  // Funcionalidad para la indentación semi-automática
  editor.on('beforeChange', function(instance, changeObj) {
    var cursorPos = instance.getCursor();
    var lineContent = instance.getLine(cursorPos.line);
  
    if (changeObj.origin === '+input' && changeObj.text.includes(':')) {
      var indentation = '';
  
      for (var i = 0; i < lineContent.length; i++) {
        if (lineContent[i] === ' ' || lineContent[i] === '\t') {
          indentation += lineContent[i];
        } else {
          break;
        }
      }
  
      setTimeout(function() {
        var currentIndentation = lineContent.match(/^\s*/)[0];
        var newLine = '\n' + currentIndentation + '\t';
        instance.replaceRange(newLine, { line: cursorPos.line + 1, ch: 0 });
        instance.setCursor(cursorPos.line + 1, currentIndentation.length + 1);
      }, 10);
    }
  });
  