//deleting objects using splice()
var bubbles = [];


function setup()
{
  createCanvas(outerWidth,outerHeight);
    background(0);
}

function mousePressed()
{
    var b = new Bubble(mouseX,mouseY);
    bubbles.push(b);
}

function draw()
{
    background(0);
    
    for(var i = bubbles.length - 1; i >= 0; i--)
        {
            bubbles[i].move();
            bubbles[i].display();
            if(bubbles[i].isFinished())
               {
               bubbles.splice(i,1);
               }
        }
}

function Bubble(x,y)
{  
    this.x = x;
    this.y = y;
    this.lifespan = 255;

        
        this.display = function()  
        {
        stroke(255);
        fill(255,this.lifespan);
        ellipse(this.x,this.y,25,25);
        } 
        
        this.isFinished = function()
        {
            if(this.lifespan < 0)
                {return true;}
            else
                {return false;}
        }
        
        this.move = function()
        {
        this.x = this.x + random(-1,1);
        this.y = this.y + random(-1,1);
            this.lifespan = this.lifespan - 1;
        }
}
