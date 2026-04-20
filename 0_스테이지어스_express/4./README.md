# 4. 15주차 정리

## 주차 목표

- 문서형 데이터베이스(Document DB) 특성과 MongoDB 운용법 이해
- 로깅 시스템을 API 레벨에서 설계
- RDB 중심 사고에서 NoSQL 선택 기준까지 확장

## 핵심 개념

### 1) Document DB의 특징

- 스키마 제약이 약하고 JSON 문서 중심 저장
- 장점:
  - 빠른 초기 개발
  - 유연한 데이터 구조
  - 단순 입력/출력 처리에 유리
- 단점:
  - 무결성 제약이 약함
  - 복잡 조건 탐색/정합성 관리 난이도 증가

### 2) MongoDB 구조

- `Database`
- `Collection`
- `Document`

관계형의 Table/Row와 대응해 이해할 수 있으나, 모델링 방식은 다름.

### 3) MongoDB 기본 연산

- 조회: `find`
- 삽입: `insertOne`, `insertMany`
- 수정: `updateOne` + `$set`, `$unset`
- 삭제: `deleteOne`, `deleteMany`
- Node.js에서 `find().toArray()`로 결과 배열화

### 4) 언제 MongoDB가 유리한가

- 입력이 매우 빈번하고 구조가 유동적일 때
- 깊은 중첩 데이터(예: 무한 대댓글)
- 로그/채팅처럼 대량 쓰기 중심 데이터

## 과제 요구사항 정리

MongoDB 기반 서버에 로깅 기능 추가:

- 저장 항목:
  - 접속 IP
  - 계정 정보
  - 호출 API명
  - Entry Point
  - REST Method
  - Request/Response 값
  - 로그 저장 시각
- 관리자 API:
  - 전체 조회
  - 조건 조회(최신/역순)
  - 특정 ID 검색
  - Entry Point 검색
  - 기간 검색
- MongoDB ODM 적용

## 보강 메모

- 에러 처리 스타일은 팀 기준으로 일관성 유지
- 상태코드(`400`, `404`, `201`)를 의미에 맞게 구분
- `UNIQUE` 제약은 단일/복합 조건을 정확히 이해하고 컬럼 제약 설계

## 실무 관점 체크포인트

- 로깅은 기능이 아니라 운영 도구이므로 조회 성능/보존 주기까지 설계해야 함
- MongoDB 사용 시 스키마 유연성을 핑계로 검증을 포기하면 품질이 급격히 악화됨
