# 리액트 프로젝트 시작하기

1. nodejs 설치
2. create-react-app 설치 (최초1번)

```
$ npm install -g create-react-app
```

3. react프로젝트 생성

```
$ npx create-react-app 프로젝트이름
```

4. react 프로젝트 실행

```
$ cd 프로젝트폴더
$ npm start
```

- http://localhost:3000 에서 프론트엔드 서버 실행


## 추가 라이브러리 설치
1. styled-components: 동적 css 처리를 도와주는 라이브러리
- `$ npm install styled-components`

2. bootstrap, reactstrap : CSS 라이브러리 
- `$ npm install bootstrap reactstrap`

3. sass : CSS 확장문법 라이브러리 
- `$ npm install sass`






  회원가입 요청 흐름

  1st request: 이메일 중복확인 요청 
  1차: 이메일을 입력 -> 디바운싱을 통해 1.5초 뒤 서버로 이메일 중복확인 검증
   -> 중복이 아니라고 판단되면 서버에서는 해당 이메일로 인증메일 발송

  2nd request: 인증코드 검증 요청
  2차: 인증코드 입력 -> 디바운싱을 통해 1.5초 뒤 서버로 인증코드 전송 검증
   -> 만료시간 이내이고 인증코드가 일치한다면  -> 일치하지 않는다면 인증코드 재발송

  3rd request: 회원가입 완료 요청
  3차: 비밀번호 입력 -> 검증에 통과한다면 회원가입을 완료



   
   첫번째 테이블 : 회원 기본정보 테이블
   두번째 테이블 : 인증코드 정보 테이블 (인증코드, 만료시간)







