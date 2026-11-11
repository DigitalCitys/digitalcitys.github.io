function addToPersonalProjects(title, description) {
    let project = document.createElement('div');
    project.className = 'project';
    project.innerHTML = `<h4>${title}</h4><p>${description}</p>`;
    document.getElementById('personalProjects').appendChild(project);
}

function addToSchoolProjects(title, description) {
    let project = document.createElement('div');
    project.className = 'project';
    project.innerHTML = `<h4>${title}</h4><p>${description}</p>`;
    document.getElementById('schoolProjects').appendChild(project);
}