import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lib-incognitus',
  template: `
    <ng-content select="[slot='loading']"></ng-content>
    <ng-content select="[slot='enabled']"></ng-content>
    <ng-content select="[slot='disabled']"></ng-content>
  `,
  styles: [],
})
export class IncognitusComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
