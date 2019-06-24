This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment

This section has moved here: https://facebook.github.io/create-react-app/docs/deployment

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify


**Build pipeline**
-------------------------
There are two different pipelines available to deploy the build to the test.europepmc.org 

### 1. GitLAB build pipeline
   This pipeline is mainly responsible to Lint the code and run the Unit tests whenever there's a `Git Push` to any branch. It's mainly taken care the `VueJs` components and does not touch the wicket components at all.
    
### 2. Jenkins pipeline
   This pipeline build both `VueJs and Wicket` components in case there is a new `Git Push` to the `dev` branch and it's scheduled to run every 30 minutes. However, the latest code will be in 2 different places (GitLab & Git)
  
### What are the build steps in GitLAB
	- install_npm_modules
	- run_unit_tests   
	- trigger_jenkins_build [Trigger the deployment to the testing server]

### What are the build steps in GitLAB?
     - 01-REDESIGN-GITLAB-CODE-CHECKOUT [Checkout the latest code from the `dev` branch]
     - 02-REDESIGN-BUILD-DEPLOY [Deploy to both Testing servers]
     - 03-REDESIGN-SANITY-TEST
   
### What will happen if I commit to a feature/personal branch?**
	 The pipeline run only the below steps and there won't be any deployment to the testing server.
      -install_npm_modules
	  -run_unit_tests     
  
### What will happen if I commit to a `dev` branch?
    The pipeline run only the below steps and deployment is based on the schedule time (which is every 30 minutes).
	 -install_npm_modules
	 -run_unit_tests 
	 -trigger_jenkins_build (as per the schedule)
  
### What will happen if I commit to a `master` branch?
   The pipeline run only the below steps and deployment is the manual trigger.
	 -install_npm_modules
	 -run_unit_tests 
	 -trigger_jenkins_build (manual trigger)  
  
Though the preferred job's schedule is every 30 minutes, to avoid the frequent deployment from multiple developers, the GitLab currently supports the minimum frequency 1 hour due to an open bug.
 
https://gitlab.com/gitlab-org/gitlab-ce/issues/58148
