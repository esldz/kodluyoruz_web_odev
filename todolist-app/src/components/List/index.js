import React from 'react';

function List({ list, setList }) {
    const handleCheckboxClick = (index) => {

        const updatedList = list.map((item, idx) => {
            if (idx === index) {
                return { ...item, checked: !item.checked };
            }

            return item;
        });

        setList(updatedList);
    };

    const handleDeleteItem = (index) => {
        const updatedList = [...list];
        updatedList.splice(index, 1);
        setList(updatedList);
    };

    return (
        <div>
            <ul>
                {list.map((item, index) => (
                    <li key={index}>
                        <input
                            name='checkItem'
                            type='checkbox'
                            checked={item.checked}
                            onChange={() => handleCheckboxClick(index)}
                        />
                        <span style={{ textDecoration: item.checked ? 'line-through' : 'none' }}> {item.addItem}</span>
                        <button class='delBtn' onClick={() => handleDeleteItem(index)}>✖️</button>
                    </li>
                ))}
            </ul>
                    <div id='filter'>
                        <p>{list.length} items left</p>
                    </div>
        </div>
        
    )
}

export default List;
