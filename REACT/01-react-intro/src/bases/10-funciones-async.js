const getImagen = async() =>{
    try {
        const apiKey = '';
        const resp = await fetch(`http://api.giphy.com/v1/gifs/random?=${apiKey}`);
        const data = await resp.json();
    
        const { url } = data.images.original;
    
        const img = document.createElement('img');
        img.src = url;
        document.body.append(img);
        console.log(data);
    } catch (error) {
        console.error(error);
    }
}

getImagen();