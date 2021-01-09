const tail = require('./tail');

describe('Tail', () => {

    it('Tail of empty array is undefined', () => {
        var array = []
        expect(tail(array)).toEqual(undefined);
    });
    
    it('Should Return All Elements Except First Element of Array', () => {
        var array = [7,8,9,0]
        expect(tail(array)).toEqual([8,9,0]);
    });

})
