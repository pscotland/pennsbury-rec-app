import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SponsorCardComponent } from './sponsor-card.component';
import { Sponsor } from '../../../core/models/sponsor.model';

const mockSponsor: Sponsor = {
  id: '1',
  name: 'Acme Sports',
  color: '#2563eb'
};

describe('SponsorCardComponent', () => {
  let component: SponsorCardComponent;
  let fixture: ComponentFixture<SponsorCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SponsorCardComponent]
    }).compileComponents();

    fixture = TestBed.createComponent(SponsorCardComponent);
    component = fixture.componentInstance;
    fixture.componentRef.setInput('sponsor', mockSponsor);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
