import Phaser from 'phaser';
import logoImg from './assets/logo.png';
import FirstScene from './scenes/FirstScene'
import PreloadScene from './PreloadScene';
import SecondScene from './scenes/SecondScene';


const config = {
    type: Phaser.AUTO,
    parent: 'phaser-example',
    width: 800,
    height: 600,
    inputMouse: true
};

const game = new Phaser.Game(config);


game.scene.add('PreloadScene', new PreloadScene);
game.scene.add('FirstScene', new FirstScene());
game.scene.add('SecondScene', new SecondScene());


game.scene.start('PreloadScene');