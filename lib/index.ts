export const NO_JONGSEONG = null;

export const CONSONANT_IDX = 0;
export const VOWEL_IDX = 1;
export const JONGSEONG_IDX = 2;

const HANGUL_OFFSET = 44032;
const HANGUL_CONSONANT_OFFSET = 588;
const HANGUL_VOWEL_OFFSET = 28;

const consonants = [
  'ㄱ',
  'ㄲ',
  'ㄴ',
  'ㄷ',
  'ㄸ',
  'ㄹ',
  'ㅁ',
  'ㅂ',
  'ㅃ',
  'ㅅ',
  'ㅆ',
  'ㅇ',
  'ㅈ',
  'ㅉ',
  'ㅊ',
  'ㅋ',
  'ㅌ',
  'ㅍ',
  'ㅎ',
];
const vowels = [
  'ㅏ',
  'ㅐ',
  'ㅑ',
  'ㅒ',
  'ㅓ',
  'ㅔ',
  'ㅕ',
  'ㅖ',
  'ㅗ',
  'ㅘ',
  'ㅙ',
  'ㅚ',
  'ㅛ',
  'ㅜ',
  'ㅝ',
  'ㅞ',
  'ㅟ',
  'ㅠ',
  'ㅡ',
  'ㅢ',
  'ㅣ',
];
const jonseongs = [
  NO_JONGSEONG,
  'ㄱ',
  'ㄲ',
  'ㄳ',
  'ㄴ',
  'ㄵ',
  'ㄶ',
  'ㄷ',
  'ㄹ',
  'ㄺ',
  'ㄻ',
  'ㄼ',
  'ㄽ',
  'ㄾ',
  'ㄿ',
  'ㅀ',
  'ㅁ',
  'ㅂ',
  'ㅄ',
  'ㅅ',
  'ㅆ',
  'ㅇ',
  'ㅈ',
  'ㅊ',
  'ㅋ',
  'ㅌ',
  'ㅍ',
  'ㅎ',
];

export function chop(hangul: string): [string, string, string] {
  const unicode = getHangulUnicode(hangul);
  const consonant = getConsonant(unicode);
  const vowel = getVowel(unicode);
  const jonseong = getJonseong(unicode);

  return [consonant, vowel, jonseong];
}

function getHangulUnicode(hangul: string) {
  return hangul.charCodeAt(0);
}

function getConsonant(unicode: number): string {
  const idx = Math.floor((unicode - HANGUL_OFFSET) / HANGUL_CONSONANT_OFFSET);
  const consonant = consonants[idx];
  if (consonants === undefined) throwError(unicode);
  return consonant;
}

function getVowel(unicode: number): string {
  const idx = Math.floor(
    ((unicode - HANGUL_OFFSET) % HANGUL_CONSONANT_OFFSET) / HANGUL_VOWEL_OFFSET,
  );
  const vowel = vowels[idx];
  if (vowel === undefined) throwError(unicode);
  return vowel;
}

function getJonseong(unicode: number): string {
  const idx = Math.floor(
    ((unicode - HANGUL_OFFSET) % HANGUL_CONSONANT_OFFSET) % HANGUL_VOWEL_OFFSET,
  );
  const jonseong = jonseongs[idx];
  if (jonseong === undefined) throwError(unicode);
  return jonseong;
}

function throwError(unicode: number) {
  throw new Error(`Invalid Unicode: ${unicode}`);
}
