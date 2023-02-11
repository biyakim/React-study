import React from 'react';

function TodoItem (props) {
  const onRemove = () => {
    
  }
  return (
    <div className="todo-item">
      {props.item}
       <button onClick={onRemove}>삭제</button>
    </div>
  )
}

export default TodoItem;