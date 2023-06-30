//your JS code here. If required.
const usernameInput = document.getElementById("username");
const passwordInput = document.getElementById("password");
const rememberCheckbox = document.getElementById("checkbox");
const submit = document.getElementById("submit");
document.addEventListener("DOMContentLoaded", function() {
      // Check if there are saved details in local storage
      if (localStorage.getItem("username") && localStorage.getItem("password")) {
        // Show the "Login as existing user" button
        var existingUserButton = document.getElementById("existing");
        existingUserButton.style.display = "block";
      }
    });
function handleSubmit() {if (rememberCheckbox.checked) {
        // Save username and password to local storage
        localStorage.setItem("username", usernameInput.value);
        localStorage.setItem("password", passwordInput.value);
      } else {
        // Remove saved username and password from local storage
        localStorage.removeItem("username");
        localStorage.removeItem("password");
      }

      // Show alert with logged in username
      alert("Logged in as " + usernameInput.value);
    }

    function handleExistingUser() {
      var savedUsername = localStorage.getItem("username");
      alert("Logged in as " + savedUsername);
    }