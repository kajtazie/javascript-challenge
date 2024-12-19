import { Button } from "../Button/Button";
import "./DeleteConfirmationModal.scss";

export const DeleteConfirmationModal = ({
  contactId,
  onDelete,
  onClose,
}: {
  contactId: string;
  onDelete: (id: string) => void;
  onClose: () => void;
}) => {
  
  return (
    <div className="p-8">
      <h2 className="pb-6 text-center">
        Are you sure you want to delete this contact?
      </h2>
      <div className="flex space-x-4 justify-center">
        <Button onClick={() => onDelete(contactId)} variant="danger">
          Delete
        </Button>

        <Button onClick={onClose} variant="primary">
          Cancel
        </Button>
      </div>
    </div>
  );
};
