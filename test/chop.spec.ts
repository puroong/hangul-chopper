import { chop, JONGSEONG_IDX, NO_JONGSEONG } from '../lib';

describe('test chop', () => {
  test('받침 없는거', () => {
    const actual = chop('가');
    expect(actual[JONGSEONG_IDX]).toEqual(NO_JONGSEONG);
  });

  test('받침 있는거', () => {
    const actual = chop('각');
    expect(actual[JONGSEONG_IDX]).not.toEqual(NO_JONGSEONG);
  });

  test('2개 이상 문자를 인자로 전달했을 땐 첫 글자에 대해 분해함', () => {
    const actual = chop('각');
    const expected = ['ㄱ', 'ㅏ', 'ㄱ'];
    expect(actual).toEqual(expected);
  });

  test('한글 아닌거 전달했을때 에러 발생해야 함', () => {
    expect(() => chop('t')).toThrow(Error);
  });
});
