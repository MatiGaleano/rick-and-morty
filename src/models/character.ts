export interface Character {
    id: number,
    name: string,
    status: string;
    species: string;
    type: string;
    gender: string;
    origin: ChrtLocation;
    location: ChrtLocation;
    image: string;
    episode: string[];
    url: string;
    created: Date;
}

interface ChrtLocation {
    name: string;
    url: string;
}
