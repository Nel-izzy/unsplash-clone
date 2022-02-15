import React from "react";
import ModalComponent from "./ModalComponent";

const Photo = ({ urls, user, id }) => {
  const [modalVisible, setModalVisible] = React.useState(false);
  function openModal() {
    setModalVisible(true);
  }

  function closeModal() {
    setModalVisible(false);
  }

  const { regular, small } = urls;
  const { name, location } = user;
  const modalBody = (
    <div>
      <div class="modal-header">
        <button
          onClick={closeModal}
          type="button"
          class="btn-close"
          data-bs-dismiss="modal"
          aria-label="Close"
        ></button>
      </div>
      <br />
      <img src={regular} alt="full" className="img-fluid" />
    </div>
  );

  return (
    <div>
      <div className="img-container position-relative">
        <img
          src={small}
          alt="small"
          className="img-fluid image"
          onClick={openModal}
        />
        <div className="position-absolute bottom-0 start-0 text-white">
          <label>
            <strong>{name}</strong>
          </label>
          <br />
          <label>{location}</label>
        </div>
      </div>
      {modalVisible && (
        <ModalComponent
          visible={modalVisible}
          handleClose={closeModal}
          body={modalBody}
        />
      )}
    </div>
  );
};

export default Photo;
