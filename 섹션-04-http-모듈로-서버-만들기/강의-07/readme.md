# 04 http module server - Lecture 07

## 학습 핵심 요약
- 에러 처리와 로깅의 핵심 흐름을 이해한다
- 강의 중 에러 처리와 로깅 실습을 직접 수행한다
- 다음 강의로 연결되는 실무 포인트를 정리한다

## 개념 요약
- 에러 처리와 로깅의 핵심 흐름을 이해한다
- 강의 중 에러 처리와 로깅 실습을 직접 수행한다
- 다음 강의로 연결되는 실무 포인트를 정리한다

## 적용 포인트
- 실습 포인트: 에러 처리와 로깅 실습
- 복습 과제: 오늘 실습을 그대로 복제하지 말고 변수/경로/입력을 바꿔서 다시 구현하기
- 복습 과제: 실패 로그 1개를 의도적으로 만들고 해결 과정 기록하기

## 복습 질문
1. 오늘 학습한 핵심 개념을 한 문장으로 설명하면 무엇인가?
2. 이 개념을 실제 프로젝트에 적용할 때 주의할 점은 무엇인가?
3. 오늘 실습/예제를 내 코드베이스에 옮긴다면 어디부터 시작할 것인가?

## 참고 코드

```js
const http = require('http');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'application/json; charset=utf-8' });
  res.end(JSON.stringify({ method: req.method, url: req.url }));
});

server.listen(3000, () => console.log('http://localhost:3000'));
```

## 셀프 체크
- [ ] 핵심 개념을 내 말로 설명할 수 있다
- [ ] 예제/실습을 직접 다시 실행해봤다
- [ ] 복습 질문 3개에 답을 작성했다
