'use strict';

const noOfCandidates = parseInt(prompt('Enter the number of candidates'));

const candidates = [];

for (let i = 1; i <= noOfCandidates; i++) {
    const name = prompt(`Name for candidate ${i}`);
    candidates.push({name: name, votes: 0});
}

const numVoters = parseInt(prompt('Enter the number of voters'));

for (let i = 0; i < numVoters; i++) {
  const vote = prompt(`Voter ${i + 1}, who do you vote for? `);

  if (vote === null || vote.trim() === "") {
    continue;
  }

  const candidate = candidates.find(c => c.name.toLowerCase() === vote.trim().toLowerCase());
  if (candidate) {
    candidate.votes++;
  } else {
    alert("Invalid candidate name. Vote not counted.");
  }
}

let winnerCount = 0;
let winner;

for (let candidate of candidates) {
    if (candidate.votes > winnerCount) {
        winner = candidate.name;
        winnerCount = candidate.votes;
    }
}

console.log(`The winner is ${winner} with ${winnerCount} votes.`);
console.log(`Results`);
for (let candidate of candidates) {
    if (candidate.name !== winner) {
        console.log(`${candidate.name} : ${candidate.votes}`);
    }
}