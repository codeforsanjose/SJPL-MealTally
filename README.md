
## Background


## How to Run Locally

1. In your terminal, cd into your project folder and clone this repo:
```
$ git clone https://github.com/codeforsanjose/SJPL-MealTally
```

2. Cd into SJPL-MealTally and run `npm install`

3. Switch to the React Skeleton Branch 
```
$ git checkout react-skeleton-frontend
```

4. Install Cordova `sudo npm install -g cordova` and Ionic `sudo npm install -g ionic`

5. Open a new tab in your terminal and start the express server in it:
```
$ MONGODB_URI=<get the uri from a project member> node server.js
```
Replace <> with a mongolab URI -- you can create your own on [mLab](https://mlab.com/) or get one from a project member (NOTE: This can also be set as an environment variable in Node). It just needs a `meals` and a `logs` collection.

6. Generate the bundle.js within /public alongside index.html
```
$ npm run build
```

7. Open `localhost:8080` (or whichever port is specified in the Ionic tab)  to enter from the web app's Home page.
