export function greet(name) {
  if (!name) return "안녕하세요!";
  return `안녕하세요, ${name}님!`;
}

// 아래 10줄 중 8줄은 다음 커밋에서 제거됩니다.
export function greetLoud(name) { return greet(name).toUpperCase(); }
export function greetA(name) { return greet(name) + " A"; }
export function greetB(name) { return greet(name) + " B"; }
export function greetC(name) { return greet(name) + " C"; }
export function greetD(name) { return greet(name) + " D"; }
export function greetE(name) { return greet(name) + " E"; }
export function greetF(name) { return greet(name) + " F"; }
export function greetG(name) { return greet(name) + " G"; }
export function greetH(name) { return greet(name) + " H"; }
