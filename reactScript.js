const productPrice = 5000;
function ProductCard(){
    const [quantity, setQuantity] = React.useState(0);

    function handleCart() {
        setQuantity(quantity + 1);
    }

    return(
        <div className="bg-slate-900 text-slate-400 flex items-center justify-center h-screen px-10">
    <div className="shadow-md rounded-lg bg-slate-800 border-slate-700">
            <a href="#">
                <img
                    className="rounded-t-lg"
                    src="https://dummyimage.com/680X400/087ea4/ffffff.png&text=Product"
                    alt="product image"
                />
            </a>
            <div className="px-5 py-5">
                <div className="flex items-center justify-between mt-5">
                    <a href="#">
                        <h3 className="font-semibold text-xl tracking-tight">
                            Reactive Accelerator Course
                        </h3>
                    </a>
                    <span className="text-xl font-medium text-teal-500"
                        >Total: ৳ {quantity * productPrice}</span
                    >
                </div>
                <div className="flex items-center justify-between mt-5">
                    <span className="text-2xl font-bold text-slate-300"
                        >৳ {productPrice}</span
                    >
                    <a  onClick={handleCart}
                        href="#"
                        className="text-white focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-[#087ea4] hover:bg-[#087ea4]/[.8] focus:ring-[#087ea4]/[.5]"
                        >Add to cart</a
                    >
                </div>
            </div>
        </div>
        </div>
    )
}

ReactDOM.createRoot(document.getElementById('root')).render(
    <>
    <ProductCard/>
    <ProductCard/>
    </>
);