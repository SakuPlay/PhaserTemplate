export default class FirstScene extends Phaser.Scene
{

  constructor() {
    super({ key: 'FirstScene' });
  }

  create () 
  {
    this.add.text(0, 0, "First Scene");
    
    var btnSecond = this.add.text(0,20, "Go to Second Scene", {backgroundColor: "#df0000"});
    btnSecond.setInteractive();

    let self = this;
    btnSecond.on(Phaser.Input.Events.POINTER_DOWN, ()=>{
      self.scene.start("SecondScene");
    })


  }

}