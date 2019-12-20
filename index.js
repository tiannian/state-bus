const StateMachine = require('javascript-state-machine');

class Chain {
    static init(level_name) {
        Chaini.db = level(level_name);
    }

    constructor (chain_id) {
        this.chain_id = chain_id;
        this.states = [];
    }

    async init() {

    }

    async tigger(fsm_id, operator) {

    }

    async fsm(fsm_id) {

    }
}


