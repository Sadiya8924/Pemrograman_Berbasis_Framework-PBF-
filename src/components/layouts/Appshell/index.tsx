import { useRouter } from 'next/router';
import Navbar from '../navbar';
import Footer from '../footer';
import styles from './appshell.module.css';

const disableNavbar = ["/auth/login", "/auth/register", "/404"];

type AppshellProps = {
  children: React.ReactNode;
};

const Appshell = (props : AppshellProps) => {
    const { children } = props;
    const { pathname } = useRouter();
    
    return (
    <main className={styles.container}>
      {!disableNavbar.includes(pathname) && <Navbar />}
      <div className={styles.content}>{children}</div>
      {!disableNavbar.includes(pathname) && <Footer />}
    </main>
  );
}
 
export default Appshell;