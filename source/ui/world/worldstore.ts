/*
 Copyright (C) 2013-2015 by Justin DuJardin and Contributors

 Licensed under the Apache License, Version 2.0 (the "License");
 you may not use this file except in compliance with the License.
 You may obtain a copy of the License at

 http://www.apache.org/licenses/LICENSE-2.0

 Unless required by applicable law or agreed to in writing, software
 distributed under the License is distributed on an "AS IS" BASIS,
 WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 See the License for the specific language governing permissions and
 limitations under the License.
 */
import {Component, View} from 'angular2/angular2';
import {GameFeatureObject} from '../../objects/gameFeatureObject';
import {RPGGame} from '../services/rpggame';

@Component({
  selector: 'world-store',
  properties: ['text','title','active']
})
@View({
  templateUrl: 'source/ui/world/worldstore.html'
})
export class WorldDialog {

  static DEFAULT_TEXT:string = 'Nothing to see here';
  static DEFAULT_TITLE:string = 'Untitled';

  text:string = WorldDialog.DEFAULT_TEXT;
  title:string = WorldDialog.DEFAULT_TITLE;
  active:boolean = false;

  constructor(public game:RPGGame) {
    // Dialog bubbles
    game.world.scene.on('dialog:entered', (feature) => {
      this.active = true;
      this.text = feature.text;
      this.title = feature.title;
    });
    game.world.scene.on('dialog:exited', () => {
      this.active = false;
      this.text = WorldDialog.DEFAULT_TEXT;
      this.title = WorldDialog.DEFAULT_TITLE;
    });
  }
}