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

        // CSS color to respond to time
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

    //  BUTTON CLICK

    saveBtn.on("click", function () {
    // set a variable to select the clicked-on-button's data-hour attribute which we set in the HTML
    var hour = $(this).attr("data-hour");

    // set a variable to select the value of the user's "plan" (input) at a particular hour
    var plan = $("#" + hour + "Row").val();

    // save the hour's plan to local storage
    localStorage.setItem(hour, plan);

});

//  Function to retrieve stored user inputs from local storage and populate the hour's input value with them
function renderPlans() {
    // hours to account for: 1, 2, 3, 4, 5, 9, 10, 11, 12
    // starts at 1 because 1 is the lowest hour
    for (var i = 0; i <= 12; i++) {
        // select the 
        $("#" + i + "Row").val(localStorage.getItem(i));
    }
}
 
// call the function to populate the input values with stored data
 renderPlans();

});