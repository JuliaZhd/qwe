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
  
  /*fs.onfocus = function() {
    if (this.className == 'error') { // сбросить состояние "ошибка", если оно есть
      this.className = "";
      error.innerHTML = "";
    }
  };*/