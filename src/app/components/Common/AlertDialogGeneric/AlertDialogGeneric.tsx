import {
  AlertDialog,
  AlertDialogTrigger,
  AlertDialogContent,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogCancel,
  AlertDialogAction,
} from '@radix-ui/react-alert-dialog';
import { AlertDialogHeader, AlertDialogFooter } from '../../ui/alert-dialog';
import { LucideTrash } from 'lucide-react';

interface Props {
  onClick: () => void;
}

export function AlertDialogGeneric({ onClick }: Props) {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <button type="button">
          <LucideTrash />
        </button>
      </AlertDialogTrigger>
      <AlertDialogContent className="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50">
        <div className="bg-white p-6 rounded shadow-lg">
          <AlertDialogHeader>
            <AlertDialogTitle>Realmente deseja deletar?</AlertDialogTitle>
            <AlertDialogDescription>
              Se você deletar esse dado, não terá mais como recuperá-lo.
            </AlertDialogDescription>
          </AlertDialogHeader>
          <AlertDialogFooter className="mt-4">
            <AlertDialogCancel className="bg-gray-300 p-2 rounded mr-2">
              Fechar
            </AlertDialogCancel>
            <AlertDialogAction className="bg-red-500 text-white p-2 rounded">
              <button type="button" onClick={onClick}>
                Deletar
              </button>
            </AlertDialogAction>
          </AlertDialogFooter>
        </div>
      </AlertDialogContent>
    </AlertDialog>
  );
}

export default AlertDialogGeneric;
