# Week 3 — Decentralized Authentication

## Provision Cognito User Group

Using the AWS Console we'll create a Cognito User Group

## Configure AWS Amplify

Import amplify add add cognito details into the `app.js` under `frontend-react-js/src/`

```js
import { Amplify } from 'aws-amplify';

Amplify.configure({
  "AWS_PROJECT_REGION": process.env.REACT_APP_AWS_PROJECT_REGION,
  "aws_cognito_region": process.env.REACT_APP_AWS_COGNITO_REGION,
  "aws_user_pools_id": process.env.REACT_APP_AWS_USER_POOLS_ID,
  "aws_user_pools_web_client_id": process.env.REACT_APP_CLIENT_ID,
  "oauth": {},
  Auth: {
    region: process.env.REACT_APP_AWS_PROJECT_REGION,
    userPoolId: process.env.REACT_APP_AWS_USER_POOLS_ID,
    userPoolWebClientId: process.env.REACT_APP_CLIENT_ID,
  }
});
```

## Conditionally show components based on logged in or logged out

Add the following code into the `HomeFeedPage.js` under `frontend-react-js/src/pages`

```js
import { Auth } from 'aws-amplify';


// replace line 40-49 `const checkAuth` with the following code to check whether user is authenticated or not
const checkAuth = async () => {
  Auth.currentAuthenticatedUser({
    // Optional, By default is false. 
    // If set to true, this call will send a 
    // request to Cognito to get the latest user data
    bypassCache: false 
  })
  .then((user) => {
    console.log('user',user);
    return Auth.currentAuthenticatedUser()
  }).then((cognito_user) => {
      setUser({
        display_name: cognito_user.attributes.name,
        handle: cognito_user.attributes.preferred_username
      })
  })
  .catch((err) => console.log(err));
};
```

Add the following code into the `ProfileInfo.js` under `frontend-react-js/src/components`

```js
// comment out or delete `import Cookies from 'js-cookie'` 
// import Cookies from 'js-cookie'
import { Auth } from 'aws-amplify';

// replace line 14-26 `const signOut` with the following code
const signOut = async () => {
  try {
      await Auth.signOut({ global: true });
      window.location.href = "/"
  } catch (error) {
      console.log('error signing out: ', error);
  }
}
```

## Update Sign In Page

Add the following code into the `SigninPage.js` under `frontend-react-js/src/pages`

```js
// comment out or delete `import Cookies from 'js-cookie'` 
// import Cookies from 'js-cookie'
import { Auth } from 'aws-amplify';

// replace line 15-26 `const onsubmit` with the following code
const onsubmit = async (event) => {
  setErrors('')
  event.preventDefault();
  try {
    Auth.signIn(username, password)
      .then(user => {
        localStorage.setItem("access_token", user.signInUserSession.accessToken.jwtToken)
        window.location.href = "/"
      })
      .catch(err => { console.log('Error!', err) });
  } catch (error) {
    if (error.code == 'UserNotConfirmedException') {
      window.location.href = "/confirm"
    }
    setCognitoErrors(error.message)
  }
  return false
}
```

Add the following Env Var to `frontend-react-js:` under section `environment:` in `docker-compose.yml` file

```yml
      REACT_APP_AWS_PROJECT_REGION: "${AWS_DEFAULT_REGION}"
      REACT_APP_AWS_COGNITO_REGION: "${AWS_DEFAULT_REGION}"
      REACT_APP_AWS_USER_POOLS_ID: "${REACT_APP_AWS_USER_POOLS_ID}"
      REACT_APP_CLIENT_ID: "${REACT_APP_CLIENT_ID}"
```


## Install AWS Amplify library

```sh
cd frontend-react-js
npm install aws-amplify --save
npm install

export AWS_ACCESS_KEY_ID="keyid"
export AWS_SECRET_ACCESS_KEY="secretkey"
export AWS_DEFAULT_REGION="ap-southeast-2"
export REACT_APP_AWS_USER_POOLS_ID="AWS Cognito User Pool ID"
export REACT_APP_CLIENT_ID="AWS Cognito Client ID"

gp env AWS_ACCESS_KEY_ID="keyid"
gp env AWS_SECRET_ACCESS_KEY="secretkey"
gp env AWS_DEFAULT_REGION="ap-southeast-2"
gp env REACT_APP_AWS_USER_POOLS_ID="AWS Cognito User Pool ID"
gp env REACT_APP_CLIENT_ID="AWS Cognito Client ID"

docker compose -f "docker-compose.yml" up -d --build
```