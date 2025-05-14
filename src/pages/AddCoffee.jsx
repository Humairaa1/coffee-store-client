import React from 'react';
import { Link } from 'react-router-dom';

export default function AddCoffee() {

    const handleAddCoffee = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const chef = form.chef.value;
        const supplier = form.supplier.value;
        const taste = form.taste.value;
        const category = form.category.value;
        const photo = form.photo.value;
        const details = form.details.value;

        const newCoffee = { name, chef, supplier, taste, category, photo, details };
        console.log(newCoffee);
    }

    return (
        <div className="container mx-auto p-6 max-w-2xl">
            <Link to={'/'} className='my-4 font-bold'>Go to Home</Link>
            <h2 className="text-2xl font-bold text-center mb-4">Add New Coffee</h2>
            <p className="text-center text-gray-600 mb-6">
                Please fill out the form below to add a new coffee to the store.
            </p>
            <form onSubmit={handleAddCoffee} className="bg-white shadow-md rounded px-8 pt-6 pb-8">
                <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
                            Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            placeholder='Americano Coffee'
                            className="w-full px-3 py-2 border rounded shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="chef" className="block text-gray-700 text-sm font-bold mb-2">
                            Chef
                        </label>
                        <input
                            type="text"
                            id="chef"
                            name="chef"
                            placeholder='Mr. Matin Paul'
                            className="w-full px-3 py-2 border rounded shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="supplier" className="block text-gray-700 text-sm font-bold mb-2">
                            Supplier
                        </label>
                        <input
                            type="text"
                            id="supplier"
                            name="supplier"
                            placeholder='Cappu Authorizer'
                            className="w-full px-3 py-2 border rounded shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="taste" className="block text-gray-700 text-sm font-bold mb-2">
                            Taste
                        </label>
                        <input
                            type="text"
                            id="taste"
                            name="taste"
                            placeholder='Sweet and hot'
                            className="w-full px-3 py-2 border rounded shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="category" className="block text-gray-700 text-sm font-bold mb-2">
                            Category
                        </label>
                        <input
                            type="text"
                            id="category"
                            name="category"
                            placeholder='Americano'
                            className="w-full px-3 py-2 border rounded shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
                        />
                    </div>

                    <div className="mb-4">
                        <label htmlFor="photo" className="block text-gray-700 text-sm font-bold mb-2">
                            Photo
                        </label>
                        <input
                            type="text"
                            id="photo"
                            name="photo"
                            placeholder="Enter photo URL"
                            className="w-full px-3 py-2 border rounded shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
                        />
                    </div>
                </div>

                <div className="mb-4">
                    <label htmlFor="details" className="block text-gray-700 text-sm font-bold mb-2">
                        Details
                    </label>
                    <textarea
                        id="details"
                        name="details"
                        placeholder='Espresso with hot water'
                        rows="4"
                        className="w-full px-3 py-2 border rounded shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
                    ></textarea>
                </div>

                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
                >
                    Add Coffee
                </button>
            </form>
        </div>
    );
}
