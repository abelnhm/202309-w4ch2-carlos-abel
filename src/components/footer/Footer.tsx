import './footer.scss';
type Props = {
  text: string;
};
//
export function Footer({ text }: Props) {
  return (
    <footer>
      <p>{text}</p>
    </footer>
  );
}
