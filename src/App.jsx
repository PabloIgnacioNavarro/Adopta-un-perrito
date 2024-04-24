import "./App.css";
import Header from "./assets/components/Header";
import MyCard from "./assets/components/MyCard";
import Footer from "./assets/components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="caja">
      <Header></Header>
      <div className="tarjeta">
        <MyCard
          texto={"Husky"}
          titulo={"Bartolo"}
          url={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSh0sOe7wFfJljSqfikk24UrEtf7Oex_n9r3I96t3XEEg&s"
          }
          descripcion={
            "LLeno de energía y listo para jugar.¡Dale a Bartolo el hogar amoroso que se merece!"
          }
        />
        <MyCard
          texto={"Bobtail"}
          titulo={"Messi"}
          url={
            "https://t1.uc.ltmcdn.com/es/posts/2/3/4/como_adiestrar_a_un_shar_pei_34432_600.webp"
          }
          descripcion={
            "Es juguetón, amigable y se lleva bien con los niños y otros animales.¡Haz de Messi parte de tu familia hoy mismo!"
          }
        />
        <MyCard
          texto={"Shar Pei"}
          titulo={"Gohan"}
          url={
            "https://t1.uc.ltmcdn.com/es/posts/2/3/4/como_adiestrar_a_un_shar_pei_34432_600.webp"
          }
          descripcion={
            "Un perro de tamaño mediano con un corazón gigante. ¡Hazte amigo de Gohan y experimenta un amor incondicional!"
          }
        />
        <MyCard
          texto={"Beagle"}
          titulo={"Princesa"}
          url={
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSh0sOe7wFfJljSqfikk24UrEtf7Oex_n9r3I96t3XEEg&s"
          }
          descripcion={
            "Es una compañera leal y cariñosa que adora los mimos y los abrazos. ¡Ayuda a Princesa a encontrar su final feliz!"
          }
        />
      </div>
      <Footer></Footer>
    </div>
  );
}

export default App;
