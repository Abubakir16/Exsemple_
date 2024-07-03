import React, { useEffect, useState } from 'react';
import SearchBlog from './SearchBlog';

function Page2() {
    const [data, setData] = useState({ results: [], next: null, previous: null });
    const [active, setActive] = useState(false);
    const [page, setPage] = useState(2);

    const fetchData = (pageNum) => {
        fetch(`https://hadzhicars.pythonanywhere.com/api/cars/?page=${pageNum}`)
            .then((response) => response.json())
            .then((responseData) => {
                setData(responseData);
                console.log(responseData);
                console.log(responseData.next);
            })
            .catch((error) => {
                console.error(error);
            });
    };

    useEffect(() => {
        fetchData(page);
    }, [page]);

    const handleNext = () => {
        if (data.next) {
            setPage(page + 1);
        }
    };

    const handlePrevious = () => {
        if (data.previous && page > 1) {
            setPage(page - 1);
        }
    };

    return (
        <div>
            <div className="pt-[60px]">
                {active ? <h1>hello</h1> : <SearchBlog data={data.results} />}
                <div className={`relative ${data.next ? '' : 'opacity-5'}`}>
                    <div className="flex gap-[20px] absolute bottom-[-50px] right-0 z-40">
                        <div
                            onClick={handlePrevious}
                            className={`px-[10px] bg-[red] rounded-[10px] cursor-pointer ${data.previous ? '' : 'opacity-5 cursor-none'}`}
                        >
                            Previous
                        </div>
                        <div>{page}</div>
                        <div
                            onClick={handleNext}
                            className={`px-[10px] bg-[red] rounded-[10px] cursor-pointer ${data.next ? '' : 'hidden'}`}
                        >
                            Next
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Page2;
