
## Running the web app locally

1. In your terminal, cd into your project folder and clone this repo and navigate to correct branch:
```
$ git clone https://github.com/codeforsanjose/SJPL-MealTally
$ git checkout react-meal-tally
```

2. cd into SJPL-MealTally and run `npm install`

3. Run the command `npm run build`

5. Setup MongoDB local db instance `node config/setup_local_db.js` or talk to project team for instructions to get test data

6. Copy example.projectInfoData.json to projectInfoData.json and edit it so that localURL points to your local MongoDB (usually 127.0.0.1:27017)

7. Start the web app in another tab: `node server.js`

8. Open `localhost:8080` to enter from the web app's Home page.


[![Stories in Ready](https://badge.waffle.io/codeforsanjose/SJPL-MealTally.png?label=ready&title=Ready)](https://waffle.io/codeforsanjose/SJPL-MealTally)
## Background

The San Jose Public Library runs a [summer program](https://www.sjpl.org/summerfood) where they provide three meals a day + snacks to children at seven of their branches. The meals come from the YMCA, and left over meals can be served to adults, but the library must pay the YMCA for any meals that don't go to a child.

Because of the above restriction, the library must keep diligent documentation of each meal, and the coordinator sends a weekly report for each library. For the past two summers, a volunteer was needed just for the task of filling out the paperwork at each library at every meal - keeping track of how many new meals were received, left over, how many went to kids, etc. Not only does this mean that the volunteer can't help with other tasks, but it is also creates over 8,000 pages of paperwork per month. Keeping up on the paperwork is a grueling task.

## State of the app

Last October, some friends and I hacked together a software [solution](https://github.com/robeau/SJPL-MealTally) during a 30-hour [hackathon](https://devpost.com/software/togetherly-mealtally). We have since delivered the mobile and web app to the library, but since this was a quick hack, there are still some tasks that need to be taken care of before the meal program starts back up in May. I am currently the only developer still working with them on the web portion of the project, and my time is limited, plus this seems like a great project for CfSJ to be involved in as it benefits our public libraries. See open issues for a list of current tasks.

### Dashboard
1. Work in progress
The dashboard allows the meal coordinator to keep an eye on meal trends at each library. (NOTE: Not yet connected with the current database schema)
![dashboard screenshot](https://raw.githubusercontent.com/codeforsanjose/SJPL-MealTally/master/assets/dashboard.png)

### Mobile Web App

This is the current UI to add meals, record logs and generate pdf reports.
![](https://raw.githubusercontent.com/wiki/codeforsanjose/SJPL-MealTally/images/home-log-report.png)

##### Meal Tally App
1. The volunteer selects the library name and the meal type (e.g. Lunch) on the `Meal Info` card. Date is also customizable; default value is current time in timezone -07:00.
2. The total received meals is logged on the `Inventory` card.
3. As program attendees enter the meal line, increments are made for each person on the `Categories` card.
4. After the meal line stops in its entirety, the leftover meals are input on the `Inventory` card.
5. A signature such as one's full name is input on the `User Info` card; the meal tallies can then be pushed to the database by clicking "ADD MEAL".
6. Click the "RESET COUNTS" button to clear all categories tallies (NOTE: Careful not to accidentally press this instead of "ADD MEAL" #32)

##### Profile
1. Editing the volunteer's profile

##### Report
1. The start and date range can be selected (NOTE: End range is exclusive, so to get today increase the date end by one day #29).
2. Click "GET MEAL REPORT" to preview a list of cards each with a unique:
  - library name
  - meal type
  - category totals
3. A new card appears at the bottom of the Report tab. Type an output PDF file name and click "SAVE PDF" to download the report.

See [the live Heroku demo](https://mealtally-server.herokuapp.com); read [this wiki article](https://github.com/codeforsanjose/SJPL-MealTally/wiki/Proof-of-concept-for-modern-web-app) for development details.
