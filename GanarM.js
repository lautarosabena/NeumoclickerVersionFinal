class ganarm extends Phaser.Scene {
    constructor() {
      super('ganarm1');
    }
    // Se traen los puntos de la otra escena
    init(data){
      this.data.set('puntos', data);
    }
   


    preload ()
    {
      this.load.spritesheet('menwin', 'assets/menwin.png',  { frameWidth: 59, frameHeight: 91 });
      this.load.image('win_txt', 'assets/win_txt.png');
      this.load.image('win_txt_en', 'assets/win_txt_en.png');
      this.load.image('win_txt_br', 'assets/win_txt_br.png');
      this.load.image('background', 'assets/background.png');
      this.load.image('back_button', 'assets/back_button.png');   
      this.load.audio("menu", "assets/audio/menu.mp3");
      this.load.audio("click", "assets/audio/Boton.mp3");
    }
    
    create() {
      var click = this.sound.add("click", {loop: false})
      var background = this.add.image( 400, 300, 'background').setDisplaySize(800, 600);
      if (idioma == "por"){
        var win_txt = this.add.image( 400, 100, 'win_txt_br').setScale(2); 
      } else if ( idioma == "en"){
        var win_txt = this.add.image( 400, 100, 'win_txt_en').setScale(2); 
      } else {
        var win_txt = this.add.image( 400, 100, 'win_txt').setScale(2); 
      }
                
      var menu = this.sound.add("menu", {loop: true});
      var menwin = this.add.sprite(200, 300, 'menwin').setScale(3);
      this.anims.create({
        key: 'menwin',
        repeat: -1,
        frameRate: 10,
        frames: this.anims.generateFrameNames('menwin', {Start: 1, end: 4})
      });
      menwin.play('menwin')     
      
      var back_button = this.add.image(80,500, 'back_button').setScale(1.5);
      back_button.setInteractive()
      back_button.on("pointerdown", () => {
        click.play();
        menu.play();
        this.scene.start('Menuprincipal');
    });
      if (idioma == "por"){
        this.add.text(350, 400, ("Total: ") + this.data.get('puntos') + (" pontos"), {fill: '#ff417d',  fontSize: '28px', stroke: '#000', strokeThickness: 2}); // Los detallamos en la escena
        this.add.text(350, 200, 'Tempo: 0' + localStorage.getItem('minutos') + ':'+ localStorage.getItem('segundos'),  {fill: '#ff417d',  fontSize: '28px', stroke: '#000', strokeThickness: 2});
        this.add.text(350, 300, 'Pontos gastos: ' + localStorage.getItem('Pgastados'),  {fill: '#ff417d',  fontSize: '28px', stroke: '#000', strokeThickness: 2}); 
      } else if ( idioma == "en"){
        this.add.text(350, 400, ("Total: ") + this.data.get('puntos') + (" points"), {fill: '#ff417d',  fontSize: '28px', stroke: '#000', strokeThickness: 2}); // Los detallamos en la escena
        this.add.text(350, 200, 'Time: 0' + localStorage.getItem('minutos') + ':'+ localStorage.getItem('segundos'),  {fill: '#ff417d',  fontSize: '28px', stroke: '#000', strokeThickness: 2});
        this.add.text(350, 300, 'Points spent: ' + localStorage.getItem('Pgastados'),  {fill: '#ff417d',  fontSize: '28px', stroke: '#000', strokeThickness: 2}); 
      } else {
        this.add.text(350, 400, ("Total: ") + this.data.get('puntos') + (" puntos"), {fill: '#ff417d',  fontSize: '28px', stroke: '#000', strokeThickness: 2}); // Los detallamos en la escena
        this.add.text(350, 200, 'Tiempo: 0' + localStorage.getItem('minutos') + ':'+ localStorage.getItem('segundos'),  {fill: '#ff417d',  fontSize: '28px', stroke: '#000', strokeThickness: 2});
        this.add.text(350, 300, 'Puntos gastados: ' + localStorage.getItem('Pgastados'),  {fill: '#ff417d',  fontSize: '28px', stroke: '#000', strokeThickness: 2});
      } 
    }
    
}
