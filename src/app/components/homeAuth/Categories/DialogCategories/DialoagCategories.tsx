import { useState } from 'react';
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogTitle,
  DialogClose,
} from '@radix-ui/react-dialog';
import { DialogHeader, DialogFooter } from '../../../ui/dialog';
import { CategoryType } from '@/app/services/categoryService';
import { LucideEdit } from 'lucide-react';

interface Props {
  type: 'NOVA' | 'EDITAR';
  buttonCaption?: string;
  editDescription: string;
  onClick: (category: CategoryType) => void;
}

export function DialogCategories({
  onClick,
  buttonCaption,
  editDescription,
  type,
}: Props) {
  const [description, setDescription] = useState(editDescription);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDescription(e.target.value);
  };

  const handleSaveClick = () => {
    onClick({ description });
    setDescription('');
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button
          type="button"
          className={`p-3 ${
            type === 'EDITAR' ? 'text-black' : 'bg-green-400  text-white'
          } flex items-center`}
        >
          {type === 'EDITAR' ? <LucideEdit /> : buttonCaption}
        </button>
      </DialogTrigger>
      <DialogContent className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
        <div className="bg-white p-6 rounded shadow-lg">
          <DialogHeader>
            <DialogTitle>{type} CATEGORIA</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <label htmlFor="description" className="text-right">
                Descrição:
              </label>
              <input
                id="description"
                className="col-span-3 border border-grayBase outline-none"
                value={description}
                onChange={handleInputChange}
              />
            </div>
          </div>

          <DialogFooter className="flex gap-2 mt-4">
            <DialogClose className="bg-gray-300 p-2 rounded mr-2">
              Fechar
            </DialogClose>
            <DialogClose className="">
              <button
                type="button"
                className="bg-green-500 text-white p-2 rounded"
                onClick={handleSaveClick}
              >
                Salvar
              </button>
            </DialogClose>
          </DialogFooter>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default DialogCategories;
