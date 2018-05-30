
## How to Run Locally
1. In your terminal, cd into your project folder and clone this repo:
```
$ git clone https://github.com/codeforsanjose/SJPL-MealTally
```
2. Checkout skeleton branch.
``` 
$ git checkout react-skeleton-frontend
```
3. Cd into SJPL-MealTally and run `npm install`


4. Open a new tab in your terminal and start the express server in it:
```
$ MONGODB_URI=<get the uri from a project member> node server.js
```
Replace <> with a mongolab URI -- you can create your own on [mLab](https://mlab.com/) or get one from a project member (NOTE: This can also be set as an environment variable in Node).

5. Start the web app in another tab:

6. Generate the bundle.js within /public alongside index.html
```
$ npm run build
```

7. Open `localhost:8080` (or whichever port is specified in the Ionic tab)  to enter from the web app's Home page.
