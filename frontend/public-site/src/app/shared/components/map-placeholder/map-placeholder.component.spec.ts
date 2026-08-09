import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MapPlaceholderComponent } from './map-placeholder.component';

describe('MapPlaceholderComponent', () => {
  let component: MapPlaceholderComponent;
  let fixture: ComponentFixture<MapPlaceholderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MapPlaceholderComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(MapPlaceholderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
