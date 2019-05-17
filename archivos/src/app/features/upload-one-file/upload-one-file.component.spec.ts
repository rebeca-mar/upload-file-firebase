import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UploadOneFileComponent } from './upload-one-file.component';

describe('UploadOneFileComponent', () => {
  let component: UploadOneFileComponent;
  let fixture: ComponentFixture<UploadOneFileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UploadOneFileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UploadOneFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
