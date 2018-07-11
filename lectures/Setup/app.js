const ATTACK = 'ATTACK';
const SPECIAL_ATTACK = 'SPECIAL ATTACK';
const HEAL = 'HEAL';

new Vue({
  el: '#app',
  data: {
    isRunning: false,
    rounds: [
      // actor: 'player' | 'monster',
      // damage: 0-100
      // move: 'attack' | 'specialAttack' | 'heal'
    ]
  },
  computed: {
    healths() {
      const healths = {
        player: 100,
        monster: 100
      }; 
      for(let round of this.rounds) {

        if(round.actor === 'player') {
          round.move === 'heal'
            ? healths.player += round.damage
            : healths.monster -= round.damage;
        }
        else {
          round.move === 'heal'
            ? healths.monster += round.damage
            : healths.player -= round.damage;
        }

        if(healths.monster > 100) healths.monster = 100;
        if(healths.player > 100) healths.player = 100;

      }
      console.log(healths, healths);
      return healths;
    },
    monsterHealth() {
      return this.healths.monster + '%';
    },
    playerHealth() {
      return this.healths.player + '%';
    },
    result() {
      if(this.healths.player <= 0) {this.isRunning = false; return 'PLAYER LOST';}
      else if(this.healths.monster <= 0) {this.isRunning = false; return 'PLAYER WON';}
      else return '';
    }
  },
  methods: {
    
    getEnemy(actor) {
      return actor === 'player'
        ? 'monster'
        : 'player'; 
    },

    damage(move) {
      let factor = 1;

      switch(move) {
        case 'heal': factor = 15; break;
        case 'attack': factor = 16; break;
        case 'specialAttack': factor = 19; break;
        default: factor = 5;
      }

      let damage = Math.floor(Math.random() * factor);
      if(move === 'specialAttack') damage -= Math.floor(Math.random() * 5);
      return damage;
    },
    playRound(move) {
      this.attack('player', move);
      let a = this.getMonsterMove();
      console.log('monsterMove', a);
      
      this.attack('monster', a);
    },
    getMonsterMove() {
      const r = Math.random();
      if(r < 0.2) return 'heal'
      else if(r < 0.7) return 'attack';
      else return 'specialAttack';
    },
    attack(actor, move) {

      if(!this.isRunning) return;

      console.log('lala attackMove', actor, move);
      

      const damage = this.damage(move);
      this.rounds.push({
        actor,
        enemy: this.getEnemy(actor),
        damage: this.damage(move),
        move
      });
    },
    getRoundText(round) {

      console.log('roundtext', round.move);
      

      if(round.move === 'heal') {
        return `${round.actor} heals himself for ${round.damage}`;
      }
      else if(round.move === 'attack') {
        return `${round.actor} attacks ${this.getEnemy(round.actor)} for ${round.damage}`;
      }
      else if (round.move === 'specialAttack') {
        return `${round.actor} hits ${this.getEnemy(round.actor)} with a special move for ${round.damage}`;
      }
      return `${round.actor} with an unknown move for ${round.damage}`;

      
    },
    startNewGame() {
      this.rounds = [];
      this.isRunning = true;
    },
    getColorByMove(move) {
      if(move==='heal') return 'green';
      return 'red';
    }
  }
});