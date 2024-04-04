window.onscroll = function() {scrollFunction()};
var codingSection = document.getElementById("codingSection");

var chatting = false
function scrollFunction() {
  if (document.documentElement.scrollTop > document.documentElement.scrollHeight / 3) {
    document.getElementById("goUpButton").style.display = "block";
  } else {
    document.getElementById("goUpButton").style.display = "none";
  } 
  // if (codingSection.getBoundingClientRect().top <= 50) {
  //   talkButton.style.display = "none";
  // } else {
  //   if (chatting == false){
  //     talkButton.style.display = "block";
  //   }
      
  // }
}

document.getElementById("goUpButton").addEventListener("click", function(){
    // Updated scroll to top functionality
    window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth'
    });
});


document.getElementById("talkButton").addEventListener("click", function() {
  var chatBox = document.getElementById("iframe-container");
  if (chatBox.style.display === "none") {
    chatBox.style.display = "block";
    talkButton.style.display = "none";
    chatting = true
  } else {
    chatBox.style.display = "none";

  }
});


  document.getElementById('close-button').addEventListener('click', function() {
      // Hide the container
      document.getElementById('iframe-container').style.display = 'none';
      // chatting = false;
      talkButton.style.display = "block";
  });

