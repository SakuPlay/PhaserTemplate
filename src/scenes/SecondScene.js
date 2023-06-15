export default class SecondScene extends Phaser.Scene 
{
  constructor() {
    super({ key: "SecondScene"})
  }

  create () 
  {
    this.add.text(0, 0, "Second Scene");
    var btnFirst = this.add.text(0,20, "Go to First Scene", {backgroundColor: "#00df00"});
    btnFirst.setInteractive();

    let self = this;
    btnFirst.on(Phaser.Input.Events.POINTER_DOWN, ()=>{
      self.scene.start("FirstScene");
    })
  }
}