const Warrior = {
    name: "Warrior",
    hp: 100,
    takeDamage: function (amount) {
        this.hp -= amount;
    }
};

Warrior.takeDamage(10);
console.log(Warrior.hp);

const Wizzard = {
    name: "Wizzard",
    hp: 70,
    takeDamage: function (amount) {
        this.hp -= amount;
    }
};

Wizzard.takeDamage(15);
console.log(Wizzard.hp);

const Orc = {
    name: "Orc",
    hp: 200,
    takeDamage: function (amount) {
        this.hp -= amount;
    }
};

Orc.takeDamage(77);
console.log(Orc.hp);