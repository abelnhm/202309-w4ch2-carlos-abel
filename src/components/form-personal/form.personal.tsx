import { SyntheticEvent, useState } from 'react';
import './form.personal.scss';
import { user } from '../../data/repo';

export function FormPersonalData() {
  const [PersonalState, setPersonalState] = useState(user);
  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();

    console.log(PersonalState);
  };

  const handleChange = (ev: SyntheticEvent) => {
    const control = ev.target as HTMLInputElement;
    const value = control.type === 'checkbox' ? control.checked : control.value;
    const name = control.name;
    setPersonalState({ ...PersonalState, [name]: value });
  };

  return (
    <section className="onboarding-part-one">
      <form className="personal-user-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Name</label>
        <input
          type="text"
          name="name"
          id="name"
          required
          onChange={handleChange}
        />

        <label htmlFor="lastName">Lastname</label>
        <input
          type="text"
          name="lastName"
          id="lastName"
          required
          onChange={handleChange}
        />

        <label htmlFor="birthDate">BirthDate</label>
        <input
          type="date"
          name="birthDate"
          id="birthDate"
          required
          onChange={handleChange}
        />

        <div className="gender">
          <input
            type="radio"
            name="gender"
            id="male"
            defaultValue="male"
            required
            onChange={handleChange}
          />
          <label htmlFor="male">Male</label>
          <input
            type="radio"
            name="gender"
            id="female"
            defaultValue="female"
            required
            onChange={handleChange}
          />
          <label htmlFor="female">Female</label>
          <input
            type="radio"
            name="gender"
            id="other"
            defaultValue="other"
            required
            onChange={handleChange}
          />
          <label htmlFor="other">Other</label>
          <input
            type="radio"
            name="gender"
            id="notToMention"
            defaultValue="not to mention"
            required
            onChange={handleChange}
          />
          <label htmlFor="notToMention">Not to mention</label>
        </div>

        <label htmlFor="email">Email</label>
        <input
          type="email"
          name="email"
          id="email"
          required
          onChange={handleChange}
        />

        <div>
          <input
            type="checkbox"
            name="isNewsLetter"
            id="isNewsLetter"
            required
            onChange={handleChange}
          />
          <label htmlFor="isNewsLetter">
            Would you like to receive our newsletter?
          </label>
        </div>

        <input type="submit" value="Siguiente" />
      </form>
    </section>
  );
}
