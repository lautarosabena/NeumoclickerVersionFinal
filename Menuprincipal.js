class Menuprincipal extends Phaser.Scene {
  constructor() {
    super('Menuprincipal');
  }

  preload() {
    this.load.image('carga', 'assets/teaser.png');
    
    this.load.spritesheet('titulo_neumoclicker', 'assets/Spriteneumo.png', { frameWidth: 288, frameHeight: 64 });
    this.load.image('jugar', 'assets/boton_jugar.png');
    this.load.image('informacion', 'assets/boton_info.png');
    this.load.image('botonayuda', 'assets/boton_ayuda.png');
    this.load.image('jugar_en', 'assets/boton_jugar_en.png');
    this.load.image('botonayuda_en', 'assets/boton_ayuda_en.png');
    this.load.image('jugar_br', 'assets/boton_jugar_br.png');
    this.load.image('botonayuda_br', 'assets/boton_ayuda_br.png');
    this.load.image('mute', 'assets/mute.png');
    this.load.image('sound', 'assets/sound.png');
    this.load.image('rank', 'assets/boton_rank.png');
    this.load.image('mundo', 'assets/mundo.png');
    this.load.audio("menu", "assets/audio/menu.mp3");
    this.load.audio("click", "assets/audio/Boton.mp3");
    this.load.audio('musica_casa', 'assets/audio/hogar.mp3');
    this.load.audio('musica_city', 'assets/audio/ciudad.mp3');
  }

  create() {
    if(test == 3 ){
      this.sound.pauseAll();
    }
    var fondo = this.add.image( 400, 300, 'fondo').setDisplaySize(800, 600);
    var titulo_neumoclicker = this.add.sprite(400,150, 'titulo_neumoclicker').setScale(1.8);
    this.anims.create({
      key: 'titulo_neumoclicker',
      repeat: -1,
      frameRate: 5,
      frames: this.anims.generateFrameNames('titulo_neumoclicker', {Start: 1, end: 4})     

    });
    titulo_neumoclicker.play('titulo_neumoclicker');
    
    if (idioma == "por"){
      var jugar = this.add.image( 400, 330, 'jugar_br').setDisplaySize(200, 60);
      var ayuda = this.add.image( 120, 330, 'botonayuda_br').setDisplaySize(200, 60);
    } else if ( idioma == "en"){
      var jugar = this.add.image( 400, 330, 'jugar_en').setDisplaySize(200, 60);
      var ayuda = this.add.image( 120, 330, 'botonayuda_en').setDisplaySize(200, 60);
    } else {
      var jugar = this.add.image( 400, 330, 'jugar').setDisplaySize(200, 60);
      var ayuda = this.add.image( 120, 330, 'botonayuda').setDisplaySize(200, 60);
    }
    var informacion = this.add.image( 680, 330, 'informacion').setDisplaySize(200, 60);
    var rank = this.add.image( 400, 460, 'rank').setDisplaySize(200, 60);
    var menu = this.sound.add("menu", {loop: true},);
    var music = this.sound.add("click", {loop: false});
    var x = 1;
    var mundo = this.add.image(720, 64, 'mundo').setScale(1.7).setInteractive();

    mundo.on("pointerdown", () => {
      this.scene.stop();
      this.scene.start('inicio');
      this.sound.stopAll();
    })
    
    //menu.play();
    var mute = this.add.image(64 ,64, 'sound').setScale(1.7);
    if(test != 1){
      mute.setTexture('mute');
    }
    mute.setInteractive();
        mute.on("pointerdown", () => {
          
            if (test == 1) {
              this.sound.pauseAll()
              mute.setTexture('mute');
              console.log('test = ' +test);
              test = 2;
            } else {
              this.sound.resumeAll();
              mute.setTexture('sound')
              console.log('test = ' +test);
              test = 1;
            }
        });
    

    //
    jugar.setInteractive();
      jugar.on("pointerdown", () => {
        if(test == 1){
          music.play();
        }
        asdasd = 2;
        this.scene.start('personaje');
        
    });
    ayuda.setInteractive();
      ayuda.on("pointerdown", () => {
        if(test == 1){
          music.play();
        }
        this.scene.start('help');
        asdasd = 2;
    });
    informacion.setInteractive();
      informacion.on("pointerdown", () => {
        if(test == 1){
          music.play();
        }
        this.scene.start('informacion');
    });
    rank.setInteractive();
      rank.on("pointerdown", () => {
        asdasd = 2;
        if(test == 1){
          music.play();
        }
        this.scene.start('score');
    });
  }
  
  

}

