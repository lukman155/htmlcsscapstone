const featureSectionDiv = document.querySelector('.speaker-container');
const artists = [
  {
    picture: './images/speaker-1.jpg',
    name: 'Reece Simpson, a.k.a. Roll Safe',
    catchPhrase: 'Lorem ipsum dolor sit amet cons  adipisicing elit',
    description: 'Lorem ipsum dolor, sit amet cons adipisicing elit. Unde delectus consectetur ips',
  },
  {
    picture: './images/speaker-2.jpg',
    name: 'Pepe the Frog',
    catchPhrase: 'Lorem ipsum dolor sit amet cons  adipisicing elit',
    description: 'Lorem ipsum dolor, sit amet cons adipisicing elit. Unde delectus consectetur ips',
  },
  {
    picture: './images/speaker-3.jpg',
    name: 'Andras Arato',
    catchPhrase: 'Lorem ipsum dolor sit amet cons  adipisicing elit',
    description: 'Lorem ipsum dolor, sit amet cons adipisicing elit. Unde delectus consectetur ips',
  },
  {
    picture: './images/speaker-4.jpg',
    name: 'Sarim Akhtar',
    catchPhrase: 'Lorem ipsum dolor sit amet cons  adipisicing elit',
    description: 'Lorem ipsum dolor, sit amet cons adipisicing elit. Unde delectus consectetur ips',
  },
  {
    picture: './images/speaker-5.jpg',
    name: 'Shiba Inu',
    catchPhrase: 'Lorem ipsum dolor sit amet cons  adipisicing elit',
    description: 'Lorem ipsum dolor, sit amet cons adipisicing elit. Unde delectus consectetur ips',
  },
  {
    picture: './images/speaker-6.jpg',
    name: 'Paw Paw',
    catchPhrase: 'Lorem ipsum dolor sit amet cons  adipisicing elit',
    description: 'Lorem ipsum dolor, sit amet cons adipisicing elit. Unde delectus consectetur ips',
  },
];

const featureSection = artists.map((artist) => `
<div class="speaker-card">
<div class="speaker-img-container">
<img class="image-bg" src="./images/img-bg.jpg" alt="a grid">
            <img src="${artist.picture}" class="speaker-img" alt="Picture of Comic">
        </div>
        <div class="speaker-card-body">
        <h5 class="speaker-card-title">${artist.name}</h5> 
        <p class='speaker-subtitle'><em>${artist.catchPhrase}</em></p>
        <hr class="speaker-line"> 
        <p class="speaker-card-text">${artist.description}</p>
        </div>
    </div>
</div>`).join('');

featureSectionDiv.innerHTML = featureSection;