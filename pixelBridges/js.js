// --------------------explore--------------
const show = ()=>{
    document.getElementById("Explore_Data").style.display= "block"
}
const hide = ()=>{
    document.getElementById("Explore_Data").style.display= "none"
}
// ----------------blog-----------------------------------

const SHOW = ()=>{
    document.getElementById('BlogDropDown').style.display="block"
}
const HIDE = ()=>{
    document.getElementById('BlogDropDown').style.display="none"
}

// --------------------------------------------------------------

function registerUser(email, password) {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const emailTaken = users.some(user => user.email === email);
    if (emailTaken) {
      alert('Email is already taken. Please use a different email.');
      return 0;
    }else{
    users.push({ email, password });
    localStorage.setItem('users', JSON.stringify(users));
    return 1;
    }
  }



  // -----------------register-----------------------
  document.getElementById('registrationForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const regEmail = document.getElementById('regEmail').value;
    const regPassword = document.getElementById('regPassword').value;
    const reg_con_pass = document.getElementById('con_reg_pass').value;

    if(regPassword ==reg_con_pass){
    let one = registerUser(regEmail, regPassword);
        if(one)
        alert('User registered successfully.');
    window.location.href = "Login.html"
    }
    else{
        alert("invalid password")
    }
  });

 