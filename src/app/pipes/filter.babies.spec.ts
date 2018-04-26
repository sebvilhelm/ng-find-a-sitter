/* import { TestBed, async } from '@angular/core/testing';
import { FilterBabies } from './filter.babies';

describe('App: Babies', () => {
  beforeEach(() => {
    this.babies = [
      { _id: '11', firstname: 'Per', lastname: 'Hansen' },
      { _id: '11', firstname: 'Jens', lastname: 'Hansen' },
      { _id: '12', firstname: 'Helle', lastname: 'Hansen' },
      { _id: '13', firstname: 'Jørgen', lastname: 'Hansen' },
      { _id: '14', firstname: 'Berit', lastname: 'Hansen' },

    ];
    TestBed.configureTestingModule({
      declarations: [
        FilterBabies
      ],
    });
  });
  describe('FilterInternships', () => {
    let pipe = new FilterBabies();
    it('No search string returns input', () => {
      let result = pipe.transform(this.babies, '');
      expect(result.length).toBe(5);
    });

    it('Empty array returns empty array', () => {
      let result = pipe.transform([], 'Hi');
      expect(result.length).toBe(0);
    });
  });
});
 */