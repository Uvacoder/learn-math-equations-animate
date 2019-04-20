import React from 'react'
import MathJax from 'react-mathjax'

const line = `
h_\\theta(x)=\\sum_{i=0}^n\\theta_ix_i=\\theta^Tx
`

const error = `
J(\\theta)=\\frac{1}{2m}\\sum_{i=1}^m(h_\\theta(x^{(i)})-y^{(i)})^2
`

const forward = `
\\mathbf{\\hat{y}} = XW
`

const loss = `
J(\\mathbf{y}, \\mathbf{\\hat{y}}) = \\frac{1}{2m}(\\mathbf{\\hat{y}} - \\mathbf{y})^T(\\mathbf{\\hat{y}} - \\mathbf{y})
`

const back = `
\\frac{\\partial J(\\mathbf{y}, \\mathbf{\\hat{y}})}{\\partial W} 
= \\frac{\\partial J(\\mathbf{y}, \\mathbf{\\hat{y}})}{\\partial \\mathbf{\\hat{y}}} \\cdot \\frac{\\partial \\mathbf{\\hat{y}}}{\\partial W} 
= \\frac{1}{m}X^T(\\mathbf{\\hat{y}} - \\mathbf{y})
`

const update = `
W = W - \\alpha  \\frac{\\partial J(\\mathbf{y}, \\mathbf{\\hat{y}})}{\\partial W}
`

function FormulaLinearRegression () {
  return(
    <MathJax.Provider>
      <div>
        For linear distributed points, the pattern can be covered by a straight line:
        <MathJax.Node formula={line} />
        The objective is to find <MathJax.Node inline formula={`\\mathbf{\\theta}`} /> which minimize the error.
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