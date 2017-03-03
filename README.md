Meal Tally is an android and web application that has been created as part of a hackathon for the non profit organization - San Jose Public Library. The SJ Public library runs a meal program to feed children and adults who cannot afford a healthy meal.

This app helps reduce the paper work involved in the process for the volunteering staff at San Jose Public Library and also enables them to easily track and share the data related to meals served with different venors and authorities.


<img src=Photo1.png width=300 height=500 /> <img src=Photo2.png width=300 height=500 />

## Running the web app locally

Clone the project and cd into SJPL-MealTally/server.

You will need to either add a ../../config folder with a MongoLabs URI and an email URI OR create two new environment variables:

**MLABURI** = mongodb://\<dbUser\>:\<dbPassword\>@ds0\<port\>.mlab.com:\<port\>/mealtally

**MAILURI** = smtps://\<emailAddress\>:\<password\>@smtp.gmail.com/?pool=true

NOTE: If you go with the config file option, please make sure to add it to your .gitignore so that your sensitive information is not accidentally posted to github.

`npm install`

`node app`

The app should connect to the database and be running at localhost:3000

