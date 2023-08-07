/**
 *
 * @param length 배열의 길이
 * @returns null 값이 들어있는 배열
 */
export const makeArray = (length: number) => new Array(length).fill(null)
/**
 *
 * @param min 이상
 * @param max 미만
 * @returns min이상 max미만의 정수 배열
 */
export const range = (min: number, max: number): number[] =>
  makeArray(max - min).map((_, index) => index + min)
/**
 *
 * @param min 이상
 * @param max 미만
 * @returns min이상 max미만의 랜덤한 정수
 */
export const random = (min: number, max: number): number =>
  Math.floor(Math.random() * (max - min + 1) + min)
