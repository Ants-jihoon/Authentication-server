#Authentication-server

개인프로젝트 완료했습니다

프로젝트에 대한 개요
- 인증 시스템
- app.js : 필요한 라이브러리르 다운받고 미들웨어를 설정한곳
- bin/www.js : 서버를 실행시키는 곳
- src/config : 데이터 베이스를 연결시켜주는 곳
- src/models : 데이터베이스에서 유저정보를 가져오거나 저장, 비교,암호화하는 곳
- src/public : ejs파일에 대한 css와 js파일이 있는 곳
- src/routes : models와 view 연결해 주는 곳
- src/views : 화면에 보이는 ejs파일들이 있는 곳

기술 스택
- javascript
- node.js
- mySQL
- fetch API
- jwt
- bcrypt
- css , ejs

코드 중 확인받고 싶은 부분
- token를 refresh해주는 부분을 구현하기 어려워 어거지(?)로 구현한 것 같은데
그부분을 확인받고 싶습니다. 
- token과 관련된 함수들의 구조가 적절한지 궁금합니다.

개발관련 과정에서 궁금했던 부분 등
- 효율적인 아키텍처를 만들기 위해 사전에 어떤 점을 준비하면 좋은지 궁금합니다.
- 파일명, 변수명을 작명하는데 좋은 방법이 있는지 궁금합니다.
- refresh를 자동적으로 하는 방법이 궁금합니다.
