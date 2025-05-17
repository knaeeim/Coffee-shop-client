import React from "react";
import { Link } from "react-router";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee, setCoffees }) => {
    const {
        _id,
        name,
        ["photo-url"]: photoURL,
        quantity,
        supplier,
        price,
    } = coffee;

    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!",
        }).then((result) => {
            console.log(result.isConfirmed);
            if (result.isConfirmed) {
                fetch(`https://coffee-store-server-neon-beta.vercel.app/coffees/${id}`, {
                    method: "DELETE",
                })
                    .then((res) => res.json())
                    .then((data) => {
                        if (data.deletedCount) {
                            setCoffees((prev) => prev.filter((coffee) => coffee._id !== id));
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success",
                            });
                        }
                    });
            }
        });
    };
    return (
        <div className="card card-side bg-base-100 shadow-sm px-6 py-5 border-2">
            <figure>
                <img src={photoURL} alt="Coffee" />
            </figure>
            <div className="flex items-center justify-around w-full">
                <div className="space-y-3">
                    <h2 className="">{name}</h2>
                    <p>Price : {price}</p>
                    <p>Quantity : {quantity}</p>
                    <p>Supplier : {supplier}</p>
                </div>
                <div className="card-actions justify-end">
                    <div className="join join-vertical space-y-2">
                        <Link to={`/coffee/${_id}`}><button className="btn join-item">View</button></Link>
                        <Link to={`updateCoffee/${_id}`}><button className="btn join-item">Edit</button></Link>
                        <button
                            onClick={() => handleDelete(_id)}
                            className="btn join-item">
                            Delete
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CoffeeCard;
