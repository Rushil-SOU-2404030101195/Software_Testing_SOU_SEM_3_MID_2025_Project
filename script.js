// ===== REGISTER =====
const registerForm = document.getElementById("section-register-div-form");
if (registerForm) {
  registerForm.addEventListener("submit", function(e) {
    e.preventDefault(); // Prevent form submission

    const user = document.getElementById("section-register-div-form-input-username").value;
    const email = document.getElementById("section-register-div-form-input-email").value;
    const pass = document.getElementById("section-register-div-form-input-password").value;
    const confirmPassword = document.getElementById("section-register-div-form-input-confirm-password").value;

    if (!user || !pass || !email || !confirmPassword) {
      document.getElementById("message").innerText = "❌ Please fill all fields!";
      alert("Please fill all fields!");
      return;
    }
    if (pass !== confirmPassword) {
      document.getElementById("message").innerText = "❌ Passwords do not match!";
      alert("Passwords do not match!");
      return;
    }

    localStorage.setItem("username", user);
    localStorage.setItem("password", pass);
    localStorage.setItem("email", email );

    alert("Registration Successful!");
  });
}

// ===== LOGIN =====
const loginForm = document.getElementById("section-login-div-form");
if (loginForm) {
  loginForm.addEventListener("submit", function(e) {
    e.preventDefault();
    const user = document.getElementById("section-login-div-form-input-username").value;
    const pass = document.getElementById("section-login-div-form-input-password").value;
    const email = document.getElementById("section-login-div-form-input-email").value;

    if (!email || !user || !pass) {
      document.getElementById("message").innerText = "Please fill all fields!";
      alert("Please fill all fields!");
      return;
    }

    const storedUser = localStorage.getItem("username");
    const storedEmail = localStorage.getItem("email");
    const storedPass = localStorage.getItem("password");

    if (user === storedUser && email === storedEmail && pass === storedPass) {
      localStorage.setItem("loggedIn", "true");
      setTimeout(() => window.location.href = "Courses.html", 1000);
    } else {
      document.getElementById("message").innerText = "Invalid Credentials!";
      alert("Login Failed! Please check your username or email or password");
    }
  });
}

// ===== COURSES =====
function enrollCourse(courseId) {
  localStorage.setItem(courseId, "Enrolled");
  document.getElementById(courseId + "-status").innerText = "Enrolled";
  alert( courseId + " enrolled successfully!");
}

if (document.getElementById("course-list")) {
  window.onload = function() {
    ["course1", "course2"].forEach(courseId => {
      const status = localStorage.getItem(courseId);
      if (status) {
        document.getElementById(courseId + "-status").innerText = status + " ✅";
      }
    });
  };
}

// // ===== Mark Completed =====
// function markCompleted(courseId) {
//   localStorage.setItem(courseId, "Completed");
//   document.getElementById(courseId + "-dash").innerText = "Completed ✅";
// }
