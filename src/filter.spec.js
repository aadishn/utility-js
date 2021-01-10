const filter = require('./filter');

describe('Filter', () => {
    
    it('Filter of [1,2,3] when the function returns true is [1,2,3]', () => {
        let list = [1,2,3]
        expect(filter(list, x => true)).toEqual([1,2,3]);
    });

    it('Filter of [] when the function returns true is []', () => {
        let list = []
        expect(filter(list, x => true)).toEqual([]);
    });

    it('Filter of [1,2,3] when the function returns false is []', () => {
        let list = [1,2,3]
        expect(filter(list, x => false)).toEqual([]);
    });
    
    it('Filter of [1,2,3] when the function returns x>1 is [2,3]', () => {
        let list = [1,2,3]
        expect(filter(list,x => x>1)).toEqual([2,3]);
    });
    
    it('Filter of ["a","B","c"] when the function returns true is ["B"]', () => {
        let list = ["a","B","c"]
        expect(filter(list,x => (x == x.toUpperCase() ? true : false))).toEqual(['B']);
    });
    

})
