import React from 'react'
import MathJax from 'react-mathjax'

const logistic = `
\\hat{y} = \\delta(z(X, \\mathbf{\\Theta})) = \\delta(\\Theta^TX)
`

const sigma = `
\\sigma(z) = \\frac{1}{1+e^{-z}}
`

const error = `
Loss(y, \\hat{y}) = -\\frac{1}{n}[y^T\\log(\\hat{y})+(1-y)^T\\log(1-\\hat{y})]
`

const forward = `
\\hat{y} = \\delta(\\Theta^TX)
`

const loss = `
Loss(y, \\hat{y}) = -\\frac{1}{n}[y^T\\log(\\hat{y})+(1-y)^T\\log(1-\\hat{y})]
`

const back = `
\\frac{\\partial Loss(y, \\hat{y})}{\\partial \\Theta} = \\frac{\\partial Loss(y, \\hat{y})}{\\partial \\hat{y}} \\cdot \\frac{\\partial \\hat{y}}{\\partial z} \\cdot \\frac{\\partial z}{\\partial \\Theta}
= \\frac{1}{n}X^T(\\hat{y}-y)
`

const update = `
\\Theta = \\Theta - \\alpha  \\frac{\\partial Loss(y, \\hat{y})}{\\delta \\Theta}
`

function FormulaLogisticRegression () {
  return(
    <MathJax.Provider>
      <div>
        Logistic regression can be viewed as basic neural network unit, which focused on linear classification:
        <MathJax.Node formula={logistic} />
        Where <MathJax.Node inline formula={sigma} />,
        and the objective is to find <MathJax.Node inline formula={`\\mathbf{\\Theta}`} /> which minimize the error.
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