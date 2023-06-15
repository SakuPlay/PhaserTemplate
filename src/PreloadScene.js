export default class PreloadScene extends Phaser.Scene
{
  constructor()
  {
    super({ key: 'PreloadScene' })
  }

  create()
  {
    this.add.text(0, 0, "Preload scene");
    
    let text = this.add.text(this.game.canvas.width/2, this.game.canvas.height/2, "Splash Screen");
    text.setOrigin(0.5, 0.5)

    let self = this;
    this.time.delayedCall(1000, ()=> {
      self.scene.start("FirstScene");
    });
  }
}