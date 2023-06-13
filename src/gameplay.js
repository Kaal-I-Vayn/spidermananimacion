GamePlayManager = {
    init: function() {
        game.scale.scaleMode = Phaser.ScaleManager.SHOW_ALL;
        game.scale.pageAlignHorizontally = true;
        game.scale.pageAlignVertically = true;
    },
    preload: function() {
		var me=this;
        me.load.image('background',"assets/images/fondo1366x768.png");
		me.load.spritesheet("spidiazul","assets/images/Captursa.png",116.285714,170);
		me.load.spritesheet("spidiazul2","assets/images/Captursa2.png",120.42,256);
		me.load.spritesheet("spidiazul3","assets/images/Captursa3.png",193,210);
		me.load.spritesheet("fron","assets/images/frontal1366x768.png",1366,768);
		me.load.spritesheet("spidirojo","assets/images/spidirojo.png",271.5,210);
		me.load.spritesheet("spidirojo1","assets/images/spidirojo1.png",157,163);
		me.load.spritesheet("spidirojo2","assets/images/spidirojo2.png",122,186);
		me.load.spritesheet("spidirojo3","assets/images/spidirojo3.png",105,207);
		
    },
    create: function() {
		var me=this;
        me.game.add.sprite(0, 0, 'background');
				
		me.spidiazul2= me.game.add.sprite(870,340,"spidiazul2");
		me.spidiazul2.animations.add("right",[0,1,2,3,4,5,6],5,true);
		me.spidiazul2.animations.play("right");

		me.spidirojo3= me.game.add.sprite(920,540,"spidirojo3");
		me.spidirojo3.animations.add("right",[0,1,2,3,4,5,6,7],4,true);
		me.spidirojo3.animations.play("right");

		me.fron= me.game.add.sprite(0,0,"fron");

		me.spidiazul= me.game.add.sprite(0,540,"spidiazul");
		me.spidiazul.animations.add("right",[0,1,2,3,4,5,6],8,true);
		me.spidiazul.animations.play("right");

		me.spidiazul3= me.game.add.sprite(140,120,"spidiazul3");
		me.spidiazul3.animations.add("right",[0,1,2,3],4,true);
		me.spidiazul3.animations.play("right");
		
		me.spidirojo= me.game.add.sprite(1300,0,"spidirojo");
		me.spidirojo.animations.add("right",[0,1,2,3,4,5],8,true);
		me.spidirojo.animations.play("right");

		me.spidirojo1= me.game.add.sprite(1080,140,"spidirojo1");
		me.spidirojo1.animations.add("right",[0,1,2,3,4,5,6,7,8,9,10],8,true);
		me.spidirojo1.animations.play("right");

		me.spidirojo2= me.game.add.sprite(1300,540,"spidirojo2");
		me.spidirojo2.animations.add("right",[0,1,2,3,4,5,6,7,8,9,10,11],8,true);
		me.spidirojo2.animations.play("right");

		me.game.cursores=me.input.keyboard.createCursorKeys();
		me.game.physics.startSystem(Phaser.Physics.ARCADE);
		
    },
    update: function() {
		var me=this;
		
		me.spidiazul.x+=1;
		me.spidiazul2.y+=-1;
		me.spidirojo.x+=-1;
		me.spidirojo2.x+=-1;
		me.spidirojo3.y+=-1;
		if(me.spidiazul.x>=me.game.world.width){
			me.spidiazul.x=-100;
			}
		if(me.spidiazul2.y>=me.game.world.width){
			me.spidiazul2.y=100;
			}
		if(me.spidirojo.x>=me.game.world.width){
			me.spidirojo.x=-100;
			}
		if(me.spidirojo2.x>=me.game.world.width){
			me.spidirojo2.x=-100;
			}
		if(me.spidirojo3.y>=me.game.world.width){
			me.spidirojo3.y=100;
			}
    }
}

var game = new Phaser.Game(1366, 768, Phaser.CANVAS);
    
game.state.add("gameplay", GamePlayManager);
game.state.start("gameplay");