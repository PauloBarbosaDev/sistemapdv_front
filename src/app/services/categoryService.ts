import api from './api';

export type CategoryType = {
  description: String;
};

const categoryService = {
  createCategory: async (category: CategoryType) => {
    const token = sessionStorage.getItem('sistemaPDV-token');
    const res = await api
      .post('/categories', category, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .catch(error => {
        console.log(error.response.data.message);
        return error.response;
      });
    return res.data;
  },
  getAllCategories: async (
    page = 1,
    pageSize = 10,
    name = '',
    startDate = '',
    endDate = ''
  ) => {
    const token = sessionStorage.getItem('sistemaPDV-token');
    const res = await api
      .get(
        `/categories?page=${page}&pageSize=${pageSize}&name=${name}&startDate=${startDate}&endDate=${endDate}`,
        {
          headers: { Authorization: `Bearer ${token}` },
        }
      )
      .catch(error => {
        console.log(error.response.data.message);
        return error.response;
      });
    return res.data;
  },
  deleteCategory: async (categoryId: number | string) => {
    const token = sessionStorage.getItem('sistemaPDV-token');
    const res = await api
      .delete(`/categories/${categoryId}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .catch(error => {
        console.log(error.response.data.message);
        return error.response;
      });
    return res.data;
  },
  updateCategory: async (
    categoryId: number | string,
    category: CategoryType
  ) => {
    const token = sessionStorage.getItem('sistemaPDV-token');
    const res = await api
      .put(`/categories/${categoryId}`, category, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .catch(error => {
        console.log(error.response.data.message);
        return error.response;
      });
    return res.data;
  },
};

export default categoryService;
