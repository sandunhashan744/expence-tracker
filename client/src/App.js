
import './App.css';
import GridComponent from './components/gridComponent'
import FormComponent from './components/formComponent'


function App() {
  return (
    <div className="App">
      <div className="container mx-auto max-w-7xl text-center drop-shadow-lg text-gray-800 ">
        <h1 className="text-4xl py-8 mx-2 mb-10 bg-slate-800 text-white rounded">Expenses Tracker</h1>
      
        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-2">
          {/* this is the pace of chart */}
          <GridComponent />     
          <FormComponent />
        </div>
      </div>
    </div>
  );
}

export default App;
