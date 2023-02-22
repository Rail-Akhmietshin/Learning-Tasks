function checkAge(age) {
    if (age > 18) {
      return true;
    } else {
      // ...
      return confirm('Родители разрешили?');
    }
  }

  
function checkAge(age) {
    if (age > 18) {
        return true;
    }
    // ...
    return confirm('Родители разрешили?');
}
// Есть ли хоть одно отличие в поведении этого варианта?



// Нет, так как return завершает дальнейшее выполнение функции