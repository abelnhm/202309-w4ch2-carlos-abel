import { useState } from 'react';
import './form.personal.scss';

export function FormPersonalData() {
  //  const [userState, setUserState] = useState(initialState);

  return (
    <section className="onboarding-part-one">
      <form className="personal-user-form">
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" required />

        <label htmlFor="lastName">Lastname</label>
        <input type="text" name="lastName" id="lastName" required />

        <label htmlFor="birthDate">BirthDate</label>
        <input type="date" name="birthDate" id="birthDate" required />

        <div className="gender">
          <input
            type="radio"
            name="gender"
            id="male"
            defaultValue="male"
            required
          />
          <label htmlFor="male">Male</label>
          <input
            type="radio"
            name="gender"
            id="female"
            defaultValue="female"
            required
          />
          <label htmlFor="female">Female</label>
          <input
            type="radio"
            name="gender"
            id="other"
            defaultValue="other"
            required
          />
          <label htmlFor="other">Other</label>
          <input
            type="radio"
            name="gender"
            id="notToMention"
            defaultValue="not to mention"
            required
          />
          <label htmlFor="notToMention">Not to mention</label>
        </div>

        <label htmlFor="email">Email</label>
        <input type="email" name="email" id="email" required />

        <div>
          <input
            type="checkbox"
            name="isNewsLetter"
            id="isNewsLetter"
            required
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
