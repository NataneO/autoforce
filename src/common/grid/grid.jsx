import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const GridWrapper = ({ columns, columnSizes, rows, children }) => {
  const childrenArr = React.Children.toArray(children);
  let cols = [];
  let j = 0;
  if (columnSizes) {

    console.log(j)
    for (let i = 0; i < childrenArr.length; i++) {
      
      cols.push(<Col key={i} lg={columnSizes[j]}>{childrenArr[i]}</Col>);
      console.log(columnSizes[j])
      j = j + 1;
      console.log(j)
      if (j >= columns) {
        j = 0
      }
    }
    console.log(cols)
  } else {
    for (let i = 0; i < childrenArr.length; i++) {
      cols.push(<Col key={i} >{childrenArr[i]}</Col>);

    }

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