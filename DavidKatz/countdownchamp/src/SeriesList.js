import React from 'react';
import { Link } from 'react-router-dom';

let displayStyle = {
  listStyleType: 'none',
  padding: '10px 10px 10px 10px',
  border: '2px green dotted',
  margin: '10px 10px 10px 10px',
};

const SeriesListItem = ({ series }) => (
  <li style={displayStyle}>
    <Link to={`/series/${series.show.id}`}>
      {series.show.name}
    </Link>
  </li>
);

const SeriesList = (props) => {
    return (
      <div> 
        <ul style={displayStyle}>
        {props.list.map((series) => (
          <SeriesListItem series={series} key={series.show.id} />
        ))}
        </ul>
      </div>
    )
};

export default SeriesList;