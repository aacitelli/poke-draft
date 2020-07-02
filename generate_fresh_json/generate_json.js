trim_to_pokemon()
function trim_to_pokemon() {

    // Read in the data in the first place
    // Smogon essentially keeps a json object with all its stuff on one page; I just got this once and parsed it in to be more manageable
    let data = require("./smogon_data.json").injectRpcs[1][1].pokemon
    let end_json = {}

    // Trim out anything that isn't fully evolved
    let entries = Object.entries(data)
    let allowable_tiers = ["Uber", "OU", "UUBL", "UU", "RUBL", "RU", "NUBL", "NU", "PUBL", "PU", "Untiered"]
    for (let i = 0; i < entries.length; i++) {
        if (allowable_tiers.includes(entries[i][1].formats[0])) {
            end_json[entries[i][0]] = entries[i][1]
        }
    }

    let fs = require("fs")
    fs.writeFileSync("pokemon.json", JSON.stringify(end_json), err => {
        if (err) {
            console.error(err)
        }
    })
}

/* Old code I don't want to get rid of incase I need it
// Package requirements
const fetch = require("node-fetch")
let fs = require("fs")
const axios = require("axios")
const cheerio = require("cheerio")

// Clear whatever was in there beforehand
let obj = {}

// Do our main fetch request to get the base json object we're starting from 
fetch("https://randompokemon.com/dex/all.json")
.then(res => res.json())
.then(json => {
    handle_initial_json(json);
    
})

function handle_initial_json(json) {
    obj = json
    add_smogon_data()
}

async function add_smogon_data() {

    // Ubers
    const result = await axios.get("https://www.smogon.com/dex/sm/formats/uber/")
    console.log(result)
    fs.writeFileSync("ubers_result", result.toString(), err => {
        if (err) {
            console.error(err)
        }
    })

    // OU

    // UUBL

    // UU

    // RUBL

    // RU

    // NUBL

    // NU

    // PUBL

    // PU

    // UT

    // All done!
    write_to_file()
}

// Writes whatever's in our json object after everything we added
function write_to_file() { 
    fs.writeFileSync("pokemon.json", JSON.stringify(obj), err => {
        if (err) {
            console.error(err)
        }
    })
}
*/