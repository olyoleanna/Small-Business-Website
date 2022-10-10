window.onload = setForm;

function setForm() {
   document.forms[0].onsubmit = function() {
      if (this.checkValidity()) alert("\nThis is a confirmation message.\n\nThank you for submitting your information.\n");
      return false;
   }
}
