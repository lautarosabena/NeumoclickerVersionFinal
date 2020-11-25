class inter extends Phaser.Scene {
  constructor() {
    super('inter');
  }

  preload (){
    this.load.image('backg', 'assets/background.png');
    this.load.image('play', 'assets/siguiente.png');
    this.load.image('info1', 'assets/info1.png');
    this.load.image('info2', 'assets/info2.png');
    this.load.image('info3', 'assets/info3.png');
    this.load.image('info1_en', 'assets/info1_en.png');
    this.load.image('info2_en', 'assets/info2_en.png');
    this.load.image('info3_en', 'assets/info3_en.png');
    this.load.image('info1_br', 'assets/info1_br.png');
    this.load.image('info2_br', 'assets/info2_br.png');
    this.load.image('info3_br', 'assets/info3_br.png');
  }

  create() {
    var resume = this.add.image( 400, 300, 'backg').setDisplaySize(800, 600);
    var play = this.add.image(400, 500, 'play').setInteractive();
    var info = this.add.image(400, 300, 'info1').setDisplaySize(700, 500);
    var ran = Phaser.Math.Between(1,3);
    if(ran == 1){
      if (idioma == "por"){
        info.setTexture('info1_br');
      } else if ( idioma == "en"){
        info.setTexture('info1_en');
      } else {
        info.setTexture('info1');
      }
    } else if(ran == 2){
      if (idioma == "por"){
        info.setTexture('info2_br');
      } else if ( idioma == "en"){
        info.setTexture('info2_en');
      } else {
        info.setTexture('info2');
      }
    } else if( ran == 3){
      if (idioma == "por"){
        info.setTexture('info3_br');
      } else if ( idioma == "en"){
        info.setTexture('info3_en');
      } else {
        info.setTexture('info3');
      }
    }
        play.on("pointerdown", () => {
          this.scene.stop();
          this.scene.resume('gameplay');
        });
    }



  update() {

  }
}