// @ts-check

/**
 * Implement the classes etc. that are needed to solve the
 * exercise in this file. Do not forget to export the entities
 * you defined so they are available for the tests.
 */
export function Size(width,height)
{
  this.width=width ?? 80;
  this.height=height?? 60;
  
}
Size.prototype.resize=function(width,height)
{
  this.width=width;
  this.height=height;
}

export function Position(x,y) {
  
  this.x=x??0;
  this.y=y ?? 0;

  
}
Position.prototype.move=function(newx,newy)
  {
    this.x=newx;
    this.y=newy;
    
  }

export class ProgramWindow{


  constructor()
  {
      this.screenSize=new Size(800,600);
  this.size=new Size();
  this.position=new Position();
  }
   resize(size)
  {
    if(size.width<1)
    {
      size.width=1;
    }
    if(size.height<1)
    {
      size.height=1;
    }
    if(size.width+this.position.x> this.screenSize.width)
    {
      size.width=this.screenSize.width-this.position.x;
    }
     if(size.height+this.position.y> this.screenSize.height)
    {
      size.height=this.screenSize.height-this.position.y;
    }
    this.size.resize(size.width,size.height);
  }
  move(position)
  {
  
    let a=(this.screenSize.width-this.size.width);
        let b=(this.screenSize.height-this.size.height);
  position.x=(position.x>a)?a:position.x;
    position.y=(position.y>b)?b:position.y
    if(position.x<0)
    {
      position.x=0;
    }
    if(position.y<0)
    {
      position.y=0
    }
    this.position.move(position.x,position.y)
    
  }

  
}

export function  changeWindow(programWindow)
{
  let s=new Size(400,300);
  let p=new Position(100,150);

  programWindow.resize(s);
  programWindow.move(p);
  console.log(programWindow.size)
  return programWindow
  
}