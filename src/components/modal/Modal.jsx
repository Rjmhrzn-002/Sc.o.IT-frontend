const Modal = ({ isVisible, onModalClose, children }) => {
  if (!isVisible) {
    return null;
  }

  const handleClose = (e) => {
    if (e.target.id === "modalContainer") {
      onModalClose();
    }
  };

  return (
    <>
      <div
        onClick={handleClose}
        id="modalContainer"
        className="absolute inset-0 bg-black bg-opacity-20 z-40 flex items-center justify-center"
      >
        {/* <div className="flex justify-end">
          <button
            onClick={() => onModalClose()}
            className="bg-red-500 py-2 px-4 absolute right-0 top-0 "
          >
            X
          </button>
        </div> */}
        <div className="w-xs">{children}</div>
      </div>
      {/* </div> */}
    </>
  );
};

export default Modal;

//   /* <Modal isVisible={isVisible}
// onModalClose={() => setVisible(false)}
// ></Modal>
