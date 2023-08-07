class Leaderboard {
    constructor() {
        this.scores = [];
    }

    addScore(score) {
        this.scores.push(score);
        this.scores.sort((a, b) => b - a);
    }

    removeScore(score) {
        const index = this.scores.indexOf(score);
        if (index > -1) {
            this.scores.splice(index, 1);
        }
    }

    getTopScores(n) {
        return this.scores.slice(0, n);
    }
}
