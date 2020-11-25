class resumir extends Phaser.Scene {
  constructor() {
    super('resumir');
  }

  preload ()
  {   
    this.load.image('resume', 'assets/resume.png');
    this.load.image('resume_en', 'assets/resume_en.png');
    this.load.image('backboton', 'assets/back_button.png');
    this.load.image('home', 'assets/home.png');
    this.load.image('bg_pausa', 'assets/bg_pausa.png');
    this.load.image('no', 'assets/no.png');
    this.load.image('si', 'assets/si.png');
    
  }

  create() {
    var bg_pausa = this.add.image(400,300, 'bg_pausa').setVisible(true);

    if (idioma == "por"){
      var resume = this.add.image( 500, 300, 'resume').setDisplaySize(651, 250);
    } else if ( idioma == "en"){
      var resume = this.add.image( 500, 300, 'resume_en').setDisplaySize(651, 250);
    } else {
      var resume = this.add.image( 500, 300, 'resume').setDisplaySize(651, 250);
    }
    
    var si = this.add.image(400, 530, 'si').setInteractive().setVisible(false);
    var no = this.add.image(600, 530, 'no').setInteractive().setVisible(false);
    var jugar = this.add.image(400, 400, 'backboton').setScale(1.5).setInteractive();
    var menu = this.add.image(600, 400, 'home').setScale(3).setInteractive();

        jugar.on("pointerdown", () => {
          this.scene.stop();
          this.scene.resume('gameplay');   
                 
        });

        menu.on("pointerdown", () => {
          if (idioma == "por"){
            var confirmacion = this.add.text(290, 470, 'Seguro? (Comfirme para voltar ao menu)',{fontSize: '20px'});
          } else if ( idioma == "en"){
            var confirmacion = this.add.text(235, 470, 'Are you sure? (Confirm to return to the menu)',{fontSize: '20px'});
          } else {
            var confirmacion = this.add.text(290, 470, 'Seguro? (Confirma para volver al menú)',{fontSize: '20px'});
          }
          si.setVisible(true).setScale(2);
          no.setVisible(true).setScale(2);
          no.on("pointerdown", () =>{
            this.scene.stop();
            this.scene.resume('gameplay');  
            
          });
           
          si.on("pointerdown", () =>{
            this.scene.stop();
            this.scene.stop('gameplay');
            this.scene.start('teaser');  
            this.scene.bringToTop('teaser'); 
            this.sound.stopAll()
            test = 3;
          });

        });

    }

  update() {
  
  }
}