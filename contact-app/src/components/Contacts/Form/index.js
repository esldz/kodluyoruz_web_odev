import React, { useState , useEffect} from 'react';

const initialFormValues = {fullname: "", phoneNumber: ""};

function Form({ addContact,contacts }) {
    const [form, setForm] = useState(initialFormValues);

    useEffect(() => {
        setForm(initialFormValues);
    }, [contacts]);

    const onChangeInput = (e) => {
        setForm({...form, [e.target.name] : e.target.value});
    }

    const onSubmit = (e) => {
        e.preventDefault();

        if(form.fullname === '' || form.phoneNumber === ''){
            return false;
        }

        addContact([...contacts,form]);

    };

  return (
    <form onSubmit={onSubmit}>
        <div>
            <input name="fullname" placeholder='Full Name' onChange={onChangeInput} value={form.fullname} /> <br />
            <input name='phoneNumber' placeholder='Phone Number' onChange={onChangeInput}  value={form.phoneNumber}/> <br />
            <button>Add</button>
        </div>
    </form>
  )
}

export default Form;