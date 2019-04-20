import React from 'react'
import MathJax from 'react-mathjax'

const logistic = `
h_\\theta(x)=\\delta(\\theta^Tx)
`

const sigma = `
\\sigma(z) = \\frac{1}{1+e^{-z}}
`

const error = `
J(\\theta)=-\\frac{1}{m}\\sum_{i=1}^my^{(i)}\\log{h_\\theta(x^{(i)})} + (1-y^{(i)})\\log(1-h_\\theta(x^{(i)}))
`

const forward = `
\\mathbf{\\hat{y}} = \\sigma(\\mathbf{XW})
`

const loss = `
L(\\mathbf{y}, \\mathbf{\\hat{y}}) = -\\frac{1}{m}\\big(\\mathbf{y}^T\\log(\\mathbf{\\hat{y}})+(1-\\mathbf{y})^T\\log(1-\\mathbf{\\hat{y}})\\big)
`

const back = `
\\frac{\\partial L(\\mathbf{y}, \\mathbf{\\hat{y}})}{\\partial W} 
= \\frac{\\partial L(\\mathbf{y}, \\mathbf{\\hat{y}})}{\\partial \\mathbf{\\hat{y}}} \\cdot \\frac{\\partial \\mathbf{\\hat{y}}}{\\partial W} 
= \\frac{1}{m}X^T(\\mathbf{\\hat{y}} - \\mathbf{y})
`

const update = `
W = W - \\alpha  \\frac{\\delta Loss(y, \\hat{y})}{\\delta W}
`

function FormulaLogisticRegression () {
  return(
    <MathJax.Provider>
      <div>
        Logistic regression can be viewed as basic neural network unit, which focused on linear classification:
        <MathJax.Node formula={logistic} />
        Where <MathJax.Node inline formula={sigma} />,
        and the objective is to find <MathJax.Node inline formula={`\\mathbf{\\theta}`} /> which minimize the error.
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

export default FormulaLogisticRegression