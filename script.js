    function encryptText(text) {
      const encryptionKey = {
        "e": "enter",
        "i": "imes",
        "a": "ai",
        "o": "ober",
        "u": "ufat"
      };
      return text.split("").map((char) => encryptionKey[char] || char).join("");
    }

    function decryptText(text) {
      const decryptionKey = {
        "enter": "e",
        "imes": "i",
        "ai": "a",
        "ober": "o",
        "ufat": "u"
      };
      return text.split(/(enter|imes|ai|ober|ufat)/g).map((segment) => decryptionKey[segment] || segment).join("");
    }

    function encrypt() {
      const text = document.getElementById("text").value;
      const result = encryptText(text);
      document.getElementById("result").value = result;
    }

    function decrypt() {
      const text = document.getElementById("text").value;
      const result = decryptText(text);
      document.getElementById("result").value = result;
    }

    function copyToClipboard() {
      const result = document.getElementById("result");
      result.select();
      result.setSelectionRange(0, 99999);
      document.execCommand("copy");
      alert("¡Texto copiado!");
    }
  