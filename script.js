document.addEventListener("DOMContentLoaded", function () {
    const signInBtn = document.getElementById("signInBtn");
    const signUpBtn = document.getElementById("signUpBtn");
    const formTitle = document.getElementById("formTitle");
    const form = document.getElementById("form");
    const rememberMe = document.getElementById("rememberMe");

    signInBtn.addEventListener("click", () => {
        formTitle.textContent = "Sign In";
        form.innerHTML = `
            <div class="input-container">
                <input type="email" placeholder="Email" required>
                <span class="icon">✉️</span>
            </div>
            <div class="input-container">
                <input type="password" placeholder="Password" required>
                <span class="icon">🔒</span>
            </div>
            <div class="remember-me" id="rememberMe">
                <input type="checkbox" id="remember">
                <label for="remember">Remember me</label>
            </div>
            <button type="submit" class="submit-btn">Sign In →</button>
        `;
        signInBtn.classList.add("active");
        signUpBtn.classList.remove("active");
    });

    signUpBtn.addEventListener("click", () => {
        formTitle.textContent = "Sign Up";
        form.innerHTML = `
            <div class="input-container">
                <input type="email" placeholder="Email" required>
                <span class="icon">✉️</span>
            </div>
            <div class="input-container">
                <input type="text" placeholder="Username" required>
                <span class="icon">👤</span>
            </div>
            <div class="input-container">
                <input type="password" placeholder="Password" required>
                <span class="icon">🔒</span>
            </div>
            <button type="submit" class="submit-btn">Sign Up →</button>
        `;
        signUpBtn.classList.add("active");
        signInBtn.classList.remove("active");
    });
});
