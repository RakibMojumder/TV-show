import { Dialog, Transition } from "@headlessui/react";
import React, { Fragment } from "react";

const BookingModal = ({ isOpen, closeModal, showData }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      userName: e.target.userName.value,
      showName: showData?.name,
      ticketPrice: 100,
    };
    let storedShowData = [];
    const storedData = localStorage.getItem("stored-data");
    if (storedData) {
      storedShowData = JSON.parse(storedData);
    }

    storedShowData = [...storedShowData, formData];
    localStorage.setItem("stored-data", JSON.stringify(storedShowData));
    closeModal();
  };

  return (
    <>
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-10" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="text-lg font-medium leading-6 text-gray-900 mb-4 uppercase"
                  >
                    Book a show now
                  </Dialog.Title>
                  <div>
                    <form onSubmit={handleSubmit} className="space-y-3">
                      <div className="input-field">
                        <span>User Name</span>
                        <input
                          className="border w-full py-1 pl-5 rounded-md focus:outline-none"
                          type="text"
                          name="userName"
                          required
                        />
                      </div>
                      <div className="input-field">
                        <span>Show Name</span>
                        <input
                          className="border w-full py-1 pl-5 rounded-md focus:outline-none"
                          type="text"
                          defaultValue={showData?.name}
                          disabled
                        />
                      </div>
                      <div className="input-field">
                        <span>Language</span>
                        <input
                          className="border w-full py-1 pl-5 rounded-md focus:outline-none"
                          type="text"
                          defaultValue={showData?.language}
                          disabled
                        />
                      </div>
                      <div className="input-field">
                        <span>Ticket price</span>
                        <input
                          className="border w-full py-1 pl-5 rounded-md focus:outline-none"
                          type="text"
                          defaultValue="$100"
                          disabled
                        />
                      </div>
                      <div className="input-field">
                        <span>Runtime</span>
                        <input
                          className="border w-full py-1 pl-5 rounded-md focus:outline-none"
                          type="text"
                          defaultValue={showData?.runtime || 60}
                          disabled
                        />
                      </div>
                      <button
                        type="submit"
                        className="bg-red-500 w-full py-1 text-white rounded-md uppercase"
                      >
                        Submit
                      </button>
                    </form>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default BookingModal;
