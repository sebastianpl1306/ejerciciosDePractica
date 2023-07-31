interface AudioPlayer{
    audioVolume: number;
    songDuration: number;
    song: string;
    details: Details;
}

interface Details{
    author: string; 
    year: number;
}

const audioPlayer: AudioPlayer = {
    audioVolume: 90,
    songDuration: 36,
    song: 'mes',
    details: {
        author: 'Ed Sheeran',
        year: 2015
    }
}

//Desestruycturación de objetos
const { song: anotherSong, details, songDuration } = audioPlayer;
console.log('SONG:',anotherSong);
console.log('Duration:',songDuration);
console.log('Author:',details.author);

//Desestructuración de arreglos
const [ p1, , trunks = 'No se encontro']: string[] = ['Goku','Vegetta','Trunks'];
console.log('Personaje 3: ',trunks);

export {}