let project = document.getElementsByClassName("project")
let slideIndex = 1

showProject(slideIndex);

function showProject(num) {
    if (num >project.length) {
        slideIndex = 1;
    }
    // go to last project 
    if (num < 1) {
        slideIndex = project.length;
    }
    // for loop to hide a ll the projects
    for (let i = 0; i < project.length; i ++) {
        project[i].style.display = "none"
    }
    project[slideIndex - 1].style.display = "flex"
}

function navigateProject(num) {
    // change the slideIndex based on back or forward arrow
    showProject((slideIndex += num))
}

