import { Component } from '@angular/core';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.scss']
})
export class FeaturesComponent {

  _ace = [
    {
      id: "place",
      text: "With our foundation credit you can build your nest as you always wished."
    },
    {
      id: "pace",
      text: "Our cards will not let you get stuck without penny wherever you are."
    },
    {
      id: "ace",
      text: "We can help you to make your creative idea a truth with our initial capital."
    }
  ];
  shown = "place"

  changeShown(item: string) {
    this.shown = item
  }

  constructor() { }
}
