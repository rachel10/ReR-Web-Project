function notifyMe() {
    // Let's check if the browser supports notifications
    if (!("Notification" in window)) {
      alert("This browser does not support desktop notification");
    }
  
    // Let's check whether notification permissions have already been granted
    else if (Notification.permission === "granted") {
      // If it's okay let's create a notification
      var img = '../images/editabil-umbrela.png';
      var text = 'Welcome to UmbrElla';
      var notification = new Notification('UmbrElla', { body: text, icon: img });
    }
  
    // Otherwise, we need to ask the user for permission
    else if (Notification.permission !== "denied") {
      Notification.requestPermission().then(function (permission) {
        // If the user accepts, let's create a notification
        if (permission === "granted") {
            var img = '../images/editabil-umbrela.png';
            var text = 'Welcome to UmbrElla';
            var notification = new Notification('UmbrElla', { body: text, icon: img });
        }
      });
    }
  
    // At last, if the user has denied notifications, and you 
    // want to be respectful there is no need to bother them any more.
  };

  notifyMe();