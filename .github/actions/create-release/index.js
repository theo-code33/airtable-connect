const core = require('@actions/core');
const github = require('@actions/github');

const generateNewRelease = async () => {
  try {
    const version = core.getInput('version');
    const token = core.getInput('token');
    const context = github.context;
    console.log(`version: ${version}`)
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

generateNewRelease()