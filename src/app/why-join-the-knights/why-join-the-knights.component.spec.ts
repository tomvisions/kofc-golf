import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WhyJoinTheKnightsComponent } from './why-join-the-knights.component';

describe('WhyJoinTheKnightsComponent', () => {
  let component: WhyJoinTheKnightsComponent;
  let fixture: ComponentFixture<WhyJoinTheKnightsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WhyJoinTheKnightsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WhyJoinTheKnightsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
