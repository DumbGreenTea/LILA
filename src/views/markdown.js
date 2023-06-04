var isEditing = false;
    var originalText = '';

    function translateMarkdown() {
      var textCell = document.getElementById('textCell');
      var text = textCell.innerText;
      var html = marked.parse(text);
      textCell.innerHTML = html;
      originalText = text;
      isEditing = false;
    }

    function editMarkdown() {
      var textCell = document.getElementById('textCell');
      if (!isEditing) {
        textCell.innerText = originalText;
        isEditing = true;
      }
    }

    