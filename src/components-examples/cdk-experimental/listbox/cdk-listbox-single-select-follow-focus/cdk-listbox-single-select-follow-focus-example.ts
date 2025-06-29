import {Component} from '@angular/core';
import {CdkListbox, CdkOption} from '@angular/cdk-experimental/listbox';
import {MatPseudoCheckbox} from '@angular/material/core';

/** @title Listbox with single selection and selection follows focus. */
@Component({
  selector: 'cdk-listbox-single-select-follow-focus-example',
  exportAs: 'cdkListboxSingleSelectFollowFocusExample',
  templateUrl: 'cdk-listbox-single-select-follow-focus-example.html',
  styleUrl: '../cdk-listbox-configurable/cdk-listbox-configurable-example.css', // Reuse common styles
  standalone: true,
  imports: [CdkListbox, CdkOption, MatPseudoCheckbox],
})
export class CdkListboxSingleSelectFollowFocusExample {
  fruits = [
    'Apple',
    'Apricot',
    'Banana',
    'Blackberry',
    'Blueberry',
    'Cantaloupe',
    'Cherry',
    'Clementine',
    'Cranberry',
    'Dates',
    'Figs',
    'Grapes',
    'Grapefruit',
    'Guava',
    'Kiwi',
    'Kumquat',
    'Lemon',
    'Lime',
    'Mandarin',
    'Mango',
    'Nectarine',
    'Orange',
    'Papaya',
    'Passion',
    'Peach',
    'Pear',
    'Pineapple',
    'Plum',
    'Pomegranate',
    'Raspberries',
    'Strawberry',
    'Tangerine',
    'Watermelon',
  ];
}
