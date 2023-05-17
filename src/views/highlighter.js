export const highlightKeywords = (editor) => {
    const keywords = ['if', 'else', 'for', 'while']; // Ejemplo de palabras clave
  
    const keywordRegex = new RegExp(`\\b(${keywords.join('|')})\\b`, 'g');
  
    editor.eachLine(line => {
      const lineText = line.text;
      const match = lineText.match(keywordRegex);
  
      if (match) {
        editor.markText(
          { line: line.lineNo(), ch: match.index },
          { line: line.lineNo(), ch: match.index + match[0].length },
          { className: 'keyword' }
        );
      }
    });
  }
  
  export const highlightPatterns = (editor) => {
    const patterns = ['\\d+', '[A-Z]+']; // Ejemplo de patrones
  
    const patternRegex = new RegExp(`(${patterns.join('|')})`, 'g');
  
    editor.eachLine(line => {
      const lineText = line.text;
      const matches = lineText.match(patternRegex);
  
      if (matches) {
        matches.forEach(match => {
          const startIndex = lineText.indexOf(match);
          const endIndex = startIndex + match.length;
  
          editor.markText(
            { line: line.lineNo(), ch: startIndex },
            { line: line.lineNo(), ch: endIndex },
            { className: 'pattern' }
          );
        });
      }
    });
  }
  