import {DateTime} from 'luxon'
import * as U from './util'

/**
 *
 * @returns 현재부터 1000일 전까지 랜덤한 Date객체
 */
export const makeRandomPastDate = () => {
  const todayMillisecond = new Date().valueOf()
  const n = 100_000_000_000 // 1억초 ( 대략 1000일 정도 )
  return new Date(todayMillisecond - U.random(0, n))
}
export const makeRelativeDate = (date: Date) =>
  DateTime.fromJSDate(date).startOf('day').toRelative()
export const randomRelativeDate = () => makeRelativeDate(makeRandomPastDate())
export const makeDayMonthYear = (date: Date) =>
  DateTime.fromJSDate(date).toLocaleString(DateTime.DATE_FULL)
export const randomDayMonthYear = () => makeDayMonthYear(makeRandomPastDate())
