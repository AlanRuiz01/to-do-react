
import Todo from './components/todo';
// import './App.css'


export default function App() {

  return (
    <div style={{ 
      minHeight: '100vh',
      backgroundColor: '#f7f7f7',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center'
    }}>
      <Todo />
    </div>
  );
}