let username = document.getElementById("username")
let password = document.getElementById("password")
let usererror = document.getElementById("usererror")
let passworderror = document.getElementById("passworderror")

function form() {
    
    if (username.value == "") {
        usererror.innerHTML = "Enter Your Name"
        event.preventDefault()
    }
    else {
        document.getElementById("usererror").innerHTML = ""
    }
    if (password.value == "") {
        passworderror.innerHTML = "Enter Your Password"
        event.preventDefault()
    }
    else if (password.value.length < 8) {
        passworderror.innerHTML = "maximum 8 characters"
        event.preventDefault()
    }
    else {
        document.getElementById("passworderror").innerHTML = ""
    }
}
