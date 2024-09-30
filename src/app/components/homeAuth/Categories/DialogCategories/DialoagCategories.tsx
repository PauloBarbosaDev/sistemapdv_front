import { useEffect, useState } from 'react';
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
import { Switch } from '@/app/components/ui/switch';

interface Props {
  type: 'NOVA' | 'EDITAR' | 'FILTRAR';
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
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [isDisabledStartDate, setIsDisabledStartDate] = useState(true);
  const [isDisabledEndDate, setIsDisabledEndDate] = useState(true);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDescription(e.target.value);
  };

  const handleStartDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setStartDate(e.target.value);
  };

  const handleEndDateChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEndDate(e.target.value);
  };

  const toggleDateFilter = (checked: boolean) => {
    if (checked) {
      setIsDisabledStartDate(false);
      setIsDisabledEndDate(false);
    } else {
      setIsDisabledStartDate(true);
      setIsDisabledEndDate(true);
      setStartDate('');
      setEndDate('');
    }
  };

  const handleSaveClick = () => {
    if (type === 'FILTRAR') {
      onClick({
        createdAt: [startDate, endDate],
        description,
      });
    } else {
      onClick({ description });
    }
  };

  return (
    <Dialog>
      <DialogTrigger asChild>
        <button
          type="button"
          className={`p-3 ${
            type === 'FILTRAR'
              ? 'bg-yellow-400 text-white'
              : type === 'EDITAR'
              ? 'text-black'
              : 'bg-green-400 text-white'
          } flex items-center`}
        >
          {type === 'EDITAR' ? (
            <LucideEdit />
          ) : type === 'FILTRAR' ? (
            buttonCaption
          ) : (
            buttonCaption
          )}
        </button>
      </DialogTrigger>
      <DialogContent className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
        <div className="bg-white p-6 rounded shadow-lg">
          <DialogHeader>
            <DialogTitle>{type} CATEGORIA</DialogTitle>
          </DialogHeader>

          {type === 'FILTRAR' ? (
            <div className="grid gap-4 py-4">
              <div className="grid grid-cols-4 items-center gap-4">
                <label htmlFor="startDate" className="text-right">
                  Data Inicial:
                </label>
                <input
                  type="date"
                  id="startDate"
                  className="col-span-3 border border-grayBase outline-none"
                  value={startDate}
                  onChange={handleStartDateChange}
                  disabled={isDisabledStartDate}
                />
              </div>
              <div className="grid grid-cols-4 items-center gap-4">
                <label htmlFor="endDate" className="text-right">
                  Data Final:
                </label>
                <input
                  type="date"
                  id="endDate"
                  className="col-span-3 border border-grayBase outline-none"
                  value={endDate}
                  onChange={handleEndDateChange}
                  disabled={isDisabledEndDate}
                />
              </div>

              <div className="flex items-center space-x-2">
                <Switch
                  id="airplane-mode"
                  checked={isDisabledEndDate ? false : true}
                  onCheckedChange={checked => toggleDateFilter(checked)}
                />
                <label htmlFor="airplane-mode">Filtro por data</label>
              </div>
            </div>
          ) : (
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
          )}

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
