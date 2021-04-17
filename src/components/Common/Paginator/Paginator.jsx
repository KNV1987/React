import React from "react";
import styles from './Paginator.module.css';





const Paginator = (props) => {

  let pages = [];
  for (let i = props.startPageSize > 0 ? props.startPageSize : 1; i <= props.finishPageSize; i++) {
    pages.push(i);
  }
  let finishPage = 10;
  return <div className={styles.divPagin}>
    {props.startPageSize > finishPage &&
      <span onClick={(e) => { props.onPageSize() }} > Back </span>}
    {pages.map(p => {
      return <span className={props.currentPage === p && styles.selectedPage}
        onClick={(e) => { props.onPageChanged(p) }} > {p} </span>
    })}
    <span onClick={(e) => { props.onFinishPageSize() }}>Next</span>
  </div>
};

export default Paginator;