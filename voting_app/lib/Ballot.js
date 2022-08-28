"use strict";

class Ballot {
    /**
    
     * @param items 
     * @param election 
     * @param voterId 
     * @returns 
     */
    constructor(ctx, items, election, voterId) {
        if (this.validateBallot(ctx, voterId)) {
            this.votableItems = items;
            this.election = election;
            this.voterId = voterId;
            this.ballotCast = false;
            this.ballotId =
                Math.random()
                    .toString(36)
                    .substring(2, 15) +
                Math.random()
                    .toString(36)
                    .substring(2, 15);
            this.type = "ballot";
            if (this.__isContract) {
                delete this.__isContract;
            }
            if (this.name) {
                delete this.name;
            }
            return this;
        } else {
            console.log("un bulletin a déjà été créé pour cet électeur.");
            throw new Error("un bulletin a déjà été créé pour cet électeur.");
        }
    }

    /**
     *
     * validateBallot
     *
     * check to make sure a ballot has not been created for this
     * voter.
     *
     * @param voterId - the unique Id for a registered voter
     * @returns - yes if valid Voter, no if invalid
     */
    async validateBallot(ctx, voterId) {
        const buffer = await ctx.stub.getState(voterId);

        if (!!buffer && buffer.length > 0) {
            let voter = JSON.parse(buffer.toString());
            if (voter.ballotCreated) {
                console.log("un bulletin a déjà été créé pour cet électeur");
                return false;
            } else {
                return true;
            }
        } else {
            console.log("Cette carte d'identité n'est pas enregistrée pour voter.");
            return false;
        }
    }
}
module.exports = Ballot;
