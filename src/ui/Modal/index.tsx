import { ModalProps } from "../../interface/Modal";
import ModalProvider from "./Modal.design";

export default function Modal(props: ModalProps) {
  return <ModalProvider {...props} />;
}
