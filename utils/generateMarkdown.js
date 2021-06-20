// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

function renderLicenseBadge(license) {
  if (license !== 'none') {
    return `![GitHub license](https://img.shields.io/badge/license-${license}-blue.svg)`
  }
  return ""
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  if (license !== 'none') {
    return `\n* [MIT License](LICENSE.txt)\n`
  }
  return ""
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'none') {
    return `This project is licensed under: `
  }
  return ""
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
  ## Description 
    ${data.description}

  ## Table of Content 
   1. [Description](#Description)
   2. [Installation](#Installation)
   3. [Usage](#Usage)
   4. [Test](#Test)
   5. [Credit](#Credit)
   6. [Questions](#Questions?)
   7. [License](#Licensing)

  ## Installation 
    ${data.install}

  ## Usage 
    ${data.usage}

  ## Test 
  ${data.test}

  ## Credit 
    ${data.credit}

  ## Questions? You can reach me at:
  - Github: ${data.queGithub}
  - Email: ${data.queEmail}

  ## Licensing
  ${renderLicenseSection(data.license)} ${renderLicenseLink(data.license)}
  ${renderLicenseBadge(data.license)}
`;
}

module.exports = generateMarkdown;
