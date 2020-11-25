class perderm extends Phaser.Scene {
  constructor() {
    super('perderm');
  }

    preload ()
    {
      this.load.image('player_muerto', 'assets/player_muerto.png'); 
      this.load.image('loose_txt', 'assets/loose_txt.png');
      this.load.image('loose_txt_en', 'assets/loose_txt_en.png');
      this.load.image('loose_txt_br', 'assets/loose_txt_br.png');
      this.load.image('background', 'assets/background.png');
      this.load.image('back_button', 'assets/back_button.png');   
      this.load.audio("menu", "assets/audio/menu.mp3");
      this.load.audio("click", "assets/audio/Boton.mp3");
    }

    create() {
      var menu = this.sound.add("menu", {loop: true});
      var background = this.add.image( 400, 300, 'background').setDisplaySize(800, 600);
      if (idioma == "por"){
        var loose_txt = this.add.image( 400, 100, 'loose_txt_br').setScale(2);   
      } else if ( idioma == "en"){
        var loose_txt = this.add.image( 400, 100, 'loose_txt_en').setScale(2);   
      } else {
        var loose_txt = this.add.image( 400, 100, 'loose_txt').setScale(2);   
      }
         
      var player_muerto = this.add.image(400,350, 'player_muerto').setScale(3);   
      var click = this.sound.add("click", {loop: false})
      var back_button = this.add.image(80,500, 'back_button').setScale(1.5);
      back_button.setInteractive()
      back_button.setInteractive()
      back_button.on("pointerdown", () => {
        click.play();
        menu.play();
        this.scene.start('Menuprincipal');
    });

      
    }
}
