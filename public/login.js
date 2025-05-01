
      async function login() {
        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        try {
          const response = await fetch("http://localhost:5000/api/login", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password }),
          });
          const data = await response.json();
          if (!response.ok) throw new Error(data.error || "Login failed");
          localStorage.setItem("token", data.token);
          localStorage.removeItem("guestMode");
          localStorage.removeItem("guestPortfolioCount");
          localStorage.removeItem("guestAnalysisCount");
          window.location.href = "/index.html";
        } catch (error) {
          alert("Error: " + error.message);
        }
      }

      function enterGuestMode() {
        localStorage.setItem("guestMode", "true");
        localStorage.setItem("guestPortfolioCount", "0");
        localStorage.setItem("guestAnalysisCount", "0");
        window.location.href = "/index.html";
      }
  