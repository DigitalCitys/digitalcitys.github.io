function buildHead() {
    document.head.insertAdjacentHTML('beforeend', 
        `
        <title>Giulia Spier | Software Engineer</title>
        <link rel="stylesheet" href="styles.css">
        `
    );
}

function buildStartOfSite()
{
    let section = document.createElement('section');
    section.innerHTML =
    `
        <h1>👩‍💻 Giulia Spier | Software Engineer 👩‍💻</h1>
        <nav>
            <ul>
                <li><a href="index.html"><button>🪪 About</button></a></li>
                <li><a href="skills.html"><button>🌟 Skills</button></a></li>
                <li><a href="portfolio.html"><button>📂 Portfolio</button></a></li>
            </ul>
        </nav>
    `
    document.body.appendChild(section);
}

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

function addSkill(name, imgPath)
{
    let skill = document.createElement('li');
    skill.innerHTML =
    `
        <img src="${imgPath}" alt="${name}" style="width: 4em; height: 4em;">
        ${name}
    `
    document.getElementById('programmingLanguages').appendChild(skill);
}