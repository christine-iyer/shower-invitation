import React from 'react'
import styles from './Content.module.scss'

const Content = () => {
  return (
    <div className={styles.content}>

      <h4>When:</h4><p>Sunday, July, 23, 2023 1:00pm</p>
      <h4>Where:</h4>
      <address>
        <p>Mary Hennessey Iyer's Home <br></br>
          <a href="hjfdh">76 North St. (entrance, driveway, and street parking on Scammon St.)</a> <br></br>
          <a href="hjvfffh">Saco, ME 04072 </a> <br></br>
        </p>
      </address>

      <h4>Registry:</h4>
<p>For those of you who have asked, here's is a link to a baby registry.</p>

<a href="https://www.babylist.com/list/baby-edith-iyer-hernandez">Link</a>
  

      

</div>
  )
}

export default Content