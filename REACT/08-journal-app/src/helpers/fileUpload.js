export const fileUpload = async( file ) =>{
    if(!file) return null;

    const url = 'https://api.cloudinary.com/v1_1/dtdibb0cd/upload';
    const formData = new FormData();
    formData.append('upload_preset','react-journal');
    formData.append('file',file);

    try {
        const res = await fetch(url, {
            method: 'POST',
            body: formData
        });

        if (!res.ok) throw new Error('ERROR: The file was not loaded');
        const cloudResp = await res.json();

        return cloudResp.secure_url;
    } catch (error) {
        return null;
    }
}