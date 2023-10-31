type Props = {
  text: string;
};

export function Footer({ text }: Props) {
  return (
    <address>
      <p>{text}</p>
    </address>
  );
}
