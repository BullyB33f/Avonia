let nameInput = document.getElementById("name");
let emailInput = document.getElementById("email");
let subjectInput = document.getElementById("subject");
let phonenumberInput = document.getElementById("phonenumber");
let textareaInput = document.getElementById("textarea");

let inputsArray = [nameInput, emailInput, subjectInput, phonenumberInput, textareaInput];


function showSidebar(){
    const sidebar = document.querySelector(".sidebar");
    sidebar.style.display = 'flex';
}
function hideSideBar(){
    const sidebar = document.querySelector(".sidebar");
    
    sidebar.style.transform = 'translate(350px)';
    setTimeout(() => {
        sidebar.style.display = 'none';
        sidebar.style.transform = 'translate(0px)';
    }, "0400");
};
function closeWindow(){
    document.getElementById('confirmsent').style.transform = 'translateY(-100px)';
    document.getElementById('confirmsent').style.opacity = 0;
    setTimeout(() => {
        document.getElementById('confirmsent').style.display = "none";
    }, "0600");
     
}

AOS.init();