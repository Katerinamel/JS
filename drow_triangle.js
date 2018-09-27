
function drawTriangle(symb, lines) {
    var str = " "
    if (lines < 3) { lines = 3 };
    for (var i = 0; i < lines; i++) {
    console.log(symb.repeat(i+1)) }

}
drawTriangle("*", 10);
