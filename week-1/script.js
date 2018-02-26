burg.onclick = function(e) {
  e.target.classList.toggle('active');
  document.getElementById('prop').classList.toggle('active');
};

fs.onchange = function() {
    if (isNaN(this.value)||(this.value<7)||(this.value>24)||(this.value % 1>0)) { // введено не число
      alert('Вы ввели не целое число или число вне диапазона от 8 до 24. Исправьте, пожалуйста.');
    }
    else {for (var i=0; i<document.getElementsByTagName('p').length; i++) {
      document.getElementsByTagName('p')[i].style.fontSize = this.value+ 'px'}
    };
};
  
chCol.onchange = function(){
  document.getElementsByTagName('article')[0].style.backgroundColor = document.getElementById("chCol").value
};

delLastP.onclick = function(){
  if (document.getElementsByTagName('p').length > 1) {
    document.querySelectorAll('article > :last-child')[0].remove();
  }
  else {
    alert ("Нельзя удалять последний абзац!!")
  };
};

window.onclick = function onclickRadio() {
  var nameRadio = document.getElementsByName('nameRadio');
  for (var i = 0; i < nameRadio.length; i++) {
    if (nameRadio[i].type === 'radio' && nameRadio[i].checked) {
      document.getElementsByTagName('article')[0].style.fontFamily = nameRadio[i].value;
    }
  }
}

function validate(form) {
  var elems = form.elements;
  var name = form.register_login.value;
  var login1 = form.register_password.value;
  var login2 = form.register_confirmation.value;
  if (login1===login2) {
    localStorage.setItem('name', 'login1')
  }
  else {
    alert("Пароли должны быть идентичны!");    
  }
}