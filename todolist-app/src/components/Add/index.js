import React, { useState, useEffect } from 'react';

const initialFormValues = { addItem: "" };

function Add({ list, setList }) {
    const [form, setForm] = useState(initialFormValues);

    useEffect(() => {
        setForm(initialFormValues);
    }, [list]);

    const onChangeInput = (e) => {
        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;

        setForm({ ...form, [e.target.name]: value });

        if (e.target.name === 'selectAll') {
            const updatedList = list.map(item => ({ ...item, checked: value }));

            setList(updatedList);

        } else if (e.target.name === 'checkItem') {
            const updatedList = list.map((item, index) => {

                if (index.toString() === e.target.value) {
                    return { ...item, checked: e.target.checked };
                }
                
                return item;
            });

            setList(updatedList);
        }
    }

    const onSubmit = (e) => {
        e.preventDefault();

        if (form.addItem === '') {
            return alert("Add Item");
        }

        setList([...list, form]);
        setForm(initialFormValues);

    };

    return (
        <form onSubmit={onSubmit}>
            <div>
                <input id='checkAll' name='selectAll' type='checkbox' onChange={onChangeInput} />
                <input name='addItem' placeholder='Add İtem' onChange={onChangeInput} value={form.addItem} />
            </div>
        </form>
    )
}

export default Add;
