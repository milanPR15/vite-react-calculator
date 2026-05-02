import { useCallback, useEffect, useRef, useState, type JSX } from 'react'
import './App.css'

function compute(a: number, b: number, op: string) {
  switch (op) {
    case '+':
      return a + b
    case '-':
      return a - b
    case '*':
      return a * b
    case '/':
      return b === 0 ? NaN : a / b
    default:
      return NaN
  }
}

export default function App(): JSX.Element {
  const [left, setLeft] = useState('')
  const [right, setRight] = useState('')
  const [op, setOp] = useState<string>('')
  const [result, setResult] = useState<string>('0')
  const containerRef = useRef<HTMLDivElement | null>(null)

  const onOperatorClick = useCallback(
    (selectedOp: string) => {
      setOp(selectedOp)
      const a = parseFloat(left)
      const b = parseFloat(right)
      if (Number.isFinite(a) && Number.isFinite(b)) {
        const r = compute(a, b, selectedOp)
        setResult(Number.isFinite(r) ? String(r) : 'Error')
      } else {
        setResult('Error')
      }
    },
    [left, right],
  )

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const key = e.key
      if (['+', '-', '*', '/'].includes(key)) {
        e.preventDefault()
        onOperatorClick(key)
        return
      }
      if (key === 'Enter') {
        e.preventDefault()
        const a = parseFloat(left)
        const b = parseFloat(right)
        if (Number.isFinite(a) && Number.isFinite(b) && ['+','-','*','/'].includes(op)) {
          const r = compute(a, b, op)
          setResult(Number.isFinite(r) ? String(r) : 'Error')
        } else {
          setResult('Error')
        }
      }
    }

    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [left, right, op, onOperatorClick])

  return (
    <div className="app" ref={containerRef}>
      <div className="calculator">
        <div className="display">
          <div className="row-inputs">
            <label className="input-label" htmlFor="leftInput">Left number</label>
            <input
              id="leftInput"
              inputMode="decimal"
              placeholder="0"
              value={left}
              onChange={(e) => setLeft(e.target.value)}
            />

            <label className="input-label" htmlFor="rightInput">Right number</label>
            <input
              id="rightInput"
              inputMode="decimal"
              placeholder="0"
              value={right}
              onChange={(e) => setRight(e.target.value)}
            />

            <div className="ops" role="group" aria-label="operators">
              {['+', '-', '*', '/'].map((o) => (
                <button
                  key={o}
                  type="button"
                  className={`op-btn ${op === o ? 'active' : ''}`}
                  onClick={() => onOperatorClick(o)}
                  aria-pressed={op === o}
                >
                  {o}
                </button>
              ))}
            </div>

          </div>

          <div className="result">{result}</div>
        </div>
      </div>
    </div>
  )
}
