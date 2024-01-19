function gameObject() {
  return {
    home: {
      teamName: "Brooklyn Nets",
      colors: ["Black", "White"],
      players: {
        "Alan Anderson": {
          number: 0,
          shoe: 16,
          points: 22,
          rebounds: 12,
          assists: 12,
          steals: 3,
          blocks: 1,
          slamDunks: 1,
        },
        "Reggie Evans": {
          number: 30,
          shoe: 14,
          points: 12,
          rebounds: 12,
          assists: 12,
          steals: 12,
          blocks: 12,
          slamDunks: 7,
        },
        "Brook Lopez": {
          number: 11,
          shoe: 17,
          points: 17,
          rebounds: 19,
          assists: 10,
          steals: 3,
          blocks: 1,
          slamDunks: 15,
        },
        "Mason Plumlee": {
          number: 1,
          shoe: 19,
          points: 26,
          rebounds: 12,
          assists: 6,
          steals: 3,
          blocks: 8,
          slamDunks: 5,
        },
        "Jason Terry": {
          number: 31,
          shoe: 15,
          points: 19,
          rebounds: 2,
          assists: 2,
          steals: 4,
          blocks: 11,
          slamDunks: 1,
        },
      },
    },
    away: {
      teamName: "Charlotte Hornets",
      colors: ["Turquoise", "Purple"],
      players: {
        "Jeff Adrien": {
          number: 4,
          shoe: 18,
          points: 10,
          rebounds: 1,
          assists: 1,
          steals: 2,
          blocks: 7,
          slamDunks: 2,
        },
        "Bismak Biyombo":	{
          number: 0,
          shoe: 16,
          points: 12,
          rebounds: 4,
          assists: 7,
          steals: 7,
          blocks: 15,
          slamDunks: 10,
        },
        "DeSagna Diop": {
          number: 2,
          shoe: 14,
          points: 24,
          rebounds: 12,
          assists: 12,
          steals: 4,
          blocks: 5,
          slamDunks: 5,
        },
        "Ben Gordon": {
          number: 8,
          shoe: 15,
          points: 33,
          rebounds: 3,
          assists: 2,
          steals: 1,
          blocks: 1,
          slamDunks: 0,
        },
        "Brendan Haywood": {
          number: 33,
          shoe: 15,
          points: 6,
          rebounds: 12,
          assists: 12,
          steals: 22,
          blocks: 5,
          slamDunks: 12,
        },
      },
    },
  }
}

//Deep Iterator

function deepIterator(target) {
  if (Array.isArray(target)) {
    console.log(target);
  } else if (typeof target === "object") {
    for (const key in target) {
      deepIterator(target[key])
    }
  } else {
    console.log(target);
  }
}

//Players

function players() {
  const obj = gameObject();
  const team = {};
  for (const key in obj) {
    const players = obj[key].players;
    for (const playerKey in players) {
      team[playerKey] = players[playerKey];
    }
  }
  return team;
}

//Number of points scored

function numPointsScored(player) {
  const points = players()[player].points;
  return `${player} scored ${points} points`;
}

console.log(numPointsScored("Brendan Haywood"));

//Shoe Size

function shoeSize(player) {
  const shoeSize = players()[player].shoe;
  return `${player}'s shoe size is ${shoeSize}`;
}

console.log(shoeSize("Brendan Haywood"));

//Team Colors

function teamColors(team) {
  const obj = gameObject();
  return obj[team].colors;
}

console.log(teamColors("home"))

//Team Names

function teamNames() {
  let object = gameObject()
  const teamNamesArray = []
  teamNamesArray.push(object.home.teamName, object.away.teamName)
  return teamNamesArray;
}

console.log(teamNames())

//Player Numbers

function playerNumbers(team) {
  let object = gameObject()

  const teamPlayersNumbers = []

  if (team === "Brooklyn Nets") {
     for (const key in object.home.players)
      teamPlayersNumbers.push(object.home.players[key].number)

  } else if (team === "Charlotte Hornets") {
    for (const key in object.away.players)
      teamPlayersNumbers.push(object.away.players[key].number)
  }
  
  return teamPlayersNumbers;
}

console.log(playerNumbers("Brooklyn Nets"))

//Player Stats

function playerStats(player) {
  return players()[player];
}

console.log(playerStats("Brendan Haywood"))

//Big Shoe Rebounds

function bigShoeRebounds() {
  const shoeSize = [];
  const playerList = players();

  //Find player with the largest shoe size
  for (const key in playerList) {
    shoeSize.push(playerList[key].shoe);
  }
  const largestShoeSize = Math.max(...shoeSize);
  
  //Return total rebounds by a player with the largest shoe size
  for (const key in playerList) {
    if (playerList[key].shoe === largestShoeSize) {
      return playerList[key].rebounds;
    }
  }
}

console.log(bigShoeRebounds())

//Most points by a player

function mostPointsScored() {
  const points = [];
  let playerWithMostPoints;
  const playerList = players();

  for (const key in playerList) {
    points.push(playerList[key].points);
  }

  const mostPoints = Math.max(...points);

  for (const key in playerList) {
    if (playerList[key].points === mostPoints) {
      playerWithMostPoints = key;
    }
  }

  return `${playerWithMostPoints} has the most points with a total of ${mostPoints}`;
}

console.log(mostPointsScored());

//Team with the most points

function winningTeam() {
  const winningTeam = [];

  //home team
  const homeTeam = gameObject().home.players;
  const homeTeamPoints = [];

  for (const key in homeTeam) {
    homeTeamPoints.push(homeTeam[key].points);
  }

  const homeTeamTotalPoints = homeTeamPoints.reduce((total, individualPoints) => {
    return total += individualPoints;
  }, 0);

  //away team
  const awayTeam = gameObject().away.players;
  const awayTeamPoints = [];

  for (const key in awayTeam) {
    awayTeamPoints.push(awayTeam[key].points);
  }

  const awayTeamTotalPoints = awayTeamPoints.reduce((total, individualPoints) => {
    return total += individualPoints;
  }, 0);

  winningTeam.push(homeTeamTotalPoints, awayTeamTotalPoints)

  return Math.max(...winningTeam);
}

console.log(winningTeam());

//Player with the longest name

function playerWithLongestName() {
  const playerList = players();
  const nameLengths = [];

  for (const key in playerList) {
    nameLengths.push(key.length);
  }

  const longestName = Math.max(...nameLengths);

  for (const key in playerList) {
    if (key.length === longestName) {
      return key;
    }
  }
}

console.log(playerWithLongestName());

// Does long name steal a ton???

function doesLongNameStealATon() {
  const steals = [];
  const playerList = players();
  const longestName = playerWithLongestName();

  for (const key in playerList) {
    steals.push(playerList[key].steals);
  }

  const mostSteals = Math.max(...steals);

  for (const key in playerList) {
    if (longestName === key) {
      return playerList[key].steals === mostSteals;
    }
  }
}

console.log(doesLongNameStealATon());