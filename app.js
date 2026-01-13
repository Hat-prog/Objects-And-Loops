const Characters = [
  { name: "Warrior", hp: 100 },
  { name: "Wizzard", hp: 77 },
  { name: "Orc", hp: 150 }
];

function takeDamage(character, amount) {
  character.hp -= amount;
}

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);
}

function battleTurn(characters) {
  const attackerIndex = getRandomIndex(characters);
  let defenderIndex = getRandomIndex(characters);

  while (attackerIndex === defenderIndex) {
    defenderIndex = getRandomIndex(characters);
  }

  const attacker = characters[attackerIndex];
  const defender = characters[defenderIndex];

  const damage = Math.floor(Math.random() * 20) + 1;

  takeDamage(defender, damage);

  console.log(
    attacker.name + " attacks " + defender.name + " and deals " + damage + " damage"
  );
}

battleTurn(Characters);
