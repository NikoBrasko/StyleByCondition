import './App.scss';
import { BadgeCard } from './components/BadgeCard';

function App() {

  //* rafc 

  return (
    <>
      <BadgeCard type='secondary'>105</BadgeCard>
      <BadgeCard type='success'>Complete</BadgeCard>
      <BadgeCard type='warning'>in Progress</BadgeCard>
      <BadgeCard type='warning'><img width='400px' src="https://images.unsplash.com/photo-1690743300330-d190ad8f97dc?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80" alt="" /></BadgeCard>
    </>

  )
}

export default App;
