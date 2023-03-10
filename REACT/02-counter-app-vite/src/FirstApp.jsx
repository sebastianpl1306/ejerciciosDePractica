import PropTypes from "prop-types";

const info = {
  name: 'Sebastian',
  lastname: 'Pabon Lopez'
};

const getName = (info) =>{
  return `Hello ${info.name} ${info.lastname} welcome!`;
}

export const FirstApp = ({title, number}) => {

  return (
    <>
      <h1>{ getName(info) }</h1>
      <p>FirstApp {title} {number+1}</p>
    </>
  )
}

FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  number: PropTypes.number
};