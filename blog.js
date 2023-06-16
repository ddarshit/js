
let Blogbody = document.getElementById("Blogbody")
let Author = document.getElementById("Author")
let Number = document.getElementById("Number")
let Email = document.getElementById("Email")
let blogbodyerror = document.getElementById("blogbodyerror")
let authorerror = document.getElementById("authorerror")
let Numbererror = document.getElementById("Numbererror")
let emailerror = document.getElementById("emailerror")

function blog() {
    if (Blogbody.value.length < 20) {
        Blogbody.style.border = "1px solid red"
        blogbodyerror.innerHTML = "Text has to be between 2 and 20 characters long"
        event.preventDefault()
    }
    else {
        Blogbody.style.border = "1px solid black"
        document.getElementById("blogbodyerror").innerHTML = ""
    }
    if (Author.value == "") {
        Author.style.border = "1px solid red"
        authorerror.innerHTML = "The author's name is required"
        event.preventDefault()
    }
    else {
        Author.style.border = "1px solid black"
        document.getElementById("authorerror").innerHTML = ""
    }
    if (Number.value == "") {
        Number.style.border = "1px solid red"
        Numbererror.innerHTML = "a number is required"
        event.preventDefault()
    }
    else {
        Number.style.border = "1px solid black"
        document.getElementById("Numbererror").innerHTML = ""
    }
    if (Email.value == "") {
        Email.style.border = "1px solid red"
        emailerror.innerHTML = "invalid email address"
    }
    else {
        Email.style.border = "1px solid black"
        document.getElementById("emailerror").innerHTML = ""
    }


}



