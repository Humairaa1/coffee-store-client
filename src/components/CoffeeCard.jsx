import React from 'react'
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';

export default function CoffeeCard({ coffee }) {

    const { _id, name, chef, taste, photo } = coffee;

    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`http://localhost:5000/coffee/${id}`,
                    { method: 'DELEtE' }
                )
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"

                            });
                        }
                    })
            }
        });
    }

    return (
        <div className="card card-side bg-base-100 shadow-sm">
            <figure>
                <img className='w-[200px]'
                    src={photo}
                    alt={name} />
            </figure>
            <div className="w-full flex justify-between items-center mx-5">
                <div>
                    <h2 className="card-title">Name: {name}</h2>
                    <p>Chef: {chef}</p>
                    <p>taste: {taste}</p>
                </div>

                <div className="join join-vertical">
                    <button className="btn join-item">View</button>
                    <Link to={'/updatecoffe/:id'}>
                    <button className="btn join-item">Update</button>
                    </Link>
                    <button
                        onClick={() => handleDelete(_id)} className="btn join-item">Delete</button>
                </div>
            </div>
        </div>
    )
}
