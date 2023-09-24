function myFunction() {
    document.getElementById("myDropdown").classList.toggle("show");
  }
  
  // Close the dropdown if the user clicks outside of it
  window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
      var dropdowns = document.getElementsByClassName("dropdown-content");
      var i;
      for (i = 0; i < dropdowns.length; i++) {
        var openDropdown = dropdowns[i];
        if (openDropdown.classList.contains('show')) {
          openDropdown.classList.remove('show');
        }
      }
    }
  }

  document.getElementById('submitButton').addEventListener('click', function() {
    var fullName = document.getElementById('fullName').value;
    var email = document.getElementById('email').value;
    var contactNumber = document.getElementById('contactNumber').value;

    console.log('Full Name:', fullName);
    console.log('Email ID:', email);
    console.log('Contact Number:', contactNumber);
});

function converttospeech() {
    var text = document.getElementById("text-area").value;
    console.log(text);
}

