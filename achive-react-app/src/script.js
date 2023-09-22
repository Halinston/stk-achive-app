
 /*
const achievements = [];

function addAchievement() {
    const name = document.getElementById("achievement-name").value;
    const progress = document.getElementById("progress").value;
    
    if (name && progress >= 0 && progress <= 100) {
        const achievement = { name, progress };
        achievements.push(achievement);
        displayAchievements();
    }
}

function displayAchievements() {
    const achievementsDiv = document.getElementById("achievements");
    achievementsDiv.innerHTML = "";
    
    achievements.forEach((achievement, index) => {
        const achievementDiv = document.createElement("div");
        achievementDiv.className = "achievement";
        
        const progressBar = document.createElement("div");
        progressBar.className = "progress-bar";
        progressBar.style.width = achievement.progress + "%";
        
        achievementDiv.innerHTML = `${achievement.name} - ${achievement.progress}%`;
        achievementDiv.appendChild(progressBar);
        
        const deleteButton = document.createElement("button");
        deleteButton.innerText = "Delete";
        deleteButton.onclick = () => deleteAchievement(index);
        deleteButton.classList.add("deleteBtn");
        
        achievementDiv.appendChild(deleteButton);
        achievementsDiv.appendChild(achievementDiv);
    });
}

function deleteAchievement(index) {
    achievements.splice(index, 1);
    displayAchievements();
}

// Initial display
displayAchievements();
*/
// Select the image element
function reveal() {
    var reveals = document.querySelectorAll(".reveal");
  
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      var elementVisible = 150;
  
      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  
  window.addEventListener("scroll", reveal);
