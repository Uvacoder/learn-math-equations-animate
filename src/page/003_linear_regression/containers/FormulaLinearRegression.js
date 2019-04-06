import React from 'react'
import MathJax from 'react-mathjax'

const line = `
\\hat{y} = f(x, \\mathbf{\\Theta}) = \\theta_0 + \\theta_1x
`

const error = `
J(\\mathbf{\\Theta}) = \\frac{1}{2n}\\sum_{i=1}^{N}(f(x_i, \\mathbf{\\Theta}) - y_i)^2
`

const forward = `
\\hat{y} = \\Theta^TX
`

const loss = `
Loss(y, \\hat{y}) = \\frac{1}{2n}(\\hat{y} - y)^T \\cdot (\\hat{y} - y)
`

const back = `
\\frac{\\partial Loss(y, \\hat{y})}{\\partial \\Theta} = \\frac{\\partial Loss(y, \\hat{y})}{\\partial \\hat{y}}\\cdot\\frac{\\partial \\hat{y}}{\\delta \\Theta}
= \\frac{1}{n}X^T(\\hat{y}-y)
`

const update = `
W = W - \\alpha  \\frac{\\delta Loss(y, \\hat{y})}{\\delta \\Theta}
`

function FormulaLinearRegression () {
  return(
    <MathJax.Provider>
      <div>
        For linear distributed points, the pattern can be covered by a straight line:
        <MathJax.Node formula={line} />
        The objective is to find <MathJax.Node inline formula={`\\mathbf{\\Theta}`} /> which minimize the error.
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