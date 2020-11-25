class gameplay extends Phaser.Scene {
    
    constructor() {
      super('gameplay');
      
    }
    
    init(data){
        this.data.set('gender', data);
    }
      
        
    preload() {
        
        this.load.image('bacteria', 'assets/enemigo_1.png');
        this.load.image('bacteria2', 'assets/enemigo_2.png');
        this.load.image('bacteria3', 'assets/enemigo_3.png');
        this.load.image('bacteria4', 'assets/enemigo_4.png');
        this.load.image('barraVida', 'assets/lifebar.png');
        this.load.image('barraVidaR', 'assets/lifebar_red.png');
        this.load.image('boton', 'assets/test_button.png');
        this.load.spritesheet('player', 'assets/tix.png', {frameWidth: 59, frameHeight: 91});
        this.load.spritesheet('playerenfermo', 'assets/tix_enfermo.png', {frameWidth: 59, frameHeight: 91});
        this.load.spritesheet('playerw', 'assets/tex.png', {frameWidth: 53, frameHeight: 89});
        this.load.spritesheet('playerwenferma', 'assets/tex_enferma.png', {frameWidth: 53, frameHeight: 89});
        this.load.spritesheet('cielo', 'assets/cielo.png', { frameWidth: 200, frameHeight: 72 });
        this.load.image('jefe1', 'assets/jefe1.png');
        this.load.image('jefe2', 'assets/jefe2.png');
        this.load.image('jefe3', 'assets/Bacteria6.png');
        this.load.image('ciudad', 'assets/lvl_city.png');
        this.load.image('casa', 'assets/lvl_casa.png');
        this.load.image('escuela', 'assets/lvl_escuela.png');
        this.load.image('background', 'assets/background.png');
        this.load.image('marco','assets/marco_gp.png');
        this.load.image('pasti', 'assets/pasti.png');
        this.load.image('qte_bad1', 'assets/qte_bad1.png');
        this.load.image('mancha', 'assets/mancha.png');
        this.load.image('pause', 'assets/pause.png');
        this.load.image('mute', 'assets/mute.png');
        this.load.image('coin', 'assets/coin.png');
        this.load.image('espadita', 'assets/espadita.png');
        this.load.image('aa', 'assets/autoAtk.png');
        this.load.spritesheet('mariposa', 'assets/mariposa.png', {frameWidth: 32, frameHeight: 32});
        this.load.spritesheet('cat', 'assets/cat.png', {frameWidth: 32, frameHeight: 32});
        this.load.image('avion', 'assets/avion.png');
        this.load.image('sound', 'assets/sound.png');
        this.load.audio('musica_casa', 'assets/audio/hogar.mp3');
        this.load.audio('musica_city', 'assets/audio/ciudad.mp3');
        this.load.audio('musica_escuela', 'assets/audio/escuela.mp3');
        this.load.audio('desventaja', 'assets/audio/Personaje_danado.mp3');
        this.load.audio('coin1', 'assets/audio/coin.mp3');
        this.load.audio('sick', 'assets/audio/Personaje_daniado.mp3');
        
    }
    

    create() { 
        
        //Stats enemigo
        var x;
        var vida = 10;
        var maxVida = 10;
        var barraVida;
        var ex = 400;
        var ey = 300;
        
        //stast player
        var atk = 1;
        var puntos = 0;
        var tiempo;
        var vidaP = 20;
        var maxVidaP = 20;
        var barraVidaPlayer;
        var autoAtk = 0;
        var cont_en = 0; 
        var cont_ad = 0;
        //--------------------------- 
        
        var aa = 0;
        var del = 1500;

        //-------- mejoras
        
        var shake2 = 0;
        var shake = 0;
        //##### Funciones ###
        function inter(){
            if(cont_en == 7 || cont_en == 14){
                mari.setVisible(false);
                mari1.setVisible(false);
                cat.destroy();
                lol.pause = true;
                cont_en +=1;
                this.scene.pause();
                this.scene.launch('inter');
                
                
            } else if(cont_en > 14){
                mari1.setVisible(true);
                mari.setVisible(true);
            }
            if(cont_en == 6 && cont_ad == 6){
            this.cameras.main.shake(1000, 0.05);
            cont_ad += 1;
            } 
            if(cont_en == 13 && cont_ad == 13){
                this.cameras.main.shake(1000, 0.05);
                cont_ad += 1;
                console.log(cont_ad);         
            }
            if(cont_en == 22 && cont_ad == 22){
                this.cameras.main.shake(1000, 0.05);
                cont_ad += 1;
                console.log(cont_ad);         
            }
            
        }

        var coin1 = this.sound.add("coin1", {loop: false});
        
        shake = 0;
        shake2 = 0;
        //cambio de escena
        function cambio (){
            //localStorage.setItem("segundos", seg);
            //localStorage.setItem("minutos", min);
            
            if(cont_en == 23 && gender == 2){
                if(min == 2 && seg <= 1 || min <= 1 && seg <= 59){
                    puntos+=45;
                } else if (min == 2 && seg <= 45 ) {
                    puntos+=30;
                } else if(min < 3){
                    puntos+=15;
                }
                localStorage.setItem("segundos", seg);
                localStorage.setItem("minutos", min);
                localStorage.setItem("Pgastados", gastados);
                if(puntos > localStorage.getItem("puntosm")){
                    localStorage.setItem("puntosm", puntos);
                    localStorage.setItem("segundos", seg);
                    localStorage.setItem("minutos", min);
                    localStorage.setItem("Pgastados", gastados);
                }
                

            this.scene.start('ganarm1', puntos); // Se envian los datos a otra escena
            casaM.stop();
            cityM.stop();
            escuelaM.stop();
            
            } else if(cont_en == 23 && gender != 2) {
                if(min == 2 && seg <= 1 || min <= 1 && seg <= 59){
                    puntos+=45;
                } else if (min == 2 && seg <= 45 ) {
                    puntos+=30;
                } else if(min < 3){
                    puntos+=15;
                }
                localStorage.setItem("segundos", seg);
                localStorage.setItem("minutos", min);
                localStorage.setItem("Pgastados", gastados);
                if(puntos > localStorage.getItem("puntosm")){
                    localStorage.setItem("puntosm", puntos);
                    localStorage.setItem("segundos", seg);
                    localStorage.setItem("minutos", min);
                    localStorage.setItem("Pgastados", gastados);
                }
                this.scene.start('ganarw1', puntos);
                casaM.stop();
                cityM.stop();

            }

        }
        
        //Autoataque
        function onEvent (){
            if(aa >= 1){
                if(vida >= 1 && vida > 0){
                    vida = vida - autoAtk;
                    barraVida.setScale(vida/maxVida*1,0.5);
                    if(cont_en == 6 || cont_en == 13 || cont_en == 22){
                        barraVida.setScale(vida/maxVida*3,0.5);
                    }
                } 
            } 
        }

        function avioneta(){
            if(cont_en >= 7 && cont_en <= 13){
                var avion = this.add.image(250, Phaser.Math.Between(10,100), 'avion').setFlipX(true).setScale(0.5);
                this.physics.world.enable(avion);
                avion.body.setVelocity(100, 0);
            }
            
        }
        var avionetaT = this.time.addEvent({ delay: Phaser.Math.FloatBetween(10000, 20000), callback: avioneta, callbackScope: this, loop: true });
        //funcion para restar vida al player
        
        function atkP(){
            if(vidaP >=1){
                vidaP--;
                barraVidaPlayer.setScale(vidaP/maxVidaP*1, 0.5);
                if(vidaP <= 10 && gender == 2){
                    var lowhp = this.sound.add('sick', {loop: false});
                    if(test == 1){
                        lowhp.play();
                    }
                    player.setTexture('playerenfermo');
                    
                } else if(vidaP <= 10 && gender != 2){
                    var lowhp = this.sound.add('sick', {loop: false});
                    if(test == 1){
                        lowhp.play();
                    }
                    playerm.setTexture('playerwenferma');
                }
                if (vidaP <=0 && gender == 2){
                    this.scene.start('perderm');
                    casaM.stop();
                    cityM.stop();
                    escuelaM.stop();
                    test = 3;
                } else if(vidaP <=0 && gender != 2){
                    this.scene.start('perderw');
                    casaM.stop();
                    cityM.stop();
                    escuelaM.stop();
                    test = 3;
                }
                
            }  
        }


        //evento de accion rapida
        function Qte(){
            var qte = this.add.image(Phaser.Math.FloatBetween(230, 750), 600, 'pasti').setInteractive().setScale(3);
            this.physics.world.enable(qte);
            qte.body.setVelocity(0, Phaser.Math.Between(-100, -200));

            let pastisR = Phaser.Math.Between(1, 2);
            if(pastisR == 1){
                qte.setTexture('pasti');
            } else {
                qte.setTexture('qte_bad1');
            }
            var clickQTE = qte.on('pointerup', function(pointer){
                if(pastisR == 1){
                    puntos +=5;
                    puntosTxt.setText('Puntos: ' + puntos+'$');
                } else {
                    puntos -=5;
                    puntosTxt.setText('Puntos: ' + puntos+'$');
                }
                clickQTE.destroy();
            });
        }
        
        var mancha = this.add.image(210,11, '').setOrigin(0).setDisplaySize(580 , 580);

        
        function aparece_mancha(){
            mancha = this.add.image(210, 11, 'mancha').setOrigin(0).setDisplaySize(580 , 580).setAlpha(0.8);
            var desv = this.sound.add('desventaja', {loop: false});
            if(test == 1){
                desv.play();
            }
            
        }
        var time_mancha = this.time.addEvent({ delay: 9000, callback: aparece_mancha, callbackScope: this, loop: true });

        function desaparece_mancha(){
            mancha.destroy();
        }
        var time_mancha_borrar = this.time.addEvent({ delay: 5000, callback: desaparece_mancha, callbackScope: this, loop: true });
        
        var casaM = this.sound.add("musica_casa", {loop: true});
        var cityM = this.sound.add("musica_city", {loop: true});
        var escuelaM = this.sound.add("musica_escuela", {loop: true});
        casaM.play();
        var bk_Gp = this.add.image(0, 0, 'background').setOrigin(0).setScale(1.92 , 2.5);
        var cielo = this.add.sprite(500, 111, 'cielo').setDisplaySize(579 , 200);
        var mute = this.add.image(64 ,64, 'sound').setScale(1.7);
        var pause = this.add.image(146, 64, 'pause').setScale(1.7);

        
        //boton de pausa
        pause.setInteractive();
        pause.on("pointerdown", () => {
                
                this.scene.pause();
                this.scene.launch('resumir');                
        });
        //boton mute
        mute.setInteractive();
        if(test == 2){
            casaM.pause();
            cityM.pause();
            escuelaM.pause();
            mute.setTexture('mute');
        }
        mute.on("pointerdown", () => {
            if (test !=2) {
            casaM.pause();
            cityM.pause();
            escuelaM.pause();
            mute.setTexture('mute');
            test = 2;
            } else {
                casaM.resume();
                if(cont_en >= 7){
                    cityM.play();
                } 
                if(cont_en >= 12){
                    cityM.stop()
                    escuelaM.play();
                }
                mute.setTexture('sound');
                test = 1;
            } 
        });
        
        //####Creacion y pos de sprites####
        this.anims.create({
            key: 'cielo',
            repeat: -1,
            frameRate: 2,
            frames: this.anims.generateFrameNames('cielo', {Start: 1, end: 7})
        });
        cielo.play('cielo');

        var bk_nivel = this.add.image(210, 11, 'casa').setOrigin(0).setDisplaySize(580 , 580).setInteractive();
        
            
            
        var mari = this.add.sprite(300,Phaser.Math.FloatBetween(300,550), 'mariposa').setScale(1.5)
        this.anims.create({
            key: 'mariposa',
            repeat: -1,
            frameRate: 5,
            frames: this.anims.generateFrameNames('mariposa', {Start: 1, end: 10})
        })
        mari.play('mariposa');
        mari.setFlipX(true)
        
        var mari1 = this.add.sprite(600,Phaser.Math.FloatBetween(300,550), 'mariposa').setScale(1.5)
        this.anims.create({
            key: 'mariposa',
            repeat: -1,
            frameRate: 5,
            frames: this.anims.generateFrameNames('mariposa', {Start: 1, end: 10})
        })
        mari1.play('mariposa');
        
        var cat = this.add.sprite(543,290, 'cat').setScale(1.5).setFlipX(false)
        this.anims.create({
            key: 'cat',
            repeat: -1,
            frameRate: 4,
            frames: this.anims.generateFrameNames('cat', {Start: 0, end: 4})
        })
        cat.play('cat');
         
        var botonAtk = this.add.image(105, 216, 'boton').setInteractive().setScale(1.5);
        var botonAutoAtk = this.add.image(105, 286, 'boton').setInteractive().setScale(1.5);
        var botonCuracion = this.add.image(105, 356, 'boton').setInteractive().setScale(1.5);

        if(idioma == "en"){
            var txt1 = this.add.text(55, 206, 'Attack: $10', {fill: '#000'});
            var txt2 = this.add.text(40, 276, 'AutoAttack:$10', {fill: '#000'});
            var txt3 = this.add.text(44, 346, 'Healing: $10', {fill: '#000'});
        } else if(idioma == "por"){
            var txt1 = this.add.text(55, 206, 'Ataque: $10', {fill: '#000'});
            var txt2 = this.add.text(40, 276, 'AutoAtaque:$10', {fill: '#000'});
            var txt3 = this.add.text(60, 346, 'Cura: $10', {fill: '#000'});
        } else {
            var txt1 = this.add.text(55, 206, 'Ataque: $10', {fill: '#000'});
            var txt2 = this.add.text(40, 276, 'AutoAtaque:$10', {fill: '#000'});
            var txt3 = this.add.text(44, 346, 'Curación: $10', {fill: '#000'});
        }
        var bacteria = this.add.image(ex, ey, 'bacteria').setInteractive().setScale(1.5);
        
        
        //player stats//
        var gender = this.data.get('gender');
        console.log(gender)
        if(gender != 2){
            var playerm = this.add.sprite(100, 460, 'playerw').setScale(1.5);
        this.anims.create({
            key: 'playerw',
            repeat: -1,
            frameRate: 6,
            frames: this.anims.generateFrameNames('playerw', {Start: 1, end: 4})     
    
          });
          playerm.play('playerw');
        } else {
            var player = this.add.sprite(100, 460, 'player').setScale(1.5);
        this.anims.create({
            key: 'player',
            repeat: -1,
            frameRate: 6,
            frames: this.anims.generateFrameNames('player', {Start: 1, end: 4})     
    
          });
          player.play('player');
        }

        var bkVidaPlayer = this.add.image(95, 551, 'barraVidaR').setScale(1, 0.5);
        barraVidaPlayer = this.add.image(95, 551, 'barraVida').setScale(1, 0.5);

        ///------textos feedback
        //puntos
        if (idioma == "por"){
            var puntosTxt = this.add.text(64, 100, 'Pontos: ' + puntos +'$', {fill: '#ffffff' });
        } else if ( idioma == "en"){
            var puntosTxt = this.add.text(64, 100, 'Points: ' + puntos +'$', {fill: '#ffffff' });
        } else {
            var puntosTxt = this.add.text(64, 100, 'Puntos: ' + puntos +'$', {fill: '#ffffff' });
        }
        var coin = this.add.image(48,106, 'coin');

        //ataque
        if (idioma == "por"){
            var atkText = this.add.text(64, 132, 'Ataque: ' + atk, {fill: '#ffffff' });
        } else if ( idioma == "en"){
            var atkText = this.add.text(64, 132, 'Attack: ' + atk, {fill: '#ffffff' });
        } else {
            var atkText = this.add.text(64, 132, 'Ataque: ' + atk, {fill: '#ffffff' });
        }
        var espadita = this.add.image(48, 138, 'espadita');

        //auto ataque
        if (idioma == "por"){
            var aaText = this.add.text(64, 164, 'AutoAtaque: ' + autoAtk, {fill: '#ffffff' });
        } else if ( idioma == "en"){
            var aaText = this.add.text(64, 164, 'AutoAttack: ' + autoAtk, {fill: '#ffffff' });
        } else {
            var aaText = this.add.text(64, 164, 'AutoAtaque: ' + autoAtk, {fill: '#ffffff' });
        }
        var espadita = this.add.image(48, 170, 'aa');

        var centrar = 89;
        var winTxt = this.add.text(bacteria.x-centrar, bacteria.y-90, 'Bacterimus', {fill: '#ff417d',  fontSize: '28px', stroke: '#000', strokeThickness: 2});
                    //------------//
                    
        //barra de vida enemigos
        var posBarraVidaX = bacteria.x;
        var posBarraVidaY = bacteria.y;
        var backgroundBar = this.add.image(bacteria.x, bacteria.y+71, 'barraVidaR').setScale(1, 0.5);
        barraVida = this.add.image(bacteria.x, bacteria.y+71, 'barraVida').setScale(1, 0.5);
        
        
        //ataque enemigo//
        var timeAtk = this.time.addEvent({ delay: del, callback: atkP, callbackScope: this, loop: true });
        var time = this.time.addEvent({ delay: 1, callback: cambio, callbackScope: this, loop: true });
        //auto ataque//
        var tiempo = this.time.addEvent({ delay: 1000, callback: onEvent, callbackScope: this, loop: true });
        //tiempo crear quicktime
        var timeQTE = this.time.addEvent({ delay: Phaser.Math.FloatBetween(4000, 9000), callback: Qte, callbackScope: this, loop: true });
        
        var lol = this.time.addEvent({delay: 1, callback: inter, callbackScope: this, loop: true});

        var puntero = bacteria.on('pointerdown', function(pointer){
            bacteria.setTint(0xff0000);
        });

        var reloj = this.time.addEvent({delay: 1000, callback: mostrarTiempo, callbackScope: this, loop: true});
        var seg = 0;
        var min = 0;
        if (idioma == "por"){
            var timer = this.add.text(452, 16, 'Tempo ' + '0' + min + ':0' + seg,  {fill: '#ff417d',  fontSize: '16px', stroke: '#000', strokeThickness: 1});
        } else if ( idioma == "en"){
            var timer = this.add.text(455, 16, 'Time ' + '0' + min + ':0' + seg,  {fill: '#ff417d',  fontSize: '16px', stroke: '#000', strokeThickness: 1});
        } else {
            var timer = this.add.text(450, 16, 'Tiempo ' + '0' + min + ':0' + seg,  {fill: '#ff417d',  fontSize: '16px', stroke: '#000', strokeThickness: 1});
        }
        
        function mostrarTiempo(){
            if(seg<=9){
                if (idioma == "por"){
                    timer.setText('Tempo ' + '0' + min + ':0'+ seg);
                } else if ( idioma == "en"){
                    timer.setText('Time ' + '0' + min + ':0'+ seg);
                } else {
                    timer.setText('Tiempo ' + '0' + min + ':0'+ seg);
                }
                
            } else {
                if (idioma == "por"){
                    timer.setText('Tempo ' + '0' + min + ':'+ seg);
                } else if ( idioma == "en"){
                    timer.setText('Time ' + '0' + min + ':'+ seg);
                } else {
                    timer.setText('Tiempo ' + '0' + min + ':'+ seg);
                }
            }
            
            seg++;
            if(seg >= 60){
                seg = 0;
                min++;
            }

        }
        
        ///Atacar a la bacteria --------------------------------------------------------
        
        var pointer = bacteria.on('pointerup', function(pointer){ 
            bacteria.setTint();
            vida = vida-atk;
            
            bacteria.x = Phaser.Math.Between(300, 710);
            bacteria.y = Phaser.Math.Between(100, 500);

            barraVida.setScale(vida/maxVida*1,0.5);
            backgroundBar.x = bacteria.x;
            barraVida.x= bacteria.x;
            
            backgroundBar.y = bacteria.y+71;
            barraVida.y= bacteria.y+71;

            if(vida <= 0){
                if(test == 1){
                    coin1.play();
                }
                
                //console.log(vida + ' COIN')
                vida = 0;
                
                //sistema de conteo de enemigos derrotados
                if(cont_en < 5 || cont_en >=6 && cont_en < 12 || cont_en >= 13 && cont_en <= 20){
                    if(cont_en >= 5 && cont_en <=12){
                        bk_nivel.setTexture('ciudad');
                    } else if(cont_en >= 12){
                        bk_nivel.setTexture('escuela');
                    }
                    //cambiar  de bacteria
                    var patron = Phaser.Math.FloatBetween(0, 1);
                    if (patron < 0.2){
                        if(cont_en <= 5){
                            vida = 10;
                            maxVida = 10;
                        } else if(cont_en > 6 && cont_en < 12){
                            vida = 10*4;
                            maxVida = 10*4;
                        } else {
                            vida = 10*8
                            maxVida = 10*8
                        }
                        bacteria.setTexture('bacteria').setScale(1.5);
                        winTxt.setText('Bacterimus');
                        centrar = 89;
                        del = 4000;
                    } else if (patron > 0.2 && patron < 0.5){
                        if(cont_en <= 5){
                            vida = 20;
                            maxVida = 20;
                        } else if(cont_en > 6 && cont_en < 12){
                            vida = 20*4;
                            maxVida = 20*4;
                        } else {
                            vida = 20*8
                            maxVida = 20*8
                        }
                        bacteria.setTexture('bacteria3').setScale(1.5);
                        winTxt.setText('Mucus');
                        centrar = 32;
                        del = 4000;
                    } else if (patron > 0.6 && patron < 0.9){
                        if(cont_en <= 5){
                            vida = 16;
                            maxVida = 16;
                        } else if(cont_en > 6 && cont_en < 12){
                            vida = 16*4;
                            maxVida = 16*4;
                        } else {
                            vida = 16*8
                            maxVida = 16*8
                        }
                        bacteria.setTexture('bacteria2').setScale(1.5);
                        winTxt.setText('Viralys');
                        centrar = 64;
                        del = 4000;
                    } else {
                        if(cont_en <= 5){
                            vida = 16;
                            maxVida = 16;
                        } else if(cont_en > 6 && cont_en < 12){
                            vida = 16*4;
                            maxVida = 16*4;
                        } else {
                            vida = 16*8
                            maxVida = 16*8
                        }
                        bacteria.setTexture('bacteria4').setScale(1.5);
                        winTxt.setText('Viralys');
                        centrar = 64;
                        del = 4000;
                    }
                //jefes
                } else if(cont_en == 5){
                    bacteria.setTexture('jefe1').setScale(2); 
                    winTxt.setText('Fiebrephus');
                    centrar = 89;
                    vida = 75;
                    maxVida = 75;
                    del = 1000;
                    shake = 1;
                } else if (cont_en == 12){
                    bacteria.setTexture('jefe2').setScale(2); 
                    winTxt.setText('Microfito');
                    centrar = 89;
                    vida = 125;
                    maxVida = 125;
                    del = 1000;
                    shake = 2
                } else if(cont_en == 21){
                    bacteria.setTexture('jefe3').setScale(2); 
                    winTxt.setText('Neumococo');
                    centrar = 89;
                    vida = 350;
                    maxVida = 350;
                    del = 1000;
                    shake = 2
                }else{
                    timeAtk.paused = true;
                    timeQTE.paused = true;
                    tiempo.paused = true;
                    bacteria.destroy();//cuando la vida llega a 0, la bacteria se destruye 
                    backgroundBar.destroy();
                    
                }
                cont_ad += 1;
                cont_en += 1;
                puntos += 10; 
                barraVida.setScale(vida/maxVida*1,0.5);
                //console.log(cont_en);
                
               if(cont_en == 7){
                    casaM.stop();
                    if(test == 1){
                        console.log('test = ' + test)
                        cityM.play();
                    }
                    
                }
                if(cont_en == 14){
                    cityM.stop();
                    if(test == 1){
                        console.log('test = ' + test)
                        escuelaM.play();
                    }
                }               
                
            }

            if (idioma == "por"){
                puntosTxt.setText('Pontos: ' + puntos+'$');
            } else if ( idioma == "en"){
                puntosTxt.setText('Points: ' + puntos+'$');
            } else {
                puntosTxt.setText('Puntos: ' + puntos+'$');
            }

            winTxt.x = bacteria.x-centrar;
            winTxt.y = bacteria.y-90;

            if(cont_en == 6 || cont_en == 13 || cont_en == 22){
                backgroundBar.x = 500;
                barraVida.x= 500;
                        
                backgroundBar.y = 550;
                barraVida.y= 550;

                winTxt.x = barraVida.x-centrar;
                winTxt.y = barraVida.y-38;

                barraVida.setScale(vida/maxVida*3,0.5);
                backgroundBar.setScale(3, 0.5);
            } else {
                barraVida.setScale(vida/maxVida*1,0.5);
                backgroundBar.setScale(1, 0.5);
            }
            
         });
         
        //--- mejoras --//

        var gastados = 0;
        
        var clickBtn = botonAtk.on('pointerup', function(pointer){
            if(puntos >= 10){
                if(atk == 1){
                    atk += 1;
                    if (idioma == "por"){
                        atkText.setText('Ataque: ' + atk);
                    } else if ( idioma == "en"){
                        atkText.setText('Attack: ' + atk);
                    } else {
                        atkText.setText('Ataque: ' + atk);
                    }
                }else{
                    atk += 2;
                    if (idioma == "por"){
                        atkText.setText('Ataque: ' + atk);
                    } else if ( idioma == "en"){
                        atkText.setText('Attack: ' + atk);
                    } else {
                        atkText.setText('Ataque: ' + atk);
                    }
                }
                puntos -= 10;
                gastados += 10;
                if (idioma == "por"){
                    puntosTxt.setText('Pontos: ' + puntos+'$');
                } else if ( idioma == "en"){
                    puntosTxt.setText('Points: ' + puntos+'$');
                } else {
                    puntosTxt.setText('Puntos: ' + puntos+'$');
                }
            }
        });
        
        //--- autoataque ---//
        var cAA = 2;
        var clickBtnAA = botonAutoAtk.on('pointerup', function(pointer){
            if(puntos >= 10){
                autoAtk++;
                aa++
                puntos -= 10;   
                gastados += 10;
                if (idioma == "por"){
                    puntosTxt.setText('Pontos: ' + puntos+'$');
                    aaText.setText('AutoAtaque: ' + autoAtk); 
                } else if ( idioma == "en"){
                    puntosTxt.setText('Points: ' + puntos+'$');
                    aaText.setText('AutoAttack: ' + autoAtk); 
                } else {
                    puntosTxt.setText('Puntos: ' + puntos+'$');
                    aaText.setText('AutoAtaque: ' + autoAtk); 
                } 
                          
            }
        });

        //curacion//
        var clickCuracion = botonCuracion.on('pointerup', function(pointer){
            if(puntos >= 10 && vidaP < maxVidaP){
                vidaP = maxVidaP;
                puntos -= 10;
                gastados += 10;
                barraVidaPlayer.setScale(vidaP/maxVidaP, 0.5);
                if (idioma == "por"){
                    puntosTxt.setText('Pontos: ' + puntos+'$');
                } else if ( idioma == "en"){
                    puntosTxt.setText('Points: ' + puntos+'$');
                } else {
                    puntosTxt.setText('Puntos: ' + puntos+'$');
                }
            }
        });               
        var marco = this.add.image(0, 0, 'marco').setOrigin(0).setScale(1.92 , 2.5);

        
    }
    
    
    update() {  
    }
 
}






    
