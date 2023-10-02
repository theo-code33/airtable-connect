const core = require('@actions/core');
const github = require('@actions/github');

const createRelease = async () => {
  try {
    const version = core.getInput('version');
    const token = core.getInput('token');

    if(!version) core.setFailed("No version provided");
    if(!token) core.setFailed("No token provided");

    const { context } = github;
    
    const octokit = github.getOctokit(token);
    await octokit.rest.repos.createRelease({
      owner: context.payload.repository.owner.login,
      repo: context.payload.repository.full_name.split("/")[1],
      tag_name: version,
      tag_commitish: context.sha,
      name: version,
      body: `New release ${version} published to NPM.`,
      draft: false,
      prerelease: false,
      generate_release_notes: false,
    })
  } catch (error) {
    core.setFailed(error.message);
  } 
}

createRelease()