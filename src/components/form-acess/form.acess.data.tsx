import './form.access.data.scss';

export function FormAccessData() {
  return (
    <section className="onboarding-part-two">
      <form>
        <label htmlFor="userName">username</label>
        <input type="text" name="userName" id="userName" />
        <label htmlFor="passWord">password </label>
        <input type="password" name="passWord" id="passWord" />
        <label htmlFor="repeatPassWord">repeat password</label>
        <input type="password" name="repeatPassWord" id="repeatPassWord" />
        <select name="select">
          <option value="personal">personal</option>
          <option value="pro"> pro</option>

          <option value="business">business</option>
        </select>

        <input type="submit" value="Retroceder" />

        <input type="submit" value="Siguiente" />
      </form>
    </section>
  );
}
