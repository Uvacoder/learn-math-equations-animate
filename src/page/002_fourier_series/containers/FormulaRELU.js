import React from 'react'
import MathJax from 'react-mathjax'

const RELU = `
f(x) = \\left\\{\\begin{array}{cl}
0,&-\\pi < x \\leq0\\\\
x,&0 < x < \\pi\\\\
\\end{array}\\right.\\
`

const fourierCoefficient = `
a_0 = \\frac{\\pi}{2}, \\quad
a_n = \\frac{-2}{n^2\\pi},(n\\geq1,odd), \\quad
b_n = \\frac{(-1)^{n+1}}{n},(n\\geq1) 
`

const fourierCompose = `
f(x) \\simeq \\frac{\\pi}{4} + \\sum_{n\\geq1,odd}\\frac{-2}{n^2\\pi}\\cos(nx) + \\sum_{n\\geq1}\\frac{(-1)^{n+1}}{n}\\sin(nx)
`

const periodExtension = `
\\left\\{\\begin{array}{cl}
\\cos\\left(\\frac{n\\pi(x+2p)}{p}\\right)=\\cos\\left(\\frac{n\\pi{x}}{p}+2n\\pi\\right) = \\cos(\\frac{n\\pi{x}}{p}) \\\\
\\sin\\left(\\frac{n\\pi(x+2p)}{p}\\right)=\\sin\\left(\\frac{n\\pi{x}}{p}+2n\\pi\\right) = \\sin(\\frac{n\\pi{x}}{p}) \\\\
\\end{array}\\right.\\
`

function FormulaSaw () {
  return(
    <MathJax.Provider>
      <div>
        The Rectified Linear Unit (ReLU) is the most commonly used activation function in deep learning models.
        <MathJax.Node formula={RELU} />
        Or simplified as <MathJax.Node inline formula={'f(x)=max(0,x)'}></MathJax.Node>
        <p/>
        The Fourier coefficients of the ReLU can be represented as:
        <MathJax.Node formula={fourierCoefficient} />

        Thus, the original function can be decomposed as the weighted sum of trigonometric functions:
        <MathJax.Node formula={fourierCompose} />

        The period extension of trigonometric functions result in the equivalence between the Fourier series of periodic and aperiodic functions.
        <MathJax.Node formula={periodExtension} />

      </div>
    </MathJax.Provider>
  )
}

export default FormulaSaw