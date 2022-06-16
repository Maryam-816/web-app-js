import { getRandomArbitrary } from '../src/util';

describe("unit test", () => {

    describe("homework tests", () => {
        test("getRandomArbitrary Function Testing", () => {
            expect(getRandomArbitrary(1, 10)).toBeGreaterThan(1);
        });
        
        test("getRandomArbitrary Function Testing", () => {
            expect(getRandomArbitrary(1, 10)).toBeLessThan(10);
        });

        test("getRandomArbitrary Function Testing", () => {
            expect(() => {getRandomArbitrary(10, 10)}).toThrow("Min cannot be equal to max");
        });
        test("getRandomArbitrary Function Testing", () => {
            expect(() => {getRandomArbitrary(5, 5)}).toThrow("Min cannot be equal to max");
        });
    
        test("getRandomArbitrary Function Testing", () => {
            expect(getRandomArbitrary(1, 10)).toBeLessThanOrEqual(10);
        });

        
    });


    test("getRandomArbitrary Function Testing", () => {
        expect(getRandomArbitrary(1, 10)).toBeGreaterThanOrEqual(1);
    });
   
    test("getRandomArbitrary Function Testing", () => {
        expect(getRandomArbitrary(0, 10)).toEqual(0);
    });

    test("getRandomArbitrary Function Testing", () => {
        //expect(getRandomArbitrary(10, 1)).toThrow(RangeError);
        expect(() => {getRandomArbitrary(10, 1)}).toThrow(RangeError);
    });
});