import Head from 'next/head'
import styles from '../styles/calculator.module.css'
import react, { useState, useEffect } from 'react'

export default function Home() {

  const [calc, setCalc] = useState('')
  const [result, setResult] = useState(0)

  useEffect(() => {
    try {
      setResult(eval(calc))
    } catch {
      setResult(calc)
    }
  }, [calc])

  return (
    <div className={styles.container}>
      <Head>
        <title>Calculadora | Ivan Führ</title>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      </Head>

      <main className={styles.main}>
        <div className={styles.display}>
          <input type="text" readOnly={true} value={calc} className="input" className={styles.operation} />
          <input type="text" readOnly={true} value={result} className="input" className={styles.result} />

        </div>
        <div className={styles.buttons}>
          <div className={styles.row}>
            <button onClick={() => setCalc(calc + '(')}>(</button>
            <button onClick={() => setCalc(calc + ')')}>)</button>
            <button onClick={() => { setCalc(''); setResult(0) }}>AC</button>
            <button onClick={() => setCalc(calc.slice(0, -1))}><i className="fa fa-eraser" aria-hidden="true"></i>
            </button>
          </div>
          <div className={styles.row}>
            <button onClick={() => setCalc(calc + '7')}>7</button>
            <button onClick={() => setCalc(calc + '8')}>8</button>
            <button onClick={() => setCalc(calc + '9')}>9</button>
            <button onClick={() => setCalc(calc + '/')}>/</button>
          </div>
          <div className={styles.row}>
            <button onClick={() => setCalc(calc + '4')}>4</button>
            <button onClick={() => setCalc(calc + '5')}>5</button>
            <button onClick={() => setCalc(calc + '6')}>6</button>
            <button onClick={() => setCalc(calc + '*')}>*</button>
          </div>
          <div className={styles.row}>
            <button onClick={() => setCalc(calc + '1')}>1</button>
            <button onClick={() => setCalc(calc + '2')}>2</button>
            <button onClick={() => setCalc(calc + '3')}>3</button>
            <button onClick={() => setCalc(calc + '-')}>-</button>
          </div>
          <div className={styles.row}>
            <button className={styles.zero} onClick={() => setCalc(calc + '0')}>0</button>
            <button onClick={() => setCalc(calc + '.')}>,</button>
            <button onClick={() => setCalc(calc + '+')}>+</button>
          </div>
          <div className={styles.row}>
            <button className={styles.equals} onClick={() => setCalc(result)}>=</button>
          </div>
        </div>
      </main>
    </div >
  )
}
