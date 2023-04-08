import React, { useReducer } from "react";

const Form = () => {
  const initialState = {
    name: '',
    email: '',
    error: '',
    submitted: null,
  };

  const [state, dispatch] = useReducer((state, action) => {
    switch (action.type) {
      case 'SET_NAME':
        return { ...state, name: action.payload };
      case 'SET_EMAIL':
        return { ...state, email: action.payload };
      case 'SET_ERROR':
        return { ...state, error: action.payload };
      case 'SET_SUBMITTED':
        return { ...state, submitted: action.payload };
      case 'RESET':
        return initialState;
      default:
        return state;
    }
  }, initialState);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!state.name || !state.email) {
      dispatch({ type: 'SET_ERROR', payload: 'Diligencia todos los campos' });
      return;
    }

    if (state.name.length < 5) {
      dispatch({ type: 'SET_ERROR', payload: 'El nombre debe ser mayor a 5 caracteres' });
      return;
    }

    if (!state.email.match(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g)) {
      dispatch({ type: 'SET_ERROR', payload: 'Ingrese un email válido' });
      return;
    }

    dispatch({ type: 'SET_SUBMITTED', payload: { name: state.name, email: state.email } });
    dispatch({ type: 'RESET' });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label htmlFor='name'>Nombre</label>
        <input
          type='text'
          id='name'
          value={state.name}
          onChange={(e) => dispatch({ type: 'SET_NAME', payload: e.target.value })}
        />
        <label htmlFor='email'>Email</label>
        <input
          type='text'
          id='email'
          value={state.email}
          onChange={(e) => dispatch({ type: 'SET_EMAIL', payload: e.target.value })}
        />
        <button>Enviar</button>
      </form>
      {state.error && <p className='error'>{state.error}</p>}
    </div>
  );
};

export default Form;
