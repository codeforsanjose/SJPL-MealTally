
[![Stories in Ready](https://badge.waffle.io/codeforsanjose/SJPL-MealTally.png?label=ready&title=Ready)](https://waffle.io/codeforsanjose/SJPL-MealTally)
## Background

The San Jose Public Library runs a [summer program](https://www.sjpl.org/summerfood) where they provide three meals a day + snacks to children at seven of their branches. The meals come from the YMCA, and left over meals can be served to adults, but the library must pay the YMCA for any meals that don't go to a child.

Because of the above restriction, the library must keep diligent documentation of each meal, and the coordinator sends a weekly report for each library. For the past two summers, a volunteer was needed just for the task of filling out the paperwork at each library at every meal - keeping track of how many new meals were received, left over, how many went to kids, etc. Not only does this mean that the volunteer can't help with other tasks, but it is also creates over 8,000 pages of paperwork per month. Keeping up on the paperwork is a grueling task.

## State of the app

Last October, some friends and I hacked together a software [solution](https://github.com/robeau/SJPL-MealTally) during a 30-hour [hackathon](https://devpost.com/software/togetherly-mealtally). We have since delivered the mobile and web app to the library, but since this was a quick hack, there are still some tasks that need to be taken care of before the meal program starts back up in May. I am currently the only developer still working with them on the web portion of the project, and my time is limited, plus this seems like a great project for CfSJ to be involved in as it benefits our public libraries. See open issues for a list of current tasks.

### Dashboard

The dashboard allows the meal coordinator to keep an eye on meal trends at each library.
![dashboard screenshot](https://raw.githubusercontent.com/codeforsanjose/SJPL-MealTally/master/assets/dashboard.png)

### Mobile Web App

This is the current UI to add meals, record logs and generate pdf reports.
![](https://raw.githubusercontent.com/wiki/codeforsanjose/SJPL-MealTally/images/home-log-report.png)

Before each meal, the volunteer selects the library and enters some information.

During the meal, the volunteer adds each meal as it is served by tapping the relevant button.

See [the live Heroku demo](https://sjpl-meal-tally.herokuapp.com); read [this wiki article](https://github.com/codeforsanjose/SJPL-MealTally/wiki/Proof-of-concept-for-modern-web-app) for development details.

## Running the web app locally

**NOTE: These instructions still need an update as a result of pull request, [Update to modern web app.](https://github.com/codeforsanjose/SJPL-MealTally/pull/16)**

1. Clone the project and cd into SJPL-MealTally/server.
2. You will need to either:
  * Add these variables with a MongoLabs URI and an email URI into a `server/config/index.json` file.
    - **MLABURI** = `mongodb://\<dbUser\>:\<dbPassword\>@ds0\<port\>.mlab.com:\<port\>/mealtally`
    - **MAILURI** = `smtps://\<emailAddress\>:\<password\>@smtp.gmail.com/?pool=true`
      * If you're using Gmail, you will have to change some settings - you'll get an email about it the first time you try to run the app with your URI)
  * OR add those same variables as environmental variables.

3. `DocumentRoot\SJPL-MealTally\server>npm install`

4. `DocumentRoot\SJPL-MealTally\server>node app`

The app should connect to the database and be running at http://localhost:3000.
