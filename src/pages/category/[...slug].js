import { useRouter } from "next/router";

const CategoryPage = () => {
    const { query } = useRouter();
    const { slug } = query;

    return (
        <div>
            <h1>Category Page</h1>
            <h2>Parameter URL:</h2>
            
            {slug ? (
                <ul>
                    {slug.map((item, index) => (
                        <li key={index}>
                            Parameter {index + 1}: {item}
                        </li>
                    ))}
                </ul>
            ) : (
                <p>Loading...</p>
            )}
        </div>
    );
};

export default CategoryPage;
