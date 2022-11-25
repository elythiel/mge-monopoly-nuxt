export enum Colors {
    RED = 'red',
    YELLOW = 'yellow',
    GREEN = 'green',
    LIGHT_BLUE = 'lightblue',
    BLUE = 'blue',
    DARK_BLUE = 'darkblue',
    BROWN = 'brown',
    PINK = 'pink',
    ORANGE = 'orange'
}

export enum FileSizes {
    LG = 'lg',
    XL = 'xl'
}

export interface Card {
    color: Colors;
    title: string;
        period: string;
    image: {
        name: string
        alt: string
        size: FileSizes
    };
    card: boolean;
    location: string;
    footer: string;
    duration: string;
}
