import React, { Fragment, useState } from "react";
import { Meta, StoryObj } from "@storybook/react";
import Modal from "./Modal";

const meta: Meta<typeof Modal> = {
  component: Modal,
  title: "HR_Net/Modal",
  argTypes: {},
};
export default meta;

type Story = StoryObj<typeof Modal>;

export const DefaultCase: Story = (args) => {
  const [isOpen, setIsOpen] = useState(args.open);
  const handleClose = () => {
    setIsOpen(false);
  };
  const handleOpen = () => {
    setIsOpen(true);
  };

  return (
    <Fragment>
      <button type="button" onClick={() => handleOpen()}>
        Open modal
      </button>
      <Modal onClose={handleClose} open={isOpen}>
        {args.children}
      </Modal>
    </Fragment>
  );
};
DefaultCase.args = {
  children: <p>Modal content</p>,
  open: false,
};
