document.addEventListener("DOMContentLoaded", function () {
  const skillButtons = document.querySelectorAll(".skill-btn");
  const skillDetails = document.getElementById("skill-details");

  const skillContent = {
    frontend: ["HTML", "CSS", "JavaScript"],
    backend: ["Node.js", "Express", "MongoDB"],
    tools: ["Git", "GitHub", "VS Code"]
  };

  skillDetails.classList.remove("active");
  skillDetails.innerHTML = "";
  skillDetails.dataset.active = "";

  skillButtons.forEach(button => {
    button.addEventListener("click", function (e) {
      e.preventDefault();
      const skillType = this.dataset.skill;

      if (skillDetails.dataset.active === skillType) {
        skillDetails.classList.remove("active");
        skillDetails.innerHTML = "";
        skillDetails.dataset.active = "";
      } else {
        skillDetails.innerHTML = skillContent[skillType]
          .map(item => `<p>${item}</p>`)
          .join("");
        skillDetails.classList.add("active");
        skillDetails.dataset.active = skillType;
      }
    });
  });
});
