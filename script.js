const app = new Vue({

    el: '#app',
    data: {
        ImgZero: 0,

        imgHarley: [
            { url: 'img/harley0.jpeg' },
            { url: 'img/harley1.jpeg' },
            { url: 'img/harley2.jpeg' },
            { url: 'img/harley3.jpeg' },
        ],
    },
    methods: {

        arrowRight: function () {
            this.ImgZero++

            if (this.ImgZero == this.imgHarley.length) {
                this.ImgZero = 0
            }
        },

        arrowLeft: function () {
            this.ImgZero += -1

            if (this.ImgZero < 0) {
                this.ImgZero = (this.imgHarley.length - 1);
            }

        },

    },
});
