/*  */
var tablinks = document.getElementsByClassName("tab__links");
var tabcontents = document.getElementsByClassName("tab__contents");

function openTap(tabName){
    for(tablinks of tablinks){
        tablinks.classList.remove("active__links");
    }
    for(tabcontents of tabcontents){
        tabcontents.classList.remove("active__tab");
    }
    event.currentTarget.classList.add("active__links");
    document.getElementById(tabName).classList.add("active__tab");
}

var websiteSideMenu  = document.getElementById("websiteMenu");
function openMenu(){
    websiteSideMenu.style.right = "0";
}
function closeMenu(){
    websiteSideMenu.style.right = "-200px";
}

/*============ Contact form link =============== */
const scriptURL = 'https://script.google.com/macros/s/AKfycbxQF_aFzJgCBwGs6XE2Srsabk8sfKNZrNW7ntol2-rUHa5zlXyKv58Mz5VbM6PTYhfBVg/exec'
  const form = document.forms['submit-to-google-sheet']
  const myMesssage = document.getElementById("mgs")
  form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
      .then(response => {
        msg.innerHTML = "Your message has been sent successfully"
        setTimeout(function(){
            msg.innerHTML = ""
        },5000)
        form.reset()
      })
      .catch(error => console.error('Error!', error.message))
  });


