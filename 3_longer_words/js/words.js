
function addForm() {
    var text = document.getElementById('words');
    var strSplit = typeText.value.split(" ");
    var newArr = strSplit.sort(compare);
    function compare(a, b) {
        if (a.length > b.length) {
            return -1;
        }
        if (a.length < b.length) {
            return 1;
        }
        return 0;
    }
    words.innerHTML = newArr[0] + '; ' + newArr[1] + '; ' + newArr[2] + ";";
}


checkWords.addEventListener('click', addForm, false);