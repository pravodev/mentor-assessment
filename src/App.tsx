import styles from './App.module.scss';
import { Button } from './components/Button';

function App() {
  return (
    <div className={styles.container}>
      <Button>Show Modal</Button>
    </div>
  );
}

export default App;
