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

    // set data attributes to each hour input element
    // later, we will change the class on that element based on whether the represented time is > or < the current time.
    $("#9Row").attr("data-time", moment("9:00 am", "h:mm a").format("HH"));
    $("#10Row").attr("data-time", moment("10:00 am", "h:mm a").format("HH"));
    $("#11Row").attr("data-time", moment("11:00 am", "h:mm a").format("HH"));
    $("#12Row").attr("data-time", moment("12:00 pm", "h:mm a").format("HH"));
    $("#1Row").attr("data-time", moment("1:00 pm", "h:mm a").format("HH"));
    $("#2Row").attr("data-time", moment("2:00 pm", "h:mm a").format("HH"));
    $("#3Row").attr("data-time", moment("3:00 pm", "h:mm a").format("HH"));
    $("#4Row").attr("data-time", moment("4:00 pm", "h:mm a").format("HH"));
    $("#5Row").attr("data-time", moment("5:00 pm", "h:mm a").format("HH"));

    //  CHANGE INPUT BOX COLOR BASED ON TIME OF DAY

    // var imputTime to represent the input block's corresponding time with a for loop
    for (var i = 1; i <= 12; i++) {
        var inputTime = $("#" + i + "Row").attr("data-time");
        var inputTimeInt = parseInt(inputTime);
        console.log(inputTimeInt);

        // Set color styling based on comparisons between the currentTimeInt and the inputTimeInt
        if (currentTimeInt === inputTimeInt){
            $("#" + i + "Row").addClass("present");
            
        }

        if (currentTimeInt > inputTimeInt){
            $("#" + i + "Row").addClass("past");
        }

        if (currentTimeInt < inputTimeInt){
            $("#" + i + "Row").addClass("future");
        }

    }

});