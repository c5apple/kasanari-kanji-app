import { Component, OnInit } from '@angular/core';

/**
 * プレイ画面
 */
@Component({
  selector: 'app-play',
  templateUrl: './play.component.html',
  styleUrls: ['./play.component.scss']
})
export class PlayComponent implements OnInit {

  /** 出題漢字 */
  private characters: string;

  constructor() { }

  ngOnInit() {
    this.characters = '漢字';
  }

}
