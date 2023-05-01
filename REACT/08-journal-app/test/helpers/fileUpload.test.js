import { fileUpload } from '../../src/helpers/fileUpload';
import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({
    cloud_name: 'dtdibb0cd',
    api_key: '386476365981647',
    api_secret: 'QFaGE_ggNrkRFiAL5On_vfqJb4U',
    secure: true
});

describe('Pruebas en fileUpload', () => {
    test('Debe de subir el archivo correctamente a cloudinary', async() => {
        const imageUrl = "https://tse4.mm.bing.net/th?id=OIP.7jGPAausWyMVeNjCHmAi5QHaFJ&pid=Api&P=0";
        const resp = await fetch( imageUrl );
        const blob = await resp.blob();
        const file = new File([blob], 'foto.jpg');

        const url = await fileUpload( file );
        expect( typeof url ).toBe('string');
        const segments = url.split('/');
        const imageId = segments[ segments.length -1].replace('.jpg','');

        await cloudinary.api.delete_resources([ 'journal/'+imageId ]);
    })

    test('Debe de retornar null', async() => {
        const file = new File([], 'foto.jpg');
        const url = await fileUpload( file );
    
        expect( url ).toBe(null);
    })
})