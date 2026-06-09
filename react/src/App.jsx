import { BinarySearchPage } from './pages/BinarySearchPage';
import { BinarySearchProvider } from './contexts/BinarySearchContext'

function App() {
  return (
    <>
      <BinarySearchProvider>
        <BinarySearchPage />
      </BinarySearchProvider>
    </>
  )
}

export default App
