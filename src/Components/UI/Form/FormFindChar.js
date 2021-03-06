import React from 'react';
import Button from '../Button';
import Input from '../Input';
import styles from './FormFindChar.module.css';

const FormFindChar = (props) => {
  return (
    <form onSubmit={props.onSubmit} className={styles.form}>
      <Input
        onChange={props.onChange}
        input="pesonagem"
        placeholder="Buscar personagem"
      />
      <Button
        nameButton={props.load ? 'Buscando...' : 'Buscar'}
        type="submit"
      />
    </form>
  );
};

export default FormFindChar;
