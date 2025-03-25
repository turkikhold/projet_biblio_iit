import { useState } from "react";
import { X } from "lucide-react";
import { useForm, Controller } from "react-hook-form";
import Swal from "sweetalert2";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../store/store/Store";

import type { Book, BookFormData } from "../../types/book";
import { updateBook } from "../../store/features/bookSlice";

interface BookFormProps {
  initialData: Book;
  onSubmit: (data: BookFormData) => void;
  onCancel: () => void;
}

export function BookFormUpdate({ initialData, onCancel }: any) {
  const dispatch: AppDispatch = useDispatch();
  const { isLoading } = useSelector((state: any) => state.book);

  if (initialData) {
    console.log(initialData);
  }

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<BookFormData>({
    defaultValues: {
      title: initialData.title,
      author: initialData.author,
      description: initialData.description,
      price: initialData.price,
      coverImage: initialData.coverImage,
      category: initialData.category,
      stockQuantity: initialData.stockQuantity,
      isbn: initialData.isbn,
      publishedYear: initialData.publishedYear,
      quantity: initialData.quantity,
      releaseDate: initialData.releaseDate,
    },
  });

  const onSubmitForm = (data: BookFormData) => {
    // Logic for form submission
    data._id = initialData._id;
    dispatch(updateBook(data));
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmitForm)}
      className="bg-white p-6 rounded-lg shadow-md max-w-2xl mx-auto"
    >
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold text-gray-800">Update Book</h2>
        <button
          type="button"
          onClick={onCancel}
          className="p-2 hover:bg-gray-100 rounded-full"
        >
          <X className="w-5 h-5 text-gray-500" />
        </button>
      </div>

      {/* Fields */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Title */}
        <div>
          <label className="block text-sm font-medium mb-1">Title</label>
          <Controller
            name="title"
            control={control}
            rules={{ required: "Title is required" }}
            render={({ field }) => (
              <input
                {...field}
                className="w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-500"
                placeholder="Book Title"
              />
            )}
          />
          {errors.title && (
            <p className="text-red-500 text-sm">{errors.title.message}</p>
          )}
        </div>

        {/* Author */}
        <div>
          <label className="block text-sm font-medium mb-1">Author</label>
          <Controller
            name="author"
            control={control}
            rules={{ required: "Author is required" }}
            render={({ field }) => (
              <input
                {...field}
                className="w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-500"
                placeholder="Author Name"
              />
            )}
          />
          {errors.author && (
            <p className="text-red-500 text-sm">{errors.author.message}</p>
          )}
        </div>

        {/* Genre */}
        <div>
          <label className="block text-sm font-medium mb-1">Genre</label>
          <Controller
            name="category"
            control={control}
            render={({ field }) => (
              <input
                {...field}
                className="w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-500"
                placeholder="Genre"
              />
            )}
          />
        </div>

        {/* Price */}
        <div>
          <label className="block text-sm font-medium mb-1">Price</label>
          <Controller
            name="price"
            control={control}
            rules={{ required: "Price is required", min: 0 }}
            render={({ field }) => (
              <input
                {...field}
                type="number"
                className="w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-500"
                placeholder="Price"
              />
            )}
          />
          {errors.price && (
            <p className="text-red-500 text-sm">{errors.price.message}</p>
          )}
        </div>

        {/* ISBN */}
        <div>
          <label className="block text-sm font-medium mb-1">ISBN</label>
          <Controller
            name="isbn"
            control={control}
            render={({ field }) => (
              <input
                {...field}
                className="w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-500"
                placeholder="ISBN"
              />
            )}
          />
        </div>

        {/* Published Year */}
        <div>
          <label className="block text-sm font-medium mb-1">
            Published Year
          </label>
          <Controller
            name="releaseDate"
            control={control}
            render={({ field }) => (
              <input
                {...field}
                className="w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-500"
                placeholder="Published Year"
              />
            )}
          />
        </div>

        {/* Stock Quantity */}
        <div>
          <label className="block text-sm font-medium mb-1">
            Stock Quantity
          </label>
          <Controller
            name="quantity"
            control={control}
            rules={{ required: "Stock Quantity is required", min: 0 }}
            render={({ field }) => (
              <input
                {...field}
                type="number"
                className="w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-500"
                placeholder="Stock Quantity"
              />
            )}
          />
          {errors.stockQuantity && (
            <p className="text-red-500 text-sm">
              {errors.stockQuantity.message}
            </p>
          )}
        </div>

        {/* Description */}
        <div className="col-span-1 md:col-span-2">
          <label className="block text-sm font-medium mb-1">Author</label>
          <Controller
            name="author"
            control={control}
            render={({ field }) => (
              <textarea
                {...field}
                className="w-full p-3 border rounded-md focus:ring-2 focus:ring-blue-500"
                placeholder="Book Description"
              />
            )}
          />
        </div>
      </div>

      {/* Buttons */}
      <div className="mt-6 flex justify-end space-x-3">
        <button
          type="button"
          onClick={onCancel}
          className="px-4 py-2 border rounded-md text-gray-700 hover:bg-gray-50"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
        >
          Update Book
        </button>
      </div>
    </form>
  );
}
