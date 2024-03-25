// Function to render license badge
function renderLicenseBadge(license) {
  if (license) {
      return `![License](https://img.shields.io/badge/License-${license}-blue.svg)`;
  } else {
      return '';
  }
}

// Function to render license link
function renderLicenseLink(license) {
  if (license) {
      return `[License](#license)`;
  } else {
      return '';
  }
}

// Function to render license section of README
function renderLicenseSection(license) {
  if (license) {
      return `## License

This project is licensed under the ${license} license. See the [LICENSE](LICENSE) file for details.`;
  } else {
      return '';
  }
}

// Function to generate markdown for README
function generateMarkdown(data) {
  const licenseBadge = renderLicenseBadge(data.license);
  const licenseLink = renderLicenseLink(data.license);
  const licenseSection = renderLicenseSection(data.license);

  return `# ${data.title}

${licenseBadge}

## Description

${data.description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)
${licenseLink}

## Installation

${data.installation}

## Usage

${data.usage}

## Contributing

${data.contributing}

## Tests

${data.tests}

## Questions

For questions about this project, please visit my GitHub [profile](https://github.com/${data.githubUsername}).

${licenseSection}
`;
}

module.exports = generateMarkdown;

