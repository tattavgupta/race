class Game{
    constructor(){

    }
    getGameState(){
        db.ref('gameState').on("value",function(data){
            gs=data.val()
        })
    }
    updateGameState(gs){
        db.ref('/').update({gameState:gs})
    }
   async start(){
        if(gs===0){
            player=new Player()
            var playerCountRef = await db.ref('playerCount').once("value");
            if(playerCountRef.exists()){
              pc = playerCountRef.val();
              player.getCount();
            }
            form = new Form()
            form.display();
        }
        car1=createSprite(100,200)
        car2=createSprite(300,200)
        car1.addImage(blueCarIMG)
        car2.addImage(blackCarIMG)
        cars=[car1,car2]
    }
    play(){
        form.hide()
        Player.getPlayerInfo()
        player.getCarsAtEnd()
        if(allPlayers!==undefined){
            image(trackOfDeath,0,-displayHeight*4,displayWidth,displayHeight*5,)
            var index=0
            var x=500
            var y=0
            for(var plr in allPlayers){
                index++
                x=x+200
                y=displayHeight-allPlayers[plr].distance
                cars[index-1].x=x
                cars[index-1].y=y
                if(index===player.index){
                //useless cars[index-1].shapeColor="red"
                fill("purple")
                circle(x,y,60*2)
                    camera.position.x=displayWidth/2
                    camera.position.y=cars[index-1].y
                }
            }
        }
        if(keyIsDown(UP_ARROW)&&player.index!==null){
            player.distance+=10
            player.update()
        }
        if(player.distance>4080){
            gs=2
            player.rank=player.rank+1
            Player.updateCarsAtEnd(player.rank)
            console.log(player.rank)
            textSize(50)
            text("rank: "+player.rank,displayWidth/2-100,camera.position.y-300)
        }
        drawSprites()
    }
}