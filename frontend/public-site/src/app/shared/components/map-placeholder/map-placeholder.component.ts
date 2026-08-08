import { Component, input } from '@angular/core';

@Component({
  selector: 'app-map-placeholder',
  standalone: true,
  templateUrl: './map-placeholder.component.html',
  styleUrl: './map-placeholder.component.scss'
})
export class MapPlaceholderComponent {
  readonly address = input('1 Recreation Drive, Pennsbury, PA');
  readonly height = input('220px');
}
