const reduce = require('./Reduce');

describe('Reduce', () => {
    
    it('Reduce of [], (x,y)=> x+y is undefined', () => {
        let list = []
        expect(reduce(list,(x,y)=>x+y)).toEqual(undefined);
    });



    it('Reduce [] as (x,y)=>x+y and 10 is 10',()=>
    {
        expect(reduce([],(x,y)=>x+y,10)).toEqual(10);
    });

    it("Reduce ['a','b','c'] as (x,y)=>x+y is abc", () => {
         expect(reduce(['a','b','c'],(x,y)=>x+y)).toEqual('abc');
    });

})
