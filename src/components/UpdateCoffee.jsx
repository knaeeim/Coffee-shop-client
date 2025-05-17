import React from "react";
import { useLoaderData } from "react-router";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
    const coffee = useLoaderData();
    const {
        _id,
        name,
        ["photo-url"]: photoURL,
        quantity,
        supplier,
        price,
        taste,
        details,
    } = coffee;

    const handleUpdateCoffee = (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const updateCoffeeDate = Object.fromEntries(formData.entries());
        console.log(updateCoffeeDate);

        // send updated coffee to database

        fetch(`https://coffee-store-server-neon-beta.vercel.app/coffees/${_id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(updateCoffeeDate),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.modifiedCount) {
                    Swal.fire({
                        title: "Coffee Updated Successfully!!",
                        icon: "success",
                        draggable: true,
                        timer: 1500,
                    });
                }
            });
    };

    return (
        <div className="px-24 py-12">
            <div className="px-8 text-center space-y-6">
                <h1 className="text-5xl">Update Coffee</h1>
            </div>
            <form onSubmit={handleUpdateCoffee}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-10">
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                        <label className="label">Name</label>
                        <input
                            defaultValue={name}
                            name="name"
                            type="text"
                            className="input w-full"
                            placeholder="Enter the Coffee Name"
                        />
                    </fieldset>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                        <label className="label">Quantity</label>
                        <input
                            defaultValue={quantity}
                            name="quantity"
                            type="text"
                            className="input w-full"
                            placeholder="Enter the Quantity"
                        />
                    </fieldset>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                        <label className="label">Supplier</label>
                        <input
                            defaultValue={supplier}
                            name="supplier"
                            type="text"
                            className="input w-full"
                            placeholder="Enter the Supplier Name"
                        />
                    </fieldset>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                        <label className="label">Taste</label>
                        <input
                            defaultValue={taste}
                            name="taste"
                            type="text"
                            className="input w-full"
                            placeholder="Enter the Taste Type"
                        />
                    </fieldset>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                        <label className="label">Price</label>
                        <input
                            defaultValue={price}
                            name="price"
                            type="text"
                            className="input w-full"
                            placeholder="Enter the Price"
                        />
                    </fieldset>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                        <label className="label">Details</label>
                        <input
                            defaultValue={details}
                            name="details"
                            type="text"
                            className="input w-full"
                            placeholder="Enter the Details"
                        />
                    </fieldset>
                </div>
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4 my-5">
                    <label className="label">Photo URL</label>
                    <input
                        defaultValue={photoURL}
                        name="photo-url"
                        type="text"
                        className="input w-full"
                        placeholder="Enter the Photo URL"
                    />
                </fieldset>

                <input
                    type="submit"
                    className="btn btn-primary w-full py-1"
                    value="Update Coffee"
                />
            </form>
        </div>
    );
};

export default UpdateCoffee;
