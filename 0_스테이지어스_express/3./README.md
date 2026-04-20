# 3. 14주차 정리

## 주차 목표

- 배포에 필요한 네트워크 기초(DNS, SSL/TLS) 이해
- PostgreSQL 구조와 운영 기본기 습득
- 실제 배포 환경에서 도메인/인증서/DB 설계를 함께 고려

## 핵심 개념

### 1) DNS 프로토콜

- 사람이 기억하기 쉬운 도메인을 실제 서버 주소(IP)로 매핑
- 도메인 구성:
  - host
  - label
  - tld
- 대표 레코드:
  - `A`: 도메인 -> IPv4
  - `MX`: 메일 서버
  - `TXT`: 소유권 검증/설정 문자열
  - `CNAME`: 다른 도메인 별칭

### 2) SSL/TLS와 HTTPS

- HTTPS = HTTP + SSL/TLS
- 전송 구간 암호화를 통해 트래픽 보호
- 브라우저/모바일/SEO 측면에서 HTTPS는 사실상 필수
- 인증서 구성 요소:
  - Public Key
  - Private Key
  - CA 인증서

### 3) 인증서 발급 방식

- Let's Encrypt: 무료, 짧은 주기 갱신 필요
- OpenSSL: 실습/내부 테스트에 주로 사용

### 4) PostgreSQL 이해

- RDB는 데이터 무결성과 관계 모델링에 강점
- PostgreSQL 구조: `Database -> Schema -> Table`
- JSON/Array 등 확장 자료형 지원
- 인덱싱/탐색 관점에서 강점이 있어 복잡 조회에 유리

## 과제 요구사항 정리

- DB를 PostgreSQL 기반으로 전환
- PK/FK 설계를 명확히 적용
- 댓글 구조를 JSON 기반으로 설계하고 대댓글 무한 깊이 고려
- Let's Encrypt 적용

## 보강 메모

- `apt`는 `apt-get`의 자주 쓰는 기능을 사용자 친화적으로 단순화
- 1024 이하 well-known port 사용에는 root 권한 필요
- Let's Encrypt standalone 방식은 80포트 임시 서버로 도메인 유효성 검증

## 실무 관점 체크포인트

- 배포 이슈는 코드보다 인프라/DNS/인증서 설정에서 자주 발생
- DB 마이그레이션은 스키마 변경 + API 영향 + 데이터 정합성을 함께 검토해야 함
