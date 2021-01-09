const maximum = require('./maximum');

describe('Maximum', () => {

    it('Maximum of empty array is undefined', () => {
        var array = []
        expect(maximum(array)).toEqual(undefined);
    });
    
    it('Maximum element of the array is 8884', () => {
        var array = [7,8,9,0,947,93,579,3924,8884,22,484,363]
        expect(maximum(array)).toEqual(8884);
    });

    it('Maximum element of the array is 0', () => {
        var array = [-1,-3,0,-9,-85,-5,-2]
        expect(maximum(array)).toEqual(0);
    });

})
