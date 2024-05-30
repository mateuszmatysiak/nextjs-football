type FooterProps = React.PropsWithChildren;

export const Footer = (props: FooterProps) => {
  const { children } = props;

  return (
    <footer className="max-w-layout h-44 mx-auto mt-10 bg-sea-5 rounded-t-lg p-6">
      {children}
    </footer>
  );
};
