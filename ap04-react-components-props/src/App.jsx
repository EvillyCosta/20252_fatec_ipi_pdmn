import Pedido from "./Pedido"
const App = () => {
  return(
    <div className="container">
      <div className="row">
        <div className="col-12 col-lg-6 col-xxl-3">
          <Pedido 
          data="22/08/2025"
          icone="fa-solid fa-heart"
          titulo="Coração"
          descricao="Coração bom"
          />
        </div>
        <div className="col-12 col-lg-6 col-xxl-3">
          <Pedido 
          data="21/08/2025"
          icone="fa-solid fa-book"
          titulo="Concrete Maths"
          descricao="Autor Donald"
          />
        </div>
        <div className="col-12 col-lg-6 col-xxl-3">
          <Pedido
          data="21/08/2025"
          icone="fa-solid fa-cat"
          titulo="Gato"
          descricao="Autor Donald"
          />
        </div>
        <div className="col-12 col-lg-6 col-xxl-3">
          <Pedido 
          data="21/08/2025"
          icone="fa-solid fa-hippo"
          titulo="Hipopótamo"
          descricao="Autor Donald"
          />
        </div>
      </div>
    </div>
  )
}

export default App