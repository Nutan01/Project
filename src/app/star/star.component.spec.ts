import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import{ HttpModule} from '@angular/http';
import { StarComponent } from './star.component';

describe('StarComponent', () => {
  let component: StarComponent;
  let fixture: ComponentFixture<StarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports:[HttpModule],
      declarations: [ StarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
  
    expect(component).toBeTruthy();
  });

  it('has startwidth is', () => {
    component.rating=2;
    component.ngOnChanges();
        expect(component.starWidth).toEqual(34.4);
  });
});
