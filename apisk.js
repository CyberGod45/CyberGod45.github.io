const apiURL = 'https://api.github.com/users/CyberGod45/repos'; // Replace 'yourusername' with your GitHub username

// Fetch data from your API
fetch(apiURL)
    .then(response => response.json())
    .then(data => {
        // Get the projects section
        const projectsSection = document.querySelector('#projects');

        // Loop through the data and create HTML for each project
        data.forEach(project => {
            // Create a new div for the project
            const projectDiv = document.createElement('div');

            // Create HTML for the project
            const projectHTML = `
                <h3>${project.name}</h3>
                <p>${project.description}</p>
            `;

            // Add the HTML to the div
            projectDiv.innerHTML = projectHTML;

            // Add the div to the projects section
            projectsSection.appendChild(projectDiv);
        });
    })
    .catch(error => {
        console.error('Error:', error);
    });
