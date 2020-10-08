//Makes sure the html has fully rendered to run JQuery
$(document).ready(function () {

    //  ADD CURRENT DATE AT THE TOP OF THE PAGE

    //Formatting found using https://momentjs.com/docs/
    var currentDay = moment().format("dddd, MMMM Do");
    // set the text to current day targeting id = currentDay
    $("#currentDay").text(currentDay);

    //  DEFINE VARIABLES

    // HH format for a 24hr clock
    var currentTime = moment().format("HH");
     // parse the current time so we can compare it with another number later
    var currentTimeInt = parseInt(currentTime);
    var saveBtn = $(".saveBtn");






    
});