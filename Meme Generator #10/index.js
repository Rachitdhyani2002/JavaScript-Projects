var url ='https://api.imgflip.com/get_memes';
async function generateMeme(){
    const response = await fetch(url);
    const data = await response.json();
   console.log(data);
   if (Array.isArray(data.data.memes) && data.data.memes.length > 0) {
    const randomIndex = Math.floor(Math.random() * data.data.memes.length);
    const randomMeme = data.data.memes[randomIndex];
    const memeImage = document.createElement('img');
    memeImage.width=600;
    memeImage.height=350;
    memeImage.src = randomMeme.url;
    memeImage.alt = randomMeme.name; 
    document.querySelector('.meme').innerHTML = ''; 
    document.querySelector('.meme').appendChild(memeImage); 
} else {
    console.error('Memes data is not in the expected format or the array is empty.');
}
}
    

