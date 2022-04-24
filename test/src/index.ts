import {objType, typeClass} from '../types'


export const obj:objType = {
    valueOne: "test",
    valueTwo: 4,
    valueThree: {
        internal:true
    }
}

export class myClass implements typeClass{
    height:number;
    width:number;
    constructor(height:number, width:number) {
        this.height = height,
        this.width = width
    }

    public printWidth = (w:number) => {
        return w
    }

    public printHeight = (h:string) => {
        return h
    }
}

export function add(numbers: string): number {
    let integers = numbers.split(',').map(x => parseInt(x));
    let negatives = integers.filter(x => x < 0);
 
    if (negatives.length > 0)
        throw new RangeError('Negatives are not allowed: ' + negatives.join(', '));
 
    return integers
        .filter(x => x <= 1000)
        .reduce((a, b) => a + b, 0);
}
 