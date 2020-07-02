// express simplifies a lot of stuff (like our routing) 
const express = require("express")
const app = express()
const port = 3000

// body-parser allows us to read the body of post requests
const bodyParser = require("body-parser")
app.use(bodyParser.urlencoded({ extended: true }))

//! Global Records
// Holds information about the filters that pokemon can be generated from 
const SECONDS_IN_MINUTE = 60
var pool_config = {
    num_pokemon: 18,
    num_unibans: 3, 
    num_individual_bans: 3, 
    allowable_tiers: {
        uber: true, // Ubers
        ou: true, // Overused
        uubl: true, // Underused ban list (i.e. too weak to be ou, too strong to be uu)
        uu: true, // Underused
        ru: true, // Rarely used
        nu: true, // Never used
        ut: true // Untiered 
    }, 
    allowable_generations: {
        gen1: true, 
        gen2: true, 
        gen3: true, 
        gen4: true, 
        gen5: true, 
        gen6: true, 
        gen7: true, 
        gen8: true
    }, 
    times: {
        research_time: 10 * SECONDS_IN_MINUTE,
        draft_pick_time: 2 * SECONDS_IN_MINUTE, 
        teambuilder_time: 40 * SECONDS_IN_MINUTE,
    }
}

//! POST Requests for Pre-Draft-Start
// Route is fired whenever the administrator changes the filters object 
app.post("/admin_change_config", function(req, res) {
    config = req.body.config;
})

//! POST Requests for Pool Generation Phase
// Route is fired whenever the user toggles their ready button 
app.post("/player_toggle_ready", function(req, res) {
    players_ready[req.body.player_name] = req.body.is_ready
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

//! Useful Functions

// Initializes all our variables; Called once right after game is initialized 
function init(player_names) {

    // Set everybody's ready button to false
    for (name in player_names) {
        players_ready[name] = false
    }
}

// Returns the json object that is displayed by the user 
function generate_pokemon() {

}

// Key is the player's name, value is boolean representing if they're ready or not 
// This gets reset to all false whenever a new decision comes on screen 
var players_ready = {
    
}

// There's a dedicated function for this; Player ready state changes can trigger a lot of events.
function toggle_player_ready_state(player_name, is_ready) {
    players_ready[player_name] = is_ready;

    // If we're in the banning phase, and this means everyone is ready, add the current pokemon to the official list

    // If we're in the drafting phase, and the player about to pick toggled to ready, start their countdown

    // if we're in a timer phase, and this means everyone is ready, skip the timer
}