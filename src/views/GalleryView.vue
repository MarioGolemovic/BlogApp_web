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
import image1 from '@/components/assets/galerija1.jpg'
import image2 from '@/components/assets/galerija2.webp'
import image3 from '@/components/assets/galerija3.jpg'
import image4 from '@/components/assets/galerija4.jpg'
import image5 from '@/components/assets/galerija5.jpg'
import image6 from '@/components/assets/galerija6.jpg'
import image7 from '@/components/assets/galerija7.jpg'
import image8 from '@/components/assets/galerija8.jpg'
import image9 from '@/components/assets/galerija9.jpg'

export default {
  data() {
    return {
      images: [
        {
          src: image1,
          alt: 'Slika 1',
          description:
            'Kraljevski klub u akciji, Real Madrid - simbol nogometne izvrsnosti, vladar europskih terena!'
        },
        {
          src: image2,
          alt: 'Slika 2',
          description:
            'Bernabeu - svetinja nogometa, mjesto gdje se rađaju legende, gdje se pišu povijest i snovi postaju stvarnost!'
        },
        {
          src: image3,
          alt: 'Slika 3',
          description:
            'Los Blancos - bijeli ponos, ponosno nosimo boje našeg kluba, predano podržavamo Real Madrid u svakoj bitci!'
        },
        {
          src: image4,
          alt: 'Slika 4',
          description:
            'Navijamo s ljubavlju, Real Madrid je naša strast, naša ljubav, naša vjernost do kraja života!'
        },
        {
          src: image5,
          alt: 'Slika 5',
          description:
            'Svaka utakmica je prilika za slavlje, za pjesmu, za bijelu oluju koja se diže kad Real Madrid kroči na teren!'
        },
        {
          src: image6,
          alt: 'Slika 6',
          description:
            'Gdje Real igra, tamo su i njegovi vjerni navijači, tamo se bijela magija događa, tamo se sanja večna slava!'
        },
        {
          src: image7,
          alt: 'Slika 7',
          description:
            'Ponosno nosimo grb, kraljevski simbol našeg kluba, s ponosom nosimo bijelu majicu, s ponosom nosimo ime Real Madrid!'
        },
        {
          src: image8,
          alt: 'Slika 8',
          description:
            'Uz Real Madrid, ljubav je vječna, podrška je neizmjerna, vjernost je beskrajna - mi smo Los Merengues!'
        },
        {
          src: image9,
          alt: 'Slika 9',
          description:
            'Svjedočimo povijesti, stvaramo legende, s Real Madridom u srcu, nema granica - zajedno smo nepobjedivi!'
        }
      ]
    }
  },
  methods: {
    zoomIn(event) {
      const imageContainer = event.currentTarget
      imageContainer.style.transform = 'scale(1.1)'
    },
    resetZoom(event) {
      const imageContainer = event.currentTarget
      imageContainer.style.transform = 'scale(1)'
    }
  }
}
</script>

<style scoped>
.image-container {
  border: 2px solid #0e0101;
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
  border-bottom: 2px solid #0e0101;
}

.image-description {
  margin-top: 8px;
  font-size: 14px;
  color: #0a0404;
  margin-bottom: 0;
  font-weight: bold;
}
</style>
