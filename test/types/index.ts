interface three {
    internal:boolean
}

export interface objType {
    valueOne: string;
    valueTwo:number;
    valueThree:three
}

export interface props {
    width: number,
    height: number
}

export interface typeClass {
    printWidth(w:number):void,
    printHeight(h:string):void
}
