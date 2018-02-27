var lines = 7;
var str = " ";
var simb = "*";
function DrawTriangle () {
if (lines > 2) 
    {
    for(var i = 0; i < lines; i++)
    {str += simb;
    console.log(str)}
    }
    else 
    {
        for(var i = 0; i < 3; i++)
        {str += simb;
        console.log(str)}

    }
}
DrawTriangle(“$”, 10);