// @Input to get stuff from parent
// @Output to send stuff to parent

import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  @Input() text: string = '';
  @Input() color: string = '';
  @Output() buttonClick = new EventEmitter();

  constructor() {}

  ngOnInit(): void {}

  handleClick() {
    this.buttonClick.emit();
  }
}
