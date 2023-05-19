// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
var currentDay = $("#currentDay")


// Added date and time to my page
$(function () {
  currentDay.text((dayjs().format('dddd, MMMM D, YYYY - h:mm A')))
  var justTime = dayjs().hour()

    $( ".row" ).each(function( index ) {
      var rowHour = parseInt($(this).attr("id").split("-")[1])
      if (justTime === rowHour) {
        $(this).removeClass( "past future" ).addClass( "present" );
      } else if (justTime > rowHour) {
        $(this).removeClass( "present future" ).addClass( "past" );
      } else {
        $(this).removeClass( "present past" ).addClass( "future" );
      }
    });
  
  // Added event on my save button and store keys and values to the local storage 
  $(".saveBtn").on("click", function() {
    console.log("Button click")
    var textAreaValue = $(this).siblings(".description").val()
   console.log(textAreaValue)
   var parentId = $(this).parent().attr("id")
   console.log(parentId)
   localStorage.setItem(parentId, textAreaValue)
  })

// Added for loop function to see saved values after page refresh
  function storeTasks(){
    for (let i=9; i<23; i++) {
    $(`#hour-${i} .description`).val(localStorage.getItem(`hour-${i}`))
    }
  }

  storeTasks()
  
});
