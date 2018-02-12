fs.onchange = function() {
    if (isNaN(this.value)||(this.value<7)||(this.value>24)||(this.value % 1>0)) { // введено не число
      // показать ошибку
      //this.className = "error";//
      alert ('Вы ввели не число или число вне диапазона от 8 до 24. Исправьте, пожалуйста.');
    }
    else {for (var i=0; i<document.getElementsByTagName('p').length; i++) {
      document.getElementsByTagName('p')[i].style.fontSize = this.value+ 'px'}
    };
};
  
chCol.onchange = function(){
  document.getElementsByTagName('article')[0].style.backgroundColor = document.getElementById("chCol").value
};

/*delLastP.onclick = function(){
  if (document.getElementsByTagName('p').length > 1) {
    document.getElementsByTagName('p') = document.getElementsByTagName('p').slice(0,-1);
  };
  else {
    alert ("Нельзя удалять последний абзац!!")
  };
};*/
  
burg.onclick = function(e) {
  e.target.classList.add('active');
  document.getElementById('prop').classList.toggle('active');
};