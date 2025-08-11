import CoursePage from "./CoursePage";

const Blogs = () => {
  return (
    <div className="Our-Blogs">
      <div className="blog-section">
        <span className="ct-section">OUR BLOG</span>
        <span className="bl-head">Latest Blogs</span>
        <span className="ct-text">
          Stay updated with the latest insights, tips, and trends from our
          expert blog posts.
        </span>
      </div>
      <div className="course-frame">
        <CoursePage />
        <CoursePage />
        <CoursePage />
        <CoursePage />
        <CoursePage />
        <CoursePage />
        <button className="exp-all-btn">Explore All Courses </button>
      </div>
    </div>
  );
};

export default Blogs;
