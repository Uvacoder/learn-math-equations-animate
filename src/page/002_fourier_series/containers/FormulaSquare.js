import React from 'react'
import MathJax from 'react-mathjax'

const square = `
f(x) = \\left\\{ \\begin{array}{rcl}
A, & -\\frac{1}{2}T_p + nT < x < \\frac{1}{2}T_p + nT  \\\\ 
0, & \\frac{1}{2}T_p + nT < x < \\frac{3}{2}T_p + nT 
\\end{array}\\right.
`

const squareCoefficient = `
a_0 = \\frac{A}{2}, \\quad
a_n = \\left\\{ \\begin{array}{lcl}
0, & n & even, n\\neq 0  \\\\ 
(-1)^{\\frac{n-1}{2}}\\frac{2A}{n\\pi}, & n & odd
\\end{array}\\right., \\quad
b_n = 0
`

const evenSeries = `
f(t) = a_0 + \\sum_{n=1}^\\infty[a_n\\cos(\\omega_n{t})]
`

function FormulaSaw () {
  return(
    <MathJax.Provider>
      <div>
        For square waveform:
        <MathJax.Node formula={square} />
        where <MathJax.Node inline formula={`n \\in R,  T = 2\\pi, T_p = \\pi`} />:
        <MathJax.Node formula={squareCoefficient} />
        Notice that this square waveform is an <strong>even</strong> function.
        <p/>
        For even functions, the fourier series can be simplified as:
        <MathJax.Node formula={evenSeries} />
        As <MathJax.Node inline formula={`T_p`} /> getting closer to 0, the square function approximated to delta function.
        <p/>
        For delta function, even there exists only one point at time domain
        <p/>
        Fourier series (and Fourier transform) will represented it as the weighted sum of infinity number of trigonometric functions.
      </div>
    </MathJax.Provider>
  )
}

export default FormulaSaw