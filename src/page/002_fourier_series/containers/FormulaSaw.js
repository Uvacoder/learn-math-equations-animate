import React from 'react'
import MathJax from 'react-mathjax'

const fourierSeries = `f(t) = a_0 + \\sum_{n=1}^\\infty[a_n\\cos(\\omega_n{t}) + b_n\\sin(\\omega_n{t})]`
const fourierCoefficient = `
a_0 = \\frac{1}{T}\\int\\limits_T f(t)dt, \\quad
a_n = \\frac{2}{T}\\int\\limits_T f(t)\\cos(\\omega_nt)dt, \\quad
b_n = \\frac{2}{T}\\int\\limits_T f(t)\\sin(\\omega_nt)dt 
`

const sawTooth = `
f(x) = \\frac{2A}{T}x \\quad (n - \\frac{1}{2})T < x < (n - \\frac{1}{2})T
`

const sawToothCoefficient = `
a_0 = 0, \\quad
a_n = 0, \\quad
b_n = -\\frac{4A}{\\omega_nT^2} \\left[ T\\cos(\\frac{\\omega_n T}{2}) -\\frac{2}{\\omega_n}\\sin(\\frac{\\omega_n T}{2}) \\right] 
`

const oddSeries = `
f(t) = \\sum_{n=1}^\\infty[b_n\\sin(\\omega_n{t})]
`

function FormulaSaw () {
  return(
    <MathJax.Provider>
      <div>
        Any general waveform of finity energy <MathJax.Node inline formula={'x(t)'} />
        (square integrable) can be represented as weighted sum of trigonometric functions.
        <MathJax.Node formula={fourierSeries} />
        where <MathJax.Node inline formula={`\\omega_n =  \\frac{2\\pi n}{T} `} />:
        <MathJax.Node formula={fourierCoefficient} />

        For sawtooth waveform:
        <MathJax.Node formula={sawTooth} />
        where <MathJax.Node inline formula={`n \\in R,  T = 2\\pi`} />:
        <MathJax.Node formula={sawToothCoefficient} />
        Notice that this sawtooth waveform is an <strong>odd</strong> function.
        <p/>
        For odd functions, the fourier series can be simplified as:
        <MathJax.Node formula={oddSeries} />
      </div>
    </MathJax.Provider>
  )
}

export default FormulaSaw