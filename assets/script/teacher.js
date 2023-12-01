

document.querySelector("#form").addEventListener("submit", submitFun);


function submitFun(elme) {
    elme.preventDefault();
    username = document.querySelector("#name").value;
    password =  document.querySelector("#password").value;

    if (username == "BCA001" && password == "bicky") {
       
        window.location.href = "/assets/pages/teacher_dashboard.html";
    } 
    else if (username == "BCA002" && password == "inflicky") {
        window.location.href = "/assets/pages/teacher_dashboard.html";
        
    } 
    else if (username == "BCA" && password == "bickysharma") {
        window.location.href = "/assets/pages/teacher_dashboard.html";
    } 
    else{
        alert("Invalid username or password");
        document.querySelector("#form").reset();
    }

}


