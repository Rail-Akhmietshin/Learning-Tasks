function truncate(str, maxlength) {
    return (str.length < maxlength) ?
                str :
                    str.slice(0, maxlength - 1) + "...";
                    
}



console.log(truncate("Вот, что мне хотелось бы сказать на эту тему:", 20))

console.log(truncate("Всем привет!", 20));
