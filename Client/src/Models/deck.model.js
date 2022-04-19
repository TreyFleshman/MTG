export class DeckData {
    constructor(user, title, commander, creatures, artifacts, instants, sorceries, enchantments, lands) {
        this.user = user;
        this.title = title;
        this.commander = commander;
        this.creatures = creatures;
        this.artifacts = artifacts;
        this.instants = instants;
        this.sorceries = sorceries;
        this.enchantments = enchantments;
        this.lands = lands;
    }
}