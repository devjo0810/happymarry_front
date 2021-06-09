/* eslint-disable no-undef */
(function configInit() {
  const setting = {
    // 디버깅 관련
    debug: {
      /**
       * debugLevel : 개발자 도구의 디버그 레벨에 대한 값
       * 0: [ERROR]
       * 1: [WARNING]
       * 2: [INFO]
       * 3: [DEBUG]
       * 4: [LOG]
       * 5: [DEV]
       */
      level: 5,
      consoleMode: true,
    },
  };

  config = setting;
})((this.config = {}), this);
