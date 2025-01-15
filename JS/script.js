async function getGitHubRepos() {
    const username = 'dfscx';
    const response = await fetch(`https://api.github.com/users/${username}/repos`);
    const repos = await response.json();
    return repos;
}

getGitHubRepos().then(repository => {
    const projectSection = document.getElementById('project');
    for (const repo of repository) {
        projectSection.style.display = 'flex';
        projectSection.style.flexWrap = 'wrap';
        projectSection.style.justifyContent = 'space-around';
        projectSection.style.alignItems = 'center';

        const projectDiv = document.createElement('div');
        projectDiv.classList.add('project');

        projectDiv.style.width = '25%';
        projectDiv.style.height = '160px';

        projectDiv.style.padding = '10px';

        projectDiv.style.border =  '2px, solid, #836FFF';
        projectDiv.style.borderRadius = '15px';
        
        projectDiv.style.display = 'flex';
        projectDiv.style.flexDirection = 'column';
        projectDiv.style.justifyContent = 'space-around';
        projectDiv.style.alignItems = 'center';

        const projectName = document.createElement('h3');
        projectName.textContent = repo.name;

        const projectUrl = document.createElement('a');
        projectUrl.href = repo.html_url;
        projectUrl.textContent = 'Ver Projeto';
        projectUrl.target = '_blank';

        const projectDescription = document.createElement('p');
        projectDescription.textContent = repo.description;

        projectDiv.appendChild(projectName);
        projectDiv.appendChild(projectUrl);
        projectDiv.appendChild(projectDescription);

        projectSection.appendChild(projectDiv);
    }
});

document.getElementById('scrollToTop').addEventListener('click', function() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});
