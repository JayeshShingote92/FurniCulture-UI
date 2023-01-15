import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BgTextComponent } from './bg-text.component';

describe('BgTextComponent', () => {
  let component: BgTextComponent;
  let fixture: ComponentFixture<BgTextComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BgTextComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BgTextComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
