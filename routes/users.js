var express = require("express");
var router = express.Router();
const API = require("call-of-duty-api")();
const func = require("../Users/usersmp");
var stats = [];
var allStats = [];
/* GET users listing. */
router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});
var user = {
  username: "",
  password: "",
  email: "",
};
//HOME PAGE
router.get("/:username/:password/:email", function (req, res, next) {
  user.username = req.params.username;
  user.password = req.params.password;
  user.email = req.params.email;
  API.login(`${req.params.email}`, `${req.params.password}`)
    .then(() => {
      API.MWstats(`${req.params.username}`, API.platforms.psn)
        .then((output) => {
          allStats = output;
          stats = func.home(output);
          res.render("home", {
            username: `${stats.username}`,
            level: `${stats.level}`,
            games: `${stats.totalGamesPlayed}`,
            score: `${stats.score}`,
            wins: `${stats.wins}`,
            losses: `${stats.losses}`,
            winloss: `${stats.winLossRatio}`,
            kills: `${stats.kills}`,
            deaths: `${stats.deaths}`,
            kd: `${stats.kdRatio}`,
            recordkills: `${stats.recordKillsInAMatch}`,
            recorddeaths: `${stats.bestDeaths}`,
            killstreak: `${stats.recordKillStreak}`,
            recordscore: `${stats.bestScore}`,
            spm: `${stats.scorePerMinute}`,
            spg: `${stats.scorePerGame}`,
            longestwinstreak: `${stats.recordLongestWinStreak}`,
            winstreak: `${stats.currentWinStreak}`,
            accuracy: `${stats.accuracy}`,
          });
        })
        .catch((err) => {
          res.render("error", { message: `${err}` });
        });
    })
    .catch((err) => {
      res.render("error", { message: `${err} please return to homepage` });
    });
});

//MODES
router.get("/modes", function (req, res, next) {
  var modes = func.modeStats(allStats);
  res.render("modes", { modes });
});
//WEAPONS
router.get("/weapons", (req,res, next) => {
  var weapon = func.weaponStats(allStats);
  res.render("weapons", { weapon });
});


//HOME
router.get("/home", function (req, res, next) {
  res.render("home", {
    username: `${stats.username}`,
    level: `${stats.level}`,
    games: `${stats.totalGamesPlayed}`,
    score: `${stats.score}`,
    wins: `${stats.wins}`,
    losses: `${stats.losses}`,
    winloss: `${stats.winLossRatio}`,
    kills: `${stats.kills}`,
    deaths: `${stats.deaths}`,
    kd: `${stats.kdRatio}`,
    recordkills: `${stats.recordKillsInAMatch}`,
    recorddeaths: `${stats.bestDeaths}`,
    killstreak: `${stats.recordKillStreak}`,
    recordscore: `${stats.bestScore}`,
    spm: `${stats.scorePerMinute}`,
    spg: `${stats.scorePerGame}`,
    longestwinstreak: `${stats.recordLongestWinStreak}`,
    winstreak: `${stats.currentWinStreak}`,
    accuracy: `${stats.accuracy}`,
  });
});

//WARZONE
router.get("/warzone", (req,res, next) => {
  var warzone = func.warzoneStats(allStats);
  console.log(warzone);
  
 res.render("warzone",{ warzone }); 
});


module.exports = router;
