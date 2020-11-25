class Personaje extends Phaser.Scene {
    constructor() {
      super('personaje');
    }

    preload ()
    {
      this.load.image('background', 'assets/background.png');
      this.load.spritesheet('player_woman', 'assets/tex.png', {frameWidth: 53, frameHeight: 89});
      this.load.spritesheet('player_men', 'assets/tix.png', {frameWidth: 59, frameHeight: 91});     
      this.load.image('backboton', 'assets/back_button.png');
      this.load.image('marcop', 'assets/marcop.png');
      this.load.audio("click", "assets/audio/Boton.mp3");
      this.load.audio("menu", "assets/audio/menu.mp3");
      this.load.image('jugar', 'assets/test_button.png');
      this.add.image('jugar_en', 'assets/boton_jugar_en');
      this.add.image('jugar_br', 'assets/boton_jugar_br');
      this.load.image('titulo', 'assets/SELECCIONA.png');
      this.load.image('titulo_en', 'assets/SELECCIONA_en.png');
      this.load.image('titulo_br', 'assets/SELECCIONA_br.png');
    }

    create() {
      var gender;
      var menu = this.sound.add("menu", {loop: true});
      
      var music = this.sound.add("click", {loop: false});
      var background = this.add.image( 400, 300, 'background').setDisplaySize(800, 600);
      var marco1 = this.add.image(550,300, 'marcop').setScale(2);
      var marco2 = this.add.image(250,300, 'marcop').setScale(2);

      if (idioma == "por"){
        var titulo = this.add.image(400, 100, 'titulo_br').setScale(1.5);
      } else if ( idioma == "en"){
        var titulo = this.add.image(400, 100, 'titulo_en').setScale(1.5);
      } else {
        var titulo = this.add.image(400, 100, 'titulo').setScale(1.5);
      }
      
      if (idioma == "por"){
        var jugar = this.add.image(650,510, 'jugar_br').setScale(1.9).setInteractive();
      } else if ( idioma == "en"){
        var jugar = this.add.image(650,510, 'jugar_en').setScale(1.9).setInteractive();
      } else {
        var jugar = this.add.image(650,510, 'jugar').setScale(1.9).setInteractive();
      }
      
      jugar.setVisible(false);
      
      var ani;
      var update = this.time.addEvent({delay: 1, callback: animaciones, callbackScope: this, loop: true});
      function animaciones(){
        if(ani == 2){
          player_woman.play('player_woman');
          marco1.setAlpha(0)
          marco2.setAlpha(1)
        } else if (ani == 1){
          player_men.play('player_men');
          marco2.setAlpha(0)
          marco1.setAlpha(1)
        } else {
          player_woman.play('player_woman');
          player_men.play('player_men');
          marco1.setAlpha(0);
          marco2.setAlpha(0)
        }
      }

      this.anims.create({
        key: 'player_men',
        repeat: -1,
        frameRate: 6,
        frames: this.anims.generateFrameNames('player_men', {Start: 1, end: 4})     

      });

      this.anims.create({
        key: 'player_woman',
        repeat: -1,
        frameRate: 6,
        frames: this.anims.generateFrameNames('player_woman', {Start: 1, end: 4})     

      });

      ///---- seleccion de personaje mujer ----
      var player_woman = this.add.sprite(550, 300, 'player_woman').setScale(2);
      player_woman.setInteractive();

      player_woman.on("pointerdown", () => {
        music.play();
        
        gender = 1;
        jugar.setVisible(true);
        //this.scene.start('gameplay');
        ani = 1;
      });
      
      ///---- seleccion de personaje hombre ----
      var player_men = this.add.sprite(250, 300, 'player_men').setScale(2);
      player_men.setInteractive();
      
      player_men.on("pointerdown", () => {
        gender = 2;
        menu.stop();
        jugar.setVisible(true);
        ani = 2;
      });
      
      jugar.on("pointerdown", () =>{
        this.sound.stopAll();
        this.scene.start('gameplay', gender);
      });
      
      //volver
      var botonatras = this.add.image( 100, 520, 'backboton').setDisplaySize(90, 90);
      botonatras.setInteractive();
      botonatras.on("pointerdown", () => {
        music.play();
        this.scene.start('Menuprincipal', gender);
      });


  
  }
}
  

