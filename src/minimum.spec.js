const minimum = require('./minimum');

describe('Minimum', () => {

    it('Minimum of empty array is undefined', () => {
        var array = []
        expect(minimum(array)).toEqual(undefined);
    });
    
    it('Minimum element of the array is -1', () => {
        var array = [7,8,9,0,47,2292,48,-1,12,0,3]
        expect(minimum(array)).toEqual(-1);
    });

    it('Minimum element of the array is -2', () => {
        var array = [63,0,0,-2,999,-1,-1,-1,-2,6]
        expect(minimum(array)).toEqual(-2);
    });

})
