function setCookie(name, value, days) {
    var expires = "";
    if (days) {
      var date = new Date();
      date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
      expires = "; expires=" + date.toUTCString();
    }
    document.cookie = name + "=" + (value || "") + expires + "; path=/";
  }

  function getCookie(name) {
    var nameEQ = name + "=";
    var cookies = document.cookie.split(';');
    for (var i = 0; i < cookies.length; i++) {
      var cookie = cookies[i];
      while (cookie.charAt(0) === ' ') {
        cookie = cookie.substring(1, cookie.length);
      }
      if (cookie.indexOf(nameEQ) === 0) {
        return cookie.substring(nameEQ.length, cookie.length);
      }
    }
    return null;
  }

  function eraseCookie(name) {
    document.cookie = name + "=; Max-Age=-99999999; path=/";
  }

  function login() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Save username and password in cookies for 3 days
    setCookie("username", username, 3);
    setCookie("password", password, 3);

    console.log("Login successful!");
  }

  function logout() {
    // Delete username and password cookies
    eraseCookie("username");
    eraseCookie("password");

    console.log("Logout successful!");
  }

  function update() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("password").value;

    // Update username and password in cookies
    setCookie("username", username, 3);
    setCookie("password", password, 3);

    console.log("Update successful!");
  }

  function getData() {
    var username = getCookie("username");
    var password = getCookie("password");

    // Fill form with saved data
    document.getElementById("username").value = username || "";
    document.getElementById("password").value = password || "";

    console.log("Data retrieved!");
  }