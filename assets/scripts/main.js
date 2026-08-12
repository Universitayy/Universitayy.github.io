// IMAGE FAIL
document.addEventListener('error', event => {
  const img = event.target;

  if (img.tagName === 'IMG' && !img.dataset.errorHandled) {
    img.dataset.errorHandled = 'true';

    img.src = 'data:image/svg+xml;charset=UTF-8,' + encodeURIComponent(`
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100">
        <rect width="100" height="100" rx="12" fill="#ffffff"/>
        <path d="M50 15 L90 85 H10 Z" fill="#0099ff"/>
        <path d="M50 35 V60" stroke="#ff9900" stroke-width="8" stroke-linecap="round"/>
        <circle cx="50" cy="73" r="4" fill="#ff9900"/>
      </svg>
    `);
  }
}, true);

// Header
document.getElementById("header").innerHTML = `
    <img id="logo" src="/assets/images/logo.png" alt="Logo">
    <h1>Universitayy</h1>
    <a class="button" id="button" href="/">Home</a>
    <a class="button" id="button" href="/about">About</a>
    <div id="account-box">
    <img id="account-icon" src="/logo.png" alt="Account">
    </div>
`
document.getElementById("footer").innerHTML = `
    <h1>Universitayy 2026</h1>
    <p>
    <a href="https://github.com/Universitayy/" target="_blank"><i class="fa-brands fa-github"></i>Github</a>
    |
    <a href="https://camcookie876.github.io/Universitayy" target="_blank"><img id="logo" src="/assets/images/logo.png" alt="Logo">Camcookie</a>
    </p>
    <p>Universitayy 2026 by Camcookie</p>
    <hr>
    <p><img id="logo" src="/assets/images/logo.png" alt="Logo"> © Camcookie. All rights reserved.</p>
    <p><i class="fa-brands fa-font-awesome"></i> Icons © Font Awesome. All rights reserved.</p>
`;

// USER ICON+
document.getElementById("account-icon").outerHTML =
    '<a id="account-icon" href="/universitayy/log_in"><i class="fa-solid fa-user"></i></a>';
document.getElementById("account-icon").href = "/auth/";


