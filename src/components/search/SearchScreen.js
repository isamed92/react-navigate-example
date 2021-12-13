import React from 'react';
import { useForm } from '../../hooks/useForm';

export const SearchScreen = () => {
  const [formValues, handleInputChange] = useForm({
    search: '',
  });

  const { search } = formValues;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(search);
  };


  return (
    <>
      <h1>Busquedas</h1>
      <hr />
      <div className='row'>
        <div className='col-5'>
          <h4>Buscar</h4>
          <hr />

          <form onSubmit={handleSubmit}>
            <input
              type='text'
              placeholder='Buscar un heroe'
              className='form-control'
              name='search'
              autoComplete='off'
              value={search}
              onChange={handleInputChange}
            />
            <button className='btn btn-outline-primary mt-1' type='submit'>
              Buscar
            </button>
          </form>
        </div>
      </div>
    </>
  );
};
