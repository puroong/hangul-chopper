# Hangul Chopper

한글을 초성, 중성, 종성으로 분해주는 라이브러리입니다

## 한글 유니코드 계산식

`한글 유니코드` = `초성`*588 + `중성`*28 + `종성` + 44032

## 사용 방법

es6 module

```javascript
import { chop } from 'hangul-chopper';

chop('가'); // ['ㄱ', 'ㅏ', null]

chop('각'); // ['ㄱ', 'ㅏ', 'ㄱ']

// 첫 글자에 대한 결과를 반환합니다
chop('가나'); // ['ㄱ', 'ㅏ', null]
```

commonjs

```javascript
const { chop } = require('hangul-chopper');

...
```