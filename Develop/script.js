function clock() {
    var currentDate = moment().format('dddd MMMM Do YYYY h:mm:ss a');
    $('#currentDay').html(currentDate);
}

setInterval(clock, 1000);