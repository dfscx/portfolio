async function getGitHubRepos() {
    const username = 'dfscx';
    const response = await fetch(`https://api.github.com/users/${username}/repos`);
    const repos = await response.json();
    return repos;
}

getGitHubRepos().then(repository => {
    const projectSection = document.getElementById('projects');
    const limitedRepos = repository.slice(0, 6); // Limita a 6 repositórios
    for (const repo of limitedRepos) {
        const projectDiv = document.createElement('div');
        projectDiv.classList.add('project');

        const projectName = document.createElement('h3');
        projectName.textContent = repo.full_name;

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
