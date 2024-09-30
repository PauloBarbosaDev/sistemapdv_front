'use client';

import { useState, useCallback, useEffect } from 'react';
import Loading from '@/app/components/Common/LoadingGeneric/LoadingGeneric';
import categoryService, { CategoryType } from '@/app/services/categoryService';
import { LucideList } from 'lucide-react';
import useSWR from 'swr';
import AlertDialogGeneric from '@/app/components/Common/AlertDialogGeneric/AlertDialogGeneric';
import DialogCategories from '@/app/components/homeAuth/Categories/DialogCategories/DialoagCategories';

interface Category {
  id: number | string;
  description: string;
}

const CategoryList = () => {
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [searchValue, setSearchValue] = useState('');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const fetcher = useCallback(
    () =>
      categoryService.getAllCategories(
        page,
        pageSize,
        searchValue,
        startDate,
        endDate
      ),
    [page, pageSize, searchValue, startDate, endDate]
  );

  useEffect(() => {
    mutate();
  }, [startDate, endDate]);

  const { data, error, mutate } = useSWR(['/categories', page], fetcher);

  if (error) return <div>Error: {error.message}</div>;
  if (!data) return <Loading />;

  const handlePageChange = (newPage: number) => {
    setPage(newPage);
    mutate();
  };

  const handleSearchInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };

  const handlePageSizeInputChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setPageSize(+e.target.value);
  };

  const handleKeyEnter = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      mutate();
    }
  };

  const handlePageSizeEnter = (
    event: React.KeyboardEvent<HTMLInputElement>
  ) => {
    if (event.key === 'Enter') {
      mutate();
    }
  };

  const deleteCategory = async (categoryId: number | string) => {
    await categoryService.deleteCategory(categoryId);
    mutate();
  };

  const createCategory = async (category: CategoryType) => {
    await categoryService.createCategory(category);
    mutate();
  };

  const updateCategory = async (
    categoryId: number | string,
    category: CategoryType
  ) => {
    await categoryService.updateCategory(categoryId, category);
    mutate();
  };

  const filterCategoriesByStartDateAndEndDate = (date: CategoryType) => {
    if (!date.createdAt || !date.createdAt[0] || !date.createdAt[1]) {
      setStartDate('');
      setEndDate('');
    } else {
      setStartDate(date.createdAt[0]);
      setEndDate(date.createdAt[1]);
    }
  };

  return (
    <section className="flex justify-center items-center p-10">
      <div className="flex-col border border-grayBase w-full">
        <div className="flex justify-between bg-lightBase shadow-custom p-5 flex-wrap gap-3">
          <div className="flex justify-center items-center space-x-4">
            <LucideList width={40} height={40} />
            <p className="text-xl sm:text-2xl font-bold">LISTA DE CATEGORIAS</p>
            {startDate}
          </div>
          <div className="flex justify-center items-center space-x-1 flex-wrap gap-1">
            <DialogCategories
              type="NOVA"
              buttonCaption="ADICIONAR NOVO"
              editDescription=""
              onClick={category => createCategory(category)}
            />

            <DialogCategories
              type="FILTRAR"
              buttonCaption="FILTRAR"
              editDescription=""
              onClick={date => filterCategoriesByStartDateAndEndDate(date)}
            />
          </div>
        </div>
        <div className="bg-lightBase border-grayBase p-5 mt-3">
          <div className="flex justify-between items-center flex-wrap gap-5 sm:gap-0">
            <div className="flex justify-center items-center sm:space-x-5 flex-wrap-reverse gap-2">
              <input
                className="max-w-10 border border-grayBase outline-none"
                type="text"
                value={pageSize}
                onChange={handlePageSizeInputChange}
                onKeyDown={handlePageSizeEnter}
              />
              <p className="text-sm sm:text-lg">resultados por página</p>
            </div>
            <div className="flex justify-center items-center sm:space-x-5 gap-2">
              <p className="text-sm sm:text-lg">Pesquisar</p>
              <input
                className="w-full border border-grayBase outline-none"
                type="text"
                value={searchValue}
                onChange={handleSearchInputChange}
                onKeyDown={handleKeyEnter}
              />
            </div>
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full border-collapse border border-gray-300">
            <thead>
              <tr>
                <th className="border border-gray-300 p-2 text-center">ID</th>
                <th className="border border-gray-300 p-2 text-center">
                  Descrição
                </th>
                <th className="border border-gray-300 p-2 text-center">
                  Editar
                </th>
                <th className="border border-gray-300 p-2 text-center">
                  Excluir
                </th>
              </tr>
            </thead>
            <tbody>
              {data.categories.rows.map((category: Category) => (
                <tr key={category.id}>
                  <td className="border border-gray-300 p-2 text-center">
                    {category.id}
                  </td>
                  <td className="border border-gray-300 p-2 text-center">
                    {category.description}
                  </td>
                  <td className="border border-gray-300 p-2 text-center">
                    <div className="flex justify-center">
                      <DialogCategories
                        type="EDITAR"
                        editDescription={`${category.description}`}
                        onClick={description =>
                          updateCategory(category.id, description)
                        }
                      />
                    </div>
                  </td>
                  <td className="border border-gray-300 p-2 text-center">
                    <div className="flex justify-center">
                      <AlertDialogGeneric
                        onClick={() => deleteCategory(category.id)}
                      />
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex justify-between items-center flex-wrap gap-5 sm:gap-0 p-5">
          <p>
            Mostrando de 1 até {pageSize} de {data.categories.count} registros
          </p>
          <div className="flex gap-2">
            <button
              className="bg-grayBase p-1"
              type="button"
              onClick={() => handlePageChange(page - 1)}
              disabled={page === 1}
            >
              Anterior
            </button>
            <button className="bg-blue-800 p-1 text-white" type="button">
              {page}
            </button>
            <button
              className="bg-grayBase p-1"
              type="button"
              onClick={() => handlePageChange(page + 1)}
              disabled={data.categories.rows.length < pageSize}
            >
              Próximo
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategoryList;
