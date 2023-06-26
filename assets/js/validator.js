function validateForm() {
    const email = document.getElementById("signInEmail").value;
    const pwd = document.getElementById("signInPassword").value;

    if (email == "admin@opencad.io" && pwd !== "pwd") {
        window.alert("Password incorrect");
        return false;
        } else if (email !=="admin@opencad.io" && pwd == "pwd"){
        window.alert("You're wrong!"); 
        return false;
        } else if (email !=="admin@opencad.io" && pwd !== "pwd") {
            window.alert("No.");
            return false
        } else if (email == "admin@opencad.io" && pwd == "pwd") {
            window.alert("Correct!!");
            return true;
        }
    }