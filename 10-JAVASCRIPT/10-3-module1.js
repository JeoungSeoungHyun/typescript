export default function add(a, b) {
    return a + b;
}

export function print() { // 한 파일 내부에서 export default는 한가지만 가능하다.
    console.log('print');
}

export const number = 10;