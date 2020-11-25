var config = {
    type: Phaser.AUTO,
      scale: {
          mode: Phaser.Scale.FIT,
          parent: 'phaser-example',
          autoCenter: Phaser.Scale.CENTER_BOTH ,
          width: 800,
          height: 600
      },
    pixelArt: true,
    physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0 },
            debug: false
        }
        
    },
    scene: [Inicio, Teaser, Menuprincipal, Informacion, Help, Personaje, gameplay, ganarw, ganarm, perderw, perderm, Score, resumir, inter],
    update: function (time, delta) {}
};
var game = new Phaser.Game(config);
var test = 1;
var asdasd = 1;
var idioma = "en";