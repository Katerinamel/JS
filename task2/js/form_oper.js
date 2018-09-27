
function addForm() {
    var name = document.getElementById('name');
    name.innerHTML = (typeSecondName.value) + " " + (typeName.value) + " " + (typeMiddleName.value);
    ageYear.innerHTML = typeAge.value;
    ageDay.innerHTML = typeAge.value * 365;
    var inp = document.getElementsByName('gender');
    for (var i = 0; i < inp.length; i++) {
        if (inp[i].type == "radio" && inp[i].checked) {
            var yourGender = inp[i].value;
        }
    }
    gender.innerHTML = yourGender;
    var retirementAgeWoman = 55;
    var retirementAgeMan = 60;

   ((yourGender == "woman") && (typeAge.value < retirementAgeWoman)) ?
        retirement.innerHTML = "no": 
        ((yourGender == "woman") && (typeAge.value >= retirementAgeWoman)) ?
        retirement.innerHTML = "yes":
    ((yourGender == "man") && (typeAge.value < retirementAgeMan)) ?
        retirement.innerHTML = "no":
    
        retirement.innerHTML = "yes";
    ;
    
}
function typeDigits()
{

if ((event.keyCode < 45 || event.keyCode > 57) ) event.returnValue = false;
}
typeAge.addEventListener('keypress', typeDigits, false);
addtoForm.addEventListener('click', addForm, false);