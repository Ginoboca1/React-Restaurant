import {
  AboutUs,
  Chef,
  FindUs,
  Footer,
  Gallery,
  Header,
  Intro,
  Laurels,
  SpecialMenu,
} from "./sections";
import { Navbar } from "./components/Navbar/Navbar";
import { Modal } from "./components/Modal/Modal";
import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [showModal, setShowModal] = useState(true);
  const [message, setMessage] = useState(
    "This webpage design was based on a Figma project. It's currently a landing page for a restaurant, and I'm actively working on it. Expect to see some exciting changes in the next few weeks!"
  );

  useEffect(() => {
    const modalShown = sessionStorage.getItem("modalShown");

    if (!modalShown) {
      setTimeout(() => {
        setShowModal(true);
        sessionStorage.setItem("modalShown", "true");
      }, 2000);
    }
  }, []);

  return (
    <div>
      {showModal && <Modal setShowModal={setShowModal} message={message} />}
      <Navbar setShowModal={setShowModal} setMessage={setMessage} />
      <Header setShowModal={setShowModal} setMessage={setMessage} />
      <AboutUs setShowModal={setShowModal} setMessage={setMessage} />
      <SpecialMenu setShowModal={setShowModal} setMessage={setMessage} />
      <Chef setShowModal={setShowModal} setMessage={setMessage} />
      <Intro setShowModal={setShowModal} setMessage={setMessage} />
      <Laurels setShowModal={setShowModal} setMessage={setMessage} />
      <Gallery setShowModal={setShowModal} setMessage={setMessage} />
    </div>
  );
}

export default App;
