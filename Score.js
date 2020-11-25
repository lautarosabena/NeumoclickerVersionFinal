class Score extends Phaser.Scene {
  constructor() {
    super('score');
  }

  preload ()
  {
    
    this.load.image('score', 'assets/Ranking.jpg');
    this.load.image('score_en', 'assets/Ranking_en.jpg');
    this.load.image('score_br', 'assets/Ranking_br.jpg');
    this.load.audio("click", "assets/audio/Boton.mp3");
    this.load.image('backboton', 'assets/back_button.png');
    
  }
  create() {
      var value = localStorage.getItem("puntosm");
      var minutos = localStorage.getItem("minutos");
      var segundos = localStorage.getItem("segundos");
      var gastados = localStorage.getItem("Pgastados");
      if (idioma == "por"){
        var Score = this.add.image( 400, 300, 'score_br').setDisplaySize(800, 600);
      } else if ( idioma == "en"){
        var Score = this.add.image( 400, 300, 'score_en').setDisplaySize(800, 600);
      } else {
        var Score = this.add.image( 400, 300, 'score').setDisplaySize(800, 600);
      }
      
      var atras = this.add.image( 100, 500, 'backboton').setDisplaySize(90, 90);
      var music = this.sound.add("click", {loop: false});
      atras.setInteractive();

      atras.on("pointerdown", () => {
        music.play();
        this.scene.start('Menuprincipal');
      });
      
      if(value != null){
        this.add.text(570, 375, value,{fill: '#ff417d',  fontSize: '48px', stroke: '#000', strokeThickness: 2});
        this.add.text(120, 375, '0' + minutos + ':' + segundos, {fill: '#ff417d',  fontSize: '48px', stroke: '#000', strokeThickness: 2});
        this.add.text(390, 375, gastados, {fill: '#ff417d',  fontSize: '48px', stroke: '#000', strokeThickness: 2});
      } else {
        this.add.text(570, 375, '0',{fill: '#ff417d',  fontSize: '48px', stroke: '#000', strokeThickness: 2});
        this.add.text(120, 375, '0' + '0' + ':' + '00', {fill: '#ff417d',  fontSize: '48px', stroke: '#000', strokeThickness: 2});
        this.add.text(390, 375, '0', {fill: '#ff417d',  fontSize: '48px', stroke: '#000', strokeThickness: 2});
      }
      

  }

}
