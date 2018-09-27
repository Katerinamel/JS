//var date = new Date(2016, 8, 26, 15, 1);

var date = function (date) {
    function formatDate(date) {
        var date  = new Date(date);
        var hours = date.getHours();
        var year = date.getFullYear();
        var month = date.getMonth();
        var day = date.getDate();
        var minutes = date.getMinutes();
        if (day < 10) {
            day = '0' + day;
        }
        if (month + 1 < 10) {
            month = '0' + (month + 1);
        }
        else { month = month + 1; }
        if (minutes < 10) {
            minutes = '0' + minutes;
        };
        if (hours < 10) {
            hours = '0' + hours;
        };
        var formattedDate = year + '-' + month + '-' + day + ' ' + hours + ':' + minutes;
        return formattedDate;
    }
    var date = new Date(date);
    //date = formatDate(date);
    return time = {
        value: date,
        add: function (count, units) {
            this.value = new Date(this.value);
            if ((units == "years") || (units == "months") || (units == "days") || (units == "hours") || (units == "minutes")) {
                if (count < 0) {
                    throw TypeError('error');
                }
                else {

                    if (units == "years") {
                        this.value = this.value.setFullYear(this.value.getFullYear() + count);
                        this.value = formatDate(this.value);
                        return this;
                    }
                    if (units == "months") {
                        this.value = this.value.setMonth(this.value.getMonth() + count);
                        this.value = formatDate(this.value);
                        return this
                    };
                    if (units == "days") {
                        this.value = this.value.setDate(this.value.getDate() + count);
                        this.value = formatDate(this.value);
                        return this
                    };
                    if (units == "hours") {
                        this.value = this.value.setHours(this.value.getHours() + count);
                        this.value = formatDate(this.value);
                        return this
                    };
                    if (units == "minutes") {
                        this.value = this.value.setMinutes(this.value.getMinutes() + count);
                        this.value = formatDate(this.value);
                        return this
                    };
                }
            }
            else {
                throw TypeError('error');
            }
        },
        subtract: function (count, units) {
            this.value = new Date(this.value);
            if ((units == "years") || (units == "months") || (units == "days") || (units == "hours") || (units == "minutes")) {
                if (count < 0) {
                    throw TypeError('error');
                }
                else {
                    if (units == "years") {
                        this.value = this.value.setFullYear(this.value.getFullYear() - count);
                        this.value = formatDate(this.value);
                        return this;
                    }
                    if (units == "months") {
                        this.value = this.value.setMonth(this.value.getMonth() - count);
                        this.value = formatDate(this.value);
                        return this
                    };
                    if (units == "days") {
                        this.value = this.value.setDate(this.value.getDate() - count);
                        this.value = formatDate(this.value);
                        return this
                    };
                    if (units == "hours") {
                        this.value = this.value.setHours(this.value.getHours() - count);
                        this.value = formatDate(this.value);
                        return this
                    };
                    if (units == "minutes") {
                        this.value = this.value.setMinutes(this.value.getMinutes() - count);
                        this.value = formatDate(this.value);
                        return this
                    };
                }
            }
        }
    }
    return this.time.value;
}







var time = date('2017-05-16 13:45')

.add(24, 'hours')

.subtract(1, 'months')

.add(3, 'days')

.add(15, 'minutes');

console.info(time.value);