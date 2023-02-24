class Sprite {
    constructor({ position, imageSrc }) {
      /*position independent of one another. wrapping in an object makes u pass through one argument instead of two cat pass through velocity first*/
      //define the properties associated with the sprite
      this.position = position;
      this.height = 150;
      this.width = 50;
      this.image = new Image();
      this.image.src = imageSrc;
    }
    drawSprite() {
        ctx.drawImage(this.image, this.position.x, this.position.y);
    }
    update() {
      this.drawSprite();
    }
  }
  
  class Fighter {
    constructor({ position, velocity, color = "blue", offset }) {
      /*position independent of one another. wrapping in an object makes u pass through one argument instead of two cat pass through velocity first*/
      //define the properties associated with the sprite
      this.position = position;
      this.velocity = velocity;
      this.height = 150;
      this.width = 50;
      this.lastKey;
      this.attackBox = {
        position: {
          x: this.position.x,
          y: this.position.y,
        },
        offset,
        width: 100,
        height: 50,
      };
      this.color = color;
      this.isAttacking;
      this.health = 100;
    }
    drawSprite() {
      ctx.fillStyle = this.color;
      ctx.fillRect(this.position.x, this.position.y, this.width, this.height); //were drawing on the canvas so we fill in spaces(referencing x)
  
      //attack box
      if (this.isAttacking) {
        ctx.fillStyle = "green";
        ctx.fillRect(
          this.attackBox.position.x,
          this.attackBox.position.y,
          this.attackBox.width,
          this.attackBox.height
        );
      }
    }
  
    moveSprite() {
      this.drawSprite();
      this.attackBox.position.x = this.position.x - this.attackBox.offset.x;
      this.attackBox.position.y = this.position.y;
      //this.velocity.y += gravity
      this.position.x += this.velocity.x; //
      this.position.y += this.velocity.y; //over time our position has velocity is added to it but dont forget to call this function in the animation function
      if (
        this.position.y + this.height + this.velocity.y >=
        canvasElement.height
      ) {
        this.velocity.y = 0;
        //this.height === to the bottom of the rec if the stops from dropping off pagee
      } else this.velocity.y += gravity;
    }
  
    attack() {
      this.isAttacking = true;
      setTimeout(() => {
        this.isAttacking = false;
      }, 100);
    }
  }