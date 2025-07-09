function loginvalidation() {
    const username = document.getElementById("username").value.trim();
    const password = document.getElementById("password").value.trim();
    const loginError = document.getElementById("login-error");
  
    loginError.textContent = "";
    loginError.style.display = "none";
  
    if (username !== "t" || password !== "l") {
      loginError.textContent = "Invalid credentials";
      loginError.style.color = "red";
      loginError.style.display = "block";
      return false;
    }
  
    loginError.textContent = "Login successful!";
    loginError.style.color = "green";
    loginError.style.display = "block";
  
  
    setTimeout(() => {
      window.location.href = "index.html";
    }, 1000);
  
    return false; 
  }