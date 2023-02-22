/* 
    Какие из перечисленных ниже alert выполнятся?
    Какие конкретно значения будут результатами выражений в условиях if(...)?
*/
if (-1 || 0) alert( 'first' );          // Выполнится, так как true || false    = true
if (-1 && 0) alert( 'second' );         // Не выполнится, так как true && false     = false
if (null || -1 && 1) alert( 'third' );  // Выполнится, так как false || true && true       = true
