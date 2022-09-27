import * as core from '@actions/core';
import * as github from '@actions/github';

const GITHUB_TOKEN = core.getInput('GITHUB_TOKEN', {
  required: true,
});

const octokit = github.getOctokit(GITHUB_TOKEN);

const run = async () => {
  try {

  } catch (error) {
    core.setFailed(error.message)
  }
};  

run().catch((e: Error) => {
  core.setFailed(e);
});