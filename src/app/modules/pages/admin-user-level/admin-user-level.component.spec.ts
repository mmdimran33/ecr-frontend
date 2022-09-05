import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminUserLevelComponent } from './admin-user-level.component';

describe('AdminUserLevelComponent', () => {
  let component: AdminUserLevelComponent;
  let fixture: ComponentFixture<AdminUserLevelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdminUserLevelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminUserLevelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
