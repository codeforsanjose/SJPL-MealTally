## Running the web app locally

Clone the project and cd into SJPL-MealTally/server.

You will need to either add a ../../config folder with a MongoLabs URI and an email URI OR create two new environment variables:

**MLABURI** = mongodb://\<dbUser\>:\<dbPassword\>@ds0\<port\>.mlab.com:\<port\>/mealtally

**MAILURI** = smtps://\<emailAddress\>:\<password\>@smtp.gmail.com/?pool=true (if you're using gmail, you will have to change some settings - you'll get an email about it the first time you try to run the app with your URI)

NOTE: If you go with the config file option, please make sure to add it to your .gitignore so that your sensitive information is not accidentally posted to github.

`DocumentRoot\SJPL-MealTally\server>npm install`

`DocumentRoot\SJPL-MealTally\server>node app`

The app should connect to the database and be running at localhost:3000

