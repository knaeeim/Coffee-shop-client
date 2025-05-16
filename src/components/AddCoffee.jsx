import React from "react";
import Swal from "sweetalert2";

const AddCoffee = () => {
    const handleAddCoffee = (e) => {
        e.preventDefault();
        const form = e.target;
        const formData = new FormData(form);
        const coffeeData = Object.fromEntries(formData.entries());
        console.log(coffeeData);

        // !send data to database
        fetch("http://localhost:3000/coffees", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(coffeeData),
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.insertedId) {
                    console.log("after adding coffee to db...", data);
                    Swal.fire({
                        title: "Coffee Added Successfully!!",
                        icon: "success",
                        draggable: true,
                    });
                }
            });
    };

    return (
        <div className="px-24 py-12">
            <div className="px-8 text-center space-y-6">
                <h1 className="text-5xl">Add Coffee</h1>
                <p>
                    It is a long established fact that a reader will be
                    distraceted by the readable content of a page when looking
                    at its layout. The point of using Lorem Ipsum is that it has
                    a more-or-less normal distribution of letters, as opposed to
                    using Content here.
                </p>
            </div>
            <form onSubmit={handleAddCoffee}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-10">
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                        <label className="label">Name</label>
                        <input
                            name="name"
                            type="text"
                            className="input w-full"
                            placeholder="Enter the Coffee Name"
                        />
                    </fieldset>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                        <label className="label">Quantity</label>
                        <input
                            name="quantity"
                            type="text"
                            className="input w-full"
                            placeholder="Enter the Quantity"
                        />
                    </fieldset>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                        <label className="label">Supplier</label>
                        <input
                            name="supplier"
                            type="text"
                            className="input w-full"
                            placeholder="Enter the Supplier Name"
                        />
                    </fieldset>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                        <label className="label">Taste</label>
                        <input
                            name="taste"
                            type="text"
                            className="input w-full"
                            placeholder="Enter the Taste Type"
                        />
                    </fieldset>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                        <label className="label">Price</label>
                        <input
                            name="price"
                            type="text"
                            className="input w-full"
                            placeholder="Enter the Price"
                        />
                    </fieldset>
                    <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                        <label className="label">Details</label>
                        <input
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
                        name="photo-url"
                        type="text"
                        className="input w-full"
                        placeholder="Enter the Photo URL"
                    />
                </fieldset>

                <input
                    type="submit"
                    className="btn btn-primary w-full py-1"
                    value="Add Coffee"
                />
            </form>
        </div>
    );
};

export default AddCoffee;
