import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HatenaComponent } from './hatena.component';

describe('HatenaComponent', () => {
  let component: HatenaComponent;
  let fixture: ComponentFixture<HatenaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HatenaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HatenaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
