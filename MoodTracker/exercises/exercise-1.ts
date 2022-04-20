export type Owner = {
        name: string,
        age: number
    }


export type Pet = {
    // TODO: implement the rest of this type
    name: string;
    kind: 'cat' | 'dog' | 'fish',
    age: number,
    favouriteFoods: string[],
    speak?: () => void,
    owner: Owner
}

const pets: Pet[] = [
    {
        name: 'Fluffy',
        kind: 'cat',
        age: 10,
        favouriteFoods: ['fish', 'chicken'],
        speak: () => console.log("neow"),
        owner: {
            name: 'Sarah',
            age: 18,
        }
    },
    {
        name: 'Teddy',
        kind: 'dog',
        age: 2,
        favouriteFoods: ['anything off your table'],
        speak: () => console.log("woof"),
        owner: {
            name: 'Mary',
            age: 24,
        }
    },
    {
        name: 'Bubbles',
        kind: 'fish',
        age: 1,
        favouriteFoods: ['algae'],
        owner: {
            name: 'Steve',
            age: 30,
        }
    }
]