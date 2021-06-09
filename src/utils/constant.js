/*****************************************
 * 전역에서 사용할 상수 정의
 *****************************************/
const { config } = window;

// 운영체제 타입
export const OS_TYPE = {
  ANDROID: "android",
  IOS: "ios",
  NOMOBILE: "nomobile",
};

// 디스플레이 가로, 세로 값
export const ORIENTATION = {
  LANDSCAPE: "landscape", // 가로
  PORTRAIT: "portrait", // 세로
};

/** byte 단위 **/
export const KB_TO_BYTE = 1024; // KB
export const MB_TO_BYTE = 1024 * 1024; // MB
export const GB_TO_BYTE = 1024 * 1024 * 1024; // GB

/*****************************************
 * CONFIG
 *****************************************/
// 디버깅 레벨
export const DEBUG_LEVEL = config.debug.level;

// 디버깅 모드
export const DEBUG_CONSOLE_MODE = config.debug.consoleMode;
