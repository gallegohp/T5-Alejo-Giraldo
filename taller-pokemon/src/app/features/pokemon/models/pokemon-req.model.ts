export interface Pokemon {
    name: string;
    id: number;
    stats: {
        base_stat: number;
        effort: number;
        stat: {
            url: string;
        };
    }[];
    types: {
        slot: number;
        type: {
            name: string;  
            url: string;
        };
    }[];
    abilities: {
        ability: {
            name: string;      
            url: string;
        };
        is_hidden: boolean;   
        slot: number;
    }[];
    sprites: {
        front_default: string | null;
    };
}