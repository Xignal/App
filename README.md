# Xignal App
The Xignal web solution (API and frontend).


## Deployment

The first time you deploy to an Azure Website, it _may_ fail. If so, enable and then run Monaco (Visual Studio Online) and then run npm install from the console. (You can also do this from the Console in the new portal).

Sails.js does a lot of grunt work on startup and the default hook timeout of 20 seconds is not enough. This setting has been overidden in [production.js](src/config/env/production.js) and increased to 60 seconds. Increase further if you get grunt hook timeout errors at startup.
