import { Tabs } from '../pages/_app';

interface HeaderProps {
  tabSelected: Tabs
  setTabSelected: (select: Tabs) => void
}

const Header = ({ tabSelected, setTabSelected }: HeaderProps) => {
  return (
    <>
      <button onClick={() => setTabSelected(Tabs.INFORMACAO)} >Button 1</button>
      <button onClick={() => setTabSelected(Tabs.RESPOSTA)}>Button 2</button>
      {tabSelected}
      <p style={{ fontFamily: 'Olivia-Regular'}}>VAMOS casar</p>
    </>
  );
};

export default Header;