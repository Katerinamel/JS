var dataArray = [];

function addList() {
    var newLi = document.createElement('li');
    newLi.className = "list__text-style"
    var goal = typeGoal.value;
    newLi.innerHTML = goal;
    list.appendChild(newLi);
    dataArray.push(goal);
    typeGoal.value = "";
}


function deleteList() {
    var element = document.getElementById("list");
    while (element.firstChild) {
        element.removeChild(element.firstChild);
    }
    typeGoal.value = "";
    dataArray = [];
}

var lined = document.getElementsByClassName("list__text-style");


function addLine(e) {
    var el = e ? e.target : event.srcElement;
    var cls = el.className;

    if (~cls.indexOf("list__text-style_lined")) {
        el.className = "list__text-style";
    } else {
        el.className = "list__text-style_lined";
    }
}

addGoal.addEventListener('click', addList, false);
deleteGoals.addEventListener('click', deleteList, false);
list.addEventListener('click', addLine, false);


