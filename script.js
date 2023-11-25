document.getElementById("currentYear").innerHTML = new Date().getFullYear();

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("formulaire");

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document.getElementById("inputName").value;
    const email = document.getElementById("inputMail").value;
    const message = document.getElementById("inputMessage").value;

    alert(`${name} 
          ${email}
          ${message}`);
  });
});
