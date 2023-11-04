

const Banner = () => {
    return (
        <div>
            <div className="form-control flex md:flex-row flex-col md:justify-center md:items-center gap-2 mt-10 md:mx-0 mx-5">
                <input type="text" placeholder="Search Jobs...." className="input input-bordered w-full md:w-auto" />
                <button className="btn">Search</button>
            </div>
        </div>
    );
};

export default Banner;