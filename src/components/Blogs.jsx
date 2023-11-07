import useTitle from "../hooks/useTitle";


const Blogs = () => {
    useTitle('Blogs')
    return (
        <div className="mt-40 md:mx-20 mx-3">
            <div className="collapse collapse-arrow bg-blue-200 text-blue-500 font-semibold my-5">
                <input type="radio" name="my-accordion-2" checked="checked" />
                <div className="collapse-title md:text-xl text-lg font-medium">
                    What is an access token and refresh token? How do they work and where should we
                    store them on the client-side?

                </div>
                <div className="collapse-content">
                    <p>Access Token: <br />
                        An access token is a short-lived credential that allows a client (like an app or website) to access specific resources after a user logs in.
                        It's issued by an authorization server upon successful authentication.
                        Grants access to restricted data or services for a limited time. <br /> <br />
                        Refresh Token: <br />

                        A refresh token is a long-lived credential that's also issued during authentication.
                        It's used to obtain a new access token once the current one expires, without requiring the user to log in again.
                        Provides a way to keep the user authenticated for extended periods. <br /> <br />
                        Storage on Client-Side: <br />

                        Tokens can be stored in browser storage (like cookies, local storage), memory, or more secure storage mechanisms like encrypted browser storage.
                        Each storage method has its own security implications, so it's important to balance convenience and security. For instance, consider using secure storage options to protect tokens from unauthorized access.</p>
                </div>
            </div>
            <div className="collapse collapse-arrow bg-blue-200 text-blue-500 font-semibold my-5">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title md:text-xl text-lg font-medium">
                    What is express js? What is Nest JS?
                </div>
                <div className="collapse-content">
                    <p>Express.js: <br />
                        Minimal and flexible Node.js web application framework.
                        Unopinionated, providing freedom in app structure and organization.
                        Key features include routing, middleware, HTTP utilities, and database integration. <br /> <br />
                        NestJS: <br />

                        Progressive Node.js framework using TypeScript.
                        Opinionated, promoting best practices and architectural patterns. <br /> <br />
                        Features modularity, dependency injection, TypeScript usage, middleware, and built-in tool support.
                        Express.js offers flexibility, while NestJS provides a structured and opinionated approach for building scalable applications in the Node.js ecosystem.</p>
                </div>
            </div>
            <div className="collapse collapse-arrow bg-blue-200 text-blue-500 font-semibold my-5">
                <input type="radio" name="my-accordion-2" />
                <div className="collapse-title md:text-xl text-lg font-medium">
                    Explain your code
                </div>
                <div className="collapse-content">
                    <p>About my code: <br />
                        This is about an opportunity website where we can add any kind of job we want . My website name is i got the job.
                        I have used react js ,  tailwind css , daisyUI , mongodb . For shortly, the full mern project has been implemented in this project <br /> <br />

                        Home Page: <br />
                        I have used react tabs for home page in that tab page, I have shown some tabs, in those tabs ,  all jobs tabs , I have just normally fetched api from the data base and for the other category tab I have filtered out the categories. <br /> <br />

                        Applied Jobs: <br />
                        For this page I have used 2 filters, the first one for user name , so that only that user can see his/her applied jobs and the second is for the category dropdown so that the user can be specifically sure what type of job he/she has applied to. <br /> <br />

                        Add a Job: <br />
                        By creating form for this page, the user can add a job and it will be posted to all jobs or the specified category section. It is just normal POST method to forms <br /> <br />

                        My Jobs: <br />
                        Same user name filter process like applied jobs page but without category also extra feature is , the user can delete of update their job status. <br /> <br />

                        Authentication: <br />
                        Authentication has been done using firebase also by doing that using auth provider and private route helps some route to be private and to log in or register. 

                    </p>
                </div>
            </div>
        </div>
    );
};

export default Blogs;