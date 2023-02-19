// function to generate markdown for README
function generateMarkdown(data) {

  const githubUsername = data.githubUsername;
  const emailAddress = data.emailAddress;
  const projectName = data.projectName;
  const projectDescription = data.projectDescription;
  const license = data.license;
  const installCommand = data.installCommand;
  const testCommand = data.testCommand;
  const howToUse = data.howToUse;
  const howToContribute = data.howToContribute;

  return `# ${projectName}

`;
}

module.exports = generateMarkdown;
