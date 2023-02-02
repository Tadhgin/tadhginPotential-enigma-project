function generateMarkdown(data) {

  let readme = `# ${data.title} by ${data.name}

  ## Description
  ${data.description}


  ## Table of Contents
  *[Installation](#installation)  
  *[Usage](#usage)  
  *[License](#license)  
  *[Badges](#badges)  
  *[Contributing](#contributing)  
  *[Tests](#tests)  
  *[Questions](#questions)  


  ## Installation
  ${data.installation}
  GitHub id: ${data.github}


  ## Usage
  ${data.usage}


  ## License
  ${data.license}  
 

  ## Badges


  ## Contributing
  ${data.contribute}


  ## Tests
  ${data.tests}


  ## Questions
  Email: ${data.email}  
  GitHub: ${data.github}  

  `;

  return readme;
}

module.exports = generateMarkdown;
