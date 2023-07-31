export interface Passenger {
    name: string;
    children?: string[];
}

const passengener1: Passenger = {
    name: 'Fernando'
}

const passengener2: Passenger = {
    name: 'Fernando',
    children: ['Natalia','Elizabeth']
}

const returnChildrenNumber = ( passenger: Passenger) =>{
    const howManyChildren = passenger.children?.length || 0;
    console.log( passenger.name, howManyChildren );

    return howManyChildren;
}

returnChildrenNumber( passengener2 );