'use strict';

class Carousel {

    constructor  (imagesPaths, currentIndex = 0){

        if (!Array.isArray(imagesPaths) || isNaN(currentIndex)){
            throw new TypeError();
        }


        if (currentIndex < 0 || currentIndex > imagesPaths.length - 1){
            throw new RangeError()
        }


        this._imagesPaths = imagesPaths;
        this._currentIndex = currentIndex;
    }

    get currentIndex () {
        return this.currentIndex;
    }

    set currentIndex (value) {
       if (isNaN(this.value)){
           throw new TypeError();
       }

       if (value < 0 || value > this.length -1){
           throw  new RangeError()
       }
       this._currentIndex = value;
    }


     get imagesPaths (){
        return this.imagesPaths;
     }

     get length () {
        return this.imagesPaths.length;
     }

     goNext(){
    this.currentIndex = Carousel.getNextIndex(this.currentIndex, this.length);
     }

     goPrev (){
    this.currentIndex = Carousel.getPrevIndex(this.currentIndex, this.length);
     }

     /**
      * @param in
      * @param
      * @param
      *
      * */

     static getNextIndex(index, length){
    return (index + 1) % length;
     }

     static getPrevIndex(index, length){
         return (index - 1 + length ) % length;
     }

}

export default Carousel;