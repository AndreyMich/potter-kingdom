export class Characters {
    constructor(
        public characters: Character[]
    ) {
    }

    static fromSerialized(serialized: string) {
        const parsed = JSON.parse(serialized);
        let characters = parsed.filter(char=>!!char.image);
        characters = characters.map((char: any) => {
            return new Character(
                char.id,
                char.name,
                House[char.house as keyof typeof House], // Convert string to House enum
                char.image
            );
        });
        return new Characters(characters);
    }
}

export class Character {
    constructor(
        public id: string,
        public name: string,
        public house: House,
        public image: string,
    ) {
    }

    private toObject() {
        return {
            id: this.id,
            name: this.name,
            house: this.house,
            image: this.image
        }
    }

    static fromSerialized(serialized: string) {
        const character: ReturnType<Character["toObject"]> = JSON.parse(serialized);
        return new Character(
            character.id,
            character.name,
            character.house,
            character.image
        )
    }
}


enum House {
    Gryffindor = "Gryffindor",
    Slytherin = "Slytherin",
    Hufflepuff = "Hufflepuff",
    Ravenclaw = "Ravenclaw",
}