import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FaithInActionComponent } from './faith-in-action.component';

describe('FaithInActionComponent', () => {
  let component: FaithInActionComponent;
  let fixture: ComponentFixture<FaithInActionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FaithInActionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FaithInActionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
