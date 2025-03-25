import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

import axios, { AxiosResponse } from "axios";
const api: string = "http://localhost:3001/";

// const api: string = "https://sportfy.onrender.com";

interface BookState {
  isLoading: boolean;
  erros: string | null;
  status: boolean;
  books: any;
  booksDashboard: any;
  count: number;
  cartBooks: any;
  counterCart: number;
  carts: any;
}

interface CreateBookData {
  title: string;
  author: string;
  description: string;
  price: number;
  coverImage: string;
  genre: string;
  stockQuantity: number;
  isbn: string;
  publishedYear: number;
  available: boolean;
  rentalPrice?: number;
  rentalDuration?: number;
  rentalStatus?: boolean;
  returnDate?: Date;
  lateFee?: number;
  isDamaged?: boolean;
  reservationStatus?: boolean;
}

// Initial state
const initialState: BookState = {
  isLoading: false,
  erros: null,
  status: false,
  books: [],
  booksDashboard: null,
  count: 0,
  cartBooks: [],
  counterCart: 0,
  carts: {},
};

interface ApiResponse {
  success: boolean;
  message: string;
  data: any;
}

// Create async thunk for create a book
export const createBook = createAsyncThunk(
  "book/createBook",
  async (data: any, thunkAPI) => {
    try {
      console.log("data");

      console.log(typeof data.rating);

      console.log("data");

      const formData = {
        title: data.title,
        author: data.author,
        summary: data.description,
        price: data.price,
        file: data.coverImage,
        category: data.category,
        availableCopies: data.stockQuantity,
        publishedYear: data.publishedYear,
        totalCopies: data.totalCopies,
        rating: data.rating,
        totalRatings: data.totalRatings,
        rentalPrice: data.rentalPrice,
        pages: data.pages,
        language: data.language,
        releaseDate: data.releaseDate,
        isNew: data.isNew,
        isBestseller: data.isBestseller,
        isbn: data.isbn,
      };

      console.log(formData);

      const res: AxiosResponse<ApiResponse> = await axios.post(
        api + "books",
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      console.log(res);

      return res.data;
    } catch (error: any) {
      console.log(error);

      if (error.response) {
        console.error("Error while registering:", error.response.data);
        return thunkAPI.rejectWithValue(error.response.data);
      } else if (error.request) {
        console.error("Error while registering: No response from server");
        return thunkAPI.rejectWithValue("No response from server");
      } else {
        console.error("Error while registering:", error.message);
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  }
);

export const getbooks = createAsyncThunk(
  "event/getbooks",
  async (_, thunkAPI) => {
    try {
      const token: any = localStorage.getItem("token");
      const res: AxiosResponse = await axios.get(`${api}books/`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      console.log("Response from API: event", res.data);

      return res.data;
    } catch (error: any) {
      console.error(
        "Error while registering:",
        error.response?.data || error.message
      );

      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const getbooksAll = createAsyncThunk(
  "book/getbooksAll",
  async (_, thunkAPI) => {
    try {
      const token: any = localStorage.getItem("token");
      const res: AxiosResponse = await axios.get(`${api}books/all`, {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      });

      console.log("Response from API: event", res.data);

      return res.data;
    } catch (error: any) {
      console.error(
        "Error while registering:",
        error.response?.data || error.message
      );

      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const getbooksDashboard = createAsyncThunk(
  "book/getbooksDashboard",
  async (data: any, thunkAPI) => {
    try {
      const token: any = localStorage.getItem("token");
      const res: AxiosResponse = await axios.get(
        `${api}/api/v1/manager/book?page=${data.page}&limit=${data.limit}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      );

      return res.data;
    } catch (error: any) {
      console.error(
        "Error while registering:",
        error.response?.data || error.message
      );

      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const updateBook = createAsyncThunk(
  "book/updateBook",
  async (data: any, thunkAPI) => {
    console.log(data._id);

    const formattedData = {
      title: data.title,
      author: data.author,
      category: data.category,
    };

    try {
      const res: AxiosResponse = await axios.put(
        `${api}books/${data._id}`,
        formattedData
      );

      return res.data;
    } catch (error: any) {
      console.error(
        "Error while registering:",
        error.response?.data || error.message
      );

      return thunkAPI.rejectWithValue(error);
    }
  }
);

export const deleteBook = createAsyncThunk(
  "book/deleteBook",
  async (id: string, thunkAPI) => {
    try {
      const res: AxiosResponse = await axios.delete(`${api}books/${id}`);
      return res.data;
    } catch (error: any) {
      console.error(
        "Error while deleting book:",
        error.response?.data || error.message
      );

      // Extract only serializable parts of the error
      return thunkAPI.rejectWithValue({
        message: error.message,
        response: error.response?.data,
        status: error.response?.status,
      });
    }
  }
);

// Create the slice
const bookslice = createSlice({
  name: "book",
  initialState,
  reducers: {
    addOrder(state, action) {
      const book = {
        _id: action.payload.book._id,
        author: action.payload.book.author,
        title: action.payload.book.title,
        coverImage: action.payload.book.coverImage.url,
        quantity: 1,
        price: action.payload.book.price,
      };
      console.log(book);
      const exisetBook = state.cartBooks.find((b: any) => b._id === book._id);
      if (!exisetBook) state.cartBooks.push(book);
    },

    onUpdateQuantity(state, action) {
      const book = state.cartBooks.find(
        (item: any) => item._id === action.payload.id
      );

      if (action.payload.cas === "inc") {
        if (book) {
          book.quantity += 1;
        }
      }

      if (action.payload.cas === "dinc") {
        if (book && book.quantity > 1) {
          book.quantity -= 1;
        }
      }
    },

    onRemove(state, action) {
      const index = state.cartBooks.findIndex(
        (book: any) => book._id === action.payload.id
      );

      if (index !== -1) {
        state.cartBooks.splice(index, 1);
      }
    },

    createOrder(state, action): any {
      state.carts = {
        user: {
          _id: "",
          username: "bilal",
          email: "bilal@gmail.com",
        },
        order: [...state.cartBooks],
        totale: action.payload.totale,
      };
    },
  },

  extraReducers: (builder) => {
    builder
      // createBook
      .addCase(createBook.pending, (state) => {
        state.isLoading = true;
        state.status = false;
      })
      .addCase(createBook.fulfilled, (state) => {
        state.isLoading = false;
        state.status = true;
        state.count += 1;
      })
      .addCase(createBook.rejected, (state, action: any) => {
        state.isLoading = false;
        state.status = false;
        state.erros = action.payload.response.data.errors;
        console.log(action.payload);
      });

    builder
      // getbooksAll
      .addCase(getbooksAll.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getbooksAll.fulfilled, (state, action: any) => {
        state.isLoading = false;
        state.books = action.payload;
        console.log(action.payload);
        console.log("++++++++++++++++++++++");
      })
      .addCase(getbooksAll.rejected, (state) => {
        state.isLoading = false;
      });

    builder
      // getbooks
      .addCase(getbooks.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getbooks.fulfilled, (state, action: any) => {
        state.isLoading = false;
        state.books = action.payload;
        console.log(action.payload);
      })
      .addCase(getbooks.rejected, (state) => {
        state.isLoading = false;
      });

    builder
      // getbooksDashboard
      .addCase(getbooksDashboard.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getbooksDashboard.fulfilled, (state, action: any) => {
        state.isLoading = false;
        console.log(action.payload);

        state.booksDashboard = action.payload;
      })
      .addCase(getbooksDashboard.rejected, (state) => {
        state.isLoading = false;
      });

    builder
      // deleteBook
      .addCase(deleteBook.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(deleteBook.fulfilled, (state, action: any) => {
        state.isLoading = false;
        state.count += 1;
      })
      .addCase(deleteBook.rejected, (state, action) => {
        console.log(action.payload);

        state.isLoading = false;
      });

    builder
      // updateBook
      .addCase(updateBook.pending, (state) => {
        console.log("is pending");
        state.isLoading = true;
        state.status = false;
      })
      .addCase(updateBook.fulfilled, (state, action: any) => {
        console.log("is fulfilled");
        state.isLoading = false;
        state.count += 1;
        console.log("User registered successfully:", action.payload);
      })
      .addCase(updateBook.rejected, (state) => {
        state.isLoading = false;
        state.status = false;
      });
  },
});

export const { addOrder, onUpdateQuantity, onRemove, createOrder } =
  bookslice.actions;

export default bookslice.reducer;
