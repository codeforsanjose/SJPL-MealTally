## Running the web app locally

Clone the project and cd into SJPL-MealTally/server.

You will need to either add a ../../config folder with a MongoLabs URI and an email URI OR create two new environment variables:

**MLABURI** = mongodb://\<dbUser\>:\<dbPassword\>@ds0\<port\>.mlab.com:\<port\>/mealtally

**MAILURI** = smtps://\<emailAddress\>:\<password\>@smtp.gmail.com/?pool=true

NOTE: If you go with the config file option, please make sure to add it to your .gitignore so that your sensitive information is not accidentally posted to github.

`npm install`

`node app`

The app should connect to the database and be running at localhost:3000

