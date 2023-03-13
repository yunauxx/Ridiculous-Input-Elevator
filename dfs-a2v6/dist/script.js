//javascript from Mihovil Ilakovac (ps://codepen.io/infomiho/pen/DvjzjE)

// Global value variables
var current = 0;
var value = "";
var isAnimating = false;//keeps track whether animation is in progress

// Elevator animation
$(document).ready(function(){//to manipulate drawing

  $("#enterPhone button").click(function(){//when button is clicked

    if (isAnimating) return; // prevent new input/button click while animating
    
    var floor = parseInt($(this).data("floor"))

    /////////////
    // Add floor to string + print string to screen
    value += floor;
    document.querySelector(".phone-number").innerHTML = value;
    /////////////

    height = floor*9.5 //reach top floor
    animate = Math.abs(current-floor)*1300;//elevator speed
    if(floor == current) return;
    isAnimating = true; // set flag to true
    $("#rightDoor").removeClass("active-right");//open right door   
    $("#leftDoor").removeClass("active-left");//open left door
    setTimeout(function(){$("#elevatorContainer").css("transition","all "+animate+"ms linear");
    $("#elevatorContainer").css("bottom",height+"%");
    current = floor;
    setTimeout(function(){
    
    $("#rightDoor").addClass("active-right");//close right door   
    $("#leftDoor").addClass("active-left");//close left door
    isAnimating = false; // set flag to false
    },animate);},350); //start to move after button clicked
    
  });
  
  // Button to reset animation and number inputs
  $("#reset-button").click(function(){
    // Reset the phone number input
    value = "";
    document.querySelector(".phone-number").innerHTML = value;
    
    // Reset the elevator animation
    current = 0;
    isAnimating = false;
    $("#rightDoor").removeClass("active-right");
    $("#leftDoor").removeClass("active-left");
    $("#elevatorContainer").css("transition", "none");
    $("#elevatorContainer").css("bottom", "0%");
    
  });
});