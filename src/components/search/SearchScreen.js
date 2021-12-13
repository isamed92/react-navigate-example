import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import queryString from 'query-string';
import { getHeroesByName } from '../../helpers/getHeroesByName';
import { useForm } from '../../hooks/useForm';
import { HeroCard } from '../hero/HeroCard';

export const SearchScreen = () => {

    const navigate = useNavigate()
    const location = useLocation()
    const { q = '' } = queryString.parse(location.search)


  const [formValues, handleInputChange] = useForm({
    search: q,
  });

  const { search } = formValues;

  const heroesFiltered = getHeroesByName(q)

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate(`?q=${search}`)
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
        <div className='col-7'>
            <h4>Resultados</h4>
            <hr/>
            {
                heroesFiltered.map(hero => <HeroCard key={hero.id} {...hero} />)
            }
        </div>
      </div>
    </>
  );
};
