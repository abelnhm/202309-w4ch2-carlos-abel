import { SyntheticEvent, useState } from 'react';
import { accesData } from '../../data/repo';
import './form.access.data.scss';


type Props = {
  status: boolean;
};

export function FormAccessData({ status }: Props) {
  const [accessState, setAccesState] = useState(accesData);
  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();

    console.log(accessState);
  };

  const handleChange = (ev: SyntheticEvent) => {
    const control = ev.target as HTMLInputElement;
    const value = control.type === 'checkbox' ? control.checked : control.value;
    const name = control.name;
    setAccesState({ ...accessState, [name]: value });
  };

  return (
    <section className={`onboarding-part-two ${status ? 'show' : ''}`}>
      <form className="access-user-form" onSubmit={handleSubmit}>
        <label htmlFor="userName">username</label>
        <input
          type="text"
          name="userName"
          id="userName"
          required
          onChange={handleChange}
        />
        <label htmlFor="password">password </label>
        <input
          type="password"
          name="password"
          id="password"
          required
          onChange={handleChange}
        />
        <label htmlFor="repeatPassword">repeat password</label>
        <input
          type="password"
          name="repeatPassword"
          id="repeatPassword"
          required
          onChange={handleChange}
        />
        <select name="acountType" onChange={handleChange} required>
          <option value=""></option>
          <option value="personal">personal</option>
          <option value="pro"> pro</option>

          <option value="business">business</option>
        </select>

        <input type="submit" value="Back" />

        <input type="submit" value="Next" />
      </form>
    </section>
  );
}
