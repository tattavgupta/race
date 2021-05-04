class Form{
    constructor(){
     this.input=createInput("Name")
     this.button=createButton("start")
     this.greeting=createElement("h2")
     this.title=createElement("h1")
     this.reset=createButton("R.I.P code")
    }
    display(){
        this.reset.position(displayWidth-100,20)
        this.title.html("jai shree car race")
        this.title.position(windowWidth/2-100,0)
        this.input.position(windowWidth/2-80,windowHeight/2-100)
        this.button.position(windowWidth/2,windowHeight/2)
        this.button.mousePressed(()=>{
        this.input.hide()
        this.button.hide()
        player.name=this.input.value()
        pc++
        player.index=pc
        player.update()
        player.updatePlayerCount(pc)
        fill("red")
        this.greeting.html("hallo loser "+player.name)
        this.greeting.position(windowWidth/2,windowHeight/4)
        })

        this.reset.mousePressed(()=>{
            game.updateGameState(0)
            player.updatePlayerCount(0)
            db.ref("players").remove()
            Player.updateCarsAtEnd(0)
        })
    }
    hide(){
        this.title.hide()
        this.greeting.hide()
    }
}