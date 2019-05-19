// get data

// listen for auth status changes

auth.onAuthStateChanged(user => {

    if (user) {
        db.collection('guides').onSnapshot(snapshot => {
            setupGuides(snapshot.docs);
            setupUI(user);
          }).catch(err => {
              console.log(err.message)
          });
    } else {
        setupUI();
    setupGuides([]);
    }
  })

  

// create new Resume

    const createForm = document.querySelector('#create-form');
    createForm.addEventListener('submit', (e) => {
    e.preventDefault();
    db.collection('guides').add({
        title: createForm['title'].value,
        content1: createForm['content1'].value,
        content2: createForm['content2'].value,
        content3: createForm['content3'].value,
        content4: createForm['content4'].value,
        content5: createForm['content5'].value,
        content6: createForm['content6'].value,
        content7: createForm['content7'].value
    }).then(() => {
        // close the create modal & reset form
        const modal = document.querySelector('#modal-create');
        M.Modal.getInstance(modal).close();
        createForm.reset();
    }).catch(err => {
        console.log(err.message);
    });
    });
// signup
const signupForm = document.querySelector('#signup-form');
signupForm.addEventListener('submit', (e) => {
  e.preventDefault();
  // get user info
  const email = signupForm['signup-email'].value;
  const password = signupForm['signup-password'].value;
  // sign up the user
  auth.createUserWithEmailAndPassword(email, password).then(cred => {
    // close the signup modal & reset form
    const modal = document.querySelector('#modal-signup');
    M.Modal.getInstance(modal).close();
    signupForm.reset();
  });
});
// logout
const logout = document.querySelector('#logout');
logout.addEventListener('click', (e) => {
  e.preventDefault();
  auth.signOut();
});
// login
const loginForm = document.querySelector('#login-form');
loginForm.addEventListener('submit', (e) => {
  e.preventDefault();
  // get user info
  const email = loginForm['login-email'].value;
  const password = loginForm['login-password'].value;
  // log the user in
  auth.signInWithEmailAndPassword(email, password).then((cred) => {
    // close the signup modal & reset form
    const modal = document.querySelector('#modal-login');
    M.Modal.getInstance(modal).close();
    loginForm.reset();
  });
});