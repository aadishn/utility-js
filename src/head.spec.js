const head = require('./head');

describe('Head', () => {

    it('Head of empty array is undefined', () => {
        var arr = []
        expect(head(arr)).toEqual(undefined);
    });
    
    it('Should Return First Element of Array', () => {
        var arr = [7,8,9,0]
        expect(head(arr)).toEqual(7);
    });

})
