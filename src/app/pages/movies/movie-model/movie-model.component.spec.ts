import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MovieModelComponent } from './movie-model.component';

describe('MovieModelComponent', () => {
  let component: MovieModelComponent;
  let fixture: ComponentFixture<MovieModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MovieModelComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MovieModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
