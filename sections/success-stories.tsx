import storyData from '../data/success-stories.json';

const { items: stories } = storyData;

export function SuccessStories() {

    return (
        <section className="container pt-xl-2 pb-5 mb-md-3 mb-lg-5">
            <div className="d-md-flex align-items-center justify-content-between text-center text-md-start pb-1 pb-lg-0 mb-4 mb-lg-5">
                <h2 className="h1 mb-md-0">Our Patients Success Stories</h2>
            </div>
            <div className="row row-cols-1 row-cols-sm-1 row-cols-lg-2 g-4">
                {stories.map((storyId) => (
                    <div key={storyId} className="col">
                        <iframe
                            className='rounded-4'
                            src={`https://www.youtube.com/embed/${storyId}`}
                            allow="fullscreen;"
                            width="100%"
                            height="345"
                            allowFullScreen
                        />
                    </div>
                ))}
            </div>
        </section>
    );
}
