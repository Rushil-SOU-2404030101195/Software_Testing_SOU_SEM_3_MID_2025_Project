// ===== REGISTER =====
const registerForm = document.getElementById("registerForm");
if (registerForm) {
  registerForm.addEventListener("submit", function(e) {
    e.preventDefault();
    const user = document.getElementById("regUser").value;
    const pass = document.getElementById("regPass").value;

    localStorage.setItem("username", user);
    localStorage.setItem("password", pass);

    document.getElementById("message").innerText = "✅ Registered successfully!";
    alert("Registration Successful!");
  });
}

// ===== LOGIN =====
const loginForm = document.getElementById("loginForm");
if (loginForm) {
  loginForm.addEventListener("submit", function(e) {
    e.preventDefault();
    const user = document.getElementById("loginUser").value;
    const pass = document.getElementById("loginPass").value;

    const storedUser = localStorage.getItem("username");
    const storedPass = localStorage.getItem("password");

    if (user === storedUser && pass === storedPass) {
      localStorage.setItem("loggedIn", "true");
      document.getElementById("message").innerText = "🎉 Login Successful!";
      setTimeout(() => window.location.href = "Courses.html", 1000);
    } else {
      document.getElementById("message").innerText = "❌ Invalid Credentials!";
      alert("Login Failed! Please check your username and password.");
    }
  });
}

// ===== COURSES =====
function enrollCourse(courseId) {
  localStorage.setItem(courseId, "Enrolled");
  document.getElementById(courseId + "-status").innerText = "Enrolled ✅";
  alert("Course " + courseId + " enrolled successfully!");
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
