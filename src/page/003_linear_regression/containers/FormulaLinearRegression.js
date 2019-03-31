import React from 'react'
import MathJax from 'react-mathjax'

const line = `
\\hat{y} = f(x, \\mathbf{w}) = \\omega_0 + \\omega_1x
`

const error = `
J(\\mathbf{w}) = \\frac{1}{2n}\\sum_{i=1}^{N}(f(x_i, \\mathbf{w}) - y_i)^2
`

const forward = `
\\hat{y} = W^TX
`

const loss = `
Loss(y, \\hat{y}) = \\frac{1}{2n}(\\hat{y} - y)^T \\cdot (\\hat{y} - y)
`

const back = `
\\frac{\\delta Loss(y, \\hat{y})}{\\delta W} = \\frac{\\delta Loss(y, \\hat{y})}{\\delta \\hat{y}}\\cdot\\frac{\\delta \\hat{y}}{\\delta W}
= \\frac{1}{n}X^T(\\hat{y}-y)
`

const update = `
W = W - \\alpha  \\frac{\\delta Loss(y, \\hat{y})}{\\delta W}
`

function FormulaLinearRegression () {
  return(
    <MathJax.Provider>
      <div>
        For linear distributed points, the pattern can be covered by a straight line:
        <MathJax.Node formula={line} />
        The objective is to find <MathJax.Node inline formula={`\\mathbf{w}`} /> which minimize the error.
        <MathJax.Node formula={error} />
        1. Feedforward
        <MathJax.Node formula={forward} />
        2. Compute loss
        <MathJax.Node formula={loss} />
        3. Backpropagation
        <MathJax.Node formula={back} />
        4. Gradient descent
        <MathJax.Node formula={update} />
      </div>
    </MathJax.Provider>
  )
}

export default FormulaLinearRegression