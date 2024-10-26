1. Events can be triggered by many actions including Pull Requests , Push Requests , Issues. Events trigger worflow which has multiple jobs 

Making First workflow
1. First create a .github folder inside it , make another folder called workflows
2. Then make a new .yaml file


name: GitHub Actions Demo   // Name of the workflow

on: [push]    // On which actions this should trigger

on: 
    push:
        branches:
            -main
    pull_request:
        branches
            -main


jobs:
    hello:
        runs_on : ubuntu_latest
        steps:
            uses: actions/checkout@v2
            


3. You can also create workflow on issues

on :
    issues:
        types:[opened]


jobs:
    comment-on-actions:
        runs_on:ubuntu_latest



4. For using enviroment variables go to your repository , then to security and variables and go to actions and add new repository secret

env:
    NAME_ENV : ${{ secrets.NAME_ENV}}










jobs:
  Explore-GitHub-Actions:
    runs-on: ubuntu-latest
    steps:
      - run: echo "🎉 The job was automatically triggered by a ${{ github.event_name }} event."
      - run: echo "🐧 This job is now running on a ${{ runner.os }} server hosted by GitHub!"
      - run: echo "🔎 The name of your branch is ${{ github.ref }} and your repository is ${{ github.repository }}."
      - name: Check out repository code
        uses: actions/checkout@v4
      - run: echo "💡 The ${{ github.repository }} repository has been cloned to the runner."
      - run: echo "🖥️ The workflow is now ready to test your code on the runner."
      - name: List files in the repository
        run: |
          ls ${{ github.workspace }}
      - run: echo "🍏 This job's status is ${{ job.status }}."
