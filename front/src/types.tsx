export type Character ={
    id: number,
    name: string,
    status?: enumStatus,
    gender?: string
    origin?: Planet,
    image: string,
}

export type CharactersAPI = {
    info: {
        count: number;
        pages: number;
        next: string;
        prev: string;
    }
    results: Character[];
};

export type Planet = {
    name?: string,
    url?: string
}

export enum enumStatus {
    Alive = "Alive",
    Dead = "Dead",
    unknown = "unknown"
}