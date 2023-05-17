// editor.js
import CodeMirror from 'codemirror';
import 'codemirror/mode/javascript/javascript';

export function initializeEditor(elementId) {
  const editorElement = document.getElementById(elementId);
  const editor = CodeMirror(editorElement, {
    mode: 'javascript',
  });

  // Ajusta el tamaño del editor para ocupar el 100% del contenedor
  editorElement.style.width = '100%';
  editorElement.style.height = '100%';

  return editor;
}
