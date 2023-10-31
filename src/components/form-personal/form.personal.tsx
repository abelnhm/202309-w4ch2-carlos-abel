import './form.personal.scss';

export function FormPersonalData() {
  return (
    <>
      <form>
        <input type="text" name="name" />
        <input type="text" name="lastName" />
        <input type="date" name="birthDate" />
        <div>
          <input type="radio" name="gender" id="male" defaultValue="male" />
          <label htmlfor="male">Male</label>
          <input type="radio" name="gender" id="female" defaultValue="female" />
          <label htmlfor="female">Female</label>
          <input type="radio" name="gender" id="other" defaultValue="other" />
          <label htmlfor="other">Other</label>
          <input
            type="radio"
            name="gender"
            id="notToMention"
            defaultValue="not to mention"
          />
          <label htmlfor="notToMention">Not to mention</label>
        </div>
        <input type="email" name="email" />
        <input type="checkbox" name="isNewsLetter" />
        <input type="submit" value="Siguiente" />
      </form>
    </>
  );
}
