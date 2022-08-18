async function loginFormHandler(event){
    event.preventDefault();
    //log in
    const password = document.querySelector('#password-login').value.trim();
    const email = document.querySelector('#email-login').value.trim();
    if (email && password) {
      const response = await fetch('/api/users/login', {
        method: 'post',
        body:JSON.stringify({
          email,
          password
        }),
        headers: { 'Content-Type': 'Application/json' }
      });
    }
}
document.querySelector('.login-form').addEventListener('submit', loginFormHandler);
