import { useState, useCallback, useEffect } from 'react'
import math from 'mathjs'

/**
 * custom hooks
 * @url https://reactjs.org/docs/hooks-custom.html
 */
export const useTitle = (title = 'Valley') => {
  useEffect(() => {
    document.title = title;
  }, [title]);
};

export const useToggle = (initial = false) => {
  const [toggle, setValue] = useState(initial)
  const setToggle = useCallback(() => setValue(v => !v), [])
  return {toggle, setToggle}
}

export const useHover = (initial = false) => {
  const [hover, setHover] = useState(initial)
  const onMouseEnter = useCallback(() => setHover(true), [])
  const onMouseLeave = useCallback(() => setHover(false), [])
  return [hover, {onMouseEnter, onMouseLeave}]
}

export const useIndex = (initial = 0) => {
  const [index, setIndex] = useState(initial)
  const onMouseEnter = useCallback((data, index) => setIndex(index), [])
  const onMouseLeave = useCallback(() => setIndex(0), [])
  return [index, {onMouseEnter, onMouseLeave}]
}

/**
 * public resources
 *
 */
export const moduleLayout = {
  xs: 24,
  sm: 24,
  md: 12,
  lg: 12,
  xl: 12,
  xxl: 12
}

export const formulaLayout = {
  xs: 24,
  sm: 24,
  md: 24,
  lg: 24,
  xl: 24,
  xxl: 24
}

export const taylor_array = (series, elements) => {
  // Avoid big number
  const MAXIMUM = 100
  const array = []
  series.forEach((value, index) => {
    let element = elements[index]
    if (elements[index] > MAXIMUM) {
      element = MAXIMUM
    }
    if (elements[index] < -1 * MAXIMUM) {
      element = -1 * MAXIMUM
    }
    array.push({name: index, data: value, element})
  })
  return array
}

export const array_pow = (arr, pow) => {
  let res = 1
  math.range(0, pow).forEach(i => {
    res = math.dotMultiply(res, arr)
  })
  return res
}

export const fourier_series = (a0, an, bn, N, n, X) => {
  let rest = math.zeros(N)
  a0 = a0 === 0 ? math.zeros(N) : a0
  an = an === 0 ? () => 0 : an
  bn = bn === 0 ? () => 0 : bn
  math.range(1, n + 1).forEach(i => {
    rest = math.add(rest, math.multiply(bn(i), math.sin(math.multiply(i, X))), math.multiply(an(i), math.cos(math.multiply(i, X))))
  })
  return math.add(a0, rest)
}

export const fourier_element = (a0, an, bn, N, n, X) => {
  let rest = math.zeros(N)
  a0 = a0 === 0 ? math.zeros(N) : a0
  an = an === 0 ? () => 0 : an
  bn = bn === 0 ? () => 0 : bn
  rest = math.add(rest, math.multiply(bn(n), math.sin(math.multiply(n, X))), math.multiply(an(n), math.cos(math.multiply(n, X))))
  return n > 0 ? rest : a0
}

export const fourier_array = (series, element) => {
  const time = []
  series.forEach((value, index) => {
    time.push({name: index, data: value, element: element[index]})
  })
  return time
}

export const fourier_coefficient = (a0, an, bn, n) => {
  a0 = a0 === 0 ? 0 : math.flatten(a0).toArray()[0]
  an = an === 0 ? () => 0 : an
  bn = bn === 0 ? () => 0 : bn
  const freq = [{name: 0, data: a0}]
  math.range(1, n + 1).forEach(i => {
    freq.push({name: i, data: Math.abs(an(i) + bn(i))})
  })
  return freq
}