import React from 'react';

const AddSevices = () => {


    const handleSubmit = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const category = form.category.value;
    }


    return (
        <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
            <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-xl">
                <h2 className="text-2xl font-bold mb-6 text-center">Add Product / Pet</h2>

                <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Product or Pet Name */}
                    <div>
                        <label className="block mb-1 font-medium">Product / Pet Name</label>
                        <input
                            type="text"
                            name="name"
                            className="w-full p-3 border rounded-xl focus:outline-none"
                            placeholder="Enter name"
                        />
                    </div>

                    {/* Category */}
                    <div>
                        <label className="block mb-1 font-medium">Category</label>
                        <select
                            name="category"
                            className="w-full p-3 border rounded-xl focus:outline-none"
                        >
                            <option>Pets</option>
                            <option>Food</option>
                            <option>Accessories</option>
                            <option>Care Products</option>
                        </select>
                    </div>

                    {/* Price */}
                    <div>
                        <label className="block mb-1 font-medium">Price</label>
                        <input
                            name="price"
                            type="number"
                            className="w-full p-3 border rounded-xl focus:outline-none"
                            placeholder="Enter price"

                        />
                    </div>

                    {/* Location */}
                    <div>
                        <label className="block mb-1 font-medium">Location</label>
                        <input
                            name="location"
                            type="text"
                            className="w-full p-3 border rounded-xl focus:outline-none"
                            placeholder="Enter location"
                        />
                    </div>

                    {/* Description */}
                    <div>
                        <label className="block mb-1 font-medium">Description</label>
                        <textarea
                            name="description"
                            className="w-full p-3 border rounded-xl focus:outline-none"
                            rows="3"
                            placeholder="Enter details"
                        ></textarea>
                    </div>

                    {/* Image URL */}
                    <div>
                        <label className="block mb-1 font-medium">Image URL</label>
                        <input
                            name="imageUrl"
                            type="text"
                            className="w-full p-3 border rounded-xl focus:outline-none"
                            placeholder="Image link"
                        />
                    </div>

                    {/* Date Pick Up */}
                    <div>
                        <label className="block mb-1 font-medium">Pick Up Date</label>
                        <input
                            name="date"
                            type="date"
                            className="w-full p-3 border rounded-xl focus:outline-none"
                        />
                    </div>

                    {/* Email */}
                    <div>
                        <label className="block mb-1 font-medium">Email</label>
                        <input
                            name="email"
                            type="email"
                            className="w-full p-3 border rounded-xl bg-gray-100"

                            readOnly
                        />
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white p-3 rounded-xl text-lg hover:bg-blue-700"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </div>

    );
};

export default AddSevices;