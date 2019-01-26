import React from 'react'
import MathJax from 'react-mathjax'

const taylorSeries = `f(x) = \\sum_{n=0}^\\infty \\frac{f^n(a)}{n!}(x-a)^n = f(a) + f'(a)(x-a) + \\frac{f''(a)}{2!}(x-a)^2 + \\cdots + \\frac{f^{(k)}(a)}{k!}(x-a)^k + h_k(x)(x-a)^k
`
const trigonometric = `\\left\\{ \\begin{array}{rcl}
cos(x)= & \\sum_{n=0}^\\infty \\frac{(-1)^n}{(2n)!}x^{2n}  \\\\ 
sin(x)= & \\sum_{n=0}^\\infty \\frac{(-1)^n}{(2n+1)!}x^{2n+1}
\\end{array}\\right.`

const exponentialSeries = `e^{ix} = \\sum_{n=0}^\\infty \\frac{(ix)^n}{n!} = 1 + ix + \\frac{(ix)^2}{2!} + \\frac{(ix)^3}{3!} + \\cdots 
= \\left( 1 - \\frac{x^2}{2!} + \\cdots \\right) + i\\left( x - \\frac{x^3}{3!} + \\cdots \\right)`

const complexPart = `\\left\\{ \\begin{array}{rcl}
real\\left\\{e^{ix}\\right\\} = & 1 - \\frac{x^2}{2!} +  \\frac{x^4}{4!} - \\cdots  \\\\ 
imag\\left\\{e^{ix}\\right\\} = & x - \\frac{x^3}{3!} +  \\frac{x^5}{5!} - \\cdots
\\end{array}\\right.`

const Euler = `e^{ix} = cos(x) + isin(x)`

function Formula () {
  return (
    <MathJax.Provider>
      <div>
        A continuous function <MathJax.Node inline formula={'f(x)'}/>
        (with <MathJax.Node inline formula={'f^n(x)'}/> exist and <MathJax.Node inline
                                                                                formula={'f^{n+1}(x)'}/> continuous)
        can be expanded in the form of a Taylor series:
        <MathJax.Node formula={taylorSeries}/>

        Trigonometric functions are continuous and <MathJax.Node inline formula={'n'}/> th-order differentiable,
        there taylor series can be represented as:
        <MathJax.Node formula={trigonometric}/>

        For complex exponential function <MathJax.Node inline formula={'e^{ix}'}/>, the Taylor series is:
        <MathJax.Node formula={exponentialSeries}/>

        where:
        <MathJax.Node formula={complexPart}/>

        Recall cos and sin series, we got the most beautiful formula of all time (known as Euler's formula):
        <MathJax.Node formula={Euler}/>
        which establishes the fundamental relationship between the trigonometric functions and the complex exponential
        function.
      </div>
    </MathJax.Provider>
  )
}

export default Formula