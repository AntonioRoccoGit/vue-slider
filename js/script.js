const { createApp } = Vue;

createApp({
    data() {
        return {
            autoPlayInterval: null,
            currentImg: 0,
            slides: [
                {
                    image: 'img/01.webp',
                    title: 'Marvel\'s Spiderman Miles Morale',
                    text: 'Experience the rise of Miles Morales as the new hero masters incredible, explosive new powers to become his own Spider-Man.',
                },
                {
                    image: 'img/02.webp',
                    title: 'Ratchet & Clank: Rift Apart',
                    text: 'Go dimension-hopping with Ratchet and Clank as they take on an evil emperor from another reality.',
                },
                {
                    image: 'img/03.webp',
                    title: 'Fortnite',
                    text: "Grab all of your friends and drop into Epic Games Fortnite, a massive 100 - player face - off that combines looting, crafting, shootouts and chaos.",
                },
                {
                    image: 'img/04.webp',
                    title: 'Stray',
                    text: 'Lost, injured and alone, a stray cat must untangle an ancient mystery to escape a long-forgotten city',
                },
                {
                    image: 'img/05.webp',
                    title: "Marvel's Avengers",
                    text: 'Marvel\'s Avengers is an epic, third-person, action-adventure game that combines an original, cinematic story with single-player and co-operative gameplay.',
                }
            ]
        }
    },
    methods: {
        thisImg(a) {
            clearInterval(this.autoPlayInterval);
            this.currentImg = a;
            this.autoPlayInterval = setInterval(this.showNext, 3000);
        },
        showNextBtn() {
            clearInterval(this.autoPlayInterval);
            this.showNext();
            this.autoPlayInterval = setInterval(this.showNext, 3000);
        },
        showNext() {
            if(this.currentImg < this.slides.length - 1) {
                this.currentImg++;
            }else {
                this.currentImg = 0;
            }
        },
        showPrevBtn() {
            clearInterval(this.autoPlayInterval);
            if(this.currentImg > 0) {
                this.currentImg--;
            }else {
                this.currentImg = this.slides.length -1;
            }
            this.autoPlayInterval = setInterval(this.showNext, 3000);
        },
        autoPlay() {
            this.autoPlayInterval = setInterval(this.showNext, 3000);
        },
        clearAutoPlay() {
            clearInterval(this.autoPlayInterval);
        }
    },
    mounted() {
        this.autoPlay();
    }
}).mount("#app")