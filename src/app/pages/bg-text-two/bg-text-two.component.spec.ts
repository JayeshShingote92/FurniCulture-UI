import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BgTextTwoComponent } from './bg-text-two.component';

describe('BgTextTwoComponent', () => {
  let component: BgTextTwoComponent;
  let fixture: ComponentFixture<BgTextTwoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BgTextTwoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BgTextTwoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
