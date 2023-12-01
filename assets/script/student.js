

document.querySelector("#form").addEventListener("submit", submitFun);


function submitFun(elme) {
    elme.preventDefault();
    username = document.querySelector("#name").value;
    password =  document.querySelector("#password").value;

    if (username == "bbmku0023" && password == "10022002") {
       
        window.location.href = "/assets/pages/student_dashboard.html";
    } 
    else if (username == "bbmku0024" && password == "20042000") {
        window.location.href = "/assets/pages/student_dashboard.html";
        
    } 
    else if (username == "bbmku" && password == "03072004") {
        window.location.href = "/assets/pages/student_dashboard.html";
    } 
    else{
        alert("Invalid username or password");
        document.querySelector("#form").reset();
    }

}


