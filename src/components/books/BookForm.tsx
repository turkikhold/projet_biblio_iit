import React, { useState } from "react";
import { X } from "lucide-react";
import { useForm, Controller } from "react-hook-form";
import Swal from "sweetalert2";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../store/store/Store";
import { createBook } from "../../store/features/bookSlice";

export function BookForm({ onCancel }: { onCancel: () => void }) {
  const dispatch: AppDispatch = useDispatch();
  const { isLoading } = useSelector((state: any) => state.book);
  const [image, setImage] = useState<any>();

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setImage(file);
    }
  };

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      title: "",
      author: "",
      category: "",
      isbn: "",
      quantity: 1,
      availableQuantity: 0,
      rating: 0,
      totalRatings: 0,
      price: "",
      rentalPrice: "",
      summary: "",
      isAvailable: true,
      releaseDate: "",
      pages: 0,
      language: "",
      isNew: false,
      isBestseller: false,
      status: "available",
    },
  });

  const onSubmitForm = (data: any) => {
    Swal.fire({
      title: "Processing...",
      text: "Please wait while we save the book.",
      didOpen: () => Swal.showLoading(),
      allowOutsideClick: false,
    });

    data.coverImage = image;

    dispatch(createBook(data))
      .then(() => {
        Swal.fire(
          "Success!",
          "The book has been added successfully.",
          "success"
        );
        onCancel();
      })
      .catch((error) =>
        Swal.fire("Error!", error.message || "Something went wrong.", "error")
      );
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmitForm)}
      className="bg-white p-6 rounded-lg shadow-sm max-w-3xl mx-auto"
    >
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-gray-900">Add New Book</h2>
        <button
          type="button"
          onClick={onCancel}
          className="p-2 hover:bg-gray-100 rounded-full"
        >
          <X className="w-5 h-5 text-gray-500" />
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {[
          { name: "title", label: "Title", type: "text", required: true },
          { name: "author", label: "Author", type: "text", required: true },
          { name: "category", label: "Category", type: "text" },
          { name: "isbn", label: "ISBN", type: "text", required: true },
          {
            name: "quantity",
            label: "Quantity",
            type: "number",
            required: true,
          },
          {
            name: "availableQuantity",
            label: "Available Quantity",
            type: "number",
            required: true,
          },
          { name: "rating", label: "Rating", type: "number", required: true },
          {
            name: "totalRatings",
            label: "Total Ratings",
            type: "number",
            required: true,
          },
          { name: "price", label: "Price", type: "text", required: true },
          { name: "rentalPrice", label: "Rental Price", type: "text" },
          { name: "summary", label: "Summary", type: "textarea" },
          {
            name: "releaseDate",
            label: "Release Date",
            type: "text",
            required: true,
          },
          { name: "pages", label: "Pages", type: "number" },
          { name: "language", label: "Language", type: "text" },
          { name: "isNew", label: "Is New", type: "checkbox" },
          { name: "isBestseller", label: "Is Bestseller", type: "checkbox" },
          { name: "status", label: "Status", type: "text" },
        ].map(({ name, label, type, required }) => (
          <div key={name}>
            <label className="block text-sm font-medium mb-2 text-gray-700">
              {label}
            </label>
            <Controller
              name={name}
              control={control}
              rules={required ? { required: `${label} is required` } : {}}
              render={({ field }) =>
                type === "textarea" ? (
                  <textarea
                    {...field}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder={label}
                  />
                ) : type === "checkbox" ? (
                  <input {...field} type="checkbox" className="mt-1" />
                ) : (
                  <input
                    {...field}
                    type={type}
                    className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                    placeholder={label}
                  />
                )
              }
            />
            {errors[name] && (
              <p className="text-red-500 text-sm mt-1">
                {errors[name]?.message as string}
              </p>
            )}
          </div>
        ))}
      </div>

      {/* Cover Image */}
      <div className="mt-6">
        <label className="block text-sm font-medium mb-2 text-gray-700">
          Cover Image
        </label>
        <input
          type="file"
          accept="image/*"
          onChange={handleImageChange}
          className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
        />
      </div>

      <div className="mt-6 flex justify-end space-x-3">
        <button
          type="button"
          onClick={onCancel}
          className="px-4 py-2 border rounded-lg text-gray-700 hover:bg-gray-50"
        >
          Cancel
        </button>
        <button
          type="submit"
          className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
        >
          Add Book
        </button>
      </div>
    </form>
  );
}
