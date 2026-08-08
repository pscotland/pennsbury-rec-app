import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SocialIconButtonComponent } from './social-icon-button.component';

describe('SocialIconButtonComponent', () => {
  let component: SocialIconButtonComponent;
  let fixture: ComponentFixture<SocialIconButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SocialIconButtonComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(SocialIconButtonComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('platform', 'facebook');
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
