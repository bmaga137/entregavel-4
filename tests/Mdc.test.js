const {Mdc} = require('../funcoes/Mdc');

test('MDC de 48 e 18 é 6', () => {
    expect(Mdc(48, 18)).toBe(6);
})

test('MDC de 56 e 98 é 14', () => {
    expect(Mdc(56, 98)).toBe(14);
})

test('MDC aceita números negativos e retorna resultado não negativo', () => {
    expect(Mdc(-48, 18)).toBe(6);
});

test('rejeita argumentos que não sejam números', () => {
    expect(() => Mdc('48', 18)).toThrow(TypeError);
});

test('rejeita números não inteiros e o caso zero com zero', () => {
    expect(() => Mdc(4.5, 3)).toThrow(RangeError);
    expect(() => Mdc(0, 0)).toThrow(RangeError);
});