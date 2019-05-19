
// DOM elements


const guideList = document.querySelector('.guides');
const loggedOutLinks = document.querySelectorAll('.logged-out');
const loggedInLinks = document.querySelectorAll('.logged-in');
const accountDetails = document.querySelector('.account-details');

const setupUI = (user) => {
  if (user) {
      // account info
      const html = `
      <div>Logged in as ${user.email} </div>
      `;
      accountDetails.innerHTML = html;
    // toggle user UI elements
    loggedInLinks.forEach(item => item.style.display = 'block');
    loggedOutLinks.forEach(item => item.style.display = 'none');
  } else {
      // hide account info
      accountDetails.innerHTML = '';
    // toggle user elements
    loggedInLinks.forEach(item => item.style.display = 'none');
    loggedOutLinks.forEach(item => item.style.display = 'block');
  }
};
// setup guides

const setupGuides = (data) => {
    if(data.length){ 
 let html = '';
  data.forEach(doc => {
    const guide = doc.data();
    const li = `
      <li>
        <div class="collapsible-header grey lighten-4"> ${guide.title} </div>
        <div class="collapsible-body white">Fullname: ${guide.content1} </div>
        <div class="collapsible-body white">Location: ${guide.content2} </div>
        <div class="collapsible-body white">Email ${guide.content3} </div>
        <div class="collapsible-body white">Full Name ${guide.content4} </div>
        <div class="collapsible-body white">Full Name ${guide.content5} </div>
        <div class="collapsible-body white">Full Name ${guide.content6} </div>
        <div class="collapsible-body white">Full Name ${guide.content7} </div>
      </li>
    `;
    html += li;
  });
  guideList.innerHTML = html
}else {
    guideList.innerHTML= '<h5 class="center-align">log in to create Resume</h5>'
}
};
// setup materialize components
document.addEventListener('DOMContentLoaded', function() {

    var modals = document.querySelectorAll('.modal');
    M.Modal.init(modals);
    var items = document.querySelectorAll('.collapsible');
    M.Collapsible.init(items);
  });

  // print function
  
function printDiv(divName) {
    var printContents = document.getElementById(divName).innerHTML;
    var originalContents = document.body.innerHTML;

    document.body.innerHTML = printContents;

    window.print();

    document.body.innerHTML = originalContents;
}