import Usuario from "../usuario";

function Sidebar() {
  return (
    <div
      style={{
        width: "18%",
        height: "100vh",
        borderRight: "2px solid black",
      }}
    >
      <Usuario
        imageUrl="https://sujeitoprogramador.com/steve.png"
        name="usuario aleatório"
        username="random_user"
      />
    </div>
  );
}

export default Sidebar;
