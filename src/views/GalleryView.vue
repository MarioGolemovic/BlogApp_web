<template>
    <div>
      <div class="container">
        <div class="row">
          <div v-for="(image, index) in images" :key="index" class="col-md-4">
            <div class="image-container" @mouseover="zoomIn" @mouseleave="resetZoom">
              <img :src="image.src" :alt="image.alt" class="img-fluid mb-3 image-frame" />
              <p class="image-description text-center">{{ image.description }}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  import image1 from '@/components/assets/boysi1.jpg';
  import image2 from '@/components/assets/boysi2.jpeg';
  import image3 from '@/components/assets/boysi3.webp';
  import image4 from '@/components/assets/boysi4.jpg';
  import image5 from '@/components/assets/boysi5.webp';
  import image6 from '@/components/assets/boysi6.jpg';
  import image7 from '@/components/assets/boysi7.jpg';
  import image8 from '@/components/assets/boysi8.jpeg';
  import image9 from '@/components/assets/boysi9.jpg';
  
  export default {
    data() {
      return {
        images: [
          { src: image1, alt: 'Slika 1', description: 'Za Dinamo život dajemo, plavi u srcu, ponosno koračamo!' },
          { src: image2, alt: 'Slika 2', description: 'Bad Blue Boysi - vitezovi stadiona, ponosno branimo boje našeg kluba!' },
          { src: image3, alt: 'Slika 3', description: 'Dinamo nije samo klub, to je ljubav, to je naša strast, to je Bad Blue Boys!' },
          { src: image4, alt: 'Slika 4', description: 'Plavi do groba, za Dinamo nek se živi, Bad Blue Boysi nek se dive!' },
          { src: image5, alt: 'Slika 5', description: 'Svaka utakmica je bitka, a mi smo ratnici plavih boja!' },
          { src: image6, alt: 'Slika 6', description: 'Gdje Dinamo igra, tamo Bad Blue Boysi vesele se, tamo plavi plamte!' },
          { src: image7, alt: 'Slika 7', description: 'Navijamo srcem, plavo je naše ime, Bad Blue Boysi za Dinamo žive i dišu!' },
          { src: image8, alt: 'Slika 8', description: 'Nek se čuje pjesma, nek se vije plavi barjak, mi smo tu, Bad Blue Boysi su uvijek uz Dinamo!' },
          { src: image9, alt: 'Slika 9', description: 'Dinamo nije samo klub, to je naš dom, Bad Blue Boysi su porodica, zajedno vjerujemo u plavi san!' },
          
        ],
      };
    },
    methods: {
      zoomIn(event) {
        const imageContainer = event.currentTarget;
        imageContainer.style.transform = 'scale(1.1)';
      },
      resetZoom(event) {
        const imageContainer = event.currentTarget;
        imageContainer.style.transform = 'scale(1)';
      },
    },
  };
  </script>
  
  <style scoped>
  .image-container {
    border: 2px solid #ddd;
    border-radius: 8px;
    overflow: hidden;
    padding: 16px;
    margin-top: 20px;
    cursor: pointer;
    transition: transform 0.3s; /* Dodajte animaciju na hover efekat */
  }
  
  .image-container:hover {
    transform: scale(1.1); /* Povećajte sliku na hover */
  }
  
  .image-frame {
    width: 100%;
    height: 100%;
    display: block;
    border-bottom: 2px solid #ddd;
  }
  
  .image-description {
    margin-top: 8px;
    font-size: 14px;
    color: #0a0404;
    margin-bottom: 0;
    font-weight: bold;
  }
  </style>
  