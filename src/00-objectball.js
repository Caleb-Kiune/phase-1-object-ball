function gameObject(){
  return {
    home: {
      teamName: 'Brooklyn nets',
      colors: ['Black', 'White'],
      players: {
        'Alan Anderson': {
          number: 0,
          shoe: 16,
          points: 22,
          rebounds: 12,
          assists: 12,
          steals: 3,
          blocks: 1,
          slamdunks: 1
        },
        'Reggie Evans' : {
          number: 30,
          shoe: 14,
          points: 12,
          rebounds: 12,
          assists: 12,
          steals: 12,
          blocks: 12,
          slamdunks: 7

        
      },
      'Brook Lopez': {
          number: 11,
          shoe: 17,
          points: 17,
          rebounds: 19,
          assists: 10,
          steals: 3,
          blocks: 1,
          slamdunks: 15

    },
    'Manson Plumlee': {
          number: 1,
          shoe: 19,
          points: 26,
          rebounds: 12,
          assists: 6,
          steals: 3,
          blocks: 8,
          slamdunks: 5

  },
  'Jason Terry': {
          number: 31,
          shoe: 15,
          points: 19,
          rebounds: 2,
          assists: 2,
          steals: 4,
          blocks: 11,
          slamdunks: 1
  }
}

},
away: {
  teamName: 'Charlote Hornets',
  colors: ['Turquoise', 'Purple'],
  players: {
    'Jeff Adrien': {
      number: 4,
      shoe: 18,
      points: 10,
      rebounds: 1,
      assists: 1,
      steals: 2,
      blocks: 7,
      slamdunks: 2
    },
    'Bismak Biyombo' : {
      number: 0,
      shoe: 16,
      points: 12,
      rebounds: 4,
      assists: 7,
      steals: 7,
      blocks: 15,
      slamdunks: 10

    
  },
  'DeSagna Diop': {
      number: 2,
      shoe: 14,
      points: 24,
      rebounds: 12,
      assists: 12,
      steals: 4,
      blocks: 5,
      slamdunks: 5

},
'Ben Gordon': {
      number: 8,
      shoe: 15,
      points: 33,
      rebounds: 3,
      assists: 2,
      steals: 1,
      blocks: 1,
      slamdunks: 0

},
'Brendan Haywood': {
      number: 33,
      shoe: 15,
      points: 6,
      rebounds: 12,
      assists: 12,
      steals: 22,
      blocks: 5,
      slamdunks: 12
    }
  }
}
}
}


let oo = {
  teamName: 'Charlote Hornets'
};

console.log(oo.teamName)



function numPointsScored(playerName) {
  let game = gameObject();

  for (let team in game) {
    let players = game[team].players;
    if (players[playerName]) {
      return players[playerName].points;
    }
  }
  return null; 
}
console.log(numPointsScored('Brendan Haywood'))



function shoeSize(playerName) {
  let game = gameObject();

  for (let team in game) {
    let players = game[team].players;
    if (players[playerName]) {
      return players[playerName].shoe;
    }
  }
  return null; 
}
console.log(shoeSize('Brendan Haywood')); 

function teamColors(teamName) {
  let game = gameObject();

  for (let team in game) {
    if (game[team].teamName === teamName) {
      return game[team].colors;
    }
  }
  return null; 
}
console.log(teamColors('Brooklyn Nets')); 

function teamNames() {
  let game = gameObject();
  let teams = [];

  for (let team in game) {
    teams.push(game[team].teamName);
  }

  return teams;
}
console.log(teamNames()); 

function playerNumbers(teamName) {
  let game = gameObject();
  let numbers = [];

  for (let team in game) {
    if (game[team].teamName === teamName) {
      for (let player in game[team].players) {
        numbers.push(game[team].players[player].number);
      }
    }
  }

  return numbers;
}
console.log(playerNumbers('Brooklyn nets')); 

function playerStats(playerName) {
  let game = gameObject();

  for (let team in game) {
    let players = game[team].players;
    if (players[playerName]) {
      return players[playerName];
    }
  }
  return null; 
}
console.log(playerStats('Alan Anderson'));

function bigShoeRebounds() {
  let game = gameObject();
  let largestShoeSize = 0;
  let rebounds = 0;

  for (let team in game) {
      let players = game[team].players;
      for (let player in players) {
        if (players[player].shoe > largestShoeSize) {
          largestShoeSize = players[player].shoe;
          rebounds = players[player].rebounds;
        }
      }
    }

    return rebounds;
  }

console.log(bigShoeRebounds()); 

function mostPointsScored() {
  let game = gameObject();
  let maxPoints = 0;
  let topPlayer = '';

  for (let team in game) {
    let players = game[team].players;
    for (let player in players) {
      if (players[player].points > maxPoints) {
        maxPoints = players[player].points;
        topPlayer = player;
      }
    }
  }

  return topPlayer;
}
console.log(mostPointsScored()); 

function playerWithLongestName() {
  let game = gameObject();
  let longestName = '';

  for (let team in game) {
    let players = game[team].players;
    for (let player in players) {
      if (player.length > longestName.length) {
        longestName = player;
      }
    }
  }

  return longestName;
}
console.log(playerWithLongestName()); 

function winningTeam() {
  let game = gameObject();
  let teamPoints = {
    home: 0,
    away: 0
  };

  for (let team in game) {
    let players = game[team].players;
    for (let player in players) {
      teamPoints[team] += players[player].points;
    }
  }

  return teamPoints.home > teamPoints.away ? game.home.teamName : game.away.teamName;
}
console.log(winningTeam()); 

function doesLongNameStealATon() {
  let game = gameObject();
  let longestName = playerWithLongestName();
  let maxSteals = 0;
  let topStealer = '';

  for (let team in game) {
    let players = game[team].players;
    for (let player in players) {
      if (players[player].steals > maxSteals) {
        maxSteals = players[player].steals;
        topStealer = player;
      }
    }
  }

  return longestName === topStealer;
}

console.log(doesLongNameStealATon()); 
















 