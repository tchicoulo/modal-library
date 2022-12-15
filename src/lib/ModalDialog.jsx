import { useState } from "react";
import { React } from "react";

const ModalDialog = (props) => {
  const [modal, setModal] = useState(true);

  const closeModal = () => {
    setModal(false);
  };

  //For the documentation to add Style

  const styles = {
    background: {
      // justifyContent: "right",   Position of the modal window
      // backgroundColor: "red",
      // opacity: "0.7",
    },
    containerModal: {
      // width: "200px",
      // height: "70px",
      // border: "2px solid orange",
    },
    text: {
      // color: "red",
      // fontSize: "20px",
    },
    crossIcon: {
      // color: "red",
    },
  };

  return (
    <div className="modal">
      {modal ? (
        <div
          className="modal-background"
          style={styles.background}
          onClick={closeModal}
        >
          <div className="modal-container" style={styles.containerModal}>
            <p style={styles.text}>{props.name}</p>

            <div
              onClick={closeModal}
              className="fa-solid fa-circle-xmark btn"
              style={styles.crossIcon}
            >
              X
            </div>
          </div>
        </div>
      ) : (
        ""
      )}
    </div>
  );
};

export default ModalDialog;
