class Help extends Phaser.Scene {
    constructor() {
      super('help');
    }

    preload ()
    {
      this.load.image('background', 'assets/background.png');
      this.load.image('txt_help', 'assets/txt_help.png');
      this.load.image('txt_help_en', 'assets/txt_help_en.png');
      this.load.image('txt_help_br', 'assets/txt_help_br.png');
      this.load.image('enemy', 'assets/Bacteria5.png');
      this.load.spritesheet('manito_click', 'assets/manito_click.png', { frameWidth: 80, frameHeight: 81 });
      this.load.image('back_button', 'assets/back_button.png');
      this.load.audio("click", "assets/audio/Boton.mp3");
      this.load.audio("menu", "assets/audio/menu.mp3");  
      this.load.image('ayuda_puntos', 'assets/ayuda_puntos.png');
      this.load.image('ayuda_puntos_en', 'assets/help_points.png');
      this.load.image('ayuda_puntos_br', 'assets/ayuda_puntos_br.png');
      this.load.image('siguiente', 'assets/siguiente.png');
      this.load.image('ayuda_qte', 'assets/ayuda_qte.png');
      this.load.image('ayuda_qte_en', 'assets/help_qte.png');
      this.load.image('ayuda_qte_br', 'assets/ayuda_qte_br.png');
      this.load.image('mejora_es', 'assets/ayuda_mejoras.png');
      this.load.image('mejora_en', 'assets/ayuda_mejoras_en.png');
      this.load.image('mejora_por', 'assets/ayuda_mejoras_br.png');

    }

    create() {
      var background = this.add.image( 400, 300, 'background').setDisplaySize(800, 600);
      var enemy = this.add.image(400,300, 'enemy').setScale(2);
      var manito_click = this.add.sprite(400,420, 'manito_click').setScale(1.8); 
      var next = this.add.image(700, 520, 'siguiente').setInteractive().setScale(1.3);
      var music = this.sound.add("click", {loop: false});  
      

      if (idioma == "por"){
        var txt_help = this.add.image( 400, 100, 'txt_help_br').setScale(1.9);
        var ayuda_puntos = this.add.image(400,300, 'ayuda_puntos_br').setDisplaySize(800, 600);
        var ayuda_qte = this.add.image(400,300, 'ayuda_qte_br').setDisplaySize(800, 600);
        var mejoras = this.add.image(400,300, 'mejora_por').setDisplaySize(800, 600);
      } else if ( idioma == "en"){
        var txt_help = this.add.image( 400, 100, 'txt_help_en').setScale(1.9);
        var ayuda_puntos = this.add.image(400,300, 'ayuda_puntos_en').setDisplaySize(800, 600);
        var ayuda_qte = this.add.image(400,300, 'ayuda_qte_en').setDisplaySize(800, 600);
        var mejoras = this.add.image(400,300, 'mejora_en').setDisplaySize(800, 600);
      } else {
        var txt_help = this.add.image( 400, 100, 'txt_help').setScale(1.9);
        var ayuda_puntos = this.add.image(400,300, 'ayuda_puntos').setDisplaySize(800, 600);
        var ayuda_qte = this.add.image(400,300, 'ayuda_qte').setDisplaySize(800, 600);
        var mejoras = this.add.image(400,300, 'mejora_es').setDisplaySize(800, 600);
      }

      ayuda_puntos.setVisible(false);
      mejoras.setVisible(false);
      ayuda_qte.setVisible(false)
      var nxt = 1;
      next.on("pointerdown", () => {
        
        if(nxt == 2){
          ayuda_puntos.setVisible(false);
          manito_click.setVisible(true);
          txt_help.setVisible(true);
          enemy.setVisible(true);
          ayuda_qte.setVisible(false);
          mejoras.setVisible(false);
          nxt = 1;
        } else if(nxt == 1){
          nxt = 3;
          ayuda_puntos.setVisible(true);
          manito_click.setVisible(false);
          txt_help.setVisible(false);
          enemy.setVisible(false);
          ayuda_qte.setVisible(false);
          mejoras.setVisible(false);
        } else if(nxt == 3){
          ayuda_puntos.setVisible(false);
          manito_click.setVisible(false);
          txt_help.setVisible(false);
          enemy.setVisible(false);
          ayuda_qte.setVisible(false);
          mejoras.setVisible(true);
          nxt = 4;
        } else {
          nxt = 2;
          ayuda_puntos.setVisible(false);
          manito_click.setVisible(false);
          txt_help.setVisible(false);
          enemy.setVisible(false);
          ayuda_qte.setVisible(true); 
          mejoras.setVisible(false);
        }
      });

      this.anims.create({
        key: 'manito_click',
        repeat: -1,
        frameRate: 10,
        frames: this.anims.generateFrameNames('manito_click', {Start: 1, end: 6})     

      });
      manito_click.play('manito_click');      
      
      var botonatras = this.add.image( 100, 520, 'backboton').setDisplaySize(90, 90);
      botonatras.setInteractive();
      botonatras.on("pointerdown", () => {
        music.play();
        this.scene.start('Menuprincipal');
    });
      
    }
}
