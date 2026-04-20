# 07 mysql - Lecture 06

## 강의 목표
1. JOIN 쿼리의 핵심 흐름을 이해한다.
2. 강의 중 JOIN 쿼리 실습를 직접 수행한다.
3. 다음 강의로 연결되는 실무 포인트를 정리한다.

## 강의 진행 스크립트

### 1) 오프닝
- "이번 차시는 Lecture 06입니다. 목표는 JOIN 쿼리입니다."
- "실습 중심으로 진행하고, 마지막에 바로 적용 과제를 드리겠습니다."

### 2) 핵심 설명
- 문제 상황 정의
- JOIN 쿼리 개념 구조
- 자주 발생하는 실수와 예방법

### 3) 실습
- 실습 항목: JOIN 쿼리 실습
- 실습 완료 기준
  - 기능 동작 확인
  - 오류 케이스 1개 재현 및 해결

### 4) 마무리
- "오늘 만든 내용을 내 프로젝트 구조에 어떻게 이식할지"를 3줄로 정리
- 다음 강의 준비 체크포인트 확인

## 데모 코드

```js
const mysql = require('mysql2/promise');

async function run() {
  const conn = await mysql.createConnection({ host: 'localhost', user: 'root', database: 'study' });
  const [rows] = await conn.query('SELECT NOW() AS now');
  console.log(rows);
  await conn.end();
}
run();
```

## 과제
- 오늘 실습을 그대로 복제하지 말고 변수/경로/입력을 바꿔서 다시 구현하기
- 실패 로그 1개를 의도적으로 만들고 해결 과정 기록하기

## 체크리스트
- [ ] 핵심 개념을 한 문장으로 설명 가능
- [ ] 데모 코드 재현 완료
- [ ] 과제 완료
