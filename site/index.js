var ctx;
var res=2
var Happy
var Birthday
var colorList=["red","orange","yellow","green","blue","indigo","violet"]
window.onload=function(){
var c = document.getElementById("cnv");
ctx = c.getContext("2d");
c.width=600*res
c.height=400*res
happy=new bounceText("Happy",50,50)
birthday=new bounceText("Birthday!",100,400)
interval=setInterval(function(){
    ctx.clearRect(0,0,600*res,400*res)
    ctx.fillStyle="lightskyblue"
    ctx.fillRect(0,0,c.width,c.height)
    happy.move()
    birthday.move()
    happy.draw()
    birthday.draw()

},20)
}


function bounceText(text,x,y){
    this.text=text
    this.x=x
    this.y=y
    this.sx=getRandomIntNoZero(-1,1)
    this.sy=getRandomIntNoZero(1,1)
    this.draw=function(){
        ctx.fillStyle=colorList[randint(0,6)]
        ctx.font = `bold ${36*res}px san-serif`;
        ctx.fillText(this.text,this.x,this.y)
    }
    this.move=function(){
        this.x+=this.sx*2
        this.y+=this.sy*2
        if(this.x<0 | this.x+250>600*res){
            this.sx=-this.sx
        }
        if(this.y-50<0 | this.y+20>400*res){
            this.sy=-this.sy
        }
    }
}
function getRandomIntNoZero (min, max) {
    v=0
    while(v==0){

        v=Math.floor(Math.random() * (max - min + 1)) + min;
    }
    return v
}
function randint (min, max) {

    return Math.floor(Math.random() * (max - min + 1)) + min;
}