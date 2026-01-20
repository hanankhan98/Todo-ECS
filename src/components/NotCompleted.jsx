import React from 'react'
import Card from './Card';

const NotCompleted = ({todos, setTodos}) => {
  let x = todos.filter((e) => e.status === false)
  return (
    <>     
          {x.map((e, i) => {
            return <Card data={todos} todos={e} setTodos={setTodos} key={i}  />;
        }
        )
        }
       
    </>
  )
}

export default NotCompleted