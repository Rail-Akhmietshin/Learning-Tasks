let arr = ["a", "b"];

arr.push(function() {
  console.log( this );
});

arr[2]();

// Результатом будет массив, в котором находится эта функция, так как значение this является контекст, в котором он вызывается.