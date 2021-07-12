
import './App.css';
import Footer from './components/Footer';
import FormInput from './components/FormInput';
import List from './components/List';
import DataProvider from './components/DataProvider';

function App() {

  return (
    <DataProvider>
      <div className="App text-xl max-w-3xl mx-auto border bg-gray-200 h-96 ">
        <div className="min-h-full mx-4 p-4">
          <p className="text-2xl text-green-500">Hello World</p>
          <h1 className="space-x-2 uppercase text-lg font-semibold">To Do List</h1>

          <FormInput />
          <List />

          <Footer/>
        </div>
      </div>
    </DataProvider>
  );
}

export default App;
