var phoneBook = {};
var array = [];
var result = [];


var phoneBook = function (command) {
    var arrPhoneBook = command.split(' ')
    var cmd = arrPhoneBook[0];
    var name = arrPhoneBook[1];
    var phone = arrPhoneBook[2];
    if (phone) var numberArray = phone.split(',');


    if (cmd === 'ADD') {
        if (numberArray) {
            for (var i = 0; i < numberArray.length; i++) {

                if (!phoneBook[name]) {
                    result.push(phoneBook[name] = numberArray[0]);
                    continue;
                }
                result.push(phoneBook[name] += ', ' + numberArray[i]);
            }
        }
        return result;

    }

    if (cmd === 'REMOVE_PHONE') {

        var phoneNumber = command.split(' ')[1];
        for (var name in phoneBook) {
            if (phoneBook[name].indexOf(phoneNumber) === -1) continue;

            var phoneIndex = phoneBook[name].indexOf(phoneNumber);
            var phoneLetters = phoneBook[name].split('');
            var phoneSplitted = phoneBook[name].split(', ');
            for (var i = 0; i < phoneSplitted.length; i++) {
                if ((phoneNumber.length == phoneSplitted[i].length) && (phoneNumber == phoneSplitted[i])) {
                    var numberLength = phoneNumber.length + 2;
                    if (phoneIndex >= 2) {
                        phoneLetters.splice((phoneIndex - 2), numberLength);
                    }
                    else {
                        phoneLetters.splice((phoneIndex), numberLength);
                    }
                    phoneBook[name] = phoneLetters.join('');
                }
            }
            if (phoneBook[name].indexOf(phoneNumber) === -1) {
                return true;
            }
            else { return false }
        }

    }



    if (cmd === 'SHOW') {

        var userString = [];

        for (var name in phoneBook) {
            if (!phoneBook[name]) continue;
            userString.push(name + ': ' + phoneBook[name]);
            userString.sort();
        }
        return userString;
    }


};
phoneBook('ADD Ivan 555-10-01,555-10-03');

phoneBook('ADD Ivan 555-10-02');
phoneBook('REMOVE_PHONE 555-10-03');
phoneBook('ADD Alex 555-20-01');
phoneBook('REMOVE_PHONE 555-20-01');


console.info(phoneBook('SHOW'));



