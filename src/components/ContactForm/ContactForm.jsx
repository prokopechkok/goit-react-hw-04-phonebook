import { Component } from 'react';
import css from './ContactForm.module.css';

export class ContactForm extends Component {
  state = {
    name: '',
    number: '',
  };

  handleFormSubmit = e => {
    e.preventDefault();

    const name = e.currentTarget.elements.name.value;
    const number = e.currentTarget.elements.number.value;

    this.setState({ name: name, number: number });
    this.props.onSubmit({ name, number });
    e.currentTarget.reset();
  };
  render() {
    return (
      <form className={css.contactForm} onSubmit={this.handleFormSubmit}>
        <label className={css.formInputLabel}>
          Name
          <input
            className={css.contactInput}
            type="text"
            name="name"
            placeholder="Enter name here"
            required
          />
        </label>
        <label className={css.formInputLabel}>
          Number
          <input
            className={css.contactInput}
            type="tel"
            name="number"
            placeholder="Enter phonenumber here"
            required
          />
        </label>
        <button className={css.addContactBtn} type="submit">
          Add contact
        </button>
      </form>
    );
  }
}
