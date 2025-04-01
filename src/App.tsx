import React, { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)
  const [matricula, setMatricula] = useState('')
  const [resultado, setResultado] = useState<string | null>(null)

  // Arreglo de matrículas autorizadas
  const matriculasAutorizadas = ['ABC123', 'XYZ789', 'DEF456']

  const handleMatriculaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMatricula(e.target.value)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
  
    // Normalizar la matrícula (convertir a mayúsculas y eliminar espacios)
    const matriculaNormalizada = matricula.trim().toUpperCase()
  
    // Verificar si la matrícula está en la lista de autorizadas
    const estaAutorizado = matriculasAutorizadas.includes(matriculaNormalizada)
  
    // Establecer el resultado de la consulta
    setResultado(estaAutorizado ? 'Vehículo autorizado' : 'Vehículo sin registrar')
  
    // Incrementar el contador de consultas
    setCount(prevCount => prevCount + 1)
  }

  return (
    <div className="app-container">
      <header className="header">
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <h1>Urbanización Las Suertes</h1>
        </a>
      </header>
   
      <p className="app-description">
        App para identificar vehículos autorizados, introduzca los datos:
      </p>
   
      <form className="auth-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="matricula" className="form-label">
            Matrícula del Vehículo
          </label>
          <input
            type="text"
            id="matricula"
            className="form-input"
            value={matricula}
            onChange={handleMatriculaChange}
            placeholder="Ingrese la matrícula"
            required
          />
        </div>
        <button type="submit" className="submit-button">
          Consultar Matrícula
        </button>
      </form>
 
      {/* Mostrar resultado de la consulta */}
      {resultado && (
        <div className={`result ${resultado === 'Vehículo autorizado' ? 'result-success' : 'result-error'}`}>
          {resultado}
        </div>
      )}
 
      <div className="counter">
        <p>Cantidad de consultas: {count}</p>
      </div>
   
      <p className="footer">
        Pincha aquí para más información
      </p>
    </div>
  )
}
 
export default App