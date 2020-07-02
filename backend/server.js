// express simplifies a lot of stuff (like our routing) 
const express = require("express")
const app = express()
const port = 3000

// body-parser allows us to read the body of post requests
const bodyParser = require("body-parser")
app.use(bodyParser.urlencoded({ extended: true }))

//! POST Requests for Pre-Draft-Start
// Route is fired whenever the administrator changes the filters object 
app.post("/admin_change_config", function(req, res) {

})

//! POST Requests for Pool Generation Phase
// Route is fired whenever the user toggles their ready button 
app.post("/player_toggle_ready", function(req, res) {

})

// Route is fired whenever the user toggles their uniban button 
app.post("/player_toggle_uniban", function(req, res) {

})

// Route is fired whenever the user toggles their ban button 
app.post("/player_toggle_ban", function(req, res) {

})

//! POST Requests for Research Phase
// No POST requests for this outside of ready toggling, which is handled in another section.

//! POST Requests for Draft Phase
// Route is fired when a user selects a pokemon. Only actually does anything if it's their turn.
app.post("/player_select_pokemon", function(req, res) {

}) 

//! POST Requests for Team Building Phase
// No POST requests for this outside of ready toggling, which is handled in another section.

//! POST Requests for Battle Phase
// Route is fired when the administrator inputs which player won the battle

//! GET Requests
// Route is fired whenever the user needs to update the information on their page.
// TODO: First version of this will just return all the data on the page. Make it only return what has changed since the last change, almost like a git commit, to save data. 
// TODO: For first version, use polling, where the front-end basically asks for page updates every half a second.
// TODO: If the minor delay gets annoying, implement sockets here. These somehow communicate with the backend. 
app.get("/page-data", function(req, res) {

})

// TODO: Implement a GET route that lets us modify front-end polling frequency at less real-time parts of the event, like timers.