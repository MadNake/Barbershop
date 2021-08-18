
  var link = document.querySelector(".login-link");
  var popup = document.querySelector(".modal-login");
  var close = document.querySelector(".modal-close");
  var login = popup.querySelector("[name=login]");
  var form = popup.querySelector("form");
  var password = popup.querySelector("[name=password]")
  var storage = localStorage.getItem("login")
  var mapLink = document.querySelector(".button-map")
  var mapPopup = document.querySelector(".modal-map")
  var mapClose = document.querySelector(".map-modal-close")

  link.addEventListener("click", function(evt) {
    evt.preventDefault();
    popup.classList.add("modal-show");
    login.focus();
    if (storage) {
      login.value= storage;
      password.focus();
    } else {
      login.focus();
    };
  });

  close.addEventListener("click", function() {
    popup.classList.remove("modal-show");
    popup.classList.remove("modal-error");
  });

  form.addEventListener("submit", function(evt) {
    console.log(login.value);
    console.log(password.value);
    if (!login.value || !password.value) {
      evt.preventDefault();
      popup.classList.add("modal-error");
  } else {
      localStorage.setItem("login", login.value);
    }
  });

  window.addEventListener("keydown", function(evt) {
    if (evt.keyCode === 27) {
      if (popup.classList.contains("modal-show")) {
        popup.classList.remove("modal-show");
        popup.classList.remove("modal-error");
      }
    }
  });

  mapLink.addEventListener("click", function(evt) {
    evt.preventDefault();
    mapPopup.classList.add("modal-show-map");
  });

  mapClose.addEventListener("click", function(evt) {
    evt.preventDefault();
    if (mapPopup.classList.contains("modal-show-map")) {
      mapPopup.classList.remove("modal-show-map")
    }
  })

  window.addEventListener("keydown", function(evt) {
    if (evt.keyCode === 27) {
      if (mapPopup.classList.contains("modal-show-map")) {
        mapPopup.classList.remove("modal-show-map")
      }
    }
  })
