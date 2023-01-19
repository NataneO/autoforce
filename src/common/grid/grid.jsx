import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const GridWrapper = ({ columns, rows, children }) => {
  const childrenArr = React.Children.toArray(children);
    
  let cols = [];
  for (let i = 0; i < childrenArr.length; i++) {
    cols.push(<Col key={i}>{childrenArr[i]}</Col>);
  }
 

  let rowsArr = [];
  for (let i = 0; i < rows; i++) {
    rowsArr.push(
      <Row key={i}>
        {cols.slice(i * columns, (i + 1) * columns)}
      </Row>
    );
  }

  return (
    <Container>
      {rowsArr}
</Container>
);
};

export default GridWrapper;